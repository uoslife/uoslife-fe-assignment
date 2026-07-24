export type AppView = 'game' | 'ranking'

export type GameLevel = 1 | 2 | 3

export type GameStatus = 'ready' | 'playing' | 'completed'

export type CellFeedbackType = 'correct' | 'wrong'

export interface GameRecord {
    completedAt: string
    level: GameLevel
    elapsedTimeMs: number
}

export interface GameNumberLayers {
    frontNumbers: number[]
    backNumbers: number[]
}

export interface CellFeedback {
    id: number
    cellIndex: number
    type: CellFeedbackType
}
