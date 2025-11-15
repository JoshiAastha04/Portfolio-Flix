import {Github, Play} from "lucide-react";
import React from "react";

function Banner({ project, onOpen }) {
    if (!project) return null;

    return (
        <section
            id="hero"
            className="relative h-[52vh] md:h-[60vh] w-full overflow-hidden rounded-b-3xl bg-[#0b0b0b]
            transition-transform duration-500
            hover:-translate-y-2"
        >
            <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover
                transition-transform duration-700 ease-out
                group-hover:scale-[2.05"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-[#0b0b0b]/40 to-transparent
                    transition-opacity duration-500
                 group-hover:opacity-90
        " />

            {/* text overlay */}
            <div className="relative z-10 mx-auto flex h-full w-full max-w-[100rem] flex-col justify-end px-4 pb-8 md:px-10 md:pb-10">
                <h2 className="max-w-2xl text-2xl font-black tracking-tight text-white sm:text-3xl md:text-5xl">
                    {project.title}
                </h2>
                <p className="whitespace-pre-line text-base leading-snug text-white/80 md:text-lg">
                    {project.description}
                </p>

                {/* Banner buttons: Open, Code, LinkedIn, Email */}
                <div className="mt-4 flex flex-wrap gap-3">

                    {/* Open modal */}
                    <button
                        onClick={() => onOpen(project)}
                        className="rounded-lg bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-white/90 transition"
                    >
                        Open
                    </button>

                    {/* View Code */}
                    {project.links?.code && (
                        <a
                            href={project.links.code}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20 transition"
                        >
                            View Code
                        </a>
                    )}

                    {/* LinkedIn */}
                    <a
                        href="https://linkedin.com/in/aasthajoshi23"
                        target="_blank"
                        rel="noreferrer"
                        className="
                            rounded-lg bg-white/10 px-4 py-2
                            text-sm font-semibold text-white
                            flex items-center gap-2
                            hover:bg-white/20 transition
                        "
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5 2.5 2.5 0 0 1 4.98 3.5zM3 9h4v12H3V9zm7 0h3.6v1.7h.1a4 4 0 0 1 3.6-2c3.8 0 4.5 2.5 4.5 5.7V21h-4v-6.4c0-1.5 0-3.5-2.1-3.5s-2.4 1.6-2.4 3.4V21H10V9z"/>
                        </svg>
                        LinkedIn
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:aasthajoshi3010@gmail.com"
                        className="
                            rounded-lg bg-white/10 px-4 py-2
                            text-sm font-semibold text-white
                            flex items-center gap-2
                            hover:bg-white/20 transition
                        "
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 13.065 2 6.75V18h20V6.75l-10 6.315zM12 11 2 4h20L12 11z"/>
                        </svg>
                        Email
                    </a>
                </div>


            </div>
        </section>
    );
}
export default Banner;