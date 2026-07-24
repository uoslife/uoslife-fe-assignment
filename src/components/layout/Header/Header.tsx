import type { ChangeEvent } from 'react'

import type { AppView, GameLevel } from '../../../types/game'
import {
    GameControls,
    HeaderContainer,
    HeaderInner,
    LeftArea,
    LevelLabel,
    LevelSelect,
    Logo,
    MenuButton,
    MenuList,
    Navigation,
    Timer,
} from './Header.styles'

const MENU_ITEMS = [
    { label: '게임', icon: '🕹️', value: 'game' },
    { label: '랭킹', icon: '🏆', value: 'ranking' },
] as const

const LEVEL_OPTIONS = [
    { value: 1, label: 'Level 1 🥸' },
    { value: 2, label: 'Level 2 🙄' },
    { value: 3, label: 'Level 3 🥵' },
] as const

interface HeaderProps {
    currentView: AppView
    selectedLevel: GameLevel
    elapsedTimeMs: number
    onViewChange: (view: AppView) => void
    onLevelChange: (level: GameLevel) => void
}

function Header({
    currentView,
    selectedLevel,
    elapsedTimeMs,
    onViewChange,
    onLevelChange,
}: HeaderProps) {
    const elapsedSeconds = (elapsedTimeMs / 1000).toFixed(2)

    const handleLevelChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const level = Number(event.target.value)

        if (level === 1 || level === 2 || level === 3) {
            onLevelChange(level)
        }
    }

    return (
        <HeaderContainer>
            <HeaderInner>
                <LeftArea>
                    <Logo>1 to 50</Logo>

                    <Navigation aria-label="주 메뉴">
                        <MenuList>
                            {MENU_ITEMS.map(({ label, icon, value }) => {
                                const isActive = currentView === value

                                return (
                                    <li key={value}>
                                        <MenuButton
                                            type="button"
                                            $isActive={isActive}
                                            aria-current={isActive ? 'page' : undefined}
                                            onClick={() => onViewChange(value)}
                                        >
                                            {label}{' '}
                                            <span aria-hidden="true">{icon}</span>
                                        </MenuButton>
                                    </li>
                                )
                            })}
                        </MenuList>
                    </Navigation>
                </LeftArea>

                {currentView === 'game' && (
                    <GameControls>
                        <LevelLabel htmlFor="game-level">
                            게임 레벨 선택
                        </LevelLabel>

                        <LevelSelect
                            id="game-level"
                            value={selectedLevel}
                            onChange={handleLevelChange}
                        >
                            {LEVEL_OPTIONS.map(({ value, label }) => (
                                <option key={value} value={value}>
                                    {label}
                                </option>
                            ))}
                        </LevelSelect>

                        <Timer
                            dateTime={`PT${elapsedSeconds}S`}
                            aria-label={`경과 시간 ${elapsedSeconds}초`}
                        >
                            {elapsedSeconds}
                        </Timer>
                    </GameControls>
                )}
            </HeaderInner>
        </HeaderContainer>
    )
}

export default Header
