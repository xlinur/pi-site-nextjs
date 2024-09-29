'use client';
import Head from 'next/head';
import { Roboto } from 'next/font/google';
import GoogleCaptchaWrapper from '@/app/components/GoogleCaptchaWrapper';
import GoogleAnalytics from '@/app/components/GoogleAnalytics';

import '@/app/styles/globals.scss';

const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['100', '400', '300', '500', '700', '900'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Head>
        <GoogleAnalytics />
      </Head> */}
      <body className={roboto.className}>
        {process.env.NODE_ENV === 'production' ? <div /> : null}
        <GoogleCaptchaWrapper>{children}</GoogleCaptchaWrapper>
      </body>
    </html>
  );
}
