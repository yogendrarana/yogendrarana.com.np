"use client";

import { motion } from "framer-motion";
import { useMenuStore } from "@/store/useMenuStore";

export default function MenuButton() {
    const { isMenuOpen, toggleMenu } = useMenuStore();

    return (
        <div
            onClick={toggleMenu}
            className="h-[45px] w-[45px] cursor-pointer overflow-hidden bg-white border-1"
        >
            <motion.div
                className={`
                    relative 
                    h-full w-full 
                    text-[1.3rem] 
                    flex items-center justify-center gap-[0.75rem]
                    transition-all ease-in-out duration-500
                    ${isMenuOpen ? "" : ""}
                `}
                transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
            >
                <button className="h-[20px] flex flex-col justify-center gap-[6px] z-10">
                    <span
                        className={`
                            w-[20px] h-[2px] bg-black rounded-full 
                            transition-all ease-in-out origin-center duration-500 
                            ${isMenuOpen ? "translate-y-[4px] rotate-45" : "rotate-0"}
                        `}
                    />

                    <span
                        className={`
                            w-[20px] h-[2px] bg-black rounded-full 
                            transition-all ease-in-out origin-center duration-500 
                            ${isMenuOpen ? "-translate-y-[4px] -rotate-45" : "rotate-0"}
                        `}
                    />
                </button>
            </motion.div>
        </div>
    );
}
