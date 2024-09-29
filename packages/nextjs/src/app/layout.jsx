'use client';
import Head from 'next/head';
import { Roboto } from 'next/font/google';
import GoogleCaptchaWrapper from '@/app/components/GoogleCaptchaWrapper';
import GoogleAnalytics from '@/app/components/GoogleAnalytics';
import ModalComponent from '@/app/components/Modal';
import GdprMessage from '@/app/components/GdprMessage';
import ContactForm from '@/app/components/ContactForm';

import '@/app/styles/globals.scss';

const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['100', '400', '300', '500', '700', '900'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <GoogleAnalytics />
      </Head>
      <body className={roboto.className}>
        <GoogleCaptchaWrapper>{children}</GoogleCaptchaWrapper>
        <ModalComponent>
          <ContactForm isFormModal />
        </ModalComponent>
        <GdprMessage />
      </body>
    </html>
  );
}
