import { cookies } from 'next/headers';

export default function getLocale() {
  const locale = cookies().get('locale')?.value || 'en';
  return locale;
}
