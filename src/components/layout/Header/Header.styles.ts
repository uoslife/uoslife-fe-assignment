import styled from '@emotion/styled'

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.header};

  width: 100%;
  height: ${({ theme }) => theme.layout.header.height};

  color: ${({ theme }) => theme.colors.black};
  background-color: transparent;
`

export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100%;
  padding: 0 ${({ theme }) => theme.layout.header.horizontalPadding};
`

export const LeftArea = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(48px, 5vw, 104px);
`

export const Logo = styled.span`
  color: inherit;
  font-size: clamp(24px, 2vw, 40px);
  font-weight: 700;
  white-space: nowrap;
`

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  gap: clamp(52px, 6vw, 128px);

  margin: 0;
  padding: 0;
  list-style: none;
`

export const MenuText = styled.span`
    color: inherit;
    font-size: clamp(18px, 1.6vw, 32px);
`

export const IconArea = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(14px, 1.6vw, 32px);
`

export const IconItem = styled.span`
  display: grid;
  place-items: center;

  svg {
    display: block;
    width: clamp(22px, 1.6vw, 32px);
    height: clamp(22px, 1.6vw, 32px);
  }
`

export const IconLink = styled.a`
  display: grid;
  place-items: center;

  color: inherit;
  text-decoration: none;

  transition:
    opacity 150ms ease,
    transform 150ms ease;

  &:hover {
    opacity: 0.7;
  }

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 4px;
    border-radius: 4px;
  }

  svg {
    display: block;
    width: clamp(22px, 1.6vw, 32px);
    height: clamp(22px, 1.6vw, 32px);
  }
`