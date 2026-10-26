import { MY_DATA } from "@/config/data";
import { SectionHeader } from "@/components/layout/section-header";
import { Container } from "@/components/container";
import { CornerCrosshairs } from "@/components/grid-system";

export function About() {
    return (
        <section id="about" className="border-b border-dashed">
            <SectionHeader title="About" />

            <Container className="sm:border-l sm:border-r border-dashed relative">
                <CornerCrosshairs top={false} bottom />

                <div className="p-6 space-y-4 text-sm sm:text-[15px] leading-relaxed text-muted-foreground">
                    <p className="text-left text-pretty">
                        Hello, World! I’m{" "}
                        <span className="text-foreground font-medium">Yogendra Rana</span> — a
                        full-stack web developer from Nepal with a{" "}
                        <span className="text-foreground font-medium">backend-focused mindset</span>
                        .
                    </p>

                    <p className="text-left text-pretty">
                        My stack includes{" "}
                        <span className="text-foreground font-medium">
                            React, Next.js, and TypeScript
                        </span>{" "}
                        on the frontend, with{" "}
                        <span className="text-foreground font-medium">
                            Node.js, Express.js, PostgreSQL, and MongoDB
                        </span>{" "}
                        on the backend. I also build with{" "}
                        <span className="text-foreground font-medium">Go</span> whenever I get the
                        chance.
                    </p>

                    <p className="text-left text-pretty">
                        With over three years of coding experience, I enjoy exploring systems
                        architecture and building developer tools and side projects. Beyond coding,
                        I’m passionate about sports and music, which keep me inspired and balanced.
                    </p>
                </div>

                <div className="border-t border-dashed px-6 py-4 bg-muted/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground shrink-0">
                        Core Stack
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                        {MY_DATA.skills.map((skill) => (
                            <span
                                key={skill}
                                className="border border-dashed border-border bg-background px-2.5 py-1 font-mono text-xs text-foreground"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
