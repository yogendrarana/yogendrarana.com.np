import Link from "next/link";

import { cn } from "@/lib/utils";
import { MY_DATA } from "@/config/data";
import { Container } from "@/components/container";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <Container className="sm:border-l sm:border-r border-dashed overflow-hidden">
                <div className="px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-dashed text-xs font-mono text-muted-foreground">
                    <p>Keep coding, keep learning, keep building.</p>

                    <p className="text-center sm:text-right">
                        © {currentYear} Built by{" "}
                        <Link
                            href={MY_DATA.socials.x.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-foreground underline underline-offset-4 decoration-dashed hover:opacity-80"
                        >
                            {MY_DATA.name}
                        </Link>{" "}
                        • Source on{" "}
                        <Link
                            href="https://github.com/yogendrarana/yogendrarana.com.np"
                            target="_blank"
                            rel="noreferrer"
                            className="text-foreground underline underline-offset-4 decoration-dashed hover:opacity-80"
                        >
                            GitHub
                        </Link>
                    </p>
                </div>

                <div className="py-6 px-4 flex justify-center items-center select-none bg-dot-grid">
                    <p
                        className={cn(
                            "text-center text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter uppercase",
                            "bg-clip-text text-transparent bg-linear-to-b from-foreground/25 to-foreground/5"
                        )}
                    >
                        {MY_DATA.name}
                    </p>
                </div>
            </Container>
        </footer>
    );
}
