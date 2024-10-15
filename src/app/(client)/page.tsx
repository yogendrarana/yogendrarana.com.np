import Hero from "@/components/layout/hero";
import { Shell } from "@/components/shell";
import Navbar from "@/components/site-header";
import About from "@/components/layout/about";
import Contact from "@/components/layout/contact";
import Projects from "@/components/layout/projects";

const HomePage = () => {
    return (
        <Shell>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Contact />
        </Shell>
    );
};

export default HomePage;
