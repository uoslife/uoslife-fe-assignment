import styled from '@emotion/styled'

export const MainContent = styled.main`
    min-height: calc(
        100vh - ${({ theme }) => theme.sizes.headerHeight}
    );
    padding: ${({ theme }) => theme.spacing.lg}
        ${({ theme }) => theme.spacing.md};

    background-color: ${({ theme }) => theme.colors.background};
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

export const RankingSection = styled.section`
    width: min(100%, 580px);
    margin: ${({ theme }) => theme.spacing.sm} auto 0;
    padding: ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.radii.medium};

    background-color: ${({ theme }) => theme.colors.surface};
    box-shadow: ${({ theme }) => theme.shadows.medium};
`

export const RankingHeading = styled.h1`
    margin: 0;

    color: ${({ theme }) => theme.colors.text};
    font-size: 18px;
    text-align: center;
`
