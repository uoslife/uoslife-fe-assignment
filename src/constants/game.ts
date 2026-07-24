import type { GameLevel } from '../types/game'

export const INITIAL_GAME_LEVEL: GameLevel = 1

export const GRID_SIZE_BY_LEVEL: Record<GameLevel, number> = {
    1: 3,
    2: 4,
    3: 5,
}
