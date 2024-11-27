import type { Metadata } from "next";

import { ChatContextProvider } from "@/app/_components/_content/ChatContent";

export const metadata: Metadata = {
    title: "AgroAssist",
    description: "Agriculture app for farmers",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <ChatContextProvider>{children}</ChatContextProvider>;
}
