import {
    useCallback,
    useState,
} from 'react'

import type { GameRecord } from '../types/game'
import {
    appendGameRecord,
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

    return {
        gameRecords,
        saveGameRecord,
    }
}
