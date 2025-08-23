import React from "react";
import Link from "next/link";

import Logo from "../logo";
import { Button } from "@/components/ui/button";
import MaxWidthContainer from "../max-width-container";

export default function Header() {
    return (
        <header className="bg-background sticky top-0 z-50 border-b">
            <MaxWidthContainer className="sm:border-l sm:border-r">
                <div className="py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Logo />
                        </div>

                        <nav className="hidden md:flex items-center gap-1">
                            <Link href="/blog">
                                <Button variant="outline" size="sm" className="rounded-none">
                                    Blog
                                </Button>
                            </Link>
                        </nav>
                    </div>
                </div>
            </MaxWidthContainer>
        </header>
    );
}
