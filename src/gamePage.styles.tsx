import styled from "@emotion/styled";
import { keyframes, css } from "@emotion/react";

const flash = keyframes`
  0% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.92); }
  100% { opacity: 1; transform: scale(1); }
`;

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  75% { transform: translateX(4px); }
`;

const flashKeyframes = (color: string) => keyframes`
  0% { background-color: #ffffff; }
  60% { background-color: #ffffff; }
  100% { background-color: ${color}; }
`;

/* 게임판 */
export const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 16px;
  background-color: ${({ theme }) => theme.colors.background};
  min-height: calc(100vh - 56px);
`;

export const NextLabel = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 600;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Grid = styled.div<{ cols: number }>`
  display: grid;
  grid-template-columns: repeat(${({ cols }) => cols}, 72px);
  gap: 8px;
`;

export const Cell = styled.button<{
  used: boolean;
  isError: boolean;
  isFlash: boolean;
}>`
  width: 72px;
  height: 72px;
  border: none;
  border-radius: ${({ theme }) => theme.radius};
  background-color: ${({ theme, used, isError }) =>
    isError
      ? theme.colors.error
      : used
      ? theme.colors.cellUsed
      : theme.colors.cell};
  color: ${({ theme }) => theme.colors.textInverse};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 600;
  cursor: ${({ used }) => (used ? "default" : "pointer")};
  visibility: ${({ used }) => (used ? "hidden" : "visible")};
  animation: ${({ theme, isError, isFlash }) =>
    isError
      ? css`
          ${shake} 0.3s
        `
      : isFlash
      ? css`
          ${flashKeyframes(theme.colors.cell)} 0.3s ease-out
        `
      : "none"};

  &:hover {
    filter: ${({ used }) => (used ? "none" : "brightness(1.1)")};
  }
`;

/* 종료 모달 */
export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalBox = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius};
  padding: 32px 40px;
  text-align: center;
  min-width: 280px;
`;

export const ModalTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: 12px;
`;

export const ModalTimeText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 24px;
`;

export const ModalConfirmButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textInverse};
  border: none;
  border-radius: ${({ theme }) => theme.radius};
  padding: 10px 32px;
  font-size: ${({ theme }) => theme.fontSizes.md};
  cursor: pointer;

  &:hover {
    filter: brightness(1.1);
  }
`;
