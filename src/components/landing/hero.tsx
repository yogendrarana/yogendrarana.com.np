"use client";

import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { MY_DATA } from "@/data/my-data";
import { GridPattern } from "../grid-pattern";

export default function Hero() {
    const name = MY_DATA.name.split("");

    return (
        <section className="w-full my-32 flex flex-col justify-between">
            <div className="flex flex-col items-center">
                <div className="px-3 py-1 text-sm inline-flex items-center rounded-full border">
                    <MapPin className="mr-2 h-3 w-3" />
                    <div className="text-sm">{MY_DATA.shortSummary}</div>
                </div>

                <div className="text-center font-bold">
                    {name.map((letter, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="cursor-pointer lowercase text-[50px] md:text-[80px]"
                        >
                            {letter}
                        </motion.span>
                    ))}
                </div>
            </div>

            <GridPattern
				className="fill-neutral-100 stroke-neutral-700/5 absolute inset-x-0 -top-14 -z-10 h-full w-full [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)] dark:fill-secondary/30 dark:stroke-secondary/30"
				yOffset={-96}
				interactive
			/>
        </section>
    );
}
