import styled from '@emotion/styled';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textInverse};
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const HeaderTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
`;

export const NavButton = styled.button<{ active?: boolean }>`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textInverse};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ active }) => (active ? 700 : 400)};
  cursor: pointer;
  padding: 4px 8px;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Timer = styled.span`
  font-variant-numeric: tabular-nums;
  font-size: ${({ theme }) => theme.fontSizes.md};
  min-width: 56px;
  text-align: right;
`;

export const LevelSelect = styled.select`
  padding: 4px 8px;
  border-radius: ${({ theme }) => theme.radius};
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  cursor: pointer;
`;
