import { useState } from 'react'

import {
    GameSection,
    MainContent,
    NextNumberHeading,
    RankingHeading,
    RankingSection,
} from './App.styles'
import Header from './components/layout/Header/Header'
import type { AppView, GameLevel } from './types/game'

function App() {
    const [currentView, setCurrentView] = useState<AppView>('game')
    const [selectedLevel, setSelectedLevel] = useState<GameLevel>(1)

    const handleViewChange = (view: AppView) => {
        setCurrentView(view)
    }

    const handleLevelChange = (level: GameLevel) => {
        setSelectedLevel(level)
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
                    <GameSection aria-labelledby="next-number-heading">
                        <NextNumberHeading id="next-number-heading">
                            다음 숫자 <strong>1</strong>
                        </NextNumberHeading>
                    </GameSection>
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
