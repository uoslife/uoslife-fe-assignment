import {
    useCallback,
    useState,
} from 'react'

import type { GameRecord } from '../types/game'
import {
    appendGameRecord,
    clearStoredGameRecords,
    readGameRecords,
} from '../utils/gameRecordsStorage'

export function useGameRecords() {
    const [gameRecords, setGameRecords] =
        useState<GameRecord[]>(() =>
            readGameRecords(),
        )

    const saveGameRecord = useCallback(
        (record: GameRecord) => {
            const nextRecords =
                appendGameRecord(record)

            if (nextRecords !== null) {
                setGameRecords(nextRecords)
            }
        },
        [],
    )

    const clearGameRecords = useCallback(() => {
        const didClear = clearStoredGameRecords()

        if (didClear) {
            setGameRecords([])
        }
    }, [])

    return {
        gameRecords,
        saveGameRecord,
        clearGameRecords,
    }
}
