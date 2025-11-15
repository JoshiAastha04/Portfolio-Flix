// src/components/ProjectCard.jsx
import React from "react";

function ProjectCard({ project, onOpen }) {
    const { title, tags = [], year, image } = project;

    return (
        <button
            type="button"
            onClick={() => onOpen(project)}
            className="
        group relative block w-full overflow-hidden rounded-2xl
        bg-zinc-900 text-left shadow-lg
        transition-transform duration-300
        hover:-translate-y-1 hover:shadow-2xl
        focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70
      "
        >
            <div className="relative aspect-[16/9] w-full">
                {image && (
                    <img
                        src={image}
                        alt={title}
                        className="
              h-full w-full object-cover
              transition-transform duration-300
              group-hover:scale-105
            "
                    />
                )}

                {/* Year pill: always visible */}
                {year && (
                    <span
                        className="
              absolute left-3 top-3
              rounded-full bg-black/75 px-2.5 py-1
              text-[11px] font-semibold text-white
              backdrop-blur
            "
                    >
            {year}
          </span>
                )}

                {/* Hover overlay – ONLY this card because the group is on this button */}
                <div
                    className="
            absolute inset-0
            flex flex-col justify-end
            bg-gradient-to-t from-black/80 via-black/40 to-transparent
            opacity-0
            transition-opacity duration-300
            group-hover:opacity-100
          "
                >
                    <div className="p-3 sm:p-4">
                        <h4 className="text-sm sm:text-base font-semibold text-white">
                            {title}
                        </h4>

                        {tags.length > 0 && (
                            <p className="mt-1 text-[10px] sm:text-xs text-white/80 line-clamp-2">
                                {tags.join(" • ")}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </button>
    );
}

export default ProjectCard;
