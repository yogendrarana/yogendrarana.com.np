import { MY_DATA } from "@/data/my-data";

interface INavMenu {
    label: string;
    href: string;
}

export const nav_menu = {
    mainMenu: [
        {
            label: "Blog",
            href: "/blog"
        },
        {
            label: "Resume",
            href: MY_DATA.cvUrl
        }
    ]
};
