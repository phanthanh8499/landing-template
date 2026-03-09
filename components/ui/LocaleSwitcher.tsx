"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales, localeNames, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

export function LocaleSwitcher({ className }: { className?: string }) {
    const currentLocale = useLocale() as Locale;
    const router = useRouter();
    const pathname = usePathname();

    const handleSwitch = (locale: Locale) => {
        router.replace(pathname, { locale });
    };

    return (
        <div className={cn("flex items-center gap-1", className)}>
            {locales.map((locale, i) => (
                <span key={locale} className="flex items-center gap-1">
                    {i > 0 && <span className="text-white/30 text-xs">|</span>}
                    <button
                        onClick={() => handleSwitch(locale as Locale)}
                        className={cn(
                            "text-xs font-semibold uppercase tracking-wider px-1 py-0.5 transition-colors duration-200",
                            locale === currentLocale ? "text-primary" : "text-white/60 hover:text-white",
                        )}
                    >
                        {locale.toUpperCase()}
                    </button>
                </span>
            ))}
        </div>
    );
}
