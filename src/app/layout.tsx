import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import { cn } from "@/lib/utils";
import { MY_DATA } from "@/config/data";

import "@/styles/custom.css";
import "@/styles/globals.css";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
    metadataBase: new URL(MY_DATA.websiteUrl),
    title: MY_DATA.name,
    description: MY_DATA.role
};

// font
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body
                className={cn(
                    "w-full flex flex-col justify-center overflow-x-hidden scroll-smooth",
                    inter.className
                )}
            >
                <Providers>
                    <main>{children}</main>
                </Providers>
            </body>
            <Analytics />
        </html>
    );
}
