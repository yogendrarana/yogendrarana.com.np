import Link from "next/link";
import { MY_DATA } from "@/config/data";

const Logo = () => {
    return (
        <Link href="/" className="group inline-flex gap-2 cursor-pointer ">
            <span className="text-xl group-hover:rotate-360 transition-all ease-custom-transition duration-500">
                ©
            </span>

            <span
                style={{ fontSize: "" }}
                className="
                        w-[120px] group-hover:w-[200px]
                        flex items-center gap-[5px] relative overflow-hidden
                        transition-all ease-custom-transition duration-500
                    "
            >
                <p
                    className="
                            group-hover:translate-x-[-105%] whitespace-nowrap
                            transition-all ease-custom-transition duration-500
                        "
                >
                    {MY_DATA.name}
                </p>

                <span
                    className="
                            absolute left-full
                            group-hover:left-0 whitespace-nowrap
                            transition-all ease-custom-transition duration-500
                        "
                >
                    <p>Web Developer</p>
                </span>
            </span>
        </Link>
    );
};

export default Logo;
