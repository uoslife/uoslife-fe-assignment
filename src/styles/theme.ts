export const theme = {
    colors: {
        white: '#FFFFFF',
        black: '#000000',
        primary: '#3766A4',
        primaryDark: '#102743',
        background: '#E1EBFF',
        surface: '#FFFFFF',
        text: '#111827',
    },

    spacing: {
        xxs: '5px',
        xs: '10px',
        sm: '18px',
        md: '24px',
        lg: '32px',
    },

    sizes: {
        headerHeight: '60px',
        contentMaxWidth: '960px',
        gameCell: '72px',
    },

    radii: {
        small: '4px',
        medium: '10px',
    },

    transitions: {
        fast: '180ms ease',
    },

    shadows: {
        small: '0 2px 8px rgba(16, 39, 67, 0.16)',
        medium: '0 8px 24px rgba(16, 39, 67, 0.16)',
    },

    zIndex: {
        header: 100,
    },
} as const

export type AppTheme = typeof theme
