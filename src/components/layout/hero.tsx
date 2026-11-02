import Link from "next/link";
import { MapPin } from "lucide-react";

import { MY_DATA } from "@/config/data";
import { Container } from "@/components/container";

export function Hero() {
    return (
        <section id="home" className="border-b border-dashed">
            <Container className="border-l border-r border-dashed">
                <div className="px-6 py-16 sm:py-20 flex flex-col items-center text-center gap-6">
                    <div className="flex flex-col items-center gap-3">
                        <Link
                            href={MY_DATA.locationLink}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 border border-dashed px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <MapPin className="h-3.5 w-3.5" />
                            <span>{MY_DATA.location}</span>
                        </Link>

                        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
                            {MY_DATA.name}
                        </h1>
                    </div>

                    <div className="text-justify max-w-xl space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                        <p>
                            Full-stack developer from Nepal who secretly (or not so secretly)
                            prefers the backend. I spend most of my time with TypeScript, React,
                            Next.js, and Node, wrangling Postgres and Mongo - and writing Go
                            whenever I can get away with it.
                        </p>
                        <br />
                        <p>
                            Building stuff, breaking stuff, and hacking together random side
                            projects since 2022. When I&apos;m not staring at a terminal, I&apos;m
                            usually playing sports or listening to music.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export { Hero as About };
