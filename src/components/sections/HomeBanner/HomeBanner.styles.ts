import styled from '@emotion/styled'

import bannerImage from '../../../assets/banner.jpg'

export const BannerSection = styled.section`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    height: 600px;
    padding: 0 60px 56px;

    color: ${({ theme }) => theme.colors.white};

    background:
            linear-gradient(
                    to bottom,
                    rgba(0, 0, 0, 0.08),
                    rgba(0, 0, 0, 0.58)
            ),
            url(${bannerImage}) center / cover no-repeat;
`

export const BannerContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 20px;

    width: 600px;
    text-align: right;
`

export const BannerTitle = styled.h1`
    margin: 0;

    font-size: 48px;
    line-height: 1.2;
    word-break: keep-all;
`

export const BannerLink = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    width: 240px;
    height: 48px;
    padding: 12px 20px;

    color: ${({ theme }) => theme.colors.white};
    background-color: rgba(0, 0, 0, 0.72);
    border-radius: ${({ theme }) => theme.radii.medium};
    font-size: 16px;
    text-decoration: none;

    transition:
            background-color ${({ theme }) => theme.transitions.fast},
            box-shadow ${({ theme }) => theme.transitions.fast},
            transform ${({ theme }) => theme.transitions.fast};

    &:hover {
        background-color: rgba(0, 0, 0, 0.9);
        box-shadow: ${({ theme }) => theme.shadows.medium};
        transform: translateY(-2px);
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.white};
        outline-offset: 4px;
    }
`
