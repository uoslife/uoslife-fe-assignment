import { CellData, Level, LEVEL_CONFIGS } from "./types";

export function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function createInitialGrid(level: Level): {
  grid: CellData[];
  queue: number[];
  total: number;
} {
  const { rows, cols } = LEVEL_CONFIGS[level];
  const cellCount = rows * cols;
  const total = cellCount * 2;

  const firstHalf = shuffle(Array.from({ length: cellCount }, (_, i) => i + 1));
  const secondHalf = shuffle(
    Array.from({ length: cellCount }, (_, i) => cellCount + i + 1)
  );

  const grid: CellData[] = firstHalf.map((value, idx) => ({
    id: `cell-${idx}`,
    value,
    used: false,
  }));

  return { grid, queue: secondHalf, total };
}
