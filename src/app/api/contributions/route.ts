import { NextResponse } from "next/server";

export interface ContributionDay {
    date: string;
    count: number;
    level: number;
}

export interface ContributionResponse {
    year: number;
    total: number;
    contributions: ContributionDay[];
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const currentYear = new Date().getFullYear();
    const yearParam = searchParams.get("year");
    const year = yearParam ? parseInt(yearParam, 10) : currentYear;

    try {
        const res = await fetch(
            `https://github-contributions-api.jogruber.de/v4/yogendrarana?y=${year}`,
            {
                next: { revalidate: 3600 },
            }
        );

        if (!res.ok) {
            throw new Error(`Failed to fetch from external API: ${res.statusText}`);
        }

        const data = await res.json();
        const totalForYear = data?.total?.[year.toString()] ?? 0;
        const contributions: ContributionDay[] = data?.contributions ?? [];

        return NextResponse.json<ContributionResponse>({
            year,
            total: totalForYear,
            contributions,
        });
    } catch (error) {
        console.error("Error fetching contributions:", error);

        // Generate fallback empty days for the entire year (Jan 1 to Dec 31)
        const fallbackDays: ContributionDay[] = [];
        const startDate = new Date(Date.UTC(year, 0, 1));
        const endDate = new Date(Date.UTC(year, 11, 31));

        for (let d = new Date(startDate); d <= endDate; d.setUTCDate(d.getUTCDate() + 1)) {
            fallbackDays.push({
                date: d.toISOString().split("T")[0],
                count: 0,
                level: 0,
            });
        }

        return NextResponse.json<ContributionResponse>({
            year,
            total: 0,
            contributions: fallbackDays,
        });
    }
}
