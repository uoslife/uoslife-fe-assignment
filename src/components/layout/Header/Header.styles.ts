import styled from '@emotion/styled'

export const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: ${({ theme }) => theme.zIndex.header};

    width: 100%;
    height: 72px;

    color: ${({ theme }) => theme.colors.white};
    background-color: transparent;
`

export const HeaderInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 100%;
    padding: 0 60px;
`

export const LeftArea = styled.div`
    display: flex;
    align-items: center;
    gap: 56px;
`

export const Logo = styled.span`
    color: inherit;
    font-size: 28px;
    font-weight: 700;
    white-space: nowrap;
`

export const MenuList = styled.ul`
    display: flex;
    align-items: center;
    gap: 48px;

    margin: 0;
    padding: 0;
    list-style: none;
`

export const MenuText = styled.a`
    color: inherit;
    font-size: 16px;
    text-decoration: none;
`

export const IconArea = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

export const IconItem = styled.span`
    display: grid;
    place-items: center;

    width: 44px;
    height: 44px;

    svg {
        display: block;
        width: 24px;
        height: 24px;
    }
`

export const IconLink = styled.a`
    display: grid;
    place-items: center;

    width: 44px;
    height: 44px;

    color: inherit;
    text-decoration: none;

    transition:
            opacity ${({ theme }) => theme.transitions.fast},
            transform ${({ theme }) => theme.transitions.fast};

    &:hover {
        opacity: 0.7;
    }

    &:focus-visible {
        outline: 2px solid currentColor;
        outline-offset: 2px;
        border-radius: ${({ theme }) => theme.radii.small};
    }

    svg {
        display: block;
        width: 24px;
        height: 24px;
    }
`
