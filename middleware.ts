import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const defaultLocale = 'en'; // Default language
const supportedLocales = ['en', 'fr', 'es']; // List of supported locales

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip middleware for API, _next, static files, and assets
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/static') ||
    pathname.match(/^.*\..*$/) // Matches paths with file extensions
  ) {
    return NextResponse.next();
  }

  // Extract locale from the pathname
  const pathLocale = pathname.split('/')[1];

  // If the locale is supported, continue without redirecting
  if (supportedLocales.includes(pathLocale)) {
    return NextResponse.next();
  }

  // Redirect to the default locale if no locale is found in the path
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)',
};
