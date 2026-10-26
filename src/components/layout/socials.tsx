import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { MY_DATA } from "@/config/data";
import { Container } from "@/components/container";
import { SectionHeader } from "@/components/layout/section-header";

export function Socials() {
    const socialArray = Object.values(MY_DATA.socials);

    return (
        <section id="socials" className="border-b border-dashed">
            <SectionHeader title="Socials" />
            <Container className="sm:border-l sm:border-r px-0 border-dashed relative">
                <div className="grid grid-cols-2 sm:grid-cols-5">
                    {socialArray.map((social, idx) => {
                        const Icon = social.component;
                        const isLast = idx === socialArray.length - 1;
                        const isOddMobileCol = idx % 2 === 0;

                        return (
                            <Link
                                key={social.name}
                                href={social.link}
                                target="_blank"
                                rel="noreferrer"
                                className={cn(
                                    "group h-16 px-4 hover:bg-muted/35 transition-colors flex items-center justify-between sm:justify-center gap-2.5 border-dashed",
                                    !isLast && "border-b sm:border-b-0 sm:border-r",
                                    isOddMobileCol && !isLast && "border-r",
                                    isLast && "col-span-2 sm:col-span-1"
                                )}
                            >
                                <div className="flex items-center gap-2.5">
                                    <Icon className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                                    <span className="text-sm font-medium text-foreground">
                                        {social.name}
                                    </span>
                                </div>
                                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground/50 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                            </Link>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
