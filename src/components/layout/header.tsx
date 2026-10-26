"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/container";

export function Header() {
    return (
        <header className="bg-background/85 backdrop-blur-md sticky top-0 z-50 border-b border-dashed">
            <Container className="px-6 sm:border-l sm:border-r border-dashed relative">
                <div className="py-3.5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Logo />
                        </div>

                        <div className="flex items-center gap-1 sm:gap-2">
                            <Link
                                href="/blog"
                                className={cn(
                                    buttonVariants({ variant: "outline", size: "sm" }),
                                    "hidden sm:flex rounded-none border-dashed font-mono text-xs h-8"
                                )}
                            >
                                Blog
                            </Link>

                            <ThemeSwitcher />
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
}
