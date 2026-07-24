import { useMemo } from 'react'

import type { GameRecord } from '../../../types/game'
import {
    formatElapsedSeconds,
    formatLocalDateTime,
} from '../../../utils/formatters'
import { getSortedGameRecords } from '../../../utils/gameRecords'
import {
    CompletedAtColumn,
    LevelColumn,
    RankingCaption,
    RankingHeader,
    RankingHeading,
    RankingSection,
    RankingTable,
    TableBodyCell,
    TableHeadCell,
    TableRow,
    TimeColumn,
} from './RankingBoard.styles'

interface RankingBoardProps {
    records: readonly GameRecord[]
}

function RankingBoard({
    records,
}: RankingBoardProps) {
    const sortedRecords = useMemo(
        () => getSortedGameRecords(records),
        [records],
    )

    return (
        <RankingSection
            aria-labelledby="ranking-heading"
        >
            <RankingHeader>
                <RankingHeading id="ranking-heading">
                    랭킹{' '}
                    <span aria-hidden="true">🏆</span>
                </RankingHeading>
            </RankingHeader>

            <RankingTable>
                <RankingCaption>
                    {sortedRecords.length === 0
                        ? '아직 저장된 게임 기록이 없습니다.'
                        : '높은 레벨부터, 같은 레벨에서는 플레이 시간이 짧은 순서의 게임 기록'}
                </RankingCaption>

                <colgroup>
                    <CompletedAtColumn />
                    <LevelColumn />
                    <TimeColumn />
                </colgroup>

                <thead>
                    <tr>
                        <TableHeadCell scope="col">
                            타임스탬프
                        </TableHeadCell>
                        <TableHeadCell scope="col">
                            레벨
                        </TableHeadCell>
                        <TableHeadCell scope="col">
                            플레이 시간
                        </TableHeadCell>
                    </tr>
                </thead>

                <tbody>
                    {sortedRecords.map((record) => {
                        const elapsedSeconds =
                            formatElapsedSeconds(
                                record.elapsedTimeMs,
                            )
                        const recordKey = [
                            record.completedAt,
                            record.level,
                            record.elapsedTimeMs,
                        ].join('-')

                        return (
                            <TableRow key={recordKey}>
                                <TableBodyCell>
                                    <time
                                        dateTime={
                                            record.completedAt
                                        }
                                    >
                                        {formatLocalDateTime(
                                            record.completedAt,
                                        )}
                                    </time>
                                </TableBodyCell>

                                <TableBodyCell>
                                    Level {record.level}
                                </TableBodyCell>

                                <TableBodyCell>
                                    <time
                                        dateTime={
                                            `PT${elapsedSeconds}S`
                                        }
                                    >
                                        {elapsedSeconds}
                                    </time>
                                </TableBodyCell>
                            </TableRow>
                        )
                    })}
                </tbody>
            </RankingTable>
        </RankingSection>
    )
}

export default RankingBoard
