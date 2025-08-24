import React from "react";
import Link from "next/link";

import X from "@/components/icon/x";
import { MY_DATA } from "@/config/data";
import GitHub from "@/components/icon/github";
import LinkedIn from "@/components/icon/linkedin";
import Bluesky from "@/components/icon/bluesky";
import SectionHeader from "@/components/layout/section-header";
import MaxWidthContainer from "@/components/max-width-container";

function Socials() {
    return (
        <section>
            <SectionHeader title="Socials" />
            <MaxWidthContainer className="border-l border-r px-0">
                <div className="h-36 sm:h-18 grid grid-cols-2 md:grid-cols-4 border-b">
                    {/* LinkedIn */}
                    <Link
                        href={MY_DATA.socials.linkedin}
                        target="__blank"
                        className="border-b sm:border-b-0 border-r border-border bg-background hover:bg-muted transition-colors flex items-center justify-center gap-3"
                    >
                        <LinkedIn className="h-5 w-5 text-muted-foreground" />
                        <span className="font-medium text-foreground">LinkedIn</span>
                    </Link>

                    {/* GitHub */}
                    <Link
                        href={MY_DATA.socials.github}
                        target="__blank"
                        className="border-b sm:border-b-0 border-r border-border bg-background hover:bg-muted transition-colors flex items-center justify-center gap-3"
                    >
                        <GitHub className="h-5 w-5 text-muted-foreground" />
                        <span className="font-medium text-foreground">GitHub</span>
                    </Link>

                    {/* X / Twitter */}
                    <Link
                        href={MY_DATA.socials.x}
                        target="__blank"
                        className="border-r border-border bg-background hover:bg-muted transition-colors flex items-center justify-center gap-3"
                    >
                        <X className="h-5 w-5 text-muted-foreground" />
                        <span className="font-medium text-foreground">Twitter</span>
                    </Link>

                    {/* Bluesky */}
                    <Link
                        href={MY_DATA.socials.bluesky}
                        target="__blank"
                        className="border-border bg-background hover:bg-muted transition-colors flex items-center justify-center gap-3"
                    >
                        <Bluesky className="h-5 w-5 text-muted-foreground" />
                        <span className="font-medium text-foreground">Bluesky</span>
                    </Link>
                </div>
            </MaxWidthContainer>
        </section>
    );
}

export default Socials;
