import React from "react";

interface SectionContainer {
    title: string;
    children: React.ReactNode;
    titleContent?: React.ReactNode;
}

export default function SectionContainer({ children, title, titleContent }: SectionContainer) {
    return (
        <section className="md:py-10 rounded-lg flex flex-col gap-4">
            <div className="border-b border-dashed pb-2 flex justify-between items-center">
                <p className="font-bold uppercase text-2xl">{title}</p>
                {titleContent}
            </div>
            {children}
        </section>
    );
}
