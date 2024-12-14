import React from "react";
import { Shell } from "@/components/shell";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

function ProjectsLayout({ children }: { children: React.ReactNode }) {
    return (
        <Shell>
            <SiteHeader />
            {children}
            <SiteFooter />
        </Shell>
    );
}

export default ProjectsLayout;
