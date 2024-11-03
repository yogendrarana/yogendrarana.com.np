// components
import { nav_menu } from "@/config/nav";
import Logo from "./logo";
import Socials from "./socials";
import Magnetic from "./magnetic";
import MobileNav from "./mobile-nav";
import AnimatedLink from "./animated-link";

const SiteHeader = () => {
    const mainMenu = nav_menu.mainMenu;

    return (
        <div className="h-10 md:h-20 w-full flex items-center justify-between relative">
            <Logo />

            <div className="hidden md:flex items-center">
                <div className="flex items-center">
                    <div className="flex gap-6 items-center">
                        {mainMenu.map((nav, index) => (
                            <Magnetic key={index}>
                                <div className="group">
                                    <AnimatedLink animate href={nav.href}>
                                        {nav.label}
                                    </AnimatedLink>
                                </div>
                            </Magnetic>
                        ))}
                    </div>
                </div>

                <div className="mr-[2rem] flex">
                    <div className="mx-8 text-gray-200">|</div>
                    <Socials />
                </div>
            </div>

            <MobileNav />
        </div>
    );
};

export default SiteHeader;
