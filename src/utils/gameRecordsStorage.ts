import { GAME_RECORDS_STORAGE_KEY } from '../constants/storage'
import type {
    GameLevel,
    GameRecord,
} from '../types/game'

const isGameLevel = (
    value: unknown,
): value is GameLevel =>
    value === 1 || value === 2 || value === 3

const isIsoDateTime = (
    value: unknown,
): value is string => {
    if (typeof value !== 'string') {
        return false
    }

    const timestamp = Date.parse(value)

    return (
        Number.isFinite(timestamp)
        && new Date(timestamp).toISOString() === value
    )
}

const isGameRecord = (
    value: unknown,
): value is GameRecord => {
    if (
        typeof value !== 'object'
        || value === null
        || Array.isArray(value)
    ) {
        return false
    }

    const record =
        value as Record<string, unknown>

    return (
        isIsoDateTime(record.completedAt)
        && isGameLevel(record.level)
        && typeof record.elapsedTimeMs === 'number'
        && Number.isFinite(record.elapsedTimeMs)
        && record.elapsedTimeMs >= 0
    )
}

const isSameGameRecord = (
    firstRecord: GameRecord,
    secondRecord: GameRecord,
) =>
    firstRecord.completedAt
        === secondRecord.completedAt
    && firstRecord.level === secondRecord.level
    && firstRecord.elapsedTimeMs
        === secondRecord.elapsedTimeMs

export function readGameRecords(): GameRecord[] {
    try {
        const storedValue =
            window.localStorage.getItem(
                GAME_RECORDS_STORAGE_KEY,
            )

        if (storedValue === null) {
            return []
        }

        const parsedValue: unknown =
            JSON.parse(storedValue)

        if (!Array.isArray(parsedValue)) {
            return []
        }

        return parsedValue
            .filter(isGameRecord)
            .filter(
                (record, index, records) =>
                    records.findIndex(
                        (candidate) =>
                            isSameGameRecord(
                                candidate,
                                record,
                            ),
                    ) === index,
            )
    } catch {
        return []
    }
}

const writeGameRecords = (
    records: GameRecord[],
) => {
    try {
        window.localStorage.setItem(
            GAME_RECORDS_STORAGE_KEY,
            JSON.stringify(records),
        )

        return true
    } catch {
        return false
    }
}

export function appendGameRecord(
    record: GameRecord,
): GameRecord[] | null {
    if (!isGameRecord(record)) {
        return null
    }

    const previousRecords = readGameRecords()
    const alreadyExists = previousRecords.some(
        (previousRecord) =>
            isSameGameRecord(
                previousRecord,
                record,
            ),
    )

    if (alreadyExists) {
        return previousRecords
    }

    const nextRecords = [
        ...previousRecords,
        record,
    ]

    return writeGameRecords(nextRecords)
        ? nextRecords
        : null
}
