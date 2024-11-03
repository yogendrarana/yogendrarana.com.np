import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { ArrowDown } from "lucide-react";

interface Props {
    href: string;
    children: ReactNode;
    download?: boolean;
    isExternal?: boolean;
    className?: string;
    animate?: boolean;
}

export default function AnimatedLink(props: Props) {
    return (
        <Link
            href={props.href}
            rel="noreferrer"
            download={props.download}
            target={props.isExternal || props.download ? "_blank" : "_self"}
            className={cn(
                props.className,
                props.animate &&
                    `
                    relative
                    flex items-center gap-2
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
            {props.download && <ArrowDown size={16} />}
        </Link>
    );
}
