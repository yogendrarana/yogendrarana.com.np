/** biome-ignore-all lint/suspicious/noArrayIndexKey: <let use index as key> */
"use client";

import { useMemo, useState, useTransition } from "react";
import Link from "next/link";
import { ArrowUpRight, Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { MY_DATA } from "@/config/data";
import { GitHub } from "@/components/icon/github";
import { SectionHeader } from "@/components/layout/section-header";
import { MaxWidthContainer } from "@/components/max-width-container";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectPopup,
    SelectItem,
} from "@/components/ui/select";
import {
    buildContributionMonths,
    formatContributionDate,
    type MonthData,
    type ContributionResponse,
} from "@/lib/github";

interface GithubContributionProps {
    initialData?: ContributionResponse;
}

const AVAILABLE_YEARS = [2026, 2025, 2024, 2023, 2022, 2021, 2020];

function getLevelClass(level: number) {
    switch (level) {
        case 1:
            return "bg-[#9be9a8] dark:bg-[#0e4429] border-[#7ed88d]/40 dark:border-[#1a633d]/60";
        case 2:
            return "bg-[#40c463] dark:bg-[#006d32] border-[#31b454]/40 dark:border-[#058a43]/60";
        case 3:
            return "bg-[#30a14e] dark:bg-[#26a641] border-[#25823f]/40 dark:border-[#31c450]/60";
        case 4:
            return "bg-[#216e39] dark:bg-[#39d353] border-[#18532b]/40 dark:border-[#4be868]/60";
        default:
            return "bg-neutral-200/80 dark:bg-neutral-800/80 border-neutral-300/40 dark:border-neutral-700/40";
    }
}

function MonthBlock({ month }: { month: MonthData }) {
    return (
        <div className="flex flex-col items-center shrink-0">
            {/* Centered month name */}
            <div className="text-xs font-medium text-muted-foreground h-4 mb-1.5 text-center w-full select-none">
                {month.monthName}
            </div>

            {/* Columns of weeks */}
            <div className="flex gap-0.75">
                {month.weeks.map((week, weekIdx) => (
                    <div key={weekIdx} className="flex flex-col gap-0.75 shrink-0">
                        {week.map((day, dayIdx) => {
                            if (!day) {
                                // Empty day cell without icon
                                return (
                                    <div
                                        key={`empty-${dayIdx}`}
                                        className="size-2 sm:size-2.5 rounded-sm border border-border/30 dark:border-border/20 select-none opacity-40"
                                    />
                                );
                            }

                            const tooltipText =
                                day.count === 0
                                    ? `No contributions on ${formatContributionDate(day.date)}`
                                    : `${day.count} contribution${day.count === 1 ? "" : "s"} on ${formatContributionDate(day.date)}`;

                            return (
                                <Tooltip key={day.date}>
                                    <TooltipTrigger
                                        aria-label={tooltipText}
                                        className={cn(
                                            "size-2 sm:size-2.5 rounded-sm border transition-transform hover:scale-125 hover:z-10 cursor-pointer p-0",
                                            getLevelClass(day.level)
                                        )}
                                    />
                                    <TooltipContent
                                        side="top"
                                        className="bg-foreground text-background"
                                    >
                                        <span>{tooltipText}</span>
                                    </TooltipContent>
                                </Tooltip>
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
}

export function GithubContribution({ initialData }: GithubContributionProps) {
    const currentYear = new Date().getFullYear();
    const [selectedYear, setSelectedYear] = useState<number>(initialData?.year ?? currentYear);
    const [data, setData] = useState<ContributionResponse>(
        initialData ?? {
            year: currentYear,
            total: 0,
            contributions: [],
        }
    );
    const [isPending, startTransition] = useTransition();

    const handleYearChange = (year: number) => {
        if (year === selectedYear) return;
        setSelectedYear(year);

        startTransition(async () => {
            try {
                const res = await fetch(`/api/contributions?year=${year}`);
                if (res.ok) {
                    const json = await res.json();
                    setData(json);
                }
            } catch (err) {
                console.error("Failed to load year data", err);
            }
        });
    };

    const months = useMemo(() => {
        return buildContributionMonths(data.contributions, selectedYear);
    }, [data.contributions, selectedYear]);

    // Derived statistics
    const stats = useMemo(() => {
        let activeDays = 0;
        let maxContributions = 0;

        for (const c of data.contributions) {
            if (c.count > 0) {
                activeDays++;
                if (c.count > maxContributions) {
                    maxContributions = c.count;
                }
            }
        }

        return {
            activeDays,
            maxContributions,
        };
    }, [data.contributions]);

    return (
        <section id="activity" className="border-b border-dashed">
            <SectionHeader title="Activity" />

            <MaxWidthContainer className="border-l border-r border-dashed">
                <div>
                    {/* Header Bar: sublabel with contribution count + compact Select */}
                    <div className="w-full px-6 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                            <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                                {data.total.toLocaleString()} contributions from Jan 1 to Dec 31,{" "}
                                {selectedYear}
                            </p>
                            {isPending && (
                                <Loader2 className="h-3.5 w-3.5 animate-spin text-muted-foreground" />
                            )}
                        </div>

                        <div className="flex items-center gap-2 flex-wrap">
                            <Select
                                value={selectedYear.toString()}
                                onValueChange={(val) => {
                                    if (val) handleYearChange(parseInt(val as string, 10));
                                }}
                            >
                                <SelectTrigger
                                    size="sm"
                                    className="w-auto min-w-0 px-2.5 py-1 text-xs font-medium rounded-none border border-dashed bg-muted/40 hover:bg-muted/70 gap-1.5 shadow-none before:hidden cursor-pointer"
                                >
                                    <SelectValue className="text-muted-foreground" />
                                </SelectTrigger>
                                <SelectPopup
                                    align="end"
                                    sideOffset={4}
                                    className="min-w-20 p-1 rounded-none border border-dashed bg-popover text-muted-foreground"
                                >
                                    {AVAILABLE_YEARS.map((year) => (
                                        <SelectItem
                                            key={year}
                                            value={year.toString()}
                                            className="text-xs py-1 px-2 rounded-none cursor-pointer"
                                        >
                                            {year}
                                        </SelectItem>
                                    ))}
                                </SelectPopup>
                            </Select>

                            {/* GitHub Link */}
                            <Link
                                href={MY_DATA.socials.github.link}
                                target="_blank"
                                rel="noreferrer"
                                className="hidden sm:inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground border border-dashed px-2.5 py-1.5 transition-colors"
                            >
                                <GitHub className="h-3.5 w-3.5" />
                                <span>@yogendrarana</span>
                                <ArrowUpRight className="h-3 w-3 opacity-60" />
                            </Link>
                        </div>
                    </div>

                    {/* Calendar Grid Container */}
                    <div className="w-full p-6 border-y border-dashed border-border/80">
                        <TooltipProvider delay={50}>
                            <ScrollArea className="w-full">
                                <div className="flex select-none justify-between gap-1 sm:gap-2">
                                    {months.map((month) => (
                                        <MonthBlock key={month.monthIndex} month={month} />
                                    ))}
                                </div>
                            </ScrollArea>
                        </TooltipProvider>
                    </div>

                    <div className="w-full px-6 py-3">
                        {/* Bottom Meta Bar: Stats and Legend */}
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
                            {/* Other info */}
                            <div className="flex items-center gap-3 text-muted-foreground flex-wrap">
                                <span>
                                    Active days:{" "}
                                    <strong className="text-foreground font-semibold">
                                        {stats.activeDays}
                                    </strong>
                                </span>
                                <span>•</span>
                                <span>
                                    Max in a day:{" "}
                                    <strong className="text-foreground font-semibold">
                                        {stats.maxContributions}
                                    </strong>
                                </span>
                            </div>

                            {/* Legend */}
                            <div className="flex items-center gap-1.5 text-xs">
                                <span>Less</span>
                                <div className="size-2 sm:size-2.5 rounded-sm border bg-neutral-200/80 dark:bg-neutral-800/80 border-neutral-300/40 dark:border-neutral-700/40" />
                                <div className="size-2 sm:size-2.5 rounded-sm border bg-[#9be9a8] dark:bg-[#0e4429] border-[#7ed88d]/40 dark:border-[#1a633d]/60" />
                                <div className="size-2 sm:size-2.5 rounded-sm border bg-[#40c463] dark:bg-[#006d32] border-[#31b454]/40 dark:border-[#058a43]/60" />
                                <div className="size-2 sm:size-2.5 rounded-sm border bg-[#30a14e] dark:bg-[#26a641] border-[#25823f]/40 dark:border-[#31c450]/60" />
                                <div className="size-2 sm:size-2.5 rounded-sm border bg-[#216e39] dark:bg-[#39d353] border-[#18532b]/40 dark:border-[#4be868]/60" />
                                <span>More</span>
                            </div>
                        </div>
                    </div>
                </div>
            </MaxWidthContainer>
        </section>
    );
}
