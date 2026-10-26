"use client";

import React from "react";
import Link from "next/link";
import { ChevronsUpDown, ChevronsDownUp, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { MY_DATA } from "@/config/data";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/layout/section-header";
import { Container } from "@/components/container";
import { CornerCrosshairs } from "@/components/grid-system";

export function Experience() {
    const [expandedExperience, setExpandedExperience] = React.useState<number | null>(0);

    return (
        <section id="experience" className="border-b border-border border-dashed">
            <SectionHeader title="Experience" />

            <Container className="px-0 sm:border-l sm:border-r border-border border-dashed relative">
                <CornerCrosshairs top={false} bottom />
                <div className="divide-y divide-border divide-dashed">
                    {MY_DATA.experience.map((experience, index) => {
                        return (
                            <div key={experience.company}>
                                {/** biome-ignore lint/a11y/noStaticElementInteractions: <clickable> */}
                                {/** biome-ignore lint/a11y/useKeyWithClickEvents: <clickable> */}
                                <div
                                    className="px-6 py-5 cursor-pointer hover:bg-muted/25 transition-colors"
                                    onClick={() =>
                                        setExpandedExperience(
                                            expandedExperience === index ? null : index
                                        )
                                    }
                                >
                                    <div className="flex items-start sm:items-center justify-between gap-4">
                                        <div className="flex-1 space-y-1.5">
                                            <div className="flex flex-wrap items-center gap-2.5">
                                                <h3 className="font-semibold text-base sm:text-lg text-foreground">
                                                    {experience.company}
                                                </h3>
                                                {experience.website && (
                                                    <Link
                                                        href={experience.website}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="inline-flex items-center gap-0.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
                                                    >
                                                        <ArrowUpRight className="h-3.5 w-3.5" />
                                                    </Link>
                                                )}
                                            </div>
                                            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-muted-foreground">
                                                <span className="text-foreground/90 font-medium">
                                                    {experience.role}
                                                </span>
                                                <span className="text-border">•</span>
                                                <span>{experience.type}</span>
                                                <span className="text-border">•</span>
                                                <span>{experience.locationType}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3 shrink-0">
                                            <span className="hidden sm:inline-block font-mono text-xs text-muted-foreground border border-dashed border-border bg-muted/20 px-2.5 py-1">
                                                {experience.period}
                                            </span>

                                            <Button
                                                size="icon"
                                                variant="ghost"
                                                className="size-8 rounded-none border border-dashed border-transparent hover:border-border"
                                            >
                                                {expandedExperience === index ? (
                                                    <ChevronsDownUp className="h-4 w-4 text-muted-foreground" />
                                                ) : (
                                                    <ChevronsUpDown className="h-4 w-4 text-muted-foreground" />
                                                )}
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="mt-2 sm:hidden">
                                        <span className="font-mono text-xs text-muted-foreground">
                                            {experience.period}
                                        </span>
                                    </div>
                                </div>
                                <AnimatePresence>
                                    {expandedExperience === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 pt-4 border-t border-border border-dashed bg-muted/10">
                                                <ul className="space-y-2.5 mb-5">
                                                    {experience.highlights.map(
                                                        (detail, detailIndex) => (
                                                            <li
                                                                // biome-ignore lint/suspicious/noArrayIndexKey: <index>
                                                                key={detailIndex}
                                                                className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                                                            >
                                                                <span className="font-mono text-xs text-muted-foreground/70 mt-0.5 select-none">
                                                                    —
                                                                </span>
                                                                <span className="text-left text-pretty">
                                                                    {detail}
                                                                </span>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>

                                                <div className="flex flex-wrap gap-1.5">
                                                    {experience.tech.map((tech, techIndex) => (
                                                        <span
                                                            // biome-ignore lint/suspicious/noArrayIndexKey: <index>
                                                            key={techIndex}
                                                            className="border border-dashed border-border bg-background px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
