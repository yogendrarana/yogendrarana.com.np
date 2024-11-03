import { MY_DATA } from "@/data/my-data";

interface INavMenu {
    label: string;
    href: string;
}

export const nav_menu = {
    mainMenu: [
        {
            label: "Blog",
            href: "/blog",
            download: false,
            isExternal: false
        },
        {
            label: "Resume",
            href: "./cv.pdf",
            download: true,
            isExternal: true
        }
    ]
};

