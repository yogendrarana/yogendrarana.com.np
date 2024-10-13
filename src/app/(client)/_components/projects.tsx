"use client";

import React from "react";
import { MY_DATA } from "@/data/my-data";
import ProjectCard from "@/components/project-card";

const Projects = () => {
    const projects = MY_DATA.projects;

    return (
        <div className="py-6 sm:py-10 md:py-20 rounded-lg flex flex-col gap-8">
            <div className="border-b">
                <div className="font-bold uppercase">
                    <p className="text-2xl">Personal Projects</p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projects.map((proj, index) => (
                    <div key={index}>
                        <ProjectCard project={proj} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
