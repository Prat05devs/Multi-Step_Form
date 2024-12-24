import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18nRouter } from 'next-i18next';
import i18nConfig from './next-i18next.config';

export function middleware(request: NextRequest) {
  return i18nRouter(request, i18nConfig);
}

export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)',
};