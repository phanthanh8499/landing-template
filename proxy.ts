import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./i18n/config";
import { NextResponse } from "next/server";

const intlMiddleware = createMiddleware({
    locales,
    defaultLocale,
    localePrefix: "as-needed",
});

export default function proxy(req: any) {
    const res = intlMiddleware(req);

    res.headers.set("x-pathname", req.nextUrl.pathname);

    return res;
}

export const config = {
    matcher: ["/((?!api|_next|.*\\..*).*)"],
};
