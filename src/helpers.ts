export function formatDate(date: string) {
  return date ? new Date(date).toISOString().split("T")[0] : "";
}

export function formatAnnee(date: string): string {
    return date ? new Date(date).getFullYear().toString() : "";
}

export function formatProfessions(professions: string[]): string {
    if (!professions || professions.length === 0) return "";
    if (professions.length === 1) return professions[0];
    if (professions.length === 2) return professions.join(" et ");
    return professions.slice(0, -1).join(", ") + " et " + professions[professions.length - 1];
}

export function formatPays(pays: string): string {
    const paysMap: Record<string, string> = {
        "FR": "France",
        "US": "États-Unis",
        "GB": "Royaume-Uni",
        "CA": "Canada",
        "AT": "Autriche"
    };
    return paysMap[pays] || pays;
}