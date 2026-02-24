export function formatDate(date: string) {
  return date ? new Date(date).toISOString().split("T")[0] : "";
}

export function formatDateLong(date: string): string {
    if (!date) return "";
    const d = new Date(date);
    const options: Intl.DateTimeFormatOptions = { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
    };
    return d.toLocaleDateString('fr-FR', options);
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

export function formatNationalite(nationalite: string): string {
    const nationaliteMap: Record<string, string> = {
        "FR": "Française",
        "US": "Américaine",
        "GB": "Britannique",
        "CA": "Canadienne",
        "AT": "Autrichienne"
    };
    return nationaliteMap[nationalite] || nationalite;
}

export function calculerAge(dateNaissance: string, dateDeces?: string): number {
    const debut = new Date(dateNaissance);
    const fin = dateDeces ? new Date(dateDeces) : new Date();
    let age = fin.getFullYear() - debut.getFullYear();
    const m = fin.getMonth() - debut.getMonth();
    if (m < 0 || (m === 0 && fin.getDate() < debut.getDate())) {
        age--;
    }
    return age;
}