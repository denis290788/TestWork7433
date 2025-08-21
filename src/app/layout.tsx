import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
    title: "Testy Shop",
    description: "Testy shop right now:)",
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="ru">
            <body className={inter.className}>
                <Header />
                <main>
                    <div className="container">{children}</div>
                </main>
                <Footer />
            </body>
        </html>
    );
}
