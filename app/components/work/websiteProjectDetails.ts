import {
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiTypescript,
    SiJavascript,
    SiNodedotjs,
    SiMongodb,
    SiHtml5,
    SiCss3,
    SiFramer,
    SiVite,
} from "react-icons/si";
import { IconType } from "react-icons";

export type WebsiteProjectProps = {
    id: number;
    name: string;
    description: string;
    technologies: IconType[];
    techNames: string[];
    techLinks: string[];
    github: string;
    demo: string;
    image: string;
    available: boolean;
};

export const websiteProjects = [
    {
        id: 0,
        name: "Fog Printing Website",
        description:
            "A modern printing service website showcasing professional printing solutions with an intuitive user interface and responsive design.",
        technologies: [
            SiReact,
            SiTypescript,
            SiTailwindcss,
            SiFramer,
            SiVite,
        ],
        techNames: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "Vite",
        ],
        techLinks: [
            "https://reactjs.org/",
            "https://www.typescriptlang.org/",
            "https://tailwindcss.com/",
            "https://www.framer.com/motion/",
            "https://vitejs.dev/",
        ],
        github: "https://github.com/ijomonchacko/fog",
        demo: "https://fogprinting.vercel.app",
        image: "/projects/fog.png",
        available: true,
    },
    {
        id: 1,
        name: "Aryan Portfolio",
        description:
            "A sleek and modern portfolio website showcasing creative work and professional achievements with smooth animations and responsive design.",
        technologies: [
            SiReact,
            SiNextdotjs,
            SiTailwindcss,
            SiFramer,
        ],
        techNames: [
            "React",
            "Next.js",
            "Tailwind CSS",
            "Framer Motion",
        ],
        techLinks: [
            "https://reactjs.org/",
            "https://nextjs.org/",
            "https://tailwindcss.com/",
            "https://www.framer.com/motion/",
        ],
        github: "https://github.com/ijomonchacko/Portfolio-2",
        demo: "https://aryanjacob.in",
        image: "/projects/aryanjacob.png",
        available: true,
    },
];