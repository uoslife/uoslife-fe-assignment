import { useState } from 'react'

import {
    MainContent,
    RankingHeading,
    RankingSection,
} from './App.styles'
import Header from './components/layout/Header/Header'
import GameBoard from './components/sections/GameBoard/GameBoard'
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
        handleLevelChange,
        handleNumberClick,
        handleFeedbackEnd,
    } = useNumberGame()

    const handleViewChange = (view: AppView) => {
        setCurrentView(view)
    }

    return (
        <>
            <Header
                currentView={currentView}
                selectedLevel={selectedLevel}
                elapsedTimeMs={0}
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
                    <RankingSection aria-labelledby="ranking-heading">
                        <RankingHeading id="ranking-heading">
                            랭킹 <span aria-hidden="true">🏆</span>
                        </RankingHeading>
                    </RankingSection>
                )}
            </MainContent>
        </>
    )
}

export default App
