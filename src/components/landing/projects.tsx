"use client";

import React from "react";
import { MY_DATA } from "@/data/my-data";
import ProjectCard from "@/components/project-card";
import SectionContainer from "../section-container";

const Projects = () => {
    const projects = MY_DATA.projects;

    return (
        <SectionContainer title="Personal Projects">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projects.map((proj, index) => (
                    <div key={index}>
                        <ProjectCard project={proj} />
                    </div>
                ))}
            </div>
        </SectionContainer>
    );
};

export default Projects;
