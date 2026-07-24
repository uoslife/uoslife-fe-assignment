import styled from '@emotion/styled'

export const HeaderContainer = styled.header`
    position: sticky;
    top: 0;
    z-index: ${({ theme }) => theme.zIndex.header};

    width: 100%;
    height: ${({ theme }) => theme.sizes.headerHeight};

    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.small};
`

export const HeaderInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 100%;
    padding: 0 clamp(
        ${({ theme }) => theme.spacing.md},
        4.5vw,
        64px
    );
`

export const LeftArea = styled.div`
    display: flex;
    align-items: center;
    gap: 36px;
`

export const Logo = styled.strong`
    font-size: 18px;
    white-space: nowrap;
`

export const Navigation = styled.nav`
    height: 100%;
`

export const MenuList = styled.ul`
    display: flex;
    align-items: center;
    gap: 18px;

    height: 100%;
    margin: 0;
    padding: 0;

    list-style: none;
`

export const MenuButton = styled.button<{ $isActive: boolean }>`
    padding: 8px 12px;
    border: 0;
    border-radius: ${({ theme }) => theme.radii.small};

    color: inherit;
    background-color: ${({ $isActive, theme }) =>
        $isActive ? theme.colors.primaryDark : 'transparent'};

    font-size: 14px;
    font-weight: ${({ $isActive }) => ($isActive ? 700 : 600)};

    transition: background-color ${({ theme }) => theme.transitions.fast};

    &:hover {
        background-color: ${({ theme }) => theme.colors.primaryDark};
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.white};
        outline-offset: 2px;
    }
`

export const GameControls = styled.div`
    display: flex;
    align-items: center;
    gap: 44px;
`

export const LevelLabel = styled.label`
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

export const LevelSelect = styled.select`
    min-width: 112px;
    height: 30px;
    padding: 0 8px;
    border: 0;
    border-radius: ${({ theme }) => theme.radii.small};

    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.white};

    cursor: pointer;

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.primaryDark};
        outline-offset: 2px;
    }
`

export const Timer = styled.time`
    min-width: 64px;

    font-size: 16px;
    font-weight: 700;
    font-variant-numeric: tabular-nums;
    text-align: right;
`
