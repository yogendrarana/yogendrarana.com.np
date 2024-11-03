import Hero from "@/components/landing/hero";
import { Shell } from "@/components/shell";
import SiteHeader from "@/components/site-header";
import About from "@/components/landing/about";
import Contact from "@/components/landing/contact";
import Projects from "@/components/landing/projects";

const HomePage = () => {
    return (
        <Shell>
            <SiteHeader />
            <Hero />
            <About />
            <Projects />
            <Contact />
        </Shell>
    );
};

export default HomePage;
