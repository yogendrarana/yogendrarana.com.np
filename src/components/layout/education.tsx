import React from "react";
import { MY_DATA } from "@/config/data";
import SectionHeader from "@/components/layout/section-header";
import MaxWidthContainer from "@/components/max-width-container";

function Education() {
    return (
        <section id="education" className="border-b border-dashed">
            <SectionHeader title="Education" />
            <MaxWidthContainer className="px-0 border-l border-r border-dashed">
                <div className="divide-y divide-border divide-dashed">
                    {MY_DATA.education.map((edu, idx) => (
                        <div key={idx} className="px-6 py-6 first:pt-6 last:pb-6">
                            <div className="flex justify-between items-center flex-wrap gap-4">
                                <h3 className="font-medium text-base">{edu.degree}</h3>
                                <span className="text-sm text-muted-foreground">{edu.period}</span>
                            </div>
                            <p className="text-muted-foreground mt-1 text-sm leading-relaxed text-justify">
                                {edu.school}
                            </p>
                        </div>
                    ))}
                </div>
            </MaxWidthContainer>
        </section>
    );
}

export default Education;
