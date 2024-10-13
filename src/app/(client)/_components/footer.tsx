import Watch from "@/components/watch";
import Socials from "@/components/socials";
import TopButton from "@/components/top-button";

const Footer = () => {
    return (
        <footer
            className="
                min-h-[var(--nav-height)]  
                flex justify-between items-center gap-[3rem]
                text-[1.25rem] 
                border-t relative
            "
        >
            {/* row 1 */}
            {/* watch */}
            <div className="w-1/3">
                <Watch />
            </div>

            {/* socials */}
            <div className="w-1/3">
                <Socials />
            </div>

            {/* email */}
            <div className="w-1/3 flex items-center gap-4 justify-end">
                <p className="text-sm">Top</p>
                <TopButton />
            </div>
        </footer>
    );
};

export default Footer;
