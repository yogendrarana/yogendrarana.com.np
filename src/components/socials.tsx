import { MY_DATA } from "@/data/my-data";

// import components
import Magnetic from "./magnetic";
import { ExternalLink } from "./external-link";

const Socials = () => {
    const socials = MY_DATA.contact.social;

    return (
        <div className="flex justify-center items-center gap-6">
            {socials.map((option, index) => (
                <Magnetic key={index}>
                    <div className="group">
                        <ExternalLink animate href={option.url} className="grid place-items-center">
                            <i className={`${option.logo.src}`}> </i>
                        </ExternalLink>
                    </div>
                </Magnetic>
            ))}
        </div>
    );
};

export default Socials;
