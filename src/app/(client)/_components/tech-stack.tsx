import React from "react";

import { motion } from "framer-motion";
import JsLogo from "@/components/logo/js-logo";
import TsLogo from "@/components/logo/ts-logo";
import { Dock, DockIcon } from "@/components/dock";
import NextLogo from "@/components/logo/next-logo";
import NodeLogo from "@/components/logo/node-logo";
import ReactLogo from "@/components/logo/react-logo";
import ExpressLogo from "@/components/logo/express-logo";

const techStack = [
    { name: "JavaScript", logo: JsLogo },
    { name: "TypeScript", logo: TsLogo },
    { name: "React", logo: ReactLogo },
    { name: "Next.js", logo: NextLogo },
    { name: "Node.js", logo: NodeLogo },
    { name: "Express.js", logo: ExpressLogo }
];

const TechStack = () => {
    return (
        <Dock>
            {techStack.map((item, index) => (
                <DockIcon key={index}>
                    <motion.div
                        whileHover={{
                            scale: 1.25,
                            marginLeft: "1rem",
                            marginRight: "1rem"
                        }}
                        key={index}
                        className="flex justify-center cursor-pointer bg-white"
                    >
                        <item.logo className="h-8 w-8" />
                    </motion.div>
                </DockIcon>
            ))}
        </Dock>
    );
};

export default TechStack;
