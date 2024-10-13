import { ArtsyLogo, SwiftLogo, LightBulb } from "@/assets";

export const MY_DATA = {
    name: "Yogendra Rana",
    initials: "YR",
    location: "Pokhara, Nepal",
    locationLink: "https://www.google.com/maps/place/pokhara",
    about: "Full Stack Developer",
    generalSummary: "Web developer from Nepal",
    professionalSummary:
        "I am a full stack web developer from Pokhara, Nepal with +2 years experience in JavaScript/TS and its frameworks like React, Next, Node, Express, and Nest. Also familiar with Go and its backend framework, Gin.",
    avatarUrl: " https://github.com/yogendrarana.png",
    personalWebsiteUrl: "https://www.yogendrarana.com.np/",
    cvUrl: "https://cv.yogendrarana.com.np",
    contact: {
        emails: ["yogendrarana4321@gmail.com", "yogendrarana.mail@gmail.com"],
        tel: "+977 9825159891",
        social: [
            {
                name: "GitHub",
                url: "https://github.com/yogendrarana",
                logo: { type: "img", src: "fa-brands fa-github" }
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/yogendra-rana/",
                logo: { type: "icon", src: "fa-brands fa-linkedin-in" }
            },
            {
                name: "Twitter",
                url: "https://twitter.com/yoogendra_rana",
                logo: { type: "icon", src: "fa-brands fa-twitter" }
            }
        ]
    },
    education: [
        {
            school: "Prithvi Narayan Campus, Pokhara, Gandaki, Nepal",
            degree: "Bachelor's Degree in Computer Science and Information Technology",
            start: "2018",
            end: "2023"
        },
        {
            school: "SOS Hermann Gmeiner Gandaki, Nepal",
            degree: "10+2 Science",
            start: "2018",
            end: "2016"
        }
    ],
    experience: [
        {
            company: "Rangin Technology",
            link: "https://www.rangin.com.np/",
            badges: ["Hybrid"],
            role: "Full Stack Developer",
            logo: "",
            start: "May, 2022",
            end: "present",
            description:
                "Worked as a fullstack developer to create user interfaces in React.js and Next.js and REST APIs in Node.js, Express.js, and Next.js. Technologies: JavaScript, TypeScript, React, Next.js, Node.js, Express.js, Nest.js, MongoDB, PostgreSQL, Docker, and Nginx."
        },
        {
            company: "Nipuna Prabidhik Sewa",
            link: "https://www.nipunasewa.com/",
            badges: ["On Site"],
            role: "React JS Developer",
            logo: "",
            start: "Jan, 2023",
            end: "July, 2023",
            description:
                "As a frontend developer, I built an admin panel for emart using React.js, Tailwind CSS, and Firebase. Technologies: React.js, Tailwind CSS, Firebase"
        }
    ],
    skills: [
        "JavaScript",
        "TypeScript",
        "Go",
        "React",
        "Next",
        "Node",
        "Express",
        "Nest",
        "REST API",
        "GraphQL",
        "Socket.io",
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Docker",
        "Nginx",
        "Ubuntu"
    ],
    projects: [
        {
            title: "Feedmo",
            techStack: ["Next.js", "radix UI", "Shad CN", "Auth.js", "MongoDB", "Resend", "Stripe"],
            description:
                "An open source project helping web developers collect feedbacks from their users.",
            image: LightBulb,
            liveLink: "https://feedmo.vercel.app/",
            githubLink: "https://github.com/yogendrarana/feedmo"
        },
        {
            title: "Swift Chat",
            techStack: ["Next.js", "Zustand", "Pusher", "Auth.js", "Framer Motion"],
            description: "A minimal web chat application.",
            image: SwiftLogo,
            liveLink: "https://swift-web-chat.vercel.app/",
            githubLink: "https://github.com/yogendrarana/swift"
        },
        {
            title: "Artsy Web Gallery",
            techStack: ["React.js", "Redux Toolkit", "Express.js", "MongoDB", "Stripe", "Khalti"],
            description: "A web platform for art enthusiasts to buy and sell art.",
            image: ArtsyLogo,
            liveLink: "https://artsy-art-gallery.vercel.app/",
            githubLink: "https://github.com/yogendrarana/artsy"
        },
        {
            title: "Ecommerce Website",
            techStack: ["React.js", "Zustand", "Framer Motion"],
            description: "A minimal frontend only ecommerce website.",
            image: "",
            liveLink: "https://react-web-ecommerce.vercel.app/",
            githubLink: "https://github.com/yogendrarana/react-ecommerce"
        }
    ],
    faq: [
        {
            question: "My educational qualification.",
            answer: "B.Sc. in Computer Science and Information Technology, Tribhuvan University, Nepal."
        },
        {
            question: "My tech stack.",
            answer: "React.js, Next.js, Node.js, and Express.js. I work with both MongoDB and PostgreSQL for databases."
        },
        {
            question: "My professional experience.",
            answer: "I began my professional career in early 2023."
        }
    ]
};
