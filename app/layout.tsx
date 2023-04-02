import "@/app/styles/globals.css";
import { Inter } from "@next/font/google";
import { Suspense } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <head />
            <body>{children}</body>
        </html>
    );
}
