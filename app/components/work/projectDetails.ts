import {
    SiAdobeaftereffects,
    SiAdobephotoshop,
    SiCinema4D,
    SiFigma,
    SiAdobepremierepro,
} from "react-icons/si";
import { IconType } from "react-icons";
export type ProjectProps = {
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
export const projects = [
    {
        id: 0,
        name: "Yip 5.0 Promo",
        description:
            "YIP 5.0 Promo,crafted with the help of software After Effects 2022.The promo captures the essence of YIP, highlighting its key features and the incredible opportunities. ",
        technologies: [
            SiAdobeaftereffects,
            SiAdobephotoshop,
            SiCinema4D,
            SiFigma,
            SiAdobepremierepro,
        ],
        techNames: [
            "After Effects",
            "Photoshop",
            "Cinema4D",
            "Figma",
            "Premire Pro",
        ],
        techLinks: [
            "https://www.adobe.com/products/aftereffects.html",
            "https://www.adobe.com/products/photoshop.html",
            "https://www.maxon.net/en/cinema-4d",
            "https://www.figma.com/",
            "https://www.adobe.com/ro/products/premiere.html",
        ],
        github:
            "https://drive.google.com/file/d/1LfRsjF_zO9-WlJz40lj9AKAFxojff9JC/view?usp=drive_link",
        demo: "https://drive.google.com/file/d/1LfRsjF_zO9-WlJz40lj9AKAFxojff9JC/view?usp=drive_link",
        image: "/projects/port.png",
        available: true,
    },
    {
        id: 1,
        name: "GT650 Showreel",
        description:
            "Motorbike Continental GT 650 Short Film, showcasing the sleek design and powerful performance of the GT 650 model.",
        technologies: [SiCinema4D, SiAdobeaftereffects, SiAdobepremierepro],
        techNames: ["Cinema4D", "After Effects", "Premiere Pro"],
        techLinks: [
            "https://www.maxon.net/en/cinema-4d",
            "https://www.adobe.com/products/aftereffects.html",
            "https://www.adobe.com/ro/products/premiere.html",
        ],
        github:
            "https://drive.google.com/file/d/14-xePwVofD562LC-iYyjbfiHvuk73DbC/view?usp=drive_link",
        demo: "https://drive.google.com/file/d/14-xePwVofD562LC-iYyjbfiHvuk73DbC/view?usp=drive_link",
        image: "/projects/gt6500.png",
        available: true,
    },
    {
        id: 2,
        name: "GTA HACKATHON PROMO",
        description:
            "promotion video done for GTA HACKATHON powered By GTECH MULEARN AND KMEA ",
        technologies: [SiAdobeaftereffects],
        techNames: ["AfterEffects"],
        techLinks: ["https://www.adobe.com/products/aftereffects.html"],
        github:
            "https://drive.google.com/file/d/19ZKxDChvJH46QW48wQOJ8wAiMl8Lcpla/view?usp=sharing",
        demo: "https://drive.google.com/file/d/19ZKxDChvJH46QW48wQOJ8wAiMl8Lcpla/view?usp=sharing",
        image: "/projects/pro4.png",
        available: true,
    },
    {
        id: 3,
        name: "Flood Relief Project",
        description:
            "A visual storytelling project produced for the Social Work Department of St. Joseph Province, CMI.",
        technologies: [SiAdobeaftereffects, SiAdobephotoshop],
        techNames: ["After Effects", "Photoshop"],
        techLinks: [
            "https://www.adobe.com/products/aftereffects.html",
            "https://www.adobe.com/products/photoshop.html",
        ],
        github:
            "https://drive.google.com/file/d/14frAhQSyMHhLsxopBiWe-y8JOYGKzEpu/view?usp=drive_link",
        demo: "https://drive.google.com/file/d/14frAhQSyMHhLsxopBiWe-y8JOYGKzEpu/view?usp=drive_link",
        image: "/projects/flr.png",
        available: true,
    },
    {
        id: 4,
        name: "Pakalveedu",
        description:
            "A heartfelt video created for Sneha Bhavanam’s Pakalveedu, a senior citizens’ day care center in Adoor. This project captures the warmth, joy, and companionship.",
        technologies: [SiAdobepremierepro, SiAdobeaftereffects],
        techNames: ["Premiere Pro", "After Effects"],
        techLinks: [
            "https://www.adobe.com/ro/products/premiere.html",
            "https://www.adobe.com/products/aftereffects.html",
        ],
        github:
            "https://drive.google.com/file/d/1-oHxFdXt1uH08JkA8FyEvJqaDL6dFycE/view?usp=sharing",
        demo: "https://drive.google.com/file/d/1-oHxFdXt1uH08JkA8FyEvJqaDL6dFycE/view?usp=sharing",
        image: "/projects/pkl.png",
        available: true,
    },
    {
        id: 5,
        name: "650 Shots",
        description:
            "A sleek, cinematic short featuring the GT 650 drone in action. This project highlights the drone’s dynamic flight capabilities and visual appeal",
        technologies: [SiAdobepremierepro, SiAdobeaftereffects],
        techNames: ["Premiere Pro", "After Effects"],
        techLinks: [
            "https://www.adobe.com/ro/products/premiere.html",
            "https://www.adobe.com/products/aftereffects.html",
        ],
        github:
            "https://drive.google.com/file/d/1RBoV4nCiiQoRRrd3qsjF6IINAlCEVKVi/view?usp=sharing",
        demo: "https://drive.google.com/file/d/1RBoV4nCiiQoRRrd3qsjF6IINAlCEVKVi/view?usp=sharing",
        image: "/projects/time.png",
        available: true,
    },
    {
        id: 6,
        name: "Coming Soon",
        description:
            " I'm currently working on a couple of projects. I'll update this section as soon as I'm done.",
        technologies: [SiCinema4D, SiFigma, SiAdobepremierepro],
        techNames: ["Cinema4D", "Figma", "Premiere Pro"],
        techLinks: [
            "https://www.maxon.net/en/cinema-4d",
            "https://www.figma.com/",
            "https://www.adobe.com/ro/products/premiere.html",
        ],
        github: "",
        demo: "",
        image: "/projects/construction.webp",
        available: false,
    },
];
