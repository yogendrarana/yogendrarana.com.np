import React from "react";
import Link from "next/link";

import { MY_DATA } from "@/config/data";
import SectionHeader from "@/components/layout/section-header";
import MaxWidthContainer from "@/components/max-width-container";

function Socials() {
  const socialArray = Object.values(MY_DATA.socials); // convert object to array

  return (
    <section>
      <SectionHeader title="Socials" />
      <MaxWidthContainer className="border-l border-r px-0 border-dashed">
        <div className="h-36 sm:h-18 grid grid-cols-2 md:grid-cols-5 border-b border-dashed">
          {socialArray.map((social, idx) => {
            const Icon = social.component;
            const isLast = idx === socialArray.length - 1;

            return (
              <Link
                key={social.name}
                href={social.link}
                target="_blank"
                className={`${
                  !isLast ? "border-b sm:border-b-0 border-r border-dashed" : ""
                } hover:bg-muted transition-colors flex items-center justify-center gap-3`}
              >
                <Icon className="h-5 w-5 text-muted-foreground" />
                <span className="font-medium text-foreground">
                  {social.name}
                </span>
              </Link>
            );
          })}
        </div>
      </MaxWidthContainer>
    </section>
  );
}

export default Socials;
