import type { Metadata } from "next";

import { AdvisorContextProvider } from "@/app/_components/_content/AdvisorContext";

export const metadata: Metadata = {
    title: "Cropify App",
    description: "Agriculture app for farmers",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <AdvisorContextProvider>{children}</AdvisorContextProvider>;
}
