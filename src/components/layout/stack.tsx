import { MY_DATA } from "@/config/data";
import MaxWidthContainer from "../max-width-container";
import SectionHeader from "./section-header";

function Stack() {
    return (
        <section className="border-b">
            <SectionHeader title="About" />

            <MaxWidthContainer className="border-l border-r px-0">
                {/* Grid */}
                <div className="grid grid-cols-3 md:grid-cols-5">
                    {MY_DATA.skills.map((tech, index) => (
                        <div
                            key={index}
                            className="aspect-square flex items-center justify-center border-r border-b border-border bg-background hover:bg-muted transition-colors cursor-pointer last:border-r-0 md:last:border-r-0"
                        >
                            <span className="font-medium text-sm text-muted-foreground text-center">
                                {tech}
                            </span>
                        </div>
                    ))}
                </div>
            </MaxWidthContainer>
        </section>
    );
}

export default Stack;
