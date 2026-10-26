"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Check, Mail } from "lucide-react";

import { MY_DATA } from "@/config/data";
import { Container } from "@/components/container";
import { CornerCrosshairs } from "@/components/grid-system";

export function Hero() {
    const [copied, setCopied] = useState(false);
    const primaryEmail = MY_DATA.contact.emails[0];

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(primaryEmail);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="home" className="border-b border-dashed">
            <Container className="sm:border-l sm:border-r border-dashed relative overflow-hidden">
                <CornerCrosshairs top={false} bottom />

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-dot-grid mask-[radial-gradient(ellipse_at_center,black_35%,transparent_80%)] opacity-75"
                />

                <div className="relative px-6 py-20 sm:py-28 flex flex-col items-center text-center gap-5">
                    <div className="space-y-2">
                        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
                            {MY_DATA.name}
                        </h1>
                        <p className="text-xs sm:text-sm font-mono text-muted-foreground">
                            {MY_DATA.role}
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-2.5">
                        <Link
                            href={MY_DATA.locationLink}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 border border-dashed border-border bg-background/90 hover:bg-muted/50 px-3 py-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                            <span>{MY_DATA.location}</span>
                        </Link>

                        <button
                            type="button"
                            onClick={handleCopyEmail}
                            className="inline-flex items-center gap-1.5 border border-dashed border-border bg-background/90 hover:bg-muted/50 px-3 py-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {copied ? (
                                <>
                                    <Check className="h-3.5 w-3.5 text-emerald-500" />
                                    <span className="text-foreground">Copied!</span>
                                </>
                            ) : (
                                <>
                                    <Mail className="h-3.5 w-3.5 text-muted-foreground" />
                                    <span>{primaryEmail}</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </Container>
        </section>
    );
}
