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

interface NumberGameState {
    level: GameLevel
    visibleNumbers: Array<number | null>
    backNumbers: number[]
    nextNumber: number
    status: GameStatus
    feedback: CellFeedback | null
    feedbackSequence: number
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
    }
}

export function useNumberGame() {
    const [gameState, setGameState] =
        useState<NumberGameState>(() =>
            createInitialGameState(INITIAL_GAME_LEVEL),
        )

    const handleLevelChange = (level: GameLevel) => {
        setGameState(createInitialGameState(level))
    }

    const handleNumberClick = (cellIndex: number) => {
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
        handleLevelChange,
        handleNumberClick,
        handleFeedbackEnd,
    }
}
