import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

import type { CellFeedbackType } from '../../../types/game'

const correctFlash = keyframes`
    0% {
        opacity: 0.7;
        transform: scale(0.88);
    }

    100% {
        opacity: 0;
        transform: scale(1.08);
    }
`

const wrongFlash = keyframes`
    0% {
        opacity: 0.65;
    }

    100% {
        opacity: 0;
    }
`

export const GameSection = styled.section`
    width: 100%;
    max-width: ${({ theme }) => theme.sizes.contentMaxWidth};
    margin: 0 auto;

    text-align: center;
`

export const NextNumberHeading = styled.h1`
    margin: 0;

    color: ${({ theme }) => theme.colors.text};
    font-size: 18px;

    strong {
        color: ${({ theme }) => theme.colors.primary};
    }
`

export const BoardList = styled.ul<{ $gridSize: number }>`
    display: grid;
    grid-template-columns: repeat(
        ${({ $gridSize }) => $gridSize},
        ${({ theme }) => theme.sizes.gameCell}
    );
    gap: ${({ theme }) => theme.spacing.xxs};

    width: fit-content;
    margin: ${({ theme }) => theme.spacing.sm} auto 0;
    padding: 0;

    list-style: none;
`

export const BoardItem = styled.li`
    position: relative;

    width: ${({ theme }) => theme.sizes.gameCell};
    height: ${({ theme }) => theme.sizes.gameCell};
`

export const NumberButton = styled.button<{
    $isBackNumber: boolean
}>`
    width: 100%;
    height: 100%;
    padding: 0;
    border: 0;
    border-radius: ${({ theme }) => theme.radii.small};

    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ $isBackNumber, theme }) =>
        $isBackNumber
            ? theme.colors.backCell
            : theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.small};

    font-size: 20px;
    font-weight: 700;
    font-variant-numeric: tabular-nums;

    transition:
        filter ${({ theme }) => theme.transitions.fast},
        transform ${({ theme }) => theme.transitions.fast};

    &:hover {
        filter: brightness(0.9);
    }

    &:active {
        transform: scale(0.94);
    }

    &:focus-visible {
        outline: 3px solid ${({ theme }) => theme.colors.primaryDark};
        outline-offset: 2px;
    }
`

export const FeedbackEffect = styled.span<{
    $type: CellFeedbackType
}>`
    position: absolute;
    inset: 0;
    z-index: 1;

    border: 3px solid ${({ $type, theme }) =>
        $type === 'correct'
            ? theme.colors.success
            : theme.colors.error};
    border-radius: ${({ theme }) => theme.radii.small};

    background-color: ${({ $type, theme }) =>
        $type === 'correct'
            ? theme.colors.success
            : theme.colors.error};

    pointer-events: none;

    animation-name: ${({ $type }) =>
        $type === 'correct'
            ? correctFlash
            : wrongFlash};
    animation-duration: ${({ $type }) =>
        $type === 'correct' ? '260ms' : '400ms'};
    animation-timing-function: ease-out;
    animation-fill-mode: both;
`
