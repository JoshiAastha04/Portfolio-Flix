import {Github, Play} from "lucide-react";
import React from "react";

function Banner({ project, onOpen }) {
    if (!project) return null;

    return (
        <section
            id="hero"
            className="relative h-[52vh] md:h-[60vh] w-full overflow-hidden rounded-b-3xl bg-[#0b0b0b]"
        >
            <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-[#0b0b0b]/40 to-transparent" />

            {/* text overlay */}
            <div className="relative z-10 mx-auto flex h-full w-full max-w-[100rem] flex-col justify-end px-4 pb-8 md:px-10 md:pb-10">
                <h2 className="max-w-2xl text-2xl font-black tracking-tight text-white sm:text-3xl md:text-5xl">
                    {project.title}
                </h2>
                <p className="whitespace-pre-line text-base leading-snug text-white/80 md:text-lg">
                    {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                    <button
                        onClick={() => onOpen(project)}
                        className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-xs font-semibold text-black hover:bg-white/90 sm:text-sm"
                    >
                        <Play className="h-4 w-4" /> Open
                    </button>
                    {project.links.code && (
                        <a
                            href={project.links.code}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 text-xs font-semibold text-white hover:bg-white/20 sm:text-sm"
                        >
                            <Github className="h-4 w-4" /> View Code
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
}
export default Banner;