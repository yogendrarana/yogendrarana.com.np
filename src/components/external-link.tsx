import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface Props {
    href: string;
    children: ReactNode;
    className?: string;
    animate?: boolean;
}

const ExternalLink = (props: Props) => {
    return (
        <Link
            href={props.href}
            rel="noreferrer"
            target="_blank"
            className={cn(
                props.className,
                props.animate &&
                    `
                    relative
                    cursor-pointer 
                    hover:font-bold
                    
                    before:content-['']
                    before:h-[0.5rem] before:w-[0.5rem]
                    before:bg-black before:rounded-full
                    before:absolute before:bottom-[-1rem] before:left-1/2 before:-translate-x-1/2
                    before:scale-0 group-hover:before:scale-100
                    before:transition-all before:ease before:duration-300`
            )}
        >
            {props.children}
        </Link>
    );
};

export { ExternalLink };
