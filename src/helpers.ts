export function formatDate(date: string) {
  return date ? new Date(date).toISOString().split("T")[0] : "";
}