// src/utils/dateUtils.ts

export function formatDate(date: Date): string {
    return date.toISOString().split('T')[0]; // Returns date in YYYY-MM-DD format
}

export function isPastDate(date: Date): boolean {
    return new Date(date) < new Date();
}

export function addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
