import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { MY_DATA } from "@/config/data";
import MaxWidthContainer from "@/components/max-width-container";

export default function Footer() {
  return (
    <footer>
      <MaxWidthContainer className="border-l border-r border-dashed">
        <div
          className={cn("py-8 flex flex-col gap-2 justify-center items-center")}
        >
          <div className="">
            <p
              className={cn(
                "text-start text-xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-300",
                "md:text-2xl lg:text-3xl",
                "dark:from-neutral-950 dark:to-neutral-800",
              )}
            >
              Yogendra Rana
            </p>
          </div>

          <div className="mt-4 text-sm text-muted-foreground text-center">
            Keep coding, keep learning, keep building! 💻✨
          </div>

          <p className="text-muted-foreground text-sm text-center">
            Built by{" "}
            <Link
              href={MY_DATA.socials.x.link}
              target="__blank"
              className="underline"
            >
              yogendra rana
            </Link>
            . The source code is available on{" "}
            <Link
              href="https://github.com/yogendrarana/yogendrarana.com.np"
              target="__blank"
              className="underline"
            >
              GitHub
            </Link>
            .
          </p>
        </div>
      </MaxWidthContainer>
    </footer>
  );
}
