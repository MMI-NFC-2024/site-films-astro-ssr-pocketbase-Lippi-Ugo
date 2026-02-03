export function formatDate(date: string) {
  return date ? new Date(date).toISOString().split("T")[0] : "";
}

export function formatAnnee(date: Date): string {
    return date.getFullYear().toString();
}