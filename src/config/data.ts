import Bluesky from "@/components/icon/bluesky";
import GitHub from "@/components/icon/github";
import LinkedIn from "@/components/icon/linkedin";
import Peerlist from "@/components/icon/peerlist";
import X from "@/components/icon/x";

export const MY_DATA = {
  name: "Yogendra Rana",
  initials: "YR",
  location: "Pokhara, Nepal",
  locationLink: "https://www.google.com/maps/place/pokhara",
  role: "Full Stack Developer",
  avatarUrl: " https://github.com/yogendrarana.png",
  websiteUrl: "https://www.yogendrarana.com.np/",
  contact: {
    emails: ["yogendrarana4321@gmail.com", "yogendrarana.mail@gmail.com"],
  },
  socials: {
    github: {
      name: "GitHub",
      link: "https://github.com/yogendrarana",
      component: GitHub,
    },
    linkedin: {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/yogendra-rana",
      component: LinkedIn,
    },
    x: {
      name: "Twitter",
      link: "https://x.com/yooogendra_rana",
      component: X,
    },
    bluesky: {
      name: "Bluesky",
      link: "https://bsky.app/profile/yogendrarana.bsky.social",
      component: Bluesky,
    },
    peerlist: {
      name: "Peerlist",
      link: "https://peerlist.io/yogendrarana",
      component: Peerlist,
    },
  },
  skills: [
    "JavaScript",
    "TypeScript",
    "Go",
    "React",
    "Next",
    "Node",
    "Express",
    "MongoDB",
    "PostgreSQL",
  ],
  education: [
    {
      school: "Prithvi Narayan Campus, Pokhara, Gandaki, Nepal",
      degree:
        "Bachelor's Degree in Computer Science and Information Technology",
      period: "2018 - 2023",
      end: "2023",
    },
    {
      school: "SOS Hermann Gmeiner Gandaki, Nepal",
      degree: "10+2 Science (Higher Secondary Education Board)",
      period: "2016 - 2018",
    },
  ],
  projects: [
    {
      title: "Node Blueprint",
      techStack: ["React", "Node.js"],
      description:
        "Node Blueprint helps you scaffold Node.js applications with your preferred framework, database, and ORM in just one command.",
      liveLink: "https://node-blueprint.vercel.app/",
      githubLink: "https://github.com/yogendrarana/node-blueprint",
    },
    {
      title: "Craft UI",
      techStack: ["Next.js", "Tailwind CSS"],
      description:
        "A collection of beautiful, interactive UI components built with React.js, Tailwind CSS, and Framer Motion.",
      liveLink: "https://craftdotui.vercel.app/",
      githubLink: "https://github.com/yogendrarana/craftdotui",
    },
    {
      title: "How to Chess?",
      techStack: ["Tanstack Start", "Tailwind CSS"],
      description:
        "A simple chess-exploration app that helps users learn and practice chess at their own pace. It includes an interactive chessboard for self-play and a collection of popular chess openings.",
      liveLink: "https://howtochess.vercel.app/",
      githubLink: "https://github.com/yogendrarana/howtochess",
    },
    {
      title: "Make Your Meme",
      techStack: ["Next.js", "Tailwind CSS", "Radix UI"],
      description: "Create memes in seconds",
      liveLink: "https://makeyourmeme.vercel.app/",
      githubLink: "https://github.com/yogendrarana/makeyourmeme",
    },
  ],
  experience: [
    {
      company: "Okhati Technology",
      address: "Kathmandu",
      website: "https://okhati.com.np/",
      type: "Full time",
      role: "Full Stack Developer",
      period: "April, 2024 - Present",
      locationType: "Remote",
      tech: [
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "Postgres",
        "Objection.js",
        "Knex.js",
      ],
      highlights: [
        "Developed and maintained okhati.app, an in-house clinic management platform built with React, Node.js, Express, and PostgreSQL.",
        "Integrated online payment solutions with both static and dynamic QR codes, supporting major Nepali providers such as eSewa, Khalti, and Connect IPS.",
        "Designed and implemented a mini payroll system featuring attendance tracking, CTC setup, payroll processing, and automated tax calculations aligned with the latest Nepali tax regulations.",
        "Built SSF claims processing and multi-credit note functionality, enabling accurate reimbursements and flexible billing adjustments.",
      ],
    },
    {
      company: "Rangin Technology",
      address: "Pokhara",
      website: "https://rangin.com.np/",
      role: "Full Stack Developer",
      type: "Full time",
      period: "December 2022 - April, 2024",
      locationType: "Hybrid",
      tech: ["React.js", "Node.js", "Nest.js", "Mongo DB"],
      highlights: [
        "Started as an intern and transitioned into a junior developer role after demonstrating strong performance.",
        "Built full-stack web applications for local SMEs, helping them establish and enhance their online presence.",
        "Worked primarily with React and NestJS to deliver tailored solutions for client needs.",
      ],
    },
  ],
};
