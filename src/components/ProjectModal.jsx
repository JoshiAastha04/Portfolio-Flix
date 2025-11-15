import React from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";

function ProjectModal({ project, onClose }) {
    if (!project) return null; // safety guard

    const { title, subtitle, year, category, tags, description, image, links } =
        project;

    return (
        <AnimatePresence>
            <Motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <Motion.div
                    className="w-[90%] max-w-xl rounded-2xl bg-[#111] p-6 text-white shadow-2xl ring-1 ring-white/10"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* HEADER */}
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h2 className="text-xl font-bold leading-tight">{title}</h2>

                            <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-white/60">
                                {subtitle && <span>{subtitle}</span>}
                                {category && (
                                    <>
                                        <span className="text-white/30">•</span>
                                        <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wide">
                      {category}
                    </span>
                                    </>
                                )}
                                {year && (
                                    <>
                                        <span className="text-white/30">•</span>
                                        <span>{year}</span>
                                    </>
                                )}
                            </div>
                        </div>

                        <button
                            onClick={onClose}
                            className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold hover:bg-white/20"
                        >
                            Close
                        </button>
                    </div>

                    {/* IMAGE */}
                    {image && (
                        <img
                            src={image}
                            alt={title}
                            className="mt-4 h-40 w-full rounded-xl object-cover"
                        />
                    )}

                    {/* TAGS */}
                    {tags && tags.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full bg-white/10 px-3 py-1 text-[11px]"
                                >
                  {tag}
                </span>
                            ))}
                        </div>
                    )}

                    {/* DESCRIPTION */}
                    {description && (
                        <p className="mt-4 text-sm leading-relaxed text-white/80 whitespace-pre-line">
                            {description}
                        </p>
                    )}

                    {/* LINKS */}
                    {(links?.live || links?.code) && (
                        <div className="mt-5 flex flex-wrap gap-3 text-sm">
                            {links.live && links.live !== "" && (
                                <a
                                    href={links.live}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-lg bg-white text-black px-3 py-1.5 font-semibold hover:bg-white/90"
                                >
                                    View Live
                                </a>
                            )}
                            {links.code && links.code !== "" && (
                                <a
                                    href={links.code}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-lg bg-white/10 px-3 py-1.5 font-semibold hover:bg-white/20"
                                >
                                    View Code
                                </a>
                            )}
                        </div>
                    )}
                </Motion.div>
            </Motion.div>
        </AnimatePresence>
    );
}

export default ProjectModal;
