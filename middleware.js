import { NextResponse } from 'next/server';
import { locales } from './config';

export const config = {
  matcher: ['/', '/(en|de|es|fr|it|nl|pt)/:path*'],
};

export default function middleware(request) {
  const urlParts = request.nextUrl.pathname.split('/');

  const locale = urlParts.length > 1 ? urlParts[1] : 'en';
  if (!locales.includes(locale)) {
    return NextResponse.redirect('/en');
  }

  const response = NextResponse.next();
  // Set a cookie to hide the banner
  response.cookies.set('locale', locale);
  // Response will have a `Set-Cookie:show-banner=false;path=/home` header
  return response;
}
