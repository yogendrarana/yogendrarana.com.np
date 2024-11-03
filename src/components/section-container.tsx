import React from "react";

interface SectionContainer {
    children: React.ReactNode;
    title: string;
}

export default function SectionContainer({ children, title }: SectionContainer) {
    return (
        <section className="md:py-10 rounded-lg flex flex-col gap-4">
            <div className="border-b border-dashed pb-2">
                <p className="font-bold uppercase text-2xl">{title}</p>
            </div>
            {children}
        </section>
    );
}
