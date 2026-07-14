import { useCallback, useEffect, useRef, useState } from "react";
import { CellData, GameStatus, Level } from "./types";
import { createInitialGrid } from "./gameUtils";
import { saveRecord } from "./storage";

export interface UseGameLogicResult {
  grid: CellData[];
  nextNumber: number;
  status: GameStatus;
  elapsed: number;
  errorCellId: string | null;
  flashCellId: string | null;
  handleCellClick: (cell: CellData) => void;
  resetGame: () => void;
}

export function useGameLogic(level: Level): UseGameLogicResult {
  const [grid, setGrid] = useState<CellData[]>([]);
  const [queue, setQueue] = useState<number[]>([]);
  const [total, setTotal] = useState(0);
  const [nextNumber, setNextNumber] = useState(1);
  const [status, setStatus] = useState<GameStatus>("idle");
  const [elapsed, setElapsed] = useState(0);
  const [errorCellId, setErrorCellId] = useState<string | null>(null);
  const [flashCellId, setFlashCellId] = useState<string | null>(null);

  const startTimeRef = useRef<number>(0);
  const intervalRef = useRef<number | null>(null);

  const stopTimer = useCallback(() => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const initGame = useCallback(() => {
    const {
      grid: newGrid,
      queue: newQueue,
      total: newTotal,
    } = createInitialGrid(level);
    stopTimer();
    setGrid(newGrid);
    setQueue(newQueue);
    setTotal(newTotal);
    setNextNumber(1);
    setStatus("idle");
    setElapsed(0);
    setErrorCellId(null);
    setFlashCellId(null);
  }, [level, stopTimer]);

  useEffect(() => {
    initGame();
  }, [level]);

  useEffect(() => stopTimer, [stopTimer]);

  const startTimer = useCallback(() => {
    startTimeRef.current = Date.now();
    intervalRef.current = window.setInterval(() => {
      const diff = (Date.now() - startTimeRef.current) / 1000;
      setElapsed(Math.floor(diff * 100) / 100);
    }, 10);
  }, []);

  const finishGame = useCallback(
    (finalTime: number) => {
      stopTimer();
      setElapsed(finalTime);
      setStatus("finished");
      saveRecord({
        id: `${Date.now()}`,
        level,
        playTime: finalTime,
        playedAt: new Date().toLocaleString("ko-KR"),
      });
    },
    [level, stopTimer]
  );
  const handleCellClick = useCallback(
    (cell: CellData) => {
      if (status === "finished" || cell.used || cell.value === null) return;

      setFlashCellId(cell.id);
      window.setTimeout(() => setFlashCellId(null), 300);

      if (cell.value !== nextNumber) {
        setErrorCellId(cell.id);
        window.setTimeout(() => setErrorCellId(null), 300);
        return;
      }

      if (nextNumber === 1 && status === "idle") {
        setStatus("playing");
        startTimer();
      }

      const nextNum = nextNumber + 1;
      setNextNumber(nextNum);

      window.setTimeout(() => {
        setGrid((prev) => {
          const replacement = queue.length > 0 ? queue[0] : null;
          return prev.map((c) =>
            c.id === cell.id
              ? { ...c, value: replacement, used: replacement === null }
              : c
          );
        });
        setQueue((prev) => prev.slice(1));
      }, 250);

      if (nextNum > total) {
        const finalTime =
          Math.floor(((Date.now() - startTimeRef.current) / 1000) * 100) / 100;
        finishGame(finalTime);
      }
    },
    [status, nextNumber, queue, total, startTimer, finishGame]
  );
  const resetGame = useCallback(() => {
    initGame();
  }, [initGame]);

  return {
    grid,
    nextNumber,
    status,
    elapsed,
    errorCellId,
    flashCellId,
    handleCellClick,
    resetGame,
  };
}
