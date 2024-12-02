import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
    title: "Yogendra Rana",
    description: "Portfolio website of Yogendra Rana"
};

// font
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" type="image/svg+xml" href="smiley.png" />
            </head>
            <body
                className={cn(
                    "w-full flex flex-col justify-center overflow-x-hidden scroll-smooth",
                    inter.className
                )}
            >
                <main>{children}</main>
            </body>
            <Analytics />
        </html>
    );
}
