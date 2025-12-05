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
            {/*</div>*/}
        </section>
    );
}
