import React from "react";
import { MY_DATA } from "@/data/my-data";
import ProjectCard from "@/components/project-card";
import Link from "next/link";
import { ArrowRight, Cable } from "lucide-react";

function Page() {
    const projects = MY_DATA.projects;
    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <div className="text-sm text-gray-600 flex gap-2 items-center">
                    <Cable size={14} strokeWidth={2} />
                    {projects.length} Projects
                </div>
                <Link
                    href={MY_DATA.contact.github}
                    target="_blank"
                    rel="noopener"
                    className="group flex items-center gap-2 text-sm text-gray-600 hover:text-black"
                >
                    View on GitHub
                    <ArrowRight
                        size={16}
                        strokeWidth={2}
                        className="opacity-50 group-hover:opacity-100 group-hover:translate-x-[2px] -rotate-45 duration-200"
                    />
                </Link>
            </div>

            <div className="flex flex-col gap-4">
                {projects.map((p, idx) => (
                    <ProjectCard key={idx} project={p} />
                ))}
            </div>
        </div>
    );
}

export default Page;
