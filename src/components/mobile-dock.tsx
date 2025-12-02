"use client";

import React from "react";
import Link from "next/link";
import { HomeIcon, PencilIcon } from "lucide-react";

import X from "./icon/x";
import { cn } from "@/lib/utils";
import GitHub from "./icon/github";
import LinkedIn from "./icon/linkedin";
import { MY_DATA } from "@/config/data";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";
import { Dock, DockIcon } from "@/components/magicui/dock";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export type IconProps = React.HTMLAttributes<SVGElement>;

const DATA = {
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: PencilIcon, label: "Blog" },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: MY_DATA.socials.github.link,
        icon: GitHub,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: MY_DATA.socials.linkedin.link,
        icon: LinkedIn,
      },
      X: {
        name: "X",
        url: MY_DATA.socials.x.link,
        icon: X,
      },
    },
  },
};

export function MobileDock() {
  return (
    <div className="sticky bottom-8 flex-col items-center justify-center md:hidden">
      <TooltipProvider>
        <Dock direction="middle" className="bg-accent border">
          {DATA.navbar.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full",
                    )}
                  >
                    <item.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}

          <Separator orientation="vertical" className="h-full" />

          {Object.entries(DATA.contact.social).map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    aria-label={social.name}
                    target="__blank"
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full ",
                    )}
                  >
                    <social.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        </Dock>
      </TooltipProvider>
    </div>
  );
}
