export function shuffleNumbers(numbers: number[]) {
    const shuffledNumbers = [...numbers]

    for (
        let currentIndex = shuffledNumbers.length - 1;
        currentIndex > 0;
        currentIndex -= 1
    ) {
        const randomIndex = Math.floor(
            Math.random() * (currentIndex + 1),
        )
        const currentNumber = shuffledNumbers[currentIndex]

        shuffledNumbers[currentIndex] = shuffledNumbers[randomIndex]
        shuffledNumbers[randomIndex] = currentNumber
    }

    return shuffledNumbers
}
