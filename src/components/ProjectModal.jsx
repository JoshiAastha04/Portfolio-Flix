import React from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";

function ProjectModal({ open, project, onClose }) {
    if (!open || !project) return null; // FIXED

    return (
        <AnimatePresence>
            <Motion.div
                className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex justify-center items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <Motion.div
                    className="bg-[#111] p-6 rounded-xl text-white w-[90%] max-w-xl shadow-xl"
                    initial={{ scale: 0.85, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.85, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <h2 className="text-xl font-bold mb-2">{project.title}</h2>

                    {project.image && (
                        <img
                            src={project.image}
                            alt={project.title}
                            className="rounded-lg w-full object-cover mb-4"
                        />
                    )}

                    <p className="text-xs text-white/60 mb-2">{project.subtitle}</p>

                    <p className="text-sm leading-relaxed text-white/80 whitespace-pre-line">
                        {project.description}
                    </p>

                    {(project.links?.live || project.links?.code) && (
                        <div className="mt-4 flex gap-3">
                            {project.links.live && (
                                <a
                                    href={project.links.live}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-lg bg-white text-black px-3 py-1.5 text-xs font-semibold hover:bg-white/90"
                                >
                                    Live
                                </a>
                            )}
                            {project.links.code && (
                                <a
                                    href={project.links.code}
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
                        className="mt-4 bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20"
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
