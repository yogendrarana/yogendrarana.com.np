import React from "react";
import { MY_DATA } from "@/data/my-data";
import { ArrowRight } from "lucide-react";

const Experience = () => {
    return (
        <section className="py-6 sm:py-10 md:py-20 rounded-lg flex flex-col gap-8 bg-white">
            <div className="flex flex-col space-y-4">
                <h2 className="text-xl font-medium">Experience</h2>
            </div>

            <ol className="relative space-y-6 border-neutral-300 dark:border-neutral-800">
                {MY_DATA.experience.map((exp, index) => (
                    <li key={index}>
                        <time className="mb-2 font-mono text-xs font-normal leading-none text-neutral-600 dark:text-neutral-400">
                            {exp.start} - {exp.end}
                        </time>
                        <div className="mt-2 flex flex-col space-y-0.5">
                            <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                                {exp.role}
                            </h3>
                            <a
                                href={exp.link}
                                target="_blank"
                                rel="noopener"
                                className="group flex w-max items-center text-pretty text-sm text-neutral-600 transition-colors duration-150 hover:text-black dark:border-neutral-800 dark:text-neutral-400 dark:hover:text-white"
                            >
                                <span>{exp.company}</span>
                                <ArrowRight
                                    className="ml-1 duration-150 group-hover:translate-x-[1.5px]"
                                    size={12}
                                    strokeWidth={1.5}
                                />
                            </a>
                        </div>
                        <p className="mt-3 text-pretty text-sm dark:text-neutral-400">
                            {exp.description}
                        </p>
                    </li>
                ))}
            </ol>
        </section>
    );
};

export default Experience;
