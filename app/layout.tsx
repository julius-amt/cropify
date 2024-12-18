import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

// archivo font
const inter = Archivo({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Cropify App",
    description: "Agriculture app for farmers",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                    toastOptions={{ duration: 3000 }}
                />
                {children}
            </body>
        </html>
    );
}
