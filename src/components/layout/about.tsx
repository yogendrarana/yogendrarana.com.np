import MaxWidthContainer from "../max-width-container";
import SectionHeader from "./section-header";

function About() {
    return (
        <section id="about" className="border-b">
            <SectionHeader title="About" />

            <MaxWidthContainer className="border-l border-r px-0">
                {/* Section Content */}
                <div className="p-16">
                    <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
                        <p className="text-justify">
                            Hello, World! This is Yogendra Rana – a Full Stack Web Developer from
                            Nepal.  With 3+ years of experience, I specialize in building high-quality web
                            and applications using React.js, Next.js, TypeScript, and modern
                            technologies. Beyond work, I love exploring new technologies and turning
                            ideas into reality through personal projects.
                        </p>
                        <p className="text-justify">
                            I work with both MongoDB and PostgreSQL for databases. I also explore Go
                            when I have time to expand my backend development skills.
                        </p>
                    </div>
                </div>
            </MaxWidthContainer>
        </section>
    );
}

export default About;
