import React from "react";
import MaxWidthContainer from "../max-width-container";
import Link from "next/link";
import { MY_DATA } from "@/config/data";
import { cn } from "@/lib/utils";

export default function Footer() {
    return (
        <footer>
            <MaxWidthContainer className="border-l border-r">
                <div className={cn("py-8 flex flex-col gap-2 justify-center items-center")}>
                    <div className="">
                        <p
                            className={cn(
                                "text-start text-xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-300",
                                "md:text-2xl lg:text-3xl",
                                "dark:from-neutral-950 dark:to-neutral-800"
                            )}
                        >
                            Yogendra Rana
                        </p>
                    </div>

                    <div className="text-sm text-muted-foreground">
                        Keep coding, keep learning, keep building! 💻✨
                    </div>

                    <p className="text-muted-foreground text-sm">
                        Built by{" "}
                        <Link href={MY_DATA.socials.x} target="__blank" className="underline">
                            yogendra
                        </Link>
                        . The source code is available on{" "}
                        <Link href="https://github.com/yogendrarana/yogendrarana.com.np" target="__blank" className="underline">
                            GitHub
                        </Link>
                        .
                    </p>
                </div>
            </MaxWidthContainer>
        </footer>
    );
}
