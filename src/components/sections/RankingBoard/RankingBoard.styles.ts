import styled from '@emotion/styled'

export const RankingSection = styled.section`
    width: 580px;
    margin: ${({ theme }) => theme.spacing.sm} auto 0;
    padding:
        ${({ theme }) => theme.spacing.md}
        59px;
    border-radius:
        ${({ theme }) => theme.radii.medium};

    background-color:
        ${({ theme }) => theme.colors.surface};
    box-shadow: ${({ theme }) => theme.shadows.medium};
`

export const RankingHeader = styled.header`
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    min-height: 32px;
`

export const RankingHeading = styled.h1`
    margin: 0;

    color: ${({ theme }) => theme.colors.text};
    font-size: 18px;
    text-align: center;
`

export const RankingTable = styled.table`
    width: 100%;
    margin-top: ${({ theme }) => theme.spacing.sm};
    border-collapse: collapse;
    table-layout: fixed;

    color: ${({ theme }) => theme.colors.textMuted};

    font-size: 12px;
    font-variant-numeric: tabular-nums;
    text-align: center;

    thead {
        color: ${({ theme }) => theme.colors.text};
        background-color:
            ${({ theme }) => theme.colors.surfaceMuted};
    }
`

export const RankingCaption = styled.caption`
    position: absolute;

    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    border: 0;

    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
`

export const CompletedAtColumn = styled.col`
    width: 55%;
`

export const LevelColumn = styled.col`
    width: 18%;
`

export const TimeColumn = styled.col`
    width: 27%;
`

export const TableHeadCell = styled.th`
    height: 26px;
    padding: 4px 8px;

    font-weight: 700;
`

export const TableBodyCell = styled.td`
    height: 26px;
    padding: 4px 8px;
`

export const TableRow = styled.tr`
    border-bottom: 1px solid
        ${({ theme }) => theme.colors.border};

    transition:
        background-color
            ${({ theme }) => theme.transitions.fast};

    &:last-of-type {
        border-bottom: 0;
    }

    &:hover {
        background-color:
            ${({ theme }) => theme.colors.surfaceHover};
    }
`
