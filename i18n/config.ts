// i18n/config.ts
export const locales = ["vi", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "vi";

export const namespaces = ["common"] as const;
export type Namespace = (typeof namespaces)[number];

export const localeNames: Record<Locale, string> = {
    vi: "Tiếng Việt",
    en: "English",
};
