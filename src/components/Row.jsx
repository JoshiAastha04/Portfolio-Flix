import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel.jsx";
import ProjectCard from "@/components/ProjectCard.jsx";

function Row({ title, items, onOpen }) {
    if (!items || !items.length) return null;

    return (
        <section className="py-6">
            {/* Row title */}
            <div className="px-4 md:px-8">
                <h3 className="text-2xl md:text-3xl font-semibold text-white">
                    {title}
                </h3>
            </div>

            {/* Netflix-style carousel row */}
            <div className="mt-2 px-4 md:px-8 relative">
                {/* Right fade so user sees there is more */}
                <div
                    className="
            pointer-events-none
            absolute right-0 top-0 h-full w-24
            bg-gradient-to-l from-[#0b0b0b] to-transparent
            z-20
          "
                />

                <Carousel
                    opts={{
                        align: "start",
                        dragFree: true,
                    }}
                    className="w-full group"
                >
                    <CarouselContent>
                        {items.map((p) => (
                            <CarouselItem
                                key={p.id}
                                className="
                                    snap-start
                                    basis-[25%]    /* mobile: only 1 + peek of next */
                                    sm:basis-[30%]
                                    md:basis-[30%]
                                    lg:basis-[28%]
                                    xl:basis-[22%]
                                    2xl:basis-[18%]

                                "
                            >
                                <ProjectCard project={p} onOpen={onOpen} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Arrows visible on ALL screens */}
                    <CarouselPrevious
                        className="
                             flex
                             items-center justify-center
                             h-9 w-9 rounded-full
                             bg-black/60 hover:bg-black/80
                             text-white
                             absolute left-0 top-1/2 -translate-y-1/2
                             z-30
                        "
                    />
                    <CarouselNext
                        className="
                            flex
                            items-center justify-center
                            h-9 w-9 rounded-full
                            bg-black/60 hover:bg-black/80
                            text-white
                             absolute right-0 top-1/2 -translate-y-1/2
                            z-30
                        "
                    />
                </Carousel>
            </div>
        </section>
    );
}

export default Row;
