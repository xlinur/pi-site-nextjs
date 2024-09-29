'use client';

import { Roboto } from 'next/font/google';
import GoogleCaptchaWrapper from '@/app/GoogleCaptchaWrapper';
import ModalComponent from '@/app/components/Modal';
import ContactForm from '@/app/components/ContactForm';

import '@/app/styles/globals.scss';

const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['100', '400', '300', '500', '700', '900'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <GoogleCaptchaWrapper>{children}</GoogleCaptchaWrapper>
        <ModalComponent>
          <ContactForm isFormModal />
        </ModalComponent>
      </body>
    </html>
  );
}
