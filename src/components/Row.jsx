import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel.jsx";
import ProjectCard from "@/components/ProjectCard.jsx";
import React from "react";

function Row({ title, items, onOpen }) {
    if (!items?.length) return null;

    return (
        <section className="py-6">
            {/* Row title */}
            <div className="px-4 md:px-8">
                <h3 className="text-2xl md:text-3xl font-semibold text-white">
                    {title}
                </h3>
            </div>

            {/* Netflix-style carousel row */}
            <div className="mt-2 px-4 md:px-8">
                <Carousel
                    opts={{
                        align: "start",
                        dragFree: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {items.map((p) => (
                            <CarouselItem
                                key={p.id}
                                className="
                  basis-[75%]
                  sm:basis-[55%]
                  md:basis-[35%]
                  lg:basis-[26%]
                  xl:basis-[21%]
                  2xl:basis-[18%]
                "
                            >
                                <ProjectCard project={p} onOpen={onOpen} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Arrows on md+ */}
                    <CarouselPrevious className="hidden md:flex" />
                    <CarouselNext className="hidden md:flex" />
                </Carousel>
            </div>
        </section>
    );
}
    export default Row;