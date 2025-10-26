"use client";

import React from "react";
import { ChevronUp, ChevronDown, ChevronsUpDown, ChevronsDownUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { MY_DATA } from "@/config/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/layout/section-header";
import MaxWidthContainer from "@/components/max-width-container";

function Experience() {
    const [expandedExperience, setExpandedExperience] = React.useState<number | null>(0);

    return (
        <section id="experience" className="border-b border-border border-dashed">
            <SectionHeader title="Experience" />

            <MaxWidthContainer className="px-0 border-l border-r border-border border-dashed">
                <div className="divide-y divide-border divide-dashed">
                    {MY_DATA.experience.map((experience, index) => (
                        <div key={index}>
                            <div
                                className="px-6 py-6 cursor-pointer hover:bg-accent/50 transition-colors"
                                onClick={() =>
                                    setExpandedExperience(
                                        expandedExperience === index ? null : index
                                    )
                                }
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex-1">
                                        <div className="mb-2">
                                            <h3 className="font-semibold text-lg text-foreground">
                                                {experience.company}
                                            </h3>
                                        </div>
                                        <p className="text-muted-foreground text-sm">
                                            {experience.role} • {experience.type} •{" "}
                                            {experience.locationType} • {experience.period}
                                        </p>
                                    </div>
                                    <Button
                                        size="icon"
                                        variant="ghost"
                                        className="ml-4 rounded-none"
                                    >
                                        {expandedExperience === index ? (
                                            <ChevronsDownUp className="h-4 w-4" />
                                        ) : (
                                            <ChevronsUpDown className="h-4 w-4" />
                                        )}
                                    </Button>
                                </div>
                            </div>
                            <AnimatePresence>
                                {expandedExperience === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 border-t border-border border-dashed">
                                            <ul className="space-y-2 mb-4 mt-4">
                                                {experience.highlights.map(
                                                    (detail, detailIndex) => (
                                                        <li
                                                            key={detailIndex}
                                                            className="flex items-start gap-2 text-sm text-muted-foreground"
                                                        >
                                                            <span>•</span>
                                                            <span>{detail}</span>
                                                        </li>
                                                    )
                                                )}
                                            </ul>

                                            <div className="flex flex-wrap gap-2">
                                                {experience.tech.map((tech, techIndex) => (
                                                    <Badge
                                                        key={techIndex}
                                                        variant="outline"
                                                        className="border-border text-foreground rounded-none"
                                                    >
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </MaxWidthContainer>
        </section>
    );
}

export default Experience;
