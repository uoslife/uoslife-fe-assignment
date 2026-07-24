import {
    BoardItem,
    BoardList,
    GameSection,
    NextNumberHeading,
    NumberButton,
} from './GameBoard.styles'

interface GameBoardProps {
    gridSize: number
    numbers: readonly number[]
    nextNumber: number
}

function GameBoard({
    gridSize,
    numbers,
    nextNumber,
}: GameBoardProps) {
    return (
        <GameSection aria-labelledby="next-number-heading">
            <NextNumberHeading id="next-number-heading">
                다음 숫자{' '}
                <strong aria-live="polite">
                    {nextNumber}
                </strong>
            </NextNumberHeading>

            <BoardList
                $gridSize={gridSize}
                aria-label={`${gridSize} × ${gridSize} 숫자 게임판`}
            >
                {numbers.map((number, cellIndex) => (
                    <BoardItem key={cellIndex}>
                        <NumberButton type="button">
                            {number}
                        </NumberButton>
                    </BoardItem>
                ))}
            </BoardList>
        </GameSection>
    )
}

export default GameBoard
