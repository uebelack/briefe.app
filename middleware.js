import { NextResponse } from 'next/server';
import { resolveAcceptLanguage } from 'resolve-accept-language';
import { locales } from './config';

export const config = {
  matcher: ['/', '/(en|de|es|fr|it|nl|pt)/:path*'],
};

export default function middleware(request) {
  if (request.nextUrl.pathname === '/') {
    const userLanguage = resolveAcceptLanguage(request.headers.get('accept-language'), locales, 'en-US');
    return NextResponse.redirect(new URL(`/${userLanguage.substring(0, 2)}`, request.url));
  }
  return NextResponse.next();
}
