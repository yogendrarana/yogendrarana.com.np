"use client";

import Link from "next/link";
import { useState } from "react";
import { X, Menu } from "lucide-react";
import { nav_menu } from "@/config/nav";
import { motion, AnimatePresence } from "framer-motion";
import { MY_DATA } from "@/data/my-data";
import { Icons } from "./icons";

export default function MobileNav() {
    const mainMenu = nav_menu.mainMenu;
    const [isOpen, setIsOpen] = useState(false);
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

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuVariants = {
        closed: {
            opacity: 0,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        },
        open: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        closed: { opacity: 0, y: 50 },
        open: { opacity: 1, y: 0 }
    };

    return (
        <>
            <button
                className="md:hidden"
                onClick={toggleMenu}
                aria-label={isOpen ? "Close menu" : "Open menu"}
            >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
                        onClick={toggleMenu}
                    >
                        <motion.nav
                            className="fixed inset-0 flex flex-col gap-4 items-center justify-center"
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={menuVariants}
                        >
                            {mainMenu.map((item) => (
                                <motion.div key={item.label} variants={itemVariants}>
                                    <Link
                                        href={item.href}
                                        download={item.download}
                                        target={item.isExternal ? "_blank" : "_self"}
                                        className="text-4xl font-bold mb-6 hover:text-primary transition-colors"
                                        onClick={toggleMenu}
                                    >
                                        {item.label}
                                    </Link>
                                </motion.div>
                            ))}

                            <div className="flex gap-4 mt-4">
                                {socials.map((option, index) => (
                                    <Link
                                        key={index}
                                        href={option.url}
                                        target="_blank"
                                        className="grid place-items-center"
                                    >
                                        <option.logo className="h-6 w-6" />
                                    </Link>
                                ))}
                            </div>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
