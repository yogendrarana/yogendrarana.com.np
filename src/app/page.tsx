import Hero from "@/components/layout/hero";
import About from "@/components/layout/about";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Socials from "@/components/layout/socials";
import Projects from "@/components/layout/projects";
import Experience from "@/components/layout/experience";
import Education from "@/components/layout/education";
import { MobileDock } from "@/components/mobile-dock";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
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
