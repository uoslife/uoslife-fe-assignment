export const theme = {
    colors: {
        white: '#FFFFFF',
        black: '#000000',
    },

    layout: {
        header: {
            height: '144px',
            horizontalPadding: 'clamp(24px, 7.4vw, 152px)',
        },
    },

    zIndex: {
        header: 100,
    },
} as const

export type AppTheme = typeof theme
