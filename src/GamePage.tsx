import { createPortal } from "react-dom";
import * as S from "./gamePage.styles";
import { LEVEL_CONFIGS, Level } from "./types";
import type { UseGameLogicResult } from "./useGameLogic";

interface GamePageProps {
  level: Level;
  game: UseGameLogicResult;
}

export default function GamePage({ level, game }: GamePageProps) {
  const { cols } = LEVEL_CONFIGS[level];
  const {
    grid,
    nextNumber,
    status,
    elapsed,
    errorCellId,
    flashCellId,
    handleCellClick,
    resetGame,
  } = game;

  return (
    <>
      <S.BoardWrapper>
        <S.NextLabel>다음 숫자 "{nextNumber}"</S.NextLabel>
        <S.Grid cols={cols}>
          {grid.map((cell) => (
            <S.Cell
              key={cell.id}
              used={cell.used}
              isError={errorCellId === cell.id}
              isFlash={flashCellId === cell.id}
              disabled={cell.used}
              onClick={() => handleCellClick(cell)}
            >
              {cell.value ?? ""}
            </S.Cell>
          ))}
        </S.Grid>
      </S.BoardWrapper>

      {status === "finished" && (
        <GameFinishedModal playTime={elapsed} onConfirm={resetGame} />
      )}
    </>
  );
}

function GameFinishedModal({
  playTime,
  onConfirm,
}: {
  playTime: number;
  onConfirm: () => void;
}) {
  return createPortal(
    <S.ModalOverlay>
      <S.ModalBox>
        <S.ModalTitle>게임 종료! 🎉</S.ModalTitle>
        <S.ModalTimeText>{playTime.toFixed(2)}초</S.ModalTimeText>
        <S.ModalConfirmButton onClick={onConfirm}>확인</S.ModalConfirmButton>
      </S.ModalBox>
    </S.ModalOverlay>,
    document.body
  );
}
