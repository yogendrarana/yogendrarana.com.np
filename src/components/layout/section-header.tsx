import { Container } from "@/components/container";
import { CornerCrosshairs } from "@/components/grid-system";

export function SectionHeader({ title }: { title: string }) {
    return (
        <div className="border-b border-dashed">
            <Container className="border-l border-r border-dashed relative">
                <CornerCrosshairs />
                <div
                    className="h-16 px-4 flex items-center"
                    style={{
                        background:
                            "repeating-linear-gradient(-45deg, var(--color-border), var(--color-border) 1px, transparent 1px, transparent 6px)"
                    }}
                >
                    <div className="bg-background px-2.5 py-1 border border-border">
                        <h2 className="text-md font-semibold text-foreground">{title}</h2>
                    </div>
                </div>
            </Container>
        </div>
    );
}
