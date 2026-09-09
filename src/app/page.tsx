import { Hero } from "@/components/layout/hero";
import { About } from "@/components/layout/about";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Socials } from "@/components/layout/socials";
import { Projects } from "@/components/layout/projects";
import { Education } from "@/components/layout/education";
import { MobileDock } from "@/components/mobile-dock";
import { getGitHubContributions } from "@/lib/github";
import { Experience } from "@/components/layout/experience";
import { GithubContribution } from "@/components/layout/github-contribution";

export default async function Home() {
    const currentYear = new Date().getFullYear();
    const initialData = await getGitHubContributions("yogendrarana", currentYear);

    return (
        <div className="min-h-screen">
            <Header />
            <Hero />
            <GithubContribution initialData={initialData} />
            <About />
            <Projects />
            <Experience />
            <Education />
            <Socials />
            <Footer />
            <MobileDock />
        </div>
    );
}
