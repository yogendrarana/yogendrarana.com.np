import React from "react";

import { MY_DATA } from "@/data/my-data";
import EmailButton from "@/components/email-button";
import SectionContainer from "../section-container";
import AnimatedLink from "@/components/animated-link";

const Contact = () => {
    return (
        <SectionContainer title="Contact Me!">
            <div className="flex flex-col md:flex-row gap-8 justify-between">
                <div className="space-y-2">
                    <p>Email Me:</p>
                    <EmailButton email={MY_DATA.contact.emails[1]} />
                </div>

                <div className="space-y-2">
                    <p>Find me on:</p>
                    <div className="font-bold flex flex-col md:flex-row gap-2 md:gap-10 flex-wrap">
                        {MY_DATA.contact.social.map((social, index) => {
                            return (
                                <div key={index} className="flex gap-2 items-center">
                                    <social.logo className="h-4 w-4" />
                                    <AnimatedLink href={social.url} isExternal>
                                        {social.name}
                                    </AnimatedLink>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
};

export default Contact;
