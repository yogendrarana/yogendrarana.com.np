import Hero from "@/components/landing/hero";
import { Shell } from "@/components/shell";
import SiteHeader from "@/components/site-header";
import About from "@/components/landing/about";
import Projects from "@/components/landing/projects";
import Footer from "@/components/landing/footer";

const HomePage = () => {
    return (
        <Shell>
            <SiteHeader />
            <Hero />
            <About />
            <Projects />
            <Footer />
        </Shell>
    );
};

export default HomePage;
