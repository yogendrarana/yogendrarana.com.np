import Hero from "./_components/hero";
import { Shell } from "@/components/shell";
import Projects from "./_components/projects";
import Navbar from "@/components/site-header";
import About from "@/app/(client)/_components/about";
import Contact from "@/app/(client)/_components/contact";

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
