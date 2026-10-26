import { Container } from "@/components/container";
import { CornerCrosshairs } from "@/components/grid-system";

interface SectionHeaderProps {
    title: string;
}

export function SectionHeader({ title }: SectionHeaderProps) {
    return (
        <div className="border-b border-dashed">
            <Container className="sm:border-l sm:border-r border-dashed relative">
                <CornerCrosshairs top={false} bottom />
                <div className="h-14 sm:h-16 px-6 flex items-center bg-hatch">
                    <div className="flex items-center bg-background/90 backdrop-blur-xs border border-dashed border-border px-3 py-1">
                        <h2 className="text-sm sm:text-base font-semibold tracking-tight text-foreground">
                            {title}
                        </h2>
                    </div>
                </div>
            </Container>
        </div>
    );
}
