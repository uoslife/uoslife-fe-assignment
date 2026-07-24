import styled from '@emotion/styled'

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
    width: ${({ theme }) => theme.sizes.gameCell};
    height: ${({ theme }) => theme.sizes.gameCell};
`

export const NumberButton = styled.button`
    width: 100%;
    height: 100%;
    padding: 0;
    border: 0;
    border-radius: ${({ theme }) => theme.radii.small};

    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.small};

    font-size: 20px;
    font-weight: 700;
    font-variant-numeric: tabular-nums;

    transition: background-color ${({ theme }) => theme.transitions.fast};

    &:hover {
        background-color: ${({ theme }) => theme.colors.primaryDark};
    }

    &:focus-visible {
        outline: 3px solid ${({ theme }) => theme.colors.primaryDark};
        outline-offset: 2px;
    }
`
