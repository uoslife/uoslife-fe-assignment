import { GRID_SIZE_BY_LEVEL } from '../constants/game'
import type { GameLevel, GameNumberLayers } from '../types/game'
import { shuffleNumbers } from './shuffle'

const createNumberRange = (startNumber: number, count: number) =>
    Array.from(
        { length: count },
        (_, index) => startNumber + index,
    )

export function createGameNumberLayers(
    level: GameLevel,
): GameNumberLayers {
    const gridSize = GRID_SIZE_BY_LEVEL[level]
    const cellCount = gridSize ** 2

    const frontNumbers = createNumberRange(1, cellCount)
    const backNumbers = createNumberRange(cellCount + 1, cellCount)

    return {
        frontNumbers: shuffleNumbers(frontNumbers),
        backNumbers: shuffleNumbers(backNumbers),
    }
}
