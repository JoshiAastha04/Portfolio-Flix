import * as React from "react";
import { cn } from "@/lib/utils";

const Carousel = React.forwardRef(function Carousel(
    { className, children, ...props },
    ref
) {
    return (
        <div ref={ref} className={cn("relative w-full", className)} {...props}>
            {children}
        </div>
    );
});

const CarouselContent = React.forwardRef(function CarouselContent(
    { className, children, ...props },
    ref
) {
    return (
        <div
            ref={ref}
            className={cn(
                "flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
});

const CarouselItem = React.forwardRef(function CarouselItem(
    { className, children, ...props },
    ref
) {
    return (
        <div ref={ref} className={cn("shrink-0 snap-start", className)} {...props}>
            {children}
        </div>
    );
});

export { Carousel, CarouselContent, CarouselItem };
