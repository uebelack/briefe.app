import createMiddleware from 'next-intl/middleware';
import { locales } from './config';

export default createMiddleware({
  locales,
  defaultLocale: 'en',
});

export const config = {
  matcher: ['/', '/(en|de|es|fr|it|nl|pt)/:path*'],
};