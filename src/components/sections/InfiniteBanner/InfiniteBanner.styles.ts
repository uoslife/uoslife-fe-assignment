import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const moveLeft = keyframes`
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-33.333333%);
    }
`

export const BannerSection = styled.section`
    overflow: hidden;
    padding: ${({ theme }) => theme.spacing.xs} 0;
`

export const BannerHeading = styled.h2`
    margin: 30px 0 ${({ theme }) => theme.spacing.md};
    padding: 0 ${({ theme }) => theme.spacing.sm};

    font-size: 20px;
    line-height: 1.2;
`

export const BannerViewport = styled.div`
    width: 100%;
    overflow: hidden;
`

export const BannerTrack = styled.div`
    display: flex;
    width: max-content;

    animation:
            ${moveLeft}
            27s
            linear
            infinite;

    will-change: transform;

    @media (prefers-reduced-motion: reduce) {
        animation: none;
    }
`

export const BannerList = styled.ul`
    display: flex;
    flex-shrink: 0;
    gap: ${({ theme }) => theme.spacing.sm};

    margin: 0;
    padding:
            0
            ${({ theme }) => theme.spacing.sm}
            0
            0;

    list-style: none;
`

export const BannerItem = styled.li`
    flex: 0 0 auto;
    overflow: hidden;

    width: ${({ theme }) => theme.sizes.bannerItem};
    height: ${({ theme }) => theme.sizes.bannerItem};
`

export const BannerImage = styled.img`
    display: block;

    width: 100%;
    height: 100%;

    object-fit: cover;

    transition:
            transform
            ${({ theme }) => theme.transitions.fast};

    &:hover {
        transform: scale(1.08);
    }

    @media (prefers-reduced-motion: reduce) {
        transition: none;
    }
`