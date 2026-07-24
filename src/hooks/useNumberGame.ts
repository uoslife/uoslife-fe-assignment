import { useState } from 'react'

import {
    GRID_SIZE_BY_LEVEL,
    INITIAL_GAME_LEVEL,
} from '../constants/game'
import type {
    CellFeedback,
    GameLevel,
    GameStatus,
} from '../types/game'
import { createGameNumberLayers } from '../utils/gameNumbers'
import { useGameTimer } from './useGameTimer'

interface NumberGameState {
    level: GameLevel
    visibleNumbers: Array<number | null>
    backNumbers: number[]
    nextNumber: number
    status: GameStatus
    feedback: CellFeedback | null
    feedbackSequence: number
    startedAtMs: number | null
    finishedAtMs: number | null
}

const createInitialGameState = (
    level: GameLevel,
): NumberGameState => {
    const { frontNumbers, backNumbers } =
        createGameNumberLayers(level)

    return {
        level,
        visibleNumbers: frontNumbers,
        backNumbers,
        nextNumber: 1,
        status: 'ready',
        feedback: null,
        feedbackSequence: 0,
        startedAtMs: null,
        finishedAtMs: null,
    }
}

export function useNumberGame() {
    const [gameState, setGameState] =
        useState<NumberGameState>(() =>
            createInitialGameState(INITIAL_GAME_LEVEL),
        )
    const elapsedTimeMs = useGameTimer(
        gameState.startedAtMs,
        gameState.finishedAtMs,
    )

    const handleLevelChange = (level: GameLevel) => {
        setGameState(createInitialGameState(level))
    }

    const handleNumberClick = (cellIndex: number) => {
        const clickedAtMs = performance.now()

        setGameState((previousState) => {
            if (previousState.status === 'completed') {
                return previousState
            }

            const clickedNumber =
                previousState.visibleNumbers[cellIndex]

            if (
                clickedNumber === null
                || clickedNumber === undefined
            ) {
                return previousState
            }

            const nextFeedbackSequence =
                previousState.feedbackSequence + 1

            if (clickedNumber !== previousState.nextNumber) {
                return {
                    ...previousState,
                    feedbackSequence: nextFeedbackSequence,
                    feedback: {
                        id: nextFeedbackSequence,
                        cellIndex,
                        type: 'wrong',
                    },
                }
            }

            const cellCount = previousState.backNumbers.length
            const totalNumberCount = cellCount * 2
            const isFrontNumber = clickedNumber <= cellCount
            const isFirstNumber = clickedNumber === 1
            const isLastNumber =
                clickedNumber === totalNumberCount
            const nextVisibleNumbers = [
                ...previousState.visibleNumbers,
            ]

            nextVisibleNumbers[cellIndex] = isFrontNumber
                ? previousState.backNumbers[cellIndex]
                : null

            return {
                ...previousState,
                visibleNumbers: nextVisibleNumbers,
                nextNumber: isLastNumber
                    ? previousState.nextNumber
                    : previousState.nextNumber + 1,
                status: isLastNumber
                    ? 'completed'
                    : 'playing',
                startedAtMs: isFirstNumber
                    ? clickedAtMs
                    : previousState.startedAtMs,
                finishedAtMs: isLastNumber
                    ? clickedAtMs
                    : previousState.finishedAtMs,
                feedbackSequence: nextFeedbackSequence,
                feedback: {
                    id: nextFeedbackSequence,
                    cellIndex,
                    type: 'correct',
                },
            }
        })
    }

    const handleFeedbackEnd = (feedbackId: number) => {
        setGameState((previousState) => {
            if (previousState.feedback?.id !== feedbackId) {
                return previousState
            }

            return {
                ...previousState,
                feedback: null,
            }
        })
    }

    return {
        selectedLevel: gameState.level,
        gridSize: GRID_SIZE_BY_LEVEL[gameState.level],
        visibleNumbers: gameState.visibleNumbers,
        nextNumber: gameState.nextNumber,
        status: gameState.status,
        feedback: gameState.feedback,
        elapsedTimeMs,
        handleLevelChange,
        handleNumberClick,
        handleFeedbackEnd,
    }
}
