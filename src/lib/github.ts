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

export interface MonthData {
    monthIndex: number;
    monthName: string;
    weeks: (ContributionDay | null)[][];
}

export function buildContributionMonths(
    contributions: ContributionDay[],
    year: number
): MonthData[] {
    const contribMap = new Map<string, ContributionDay>();
    for (const c of contributions) {
        contribMap.set(c.date, c);
    }

    const MONTH_NAMES = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    const months: MonthData[] = [];

    for (let m = 0; m < 12; m++) {
        const firstDay = new Date(Date.UTC(year, m, 1));
        const lastDay = new Date(Date.UTC(year, m + 1, 0));
        const weeks: (ContributionDay | null)[][] = [];
        let currentWeek: (ContributionDay | null)[] = [];

        const startDayOfWeek = firstDay.getUTCDay();
        for (let i = 0; i < startDayOfWeek; i++) {
            currentWeek.push(null);
        }

        for (let d = 1; d <= lastDay.getUTCDate(); d++) {
            const dateStr = `${year}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
            const dayData = contribMap.get(dateStr) || {
                date: dateStr,
                count: 0,
                level: 0,
            };
            currentWeek.push(dayData);
            if (currentWeek.length === 7) {
                weeks.push(currentWeek);
                currentWeek = [];
            }
        }

        if (currentWeek.length > 0) {
            while (currentWeek.length < 7) {
                currentWeek.push(null);
            }
            weeks.push(currentWeek);
        }

        months.push({
            monthIndex: m,
            monthName: MONTH_NAMES[m],
            weeks,
        });
    }

    return months;
}

export function buildContributionWeeks(contributions: ContributionDay[], year: number) {
    const contribMap = new Map<string, ContributionDay>();
    for (const c of contributions) {
        contribMap.set(c.date, c);
    }

    const startDate = new Date(Date.UTC(year, 0, 1));
    const endDate = new Date(Date.UTC(year, 11, 31));
    const startDayOfWeek = startDate.getUTCDay();

    // Calendar starts on the Sunday of or preceding Jan 1
    const calendarStart = new Date(startDate);
    calendarStart.setUTCDate(calendarStart.getUTCDate() - startDayOfWeek);

    const weeks: { days: (ContributionDay | null)[]; monthLabel?: string }[] = [];
    let currentWeekDays: (ContributionDay | null)[] = [];
    const curr = new Date(calendarStart);

    while (curr <= endDate || currentWeekDays.length > 0) {
        const dateStr = curr.toISOString().split("T")[0];
        const isInsideYear = curr.getUTCFullYear() === year;

        if (isInsideYear) {
            const dayData = contribMap.get(dateStr) || {
                date: dateStr,
                count: 0,
                level: 0,
            };
            currentWeekDays.push(dayData);
        } else {
            currentWeekDays.push(null);
        }

        if (currentWeekDays.length === 7) {
            weeks.push({ days: currentWeekDays });
            currentWeekDays = [];
        }

        curr.setUTCDate(curr.getUTCDate() + 1);
        if (curr > endDate && currentWeekDays.length === 0) {
            break;
        }
    }

    const MONTH_NAMES = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    const monthFirstCol: { [month: number]: number } = {};
    weeks.forEach((week, colIdx) => {
        for (const day of week.days) {
            if (day) {
                const m = parseInt(day.date.split("-")[1], 10) - 1;
                if (monthFirstCol[m] === undefined) {
                    monthFirstCol[m] = colIdx;
                }
            }
        }
    });

    for (let m = 0; m < 12; m++) {
        const col = monthFirstCol[m];
        if (col !== undefined && weeks[col]) {
            weeks[col].monthLabel = MONTH_NAMES[m];
        }
    }

    return weeks;
}

export function formatContributionDate(dateStr: string): string {
    const date = new Date(`${dateStr}T00:00:00Z`);
    return date.toLocaleDateString("en-US", {
        weekday: "long",
        month: "short",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC",
    });
}

export async function getGitHubContributions(
    username: string,
    year: number
): Promise<ContributionResponse> {
    try {
        const res = await fetch(
            `https://github-contributions-api.jogruber.de/v4/${username}?y=${year}`,
            {
                next: { revalidate: 3600 },
            }
        );

        if (!res.ok) {
            throw new Error(`Failed to fetch: ${res.statusText}`);
        }

        const data = await res.json();
        const totalForYear = data?.total?.[year.toString()] ?? 0;
        const contributions: ContributionDay[] = data?.contributions ?? [];

        return {
            year,
            total: totalForYear,
            contributions,
        };
    } catch (error) {
        console.error("Error fetching contributions:", error);

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

        return {
            year,
            total: 0,
            contributions: fallbackDays,
        };
    }
}
