'use client';
import { Roboto } from 'next/font/google';
import GoogleCaptchaWrapper from '@/app/components/GoogleCaptchaWrapper';
import GdprMessage from '@/app/components/GdprMessage';
import GoogleAnalytics from '@/app/components/GoogleAnalytics';

import '@/app/styles/globals.scss';

const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['100', '400', '300', '500', '700', '900'],
});

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={roboto.className}>
        <GoogleAnalytics />
        <GoogleCaptchaWrapper>{children}</GoogleCaptchaWrapper>
        <GdprMessage />
      </body>
    </html>
  );
}
