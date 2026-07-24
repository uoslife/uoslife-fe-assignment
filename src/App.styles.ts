import styled from '@emotion/styled'

export const MainContent = styled.main`
    min-height: calc(
        100vh - ${({ theme }) => theme.sizes.headerHeight}
    );
    padding: ${({ theme }) => theme.spacing.lg}
        ${({ theme }) => theme.spacing.md};

    background-color: ${({ theme }) => theme.colors.background};
`
