import WebsiteProjectGrid from "../components/work/WebsiteProjectGrid";
import React from "react";

const WebsiteProjects = () => {
    return (
        <section
            className="relative z-10 flex w-full flex-col items-center justify-center bg-[#0E1016] bg-cover bg-center py-16 md:py-20 lg:py-20"
            id="website-projects"
        >
            <h2 className="mb-10 hidden text-[36px] text-[#e4ded7] md:mb-16 md:text-[42px] lg:mb-16 lg:text-[72px]">
        Website Projects
            </h2>

            <WebsiteProjectGrid />
        </section>
    );
};

export default WebsiteProjects;