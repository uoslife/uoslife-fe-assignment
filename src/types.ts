export type Level = 1 | 2 | 3;

export interface LevelConfig {
  level: Level;
  rows: number;
  cols: number;
  label: string;
  emoji: string;
}

export const LEVEL_CONFIGS: Record<Level, LevelConfig> = {
  1: { level: 1, rows: 3, cols: 3, label: 'Level 1', emoji: '🐣' },
  2: { level: 2, rows: 4, cols: 4, label: 'Level 2', emoji: '🐥' },
  3: { level: 3, rows: 5, cols: 5, label: 'Level 3', emoji: '🦅' },
};

export interface CellData {
  id: string;
  value: number | null;
  used: boolean;
}

export type GameStatus = 'idle' | 'playing' | 'finished';

export interface GameRecord {
  id: string;
  level: Level;
  playTime: number; // seconds, 2 decimal places
  playedAt: string; // 현재 시각 (locale string)
}
