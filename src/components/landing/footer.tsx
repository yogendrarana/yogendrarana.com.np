import Link from "next/link";
import Marquee from "../marquee";
import { MY_DATA } from "@/data/my-data";
import Magnetic from "../magnetic";
import AnimatedLink from "../animated-link";

const data = ["Get in touch *", "Get in touch *", "Get in touch *"];

export default function Footer() {
    return (
        <footer className=" p-12 relative border rounded-xl overflow-hidden">
            <Marquee duration={20} repeat={2} direction="left" className="w-full font-light mb-16">
                {data.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <span className="text-4xl">{item}</span>
                    </div>
                ))}
            </Marquee>

            {/* Main footer content */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                {/* Social links */}
                <div className="flex gap-8">
                    {MY_DATA.contact.social.map((option, index) => (
                        <Magnetic key={index}>
                            <div className="group">
                                <AnimatedLink
                                    isExternal
                                    animate
                                    href={option.url}
                                    className="grid place-items-center"
                                >
                                    {option.name}
                                </AnimatedLink>
                            </div>
                        </Magnetic>
                    ))}
                </div>

                {/* CTA Button */}
                <Link
                    href="#"
                    className="group relative inline-flex items-center gap-2 rounded-full border border-black px-6 py-3 text-black transition-colors hover:bg-black hover:text-white"
                >
                    Let&apos;s talk
                    <span className="size-6 rounded-full bg-black group-hover:bg-white transition-colors" />
                </Link>
            </div>
        </footer>
    );
}
