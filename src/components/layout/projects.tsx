import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { MY_DATA } from "@/config/data";
import { GitHub } from "@/components/icon/github";
import { SectionHeader } from "@/components/layout/section-header";
import { Container } from "@/components/container";
import { CornerCrosshairs } from "@/components/grid-system";

export function Projects() {
    return (
        <section id="projects" className="border-b border-dashed">
            <SectionHeader title="Projects" />
            <Container className="px-0 sm:border-l sm:border-r border-dashed relative">
                <CornerCrosshairs top={false} bottom />
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 border-border">
                    {MY_DATA.projects.map((project, idx) => {
                        const isLeftCol = idx % 2 === 0;
                        const isTopRow = idx < 2;

                        return (
                            <div
                                key={project.title}
                                className={cn(
                                    "group relative p-6 flex flex-col justify-between gap-5 transition-colors hover:bg-muted/25 border-dashed",
                                    isLeftCol && "md:border-r",
                                    isTopRow && "md:border-b"
                                )}
                            >
                                <div className="space-y-3">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex items-center gap-2.5">
                                            <span className="font-mono text-xs text-muted-foreground/70 select-none">
                                                0{idx + 1}
                                            </span>
                                            <Link
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noopener"
                                                className="inline-flex items-center gap-1 font-semibold text-base text-foreground group-hover:underline underline-offset-5 decoration-dashed"
                                            >
                                                <span>{project.title}</span>
                                                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                                            </Link>
                                        </div>

                                        {project.githubLink && (
                                            <Link
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noreferrer"
                                                aria-label={`${project.title} GitHub repository`}
                                                className="inline-flex items-center gap-1.5 border border-dashed border-border bg-background px-2.5 py-1 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors shrink-0"
                                            >
                                                <GitHub className="h-3.5 w-3.5" />
                                                <span>Source</span>
                                            </Link>
                                        )}
                                    </div>

                                    <p className="text-muted-foreground text-sm leading-relaxed text-left text-pretty">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-1.5 pt-1">
                                    {project.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="border border-dashed border-border bg-muted/30 text-muted-foreground font-mono text-[11px] py-0.5 px-2"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
