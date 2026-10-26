"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Check, Mail } from "lucide-react";

import { MY_DATA } from "@/config/data";
import { Container } from "@/components/container";

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
            <Container className="border-l border-r border-dashed">
                <div className="px-6 py-20 sm:py-24 flex flex-col items-center text-center gap-5">
                    <div className="space-y-2">
                        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
                            {MY_DATA.name}
                        </h1>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-2.5">
                        <Link
                            href={MY_DATA.locationLink}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 border border-dashed px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <MapPin className="h-3.5 w-3.5" />
                            <span>{MY_DATA.location}</span>
                        </Link>

                        <button
                            type="button"
                            onClick={handleCopyEmail}
                            className="inline-flex items-center gap-1.5 border border-dashed px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {copied ? (
                                <>
                                    <Check className="h-3.5 w-3.5" />
                                    <span>Copied!</span>
                                </>
                            ) : (
                                <>
                                    <Mail className="h-3.5 w-3.5" />
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
