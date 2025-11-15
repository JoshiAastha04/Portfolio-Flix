import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

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

        const onSelect = React.useCallback(
            (apiInstance) => {
                if (!apiInstance) return;
                setCanScrollPrev(apiInstance.canScrollPrev());
                setCanScrollNext(apiInstance.canScrollNext());
            },
            []
        );

        const scrollPrev = React.useCallback(() => {
            api?.scrollPrev();
        }, [api]);

        const scrollNext = React.useCallback(() => {
            api?.scrollNext();
        }, [api]);

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

        React.useEffect(() => {
            if (!api || !setApi) return;
            setApi(api);
        }, [api, setApi]);

        React.useEffect(() => {
            if (!api) return;

            onSelect(api);
            api.on("reInit", onSelect);
            api.on("select", onSelect);

            return () => {
                api.off("select", onSelect);
            };
        }, [api, onSelect]);

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

/* 🔥 CUSTOM ARROW BUTTONS THAT WORK EVERYWHERE */

export const CarouselPrevious = React.forwardRef(
    ({ className, ...props }, ref) => {
        const { scrollPrev, canScrollPrev } = useCarousel();

        return (
            <button
                ref={ref}
                type="button"
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className={cn(
                    "absolute left-2 top-1/2 -translate-y-1/2 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-40 disabled:cursor-default",
                    className
                )}
                {...props}
            >
                <ArrowLeft className="h-4 w-4" />
            </button>
        );
    }
);
CarouselPrevious.displayName = "CarouselPrevious";

export const CarouselNext = React.forwardRef(
    ({ className, ...props }, ref) => {
        const { scrollNext, canScrollNext } = useCarousel();

        return (
            <button
                ref={ref}
                type="button"
                onClick={scrollNext}
                disabled={!canScrollNext}
                className={cn(
                    "absolute right-2 top-1/2 -translate-y-1/2 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-40 disabled:cursor-default",
                    className
                )}
                {...props}
            >
                <ArrowRight className="h-4 w-4" />
            </button>
        );
    }
);
CarouselNext.displayName = "CarouselNext";

export { Carousel, CarouselContent, CarouselItem };
