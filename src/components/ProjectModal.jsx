import React from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";

function ProjectModal({ open, project, onClose }) {
    if (!open || !project) return null;

    const { title, subtitle, year, description, image, tags = [], links = {} } =
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
                    className="w-[90%] max-w-xl rounded-xl bg-[#111] p-6 text-white shadow-xl"
                    initial={{ scale: 0.85, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.85, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <h2 className="mb-1 text-xl font-bold">{title}</h2>

                    {subtitle && (
                        <p className="mb-2 text-xs text-white/60">{subtitle}</p>
                    )}

                    {/* year + tags chips */}
                    {(year || tags.length) && (
                        <div className="mb-3 flex flex-wrap items-center gap-2 text-[11px]">
                            {year && (
                                <span className="rounded-full bg-white/10 px-2 py-0.5 text-white/80">
                  {year}
                </span>
                            )}
                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full bg-white/8 px-2 py-0.5 text-white/70"
                                >
                  {tag}
                </span>
                            ))}
                        </div>
                    )}

                    {image && (
                        <img
                            src={image}
                            alt={title}
                            className="mb-4 w-full rounded-lg object-cover"
                        />
                    )}

                    <p className="whitespace-pre-line text-sm leading-relaxed text-white/80">
                        {description}
                    </p>

                    {(links.live || links.code) && (
                        <div className="mt-4 flex gap-3">
                            {links.live && (
                                <a
                                    href={links.live}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-black hover:bg-white/90"
                                >
                                    Live
                                </a>
                            )}
                            {links.code && (
                                <a
                                    href={links.code}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-semibold hover:bg-white/20"
                                >
                                    Code
                                </a>
                            )}
                        </div>
                    )}

                    <button
                        className="mt-4 rounded-lg bg-white/10 px-4 py-2 text-sm hover:bg-white/20"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </Motion.div>
            </Motion.div>
        </AnimatePresence>
    );
}

export default ProjectModal;
