import { MY_DATA } from "@/config/data";
import { SectionHeader } from "@/components/layout/section-header";
import { Container } from "@/components/container";
import { CornerCrosshairs } from "@/components/grid-system";

export function Education() {
    return (
        <section id="education" className="border-b border-dashed">
            <SectionHeader title="Education" />
            <Container className="px-0 sm:border-l sm:border-r border-dashed relative">
                <CornerCrosshairs top={false} bottom />
                <div className="divide-y divide-border divide-dashed">
                    {MY_DATA.education.map((edu) => (
                        <div
                            key={edu.degree}
                            className="px-6 py-5 hover:bg-muted/20 transition-colors"
                        >
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                                <h3 className="font-semibold text-sm sm:text-base text-foreground">
                                    {edu.degree}
                                </h3>
                                <span className="font-mono text-xs text-muted-foreground border border-dashed border-border bg-muted/20 px-2.5 py-1 w-fit shrink-0">
                                    {edu.period}
                                </span>
                            </div>
                            <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed text-left">
                                {edu.school}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
