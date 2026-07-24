import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const floatCandy = keyframes`
    from {
        transform: translateY(0) rotate(-6deg);
    }

    to {
        transform: translateY(-6px) rotate(6deg);
    }
`

export const ModalBackdrop = styled.div`
    position: fixed;
    inset: 0;
    z-index: ${({ theme }) => theme.zIndex.modal};

    display: grid;
    place-items: center;

    background-color:
        ${({ theme }) => theme.colors.modalBackdrop};
`

export const ModalDialog = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 384px;
    min-height: 308px;
    padding: ${({ theme }) => theme.spacing.lg};
    border-radius:
        ${({ theme }) => theme.radii.medium};

    color: ${({ theme }) => theme.colors.text};
    background-color:
        ${({ theme }) => theme.colors.surface};
    box-shadow: ${({ theme }) => theme.shadows.medium};

    text-align: center;
`

export const CandyDecoration = styled.span`
    display: flex;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.xs};

    font-size: 22px;

    span {
        display: inline-block;

        animation: ${floatCandy} 1.4s ease-in-out
            infinite alternate;
    }

    span:nth-of-type(2) {
        animation-delay: -0.45s;
    }

    span:nth-of-type(3) {
        animation-delay: -0.9s;
    }

    @media (prefers-reduced-motion: reduce) {
        span {
            animation: none;
        }
    }
`

export const ResultHeading = styled.h2`
    margin: ${({ theme }) => theme.spacing.md} 0 0;

    font-size: 17px;
`

export const CompletedAt = styled.time`
    margin-top: ${({ theme }) => theme.spacing.sm};

    color: ${({ theme }) => theme.colors.text};
    opacity: 0.65;

    font-size: 12px;
    font-variant-numeric: tabular-nums;
`

export const ResultList = styled.dl`
    display: grid;
    grid-template-columns: max-content max-content;
    justify-content: center;
    gap: 8px ${({ theme }) => theme.spacing.xs};

    margin: 14px 0 0;

    font-size: 13px;
`

export const ResultTerm = styled.dt`
    font-weight: 600;
    text-align: left;
`

export const ResultValue = styled.dd`
    margin: 0;

    font-weight: 700;
    font-variant-numeric: tabular-nums;
    text-align: left;
`

export const ModalFooter = styled.footer`
    margin-top: ${({ theme }) => theme.spacing.md};
`

export const ConfirmButton = styled.button`
    min-height: 40px;
    padding: 0 ${({ theme }) => theme.spacing.sm};
    border: 0;
    border-radius:
        ${({ theme }) => theme.radii.small};

    color: ${({ theme }) => theme.colors.white};
    background-color:
        ${({ theme }) => theme.colors.primary};

    font-weight: 700;

    transition:
        background-color
            ${({ theme }) => theme.transitions.fast},
        transform
            ${({ theme }) => theme.transitions.fast};

    &:hover {
        background-color:
            ${({ theme }) => theme.colors.primaryDark};
    }

    &:active {
        transform: scale(0.97);
    }

    &:focus-visible {
        outline: 3px solid
            ${({ theme }) => theme.colors.primaryDark};
        outline-offset: 3px;
    }
`
