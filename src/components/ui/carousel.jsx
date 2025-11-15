// src/components/ui/carousel.jsx
import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

const CarouselContext = React.createContext(null);

function useCarousel() {
    const context = React.useContext(CarouselContext);

    if (!context) {
        throw new Error("useCarousel must be used within a <Carousel />");
    }

    return context;
}

const Carousel = React.forwardRef(
    (
        {
            orientation = "horizontal",
            opts,
            setApi,
            plugins,
            className,
            children,
            ...props
        },
        ref
    ) => {
        const [carouselRef, api] = useEmblaCarousel(
            {
                ...opts,
                axis: orientation === "horizontal" ? "x" : "y",
            },
            plugins
        );

        const [canScrollPrev, setCanScrollPrev] = React.useState(false);
        const [canScrollNext, setCanScrollNext] = React.useState(false);

        const scrollPrev = React.useCallback(() => {
            api?.scrollPrev();
        }, [api]);

        const scrollNext = React.useCallback(() => {
            api?.scrollNext();
        }, [api]);

        const onSelect = React.useCallback((embla) => {
            if (!embla) return;
            setCanScrollPrev(embla.canScrollPrev());
            setCanScrollNext(embla.canScrollNext());
        }, []);

        React.useEffect(() => {
            if (!api) return;

            if (setApi) setApi(api);

            onSelect(api);
            api.on("reInit", onSelect);
            api.on("select", onSelect);

            return () => {
                api.off("reInit", onSelect);
                api.off("select", onSelect);
            };
        }, [api, setApi, onSelect]);

        const handleKeyDown = React.useCallback(
            (event) => {
                if (event.key === "ArrowLeft") {
                    event.preventDefault();
                    scrollPrev();
                } else if (event.key === "ArrowRight") {
                    event.preventDefault();
                    scrollNext();
                }
            },
            [scrollPrev, scrollNext]
        );

        return (
            <CarouselContext.Provider
                value={{
                    carouselRef,
                    api,
                    opts,
                    orientation:
                        orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
                    scrollPrev,
                    scrollNext,
                    canScrollPrev,
                    canScrollNext,
                }}
            >
                <div
                    ref={ref}
                    onKeyDownCapture={handleKeyDown}
                    className={cn("relative", className)}
                    role="region"
                    aria-roledescription="carousel"
                    {...props}
                >
                    {children}
                </div>
            </CarouselContext.Provider>
        );
    }
);

Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();

    return (
        <div ref={carouselRef} className="overflow-hidden">
            <div
                ref={ref}
                className={cn(
                    "flex",
                    orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
                    className
                )}
                {...props}
            />
        </div>
    );
});
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef(({ className, ...props }, ref) => {
    const { orientation } = useCarousel();

    return (
        <div
            ref={ref}
            role="group"
            aria-roledescription="slide"
            className={cn(
                "min-w-0 shrink-0 grow-0 basis-full",
                orientation === "horizontal" ? "pl-4" : "pt-4",
                className
            )}
            {...props}
        />
    );
});
CarouselItem.displayName = "CarouselItem";

/**
 * Shared button base:
 * - fixed to screen
 * - centered vertically
 * - nice round dark pill
 */
const CarouselButton = React.forwardRef(({ className, ...props }, ref) => (
    <button
        ref={ref}
        type="button"
        className={cn(
            "fixed top-1/2 -translate-y-1/2 z-50",
            "flex items-center justify-center",
            "h-9 w-9 rounded-full",
            "bg-black/60 hover:bg-black/80",
            "text-white",
            "focus:outline-none focus:ring-2 focus:ring-white/50",
            "disabled:opacity-40 disabled:cursor-default",
            className
        )}
        {...props}
    />
));
CarouselButton.displayName = "CarouselButton";

/**
 * Arrows: ALWAYS visible, ALL breakpoints,
 * pinned to full-screen edges (Netflix-style).
 */
const CarouselPrevious = React.forwardRef(({ className, ...props }, ref) => {
    const { scrollPrev, canScrollPrev } = useCarousel();

    return (
        <CarouselButton
            ref={ref}
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className={cn("left-2", className)}
            {...props}
        >
            <ChevronLeft className="h-4 w-4" />
        </CarouselButton>
    );
});
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef(({ className, ...props }, ref) => {
    const { scrollNext, canScrollNext } = useCarousel();

    return (
        <CarouselButton
            ref={ref}
            onClick={scrollNext}
            disabled={!canScrollNext}
            className={cn("right-2", className)}
            {...props}
        >
            <ChevronRight className="h-4 w-4" />
        </CarouselButton>
    );
});
CarouselNext.displayName = "CarouselNext";

export {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
};
