import { useEffect, useRef, useState } from 'react'

interface TimerFrame {
    startedAtMs: number | null
    elapsedTimeMs: number
}

export function useGameTimer(
    startedAtMs: number | null,
    finishedAtMs: number | null,
) {
    const animationFrameIdRef = useRef<number | null>(null)
    const [timerFrame, setTimerFrame] =
        useState<TimerFrame>({
            startedAtMs: null,
            elapsedTimeMs: 0,
        })

    useEffect(() => {
        if (
            startedAtMs === null
            || finishedAtMs !== null
        ) {
            return
        }

        const updateElapsedTime = (
            currentTimeMs: number,
        ) => {
            setTimerFrame({
                startedAtMs,
                elapsedTimeMs: Math.max(
                    0,
                    currentTimeMs - startedAtMs,
                ),
            })

            animationFrameIdRef.current =
                requestAnimationFrame(updateElapsedTime)
        }

        animationFrameIdRef.current =
            requestAnimationFrame(updateElapsedTime)

        return () => {
            if (animationFrameIdRef.current !== null) {
                cancelAnimationFrame(
                    animationFrameIdRef.current,
                )
                animationFrameIdRef.current = null
            }
        }
    }, [startedAtMs, finishedAtMs])

    if (startedAtMs === null) {
        return 0
    }

    if (finishedAtMs !== null) {
        return Math.max(
            0,
            finishedAtMs - startedAtMs,
        )
    }

    if (timerFrame.startedAtMs !== startedAtMs) {
        return 0
    }

    return timerFrame.elapsedTimeMs
}
