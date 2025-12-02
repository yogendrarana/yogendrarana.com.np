import SectionHeader from "@/components/layout/section-header";
import MaxWidthContainer from "@/components/max-width-container";

function About() {
  return (
    <section id="about" className="border-b border-dashed">
      <SectionHeader title="About" />

      <MaxWidthContainer className="border-l border-r px-0 border-dashed">
        {/* Section Content */}
        <div className="p-6 sm:p-16">
          <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
            <p className="text-justify">
              Hello, World! I’m Yogendra Rana — a full-stack web developer from
              Nepal with a backend-focused mindset.
            </p>

            <p className="text-justify">
              My stack includes React, Next.js, and TypeScript on the frontend,
              with Node.js, Express.js, PostgreSQL, and MongoDB on the backend.
              I also use Go whenever I get the chance.
            </p>

            <p className="text-justify">
              With nearly three years of coding experience, I continue to enjoy
              exploring new technologies and working on side projects to grow my
              skills. Beyond coding, I’m passionate about sports and music,
              which keep me inspired and balanced.
            </p>
          </div>
        </div>
      </MaxWidthContainer>
    </section>
  );
}

export default About;
