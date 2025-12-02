import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import Logo from "@/components/logo";
import ThemeSwitcher from "@/components/theme-switcher";
import { buttonVariants } from "@/components/ui/button";
import MaxWidthContainer from "@/components/max-width-container";

export default function Header() {
  return (
    <header className="bg-background sticky top-0 z-50 border-b border-dashed">
      <MaxWidthContainer className="sm:border-l sm:border-r border-dashed">
        <div className="py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Logo />
            </div>

            <div className="flex items-center gap-1">
              <Link
                href="/blog"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "hidden sm:flex rounded-none",
                )}
              >
                Blog
              </Link>

              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </MaxWidthContainer>
    </header>
  );
}
