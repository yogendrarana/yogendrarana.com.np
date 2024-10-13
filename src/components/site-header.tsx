// components
import { nav_menu } from "@/config/nav";
import Logo from "./logo";
import Socials from "./socials";
import Magnetic from "./magnetic";
import { ExternalLink } from "./external-link";

const SiteHeader = () => {
    const mainMenu = nav_menu.mainMenu;

    return (
        <div className="h-[var(--nav-height)] w-full flex items-center justify-between relative">
            <Logo />

            <div className="flex items-center">
                <div className="flex items-center">
                    <div className="flex gap-6 items-center">
                        {mainMenu.map((nav, index) => (
                            <Magnetic key={index}>
                                <div className="group">
                                    <ExternalLink animate href={nav.href}>
                                        {" "}
                                        {nav.label}{" "}
                                    </ExternalLink>
                                </div>
                            </Magnetic>
                        ))}
                    </div>
                </div>
                <div className="mr-[2rem] hidden sm:flex">
                    <div className="mx-8 text-gray-200">|</div>
                    <Socials />
                </div>
            </div>
        </div>
    );
};

export default SiteHeader;
