'use client';

import { useState } from 'react';
import { Roboto } from 'next/font/google';
import ErrorBoundary from '@/app/components/ErrorBoundary';
import Header from '@/app/components/Header';
import SidebarMenu from '@/app/components/SidebarMenu';
import { RootDataProvider } from '@/app/components/RootData';
import Footer from '@/app/components/Footer';
import '@/app/styles/globals.scss';
import GoogleCaptchaWrapper from '@/app/GoogleCaptchaWrapper';

const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['100', '400', '300', '500', '700', '900'],
});

export default function RootLayout({ children }) {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  return (
    <html lang="en">
      <body className={roboto.className}>
        <ErrorBoundary>
          <RootDataProvider>
            <GoogleCaptchaWrapper>{children}</GoogleCaptchaWrapper>
            <Header setIsOpenSidebar={setIsOpenSidebar} />
            <Footer />
            <SidebarMenu
              isOpen={isOpenSidebar}
              setIsOpenSidebar={setIsOpenSidebar}
            />
          </RootDataProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
