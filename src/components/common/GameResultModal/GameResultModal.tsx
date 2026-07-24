import {
    useEffect,
    type KeyboardEvent,
} from 'react'
import { createPortal } from 'react-dom'

import type { GameLevel } from '../../../types/game'
import {
    formatElapsedSeconds,
    formatLocalDateTime,
} from '../../../utils/formatters'
import {
    CandyDecoration,
    CompletedAt,
    ConfirmButton,
    ModalBackdrop,
    ModalDialog,
    ModalFooter,
    ResultHeading,
    ResultList,
    ResultTerm,
    ResultValue,
} from './GameResultModal.styles'

interface GameResultModalProps {
    level: GameLevel
    completedAt: string
    elapsedTimeMs: number
    onConfirm: () => void
}

function GameResultModal({
    level,
    completedAt,
    elapsedTimeMs,
    onConfirm,
}: GameResultModalProps) {
    const modalRoot =
        document.getElementById('modal-root')
    const elapsedSeconds =
        formatElapsedSeconds(elapsedTimeMs)

    useEffect(() => {
        if (modalRoot === null) {
            return
        }

        const appRoot =
            document.getElementById('root')
        const hadInert =
            appRoot?.hasAttribute('inert') ?? false
        const previousOverflow =
            document.body.style.overflow

        appRoot?.setAttribute('inert', '')
        document.body.style.overflow = 'hidden'

        return () => {
            if (!hadInert) {
                appRoot?.removeAttribute('inert')
            }

            document.body.style.overflow =
                previousOverflow
        }
    }, [modalRoot])

    if (modalRoot === null) {
        throw new Error(
            'modal-root 요소를 찾을 수 없습니다.',
        )
    }

    const handleKeyDown = (
        event: KeyboardEvent<HTMLElement>,
    ) => {
        if (event.key === 'Escape') {
            event.preventDefault()
            onConfirm()
        }
    }

    return createPortal(
        <ModalBackdrop>
            <ModalDialog
                role="dialog"
                aria-modal="true"
                aria-labelledby="game-result-heading"
                aria-describedby="game-completed-at game-result-list"
                onKeyDown={handleKeyDown}
            >
                <CandyDecoration aria-hidden="true">
                    <span>🍬</span>
                    <span>🍬</span>
                    <span>🍬</span>
                </CandyDecoration>

                <ResultHeading id="game-result-heading">
                    <span aria-hidden="true">🥳</span>
                    {' '}오호 좀 하시는데요~~{' '}
                    <span aria-hidden="true">🏆</span>
                </ResultHeading>

                <CompletedAt
                    id="game-completed-at"
                    dateTime={completedAt}
                >
                    {formatLocalDateTime(completedAt)}
                </CompletedAt>

                <ResultList id="game-result-list">
                    <ResultTerm>
                        <span aria-hidden="true">🎰</span>
                        {' '}Level :
                    </ResultTerm>
                    <ResultValue>{level}</ResultValue>

                    <ResultTerm>
                        <span aria-hidden="true">⏰</span>
                        {' '}TIME :
                    </ResultTerm>
                    <ResultValue>
                        <time
                            dateTime={`PT${elapsedSeconds}S`}
                        >
                            {elapsedSeconds}초
                        </time>
                    </ResultValue>
                </ResultList>

                <ModalFooter>
                    <ConfirmButton
                        type="button"
                        autoFocus
                        onClick={onConfirm}
                    >
                        다시 해볼래요{' '}
                        <span aria-hidden="true">☝️</span>
                    </ConfirmButton>
                </ModalFooter>
            </ModalDialog>
        </ModalBackdrop>,
        modalRoot,
    )
}

export default GameResultModal
