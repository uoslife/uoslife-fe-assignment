import {
    useEffect,
    useState,
} from 'react'

import { MainContent } from './App.styles'
import GameResultModal from './components/common/GameResultModal/GameResultModal'
import Header from './components/layout/Header/Header'
import GameBoard from './components/sections/GameBoard/GameBoard'
import RankingBoard from './components/sections/RankingBoard/RankingBoard'
import { useGameRecords } from './hooks/useGameRecords'
import { useNumberGame } from './hooks/useNumberGame'
import type { AppView } from './types/game'

function App() {
    const [currentView, setCurrentView] =
        useState<AppView>('game')

    const {
        selectedLevel,
        gridSize,
        visibleNumbers,
        nextNumber,
        status,
        feedback,
        elapsedTimeMs,
        completedAt,
        handleLevelChange,
        handleGameReset,
        handleNumberClick,
        handleFeedbackEnd,
    } = useNumberGame()
    const {
        gameRecords,
        saveGameRecord,
    } = useGameRecords()

    useEffect(() => {
        if (
            status !== 'completed'
            || completedAt === null
        ) {
            return
        }

        saveGameRecord({
            completedAt,
            level: selectedLevel,
            elapsedTimeMs,
        })
    }, [
        completedAt,
        elapsedTimeMs,
        saveGameRecord,
        selectedLevel,
        status,
    ])

    const handleViewChange = (view: AppView) => {
        setCurrentView(view)
    }

    return (
        <>
            <Header
                currentView={currentView}
                selectedLevel={selectedLevel}
                elapsedTimeMs={elapsedTimeMs}
                onViewChange={handleViewChange}
                onLevelChange={handleLevelChange}
            />

            <MainContent>
                {currentView === 'game' ? (
                    <GameBoard
                        gridSize={gridSize}
                        numbers={visibleNumbers}
                        nextNumber={nextNumber}
                        status={status}
                        feedback={feedback}
                        onNumberClick={handleNumberClick}
                        onFeedbackEnd={handleFeedbackEnd}
                    />
                ) : (
                    <RankingBoard records={gameRecords} />
                )}
            </MainContent>

            {status === 'completed' && completedAt !== null && (
                <GameResultModal
                    level={selectedLevel}
                    completedAt={completedAt}
                    elapsedTimeMs={elapsedTimeMs}
                    onConfirm={handleGameReset}
                />
            )}
        </>
    )
}

export default App
