import type {
    CellFeedback,
    GameStatus,
} from '../../../types/game'
import {
    BoardItem,
    BoardList,
    FeedbackEffect,
    GameSection,
    NextNumberHeading,
    NumberButton,
} from './GameBoard.styles'

interface GameBoardProps {
    gridSize: number
    numbers: readonly (number | null)[]
    nextNumber: number
    status: GameStatus
    feedback: CellFeedback | null
    onNumberClick: (cellIndex: number) => void
    onFeedbackEnd: (feedbackId: number) => void
}

function GameBoard({
    gridSize,
    numbers,
    nextNumber,
    status,
    feedback,
    onNumberClick,
    onFeedbackEnd,
}: GameBoardProps) {
    const cellCount = gridSize ** 2

    return (
        <GameSection aria-labelledby="next-number-heading">
            <NextNumberHeading
                id="next-number-heading"
                aria-live="polite"
            >
                {status === 'completed' ? (
                    '게임 완료!'
                ) : (
                    <>
                        다음 숫자 <strong>{nextNumber}</strong>
                    </>
                )}
            </NextNumberHeading>

            <BoardList
                $gridSize={gridSize}
                aria-label={`${gridSize} × ${gridSize} 숫자 게임판`}
            >
                {numbers.map((number, cellIndex) => {
                    const isBackNumber =
                        number !== null && number > cellCount

                    return (
                        <BoardItem key={cellIndex}>
                            {number !== null && (
                                <NumberButton
                                    type="button"
                                    $isBackNumber={isBackNumber}
                                    onClick={() =>
                                        onNumberClick(cellIndex)
                                    }
                                >
                                    {number}
                                </NumberButton>
                            )}

                            {feedback?.cellIndex === cellIndex && (
                                <FeedbackEffect
                                    key={feedback.id}
                                    $type={feedback.type}
                                    aria-hidden="true"
                                    onAnimationEnd={(event) => {
                                        if (
                                            event.target
                                            === event.currentTarget
                                        ) {
                                            onFeedbackEnd(feedback.id)
                                        }
                                    }}
                                />
                            )}
                        </BoardItem>
                    )
                })}
            </BoardList>
        </GameSection>
    )
}

export default GameBoard
