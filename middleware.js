import { NextResponse } from 'next/server';
import { resolveAcceptLanguage } from 'resolve-accept-language';
import { locales } from './config';

export const config = {
  matcher: ['/', '/(en|de|es|fr|it|nl|pt)/:path*', '/(help|faq|imprint|privacy)'],
};

const BACKWARD_LINKS = ['/help', '/faq', '/imprint', '/privacy'];

export default function middleware(request) {
  if (request.nextUrl.pathname === '/') {
    const userLanguage = resolveAcceptLanguage(request.headers.get('accept-language'), locales, 'en-US');
    return NextResponse.redirect(new URL(`/${userLanguage.substring(0, 2)}`, request.url));
  }

  if (BACKWARD_LINKS.indexOf(request.nextUrl.pathname) !== -1) {
    return NextResponse.redirect(new URL(`/en/${request.nextUrl.pathname}`, request.url));
  }

  return NextResponse.next();
}
