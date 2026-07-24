export const theme = {
    colors: {
        white: '#FFFFFF',
        black: '#000000',
    },

    spacing: {
        xs: '10px',
        sm: '18px',
        md: '24px',
    },

    radii: {
        small: '4px',
        medium: '10px',
    },

    transitions: {
        fast: '180ms ease',
    },

    shadows: {
        medium: '0 8px 24px rgba(0, 0, 0, 0.28)',
    },

    zIndex: {
        header: 100,
    },
} as const

export type AppTheme = typeof theme
