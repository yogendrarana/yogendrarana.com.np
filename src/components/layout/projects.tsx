import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { MY_DATA } from "@/config/data";
import GitHub from "@/components/icon/github";
import { Badge } from "@/components/ui/badge";
import SectionHeader from "@/components/layout/section-header";
import MaxWidthContainer from "@/components/max-width-container";

function Projects() {
    return (
        <section id="projects" className="border-b">
            <SectionHeader title="Projects" />
            <MaxWidthContainer className="px-0 border-l border-r">
                <div className="divide-y divide-border">
                    {MY_DATA.projects.map((project, idx) => (
                        <div key={idx} className="px-6 py-6 first:pt-6 last:pb-6">
                            <div className="flex justify-between items-center flex-wrap gap-4">
                                <Link
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener"
                                    className={cn(
                                        "group flex items-center gap-1 font-medium decoration-neutral-500",
                                        "hover:decoration-dotted hover:underline-offset-[5px] hover:underline"
                                    )}
                                >
                                    <span>{project.title}</span>
                                    <ArrowRight
                                        size={16}
                                        strokeWidth={2}
                                        className="opacity-50 group-hover:opacity-100 group-hover:translate-x-[3px] -rotate-45 duration-200"
                                    />
                                </Link>
                                <div className="flex gap-6 flex-shrink-0">
                                    {project.githubLink && (
                                        <Link
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm font-medium transition-colors"
                                        >
                                            GitHub
                                            <GitHub className="h-4 w-4 text-muted-foreground" />
                                        </Link>
                                    )}
                                </div>
                            </div>
                            <p className="text-muted-foreground mt-1 text-sm leading-relaxed text-justify">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {project.techStack.map((tech, techIdx) => (
                                    <Badge
                                        key={techIdx}
                                        variant="outline"
                                        className="rounded-none border-border text-muted-foreground text-xs py-0.5 px-2"
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </MaxWidthContainer>
        </section>
    );
}

export default Projects;
