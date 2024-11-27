import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "../../app/globals.css";
import { IndexContextProvider } from "@/app/_context/index";
import { Toaster } from "react-hot-toast";
import { ChatContextProvider } from "@/src/content/ChatContent";

// archivo font
const inter = Archivo({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
       <ChatContextProvider>
        {children}
       </ChatContextProvider>
    );
}
