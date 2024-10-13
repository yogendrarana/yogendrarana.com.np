import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// interface
interface ILink {
    label: string;
    url: string;
    className?: string;
}

const AnimatedLink = ({ label, url, className }: ILink) => {
    return (
        <Link
            href={url}
            target="_blank"
            className={cn(
                "font-boldinline-block relative before:content-[''] before:py-1 before:absolute before:bottom-[-0.25rem] before:left-0 before:w-0 before:hover:w-full before:border-b-2 before:border-black before:transition-all before:ease-in-out before:duration-500 ",
                className
            )}
        >
            {label}
        </Link>
    );
};

export default AnimatedLink;
