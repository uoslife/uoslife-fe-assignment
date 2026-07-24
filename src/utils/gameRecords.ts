import type { GameRecord } from '../types/game'

const compareGameRecords = (
    firstRecord: GameRecord,
    secondRecord: GameRecord,
) => {
    const levelDifference =
        secondRecord.level - firstRecord.level

    if (levelDifference !== 0) {
        return levelDifference
    }

    return (
        firstRecord.elapsedTimeMs
        - secondRecord.elapsedTimeMs
    )
}

export function getSortedGameRecords(
    records: readonly GameRecord[],
) {
    return [...records].sort(compareGameRecords)
}
