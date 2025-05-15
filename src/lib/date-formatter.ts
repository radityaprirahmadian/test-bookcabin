export function formatDate(dateString: string) {
  const date = new Date(dateString)

  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }

  return date.toLocaleString("en-US", options)
}
