"use client";

import React from "react";
import Link from "next/link";
import { MY_DATA } from "@/data/my-data";
import { ArrowRight } from "lucide-react";
import ProjectCard from "@/components/project-card";
import SectionContainer from "../section-container";

const titleContent = (
    <Link
        href="/projects"
        className="cursor-pointer flex items-center gap-2 text-md font-medium text-gray-500 hover:text-black group"
    >
        More
        <ArrowRight
            size={16}
            strokeWidth={2}
            className="opacity-50 group-hover:opacity-100 group-hover:translate-x-[2px] duration-200"
        />
    </Link>
);

const Projects = () => {
    const projects = MY_DATA.projects;

    return (
        <SectionContainer title="Personal Projects" titleContent={titleContent}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projects.slice(0, 4).map((proj, index) => (
                    <div key={index}>
                        <ProjectCard project={proj} />
                    </div>
                ))}
            </div>
        </SectionContainer>
    );
};

export default Projects;
