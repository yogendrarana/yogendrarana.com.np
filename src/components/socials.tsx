"use client";

import Magnetic from "./magnetic";
import { MY_DATA } from "@/data/my-data";
import AnimatedLink from "./animated-link";
import { Icons } from "./icons";

const Socials = () => {
    const socials = [
        {
            name: "GitHub",
            url: MY_DATA.contact.github,
            logo: Icons.github
        },
        {
            name: "LinkedIn",
            url: MY_DATA.contact.linkedin,
            logo: Icons.linkedin
        },
        {
            name: "Twitter",
            url: MY_DATA.contact.twitter,
            logo: Icons.twitter
        }
    ];

    return (
        <div className="flex justify-center items-center gap-6">
            {socials.map((option, index) => (
                <Magnetic key={index}>
                    <div className="group">
                        <AnimatedLink
                            isExternal
                            animate
                            href={option.url}
                            className="grid place-items-center"
                        >
                            <option.logo className="h-4 w-4" />
                        </AnimatedLink>
                    </div>
                </Magnetic>
            ))}
        </div>
    );
};

export default Socials;
