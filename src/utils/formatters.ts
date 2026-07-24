const padTwoDigits = (value: number) =>
    String(value).padStart(2, '0')

export function formatElapsedSeconds(
    elapsedTimeMs: number,
) {
    return (elapsedTimeMs / 1000).toFixed(2)
}

export function formatLocalDateTime(
    dateTime: string,
) {
    const date = new Date(dateTime)

    const formattedDate = [
        date.getFullYear(),
        padTwoDigits(date.getMonth() + 1),
        padTwoDigits(date.getDate()),
    ].join('-')

    const formattedTime = [
        padTwoDigits(date.getHours()),
        padTwoDigits(date.getMinutes()),
        padTwoDigits(date.getSeconds()),
    ].join(':')

    return `${formattedDate} ${formattedTime}`
}
