import React from "react";
import ProjectCard from "./ProjectCard.jsx";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel.jsx";

export default function Row({ title, items, onOpen }) {
    if (!items || items.length === 0) return null;

    return (
        <section className="py-6 px-4 md:px-8">
            {/* Row title */}
            <h2 className="text-lg md:text-2xl font-bold mb-3 text-white">
                {title}
            </h2>

            <div className="relative">
                {/* LEFT ARROW (visual only) */}
                <div
                    className="
            hidden md:flex
            absolute
            left-0 top-1/2 -translate-y-1/2
            z-10
          "
                >
                    <div
                        className="
              px-2 py-8
              bg-black/40 hover:bg-black/60
              text-white rounded-r-lg select-none
            "
                    >
                        ‹
                    </div>
                </div>

                {/* RIGHT ARROW (visual only) */}
                <div
                    className="
            hidden md:flex
            absolute
            right-0 top-1/2 -translate-y-1/2
            z-10
          "
                >
                    <div
                        className="
              px-2 py-8
              bg-black/40 hover:bg-black/60
              text-white rounded-l-lg select-none
            "
                    >
                        ›
                    </div>
                </div>

                {/* FADE INDICATOR ON RIGHT */}
                <div
                    className="
            pointer-events-none
            absolute right-0 top-0
            h-full w-28
            bg-gradient-to-l from-[#0b0b0b] to-transparent
            z-5
          "
                />

                {/* Horizontal scrollable row using Carousel */}
                <Carousel>
                    <CarouselContent>
                        {items.map((item) => (
                            <CarouselItem
                                key={item.id}
                                className="
                  shrink-0
                  snap-start
                  basis-[45%]
                  sm:basis-[35%]
                  md:basis-[35%]
                  lg:basis-[32%]
                  xl:basis-[25%]
                  2xl:basis-[28%]
                "
                            >
                                <ProjectCard
                                    project={item}
                                    onOpen={() => onOpen(item)}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
}
