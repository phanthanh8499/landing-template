import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string, locale = "vi-VN"): string {
    return new Intl.DateTimeFormat(locale, {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(new Date(date));
}

export function truncate(str: string, maxLength: number): string {
    return str.length > maxLength ? str.slice(0, maxLength) + "…" : str;
}
