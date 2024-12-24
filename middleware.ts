import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const defaultLocale = 'en'; // Your default locale
const supportedLocales = ['en', 'fr', 'es']; // Add all supported locales here

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip middleware for API, _next, static, and files with extensions
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/static') ||
    pathname.match(/^.*\..*$/)
  ) {
    return NextResponse.next();
  }

  // Check if the path already includes a supported locale
  const pathLocale = pathname.split('/')[1];
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
