import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";

// Set default locale and supported locales
let defaultLocale = "en";
let locales = ["en", "bn"];

// Function to get the preferred locale from the request headers
function getLocale(req) {
  // Retrieve the 'accept-language' header from the request
  const acceptLanguages = req.headers.get("accept-language") ?? undefined;

  // Create headers for negotiator
  const headers = { "accept-language": acceptLanguages };

  // Use Negotiator to get the list of preferred languages
  const languages = new Negotiator({ headers }).languages();

  // Use match function to determine the best locale based on languages and supported locales
  return match(languages, locales, defaultLocale);
}

// Middleware function to handle locale redirection
export function middleware(req) {
  // Get the pathname of the request URL
  const pathname = req.nextUrl.pathname;

  // Check if the pathname is missing a locale prefix (e.g., /en/ or /bn/)
  const pathNameIsMissingLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}`) && !pathname.startsWith(`/${locale}/`)
  );

  if (pathNameIsMissingLocale) {
    // If no locale is found in the pathname, determine the user's preferred locale
    const locale = getLocale(req);

    // Check if the returned locale is valid
    if (!locales.includes(locale)) {
      // If the locale is not supported, fallback to the default locale
      console.warn(
        `Unsupported locale detected: ${locale}. Falling back to default: ${defaultLocale}`
      );
      return NextResponse.redirect(
        new URL(`/${defaultLocale}/${pathname}`, req.url)
      );
    }

    // Redirect to the locale-prefixed URL
    return NextResponse.redirect(new URL(`/${locale}/${pathname}`, req.url));
  }

  // Continue to the next middleware or request handler if locale is already in the pathname
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, assets, api)
    "/((?!api|assets|.*\\..*|_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
