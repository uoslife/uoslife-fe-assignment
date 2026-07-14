import styled from '@emotion/styled'

export const ScrollSection = styled.section`
    overflow: hidden;
    padding: ${({ theme }) => theme.spacing.xs} 0 40px;
`

export const ScrollHeading = styled.h2`
    margin: 30px 0 ${({ theme }) => theme.spacing.md};
    padding: 0 ${({ theme }) => theme.spacing.sm};

    font-size: 20px;
    line-height: 1.2;
`

export const ScrollContainer = styled.div`
    position: relative;
`

export const ScrollList = styled.ul`
    display: flex;
    gap: ${({ theme }) => theme.spacing.sm};

    overflow-x: auto;

    margin: 0;
    padding: 0 ${({ theme }) => theme.spacing.sm};

    list-style: none;
    scroll-behavior: smooth;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    @media (prefers-reduced-motion: reduce) {
        scroll-behavior: auto;
    }
`

export const ScrollItem = styled.li`
    flex: 0 0 ${({ theme }) => theme.sizes.bannerItem};
    overflow: hidden;

    height: ${({ theme }) => theme.sizes.bannerItem};
`

export const ScrollImage = styled.img`
    display: block;

    width: 100%;
    height: 100%;

    object-fit: cover;
`

export const ScrollButton = styled.button`
    position: absolute;
    top: 50%;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    width: 48px;
    height: 48px;
    padding: 0;

    color: ${({ theme }) => theme.colors.black};
    background-color: rgba(255, 255, 255, 0.92);
    border: 0;
    border-radius: 50%;
    box-shadow: ${({ theme }) => theme.shadows.medium};
    font-size: 20px;

    transform: translateY(-50%);
    transition:
            background-color ${({ theme }) => theme.transitions.fast},
            transform ${({ theme }) => theme.transitions.fast};

    &[data-direction='left'] {
        left: ${({ theme }) => theme.spacing.sm};
    }

    &[data-direction='right'] {
        right: ${({ theme }) => theme.spacing.sm};
    }

    &:hover {
        background-color: ${({ theme }) => theme.colors.white};
        transform: translateY(-50%) scale(1.08);
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.black};
        outline-offset: 3px;
    }

    @media (prefers-reduced-motion: reduce) {
        transition: none;
    }
`