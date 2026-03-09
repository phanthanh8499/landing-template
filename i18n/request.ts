import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales, namespaces, type Locale } from "./config";

export default getRequestConfig(async ({ requestLocale }) => {
    const locale = await requestLocale;

    if (!locale || !locales.includes(locale as Locale)) notFound();

    const messages = Object.fromEntries(
        await Promise.all(
            namespaces.map(async (ns) => {
                const mod = await import(`./messages/${locale}/${ns}.json`);
                return [ns, mod.default] as const;
            }),
        ),
    );

    return { locale, messages };
});
