import React, { cloneElement } from "react";
import Animated from "./Animated"; // Replace with the correct path to the "Animated" component

type AnimatedToolsProps = {
    delay?: number;
    stepSize?: number;
    children: React.ReactNode;
    iconSize?: number;
    className?: string;
};

const AnimatedTools: React.FC<AnimatedToolsProps> = ({
    delay,
    stepSize,
    children,
    iconSize,
    className,
}) => {
    const icons = React.Children.toArray(children);
    return (
        <div
            className={`flex flex-row flex-wrap justify-start gap-4 md:gap-6 lg:gap-8 ${
                className || ""
            }`}
        >
            {icons.map((child, index) => (
                <Animated
                    key={index}
                    delay={delay ? delay + index * (stepSize || 0) : undefined}
                >
                    {cloneElement(child as React.ReactElement<any>, { size: iconSize || (child as React.ReactElement<any>).props.size || 40 })}
                </Animated>
            ))}
        </div>
    );
};

export default AnimatedTools;
