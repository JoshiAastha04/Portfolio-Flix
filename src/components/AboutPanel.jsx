import React from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { Github, Linkedin, Mail, X } from "lucide-react";
import myPhoto from "../assets/me2.png";

function AboutPanel({ open, onClose }) {
    return (
        <AnimatePresence>
            {open && (
                <Motion.div
                    role="dialog"
                    aria-modal="true"
                    aria-label="About Me"
                    className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <Motion.aside
                        className="flex h-full w-full flex-col bg-[#111] p-6 text-white shadow-[0_0_40px_rgba(0,0,0,0.6)] ring-1 ring-white/10 sm:w-96"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 140, damping: 18 }}
                        onClick={(e) => e.stopPropagation()}
                        tabIndex={-1}
                    >
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold tracking-tight">About Me</h3>
                            <button
                                onClick={onClose}
                                className="rounded-md bg-white/10 p-1.5 hover:bg-white/20"
                                aria-label="Close About panel"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <div className="mt-4 flex flex-col items-center text-center">
                            <img
                                src={myPhoto}
                                alt="Aastha Joshi"
                                className="h-24 w-24 rounded-full object-cover ring-2 ring-white/20"
                            />

                            <h4 className="mt-2 text-base font-semibold text-white">
                                Aastha Joshi
                            </h4>
                            <p className="mt-1 text-xs text-white/60">
                                Full-Stack Developer
                            </p>
                        </div>

                        <div className="mt-4 space-y-4 text-sm text-white/80">
                            <p className="text-xs leading-6 sm:text-sm">
                                Hiee! I’m Aastha Joshi, a Senior Comp Sci student at Cal State
                                Northridge and a passionate Full Stack Developer who loves
                                bringing creative ideas to life through code.
                                <br />
                                <br />
                                I build projects that blend clean design with real functionality—from
                                full-stack web apps to mobile experiences and even small game
                                projects.
                                <br />
                                <br />
                                I’m also growing my cloud skills with AWS and staying active in
                                leadership as the VP of ACM and Secretary of ISA.
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {[
                                    "HTML/CSS (Tailwind)",
                                    "JavaScript",
                                    "React.js",
                                    "Spring Boot (Java)",
                                    "FastAPI (Python)",
                                    "PostgreSQL",
                                    "MongoDB",
                                ].map((t) => (
                                    <span
                                        key={t}
                                        className="rounded-full bg-white/10 px-3 py-1 text-xs"
                                    >
                    {t}
                  </span>
                                ))}
                            </div>

                            <div className="mt-2 grid grid-cols-3 gap-2 border-t border-white/10 pt-4">
                                <a
                                    href="https://github.com/joshiaastha04"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex flex-col items-center gap-1 rounded-xl bg-white/5 p-3 hover:bg-white/10"
                                >
                                    <Github className="h-5 w-5" />
                                    <span className="text-xs text-white/80 group-hover:text-white">GitHub</span>
                                </a>
                                    <a
                                    href="https://linkedin.com/in/aasthajoshi23"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex flex-col items-center gap-1 rounded-xl bg-white/5 p-3 hover:bg-white/10">

                                    <Linkedin className="h-5 w-5" />
                                    <span className="text-xs text-white/80 group-hover:text-white">LinkedIn</span>
                                </a>
                                <a
                                    href="mailto:aasthajoshi3010@gmail.com"
                                    className="group flex flex-col items-center gap-1 rounded-xl bg-white/5 p-3 hover:bg-white/10">
                                    <Mail className="h-5 w-5" />
                                    <span className="text-xs text-white/80 group-hover:text-white">Email
                                    </span>
                                </a>
                            </div>
                        </div>

                        <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white/50">
                            <span>© {new Date().getFullYear()} Aastha Joshi</span>
                            <button
                                onClick={onClose}
                                className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-semibold hover:bg-white/20"
                            >
                                Close
                            </button>
                        </div>
                    </Motion.aside>
                </Motion.div>
            )}
        </AnimatePresence>
    );
}

export default AboutPanel;
