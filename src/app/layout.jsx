'use client';

import { Roboto } from 'next/font/google';
import GoogleCaptchaWrapper from '@/app/components/GoogleCaptchaWrapper';
import GoogleAnalytics from '@/app/components/GoogleAnalytics';
import ErrorBoundary from '@/app/components/ErrorBoundary';
import '@/app/styles/globals.scss';

const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['100', '400', '300', '500', '700', '900'],
});

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={roboto.className}>
        <ErrorBoundary>
          <GoogleAnalytics />
          <GoogleCaptchaWrapper>{children}</GoogleCaptchaWrapper>
        </ErrorBoundary>
      </body>
    </html>
  );
}
