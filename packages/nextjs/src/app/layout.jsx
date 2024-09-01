"use client";

import { Roboto } from "next/font/google";
import Header from "@/app/layout/components/Header";
import SidebarMenu from "@/app/layout/components/SidebarMenu";
import Footer from "@/app/layout/components/Footer";
import "./globals.scss";
import { useState } from "react";
import GoogleCaptchaWrapper from "@/app/GoogleCaptchaWrapper";

const roboto = Roboto({
    subsets: ["latin", "cyrillic"],
    weight: ["100", "400", "300", "500", "700", "900"],
});

export default function RootLayout({ children }) {
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);

    return (
        <html lang="en">
            <body className={roboto.className}>
                <Header setIsOpenSidebar={setIsOpenSidebar} />

                <GoogleCaptchaWrapper>{children}</GoogleCaptchaWrapper>

                <Footer />

                {isOpenSidebar && (
                    <SidebarMenu setIsOpenSidebar={setIsOpenSidebar} />
                )}
            </body>
        </html>
    );
}
