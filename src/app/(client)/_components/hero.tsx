"use client";

import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { MY_DATA } from "@/data/my-data";

export default function Hero() {
    const name = MY_DATA.name.split("");

    return (
        <div className="w-full my-32 flex flex-col justify-between">
            <div className="flex flex-col items-center">
                <div className="w-auto px-3 py-1 border rounded-full flex items-center gap-2">
                    <MapPin size={14} />
                    <div className="text-sm">{MY_DATA.generalSummary}</div>
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
        </div>
    );
}
