import { useState } from 'react'

import {
    MainContent,
    RankingHeading,
    RankingSection,
} from './App.styles'
import Header from './components/layout/Header/Header'
import GameBoard from './components/sections/GameBoard/GameBoard'
import {
    GRID_SIZE_BY_LEVEL,
    INITIAL_GAME_LEVEL,
} from './constants/game'
import type {
    AppView,
    GameLevel,
    GameNumberLayers,
} from './types/game'
import { createGameNumberLayers } from './utils/gameNumbers'

function App() {
    const [currentView, setCurrentView] = useState<AppView>('game')
    const [selectedLevel, setSelectedLevel] =
        useState<GameLevel>(INITIAL_GAME_LEVEL)
    const [numberLayers, setNumberLayers] =
        useState<GameNumberLayers>(() =>
            createGameNumberLayers(INITIAL_GAME_LEVEL),
        )

    const gridSize = GRID_SIZE_BY_LEVEL[selectedLevel]

    const handleViewChange = (view: AppView) => {
        setCurrentView(view)
    }

    const handleLevelChange = (level: GameLevel) => {
        setSelectedLevel(level)
        setNumberLayers(createGameNumberLayers(level))
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
                        numbers={numberLayers.frontNumbers}
                        nextNumber={1}
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
