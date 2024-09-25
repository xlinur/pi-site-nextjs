'use client';

import { Roboto } from 'next/font/google';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import GoogleCaptchaWrapper from '@/app/GoogleCaptchaWrapper';

import '@/app/styles/globals.scss';

const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['100', '400', '300', '500', '700', '900'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <GoogleCaptchaWrapper>{children}</GoogleCaptchaWrapper>
        <Footer />
      </body>
    </html>
  );
}
