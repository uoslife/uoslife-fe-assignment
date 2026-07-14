export const theme = {
  colors: {
    primary: '#3b5bdb',
    primaryDark: '#1f3b8c',
    background: '#dbe4f3',
    surface: '#ffffff',
    cell: '#3b5bdb',
    cellUsed: '#c3cfe8',
    text: '#1b1b1b',
    textInverse: '#ffffff',
    error: '#e03131',
    success: '#2f9e44',
  },
  spacing: (n: number) => `${n * 4}px`,
  radius: '8px',
  fontSizes: {
    sm: '14px',
    md: '16px',
    lg: '20px',
    xl: '28px',
  },
};

export type AppTheme = typeof theme;
