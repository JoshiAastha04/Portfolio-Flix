import React, { useRef } from "react";
import { motion as Motion, useInView } from "framer-motion";
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";

function FadeUp({ children, delay = 0, className = "" }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    return (
        <Motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </Motion.div>
    );
}

const skills = [
    { category: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "HTML/CSS", "Flutter"] },
    { category: "Backend", items: ["Java - Spring Boot", "Python-FastAPI", "Node.js", "Express.js"] },
    { category: "Databases", items: ["PostgreSQL", "MongoDB", "Firebase", "Supabase"] },
    { category: "Tools & Cloud", items: ["AWS", "Git", "Postman", "Figma", "Vercel"] },
];

const experience = [
    {
        role: "Full Stack Developer Intern",
        org: "NSF Sponsored Research",
        period: "Summer 2025",
        bullets: [
            "Built a fully encrypted HIPAA-compliant data collection tool using FastAPI + AES encryption",
            "Developed role-based access control for sensitive research participant data",
            "Created React/Next.js frontend components for researcher dashboard",
        ],
        accent: "#c084fc",
    },
    {
        role: "Vice President",
        org: "ACM @ CSUN",
        period: "2023 – 2025",
        bullets: [
            "Organised LeetCode workshops and technical interview prep sessions",
            "Led club operations and coordinated events for 100+ members",
        ],
        accent: "#c084fc",
    },
    {
        role: "Secretary",
        org: "ISA @ CSUN",
        period: "2024 – 2025",
        bullets: [
            "Organised events to promote Indian culture and build a community. ",
            "Cultural events helped students feel at home away from home.",
        ],
        accent: "#c084fc",
    },
];

const education = {
    degree: "B.S. Computer Science",
    school: "California State University, Northridge",
    period: "Aug 2022 - Dec 2026",
    gpa: "3.59",
};

const whyMe = [
    { emoji: "🏗️", title: "I build end-to-end", body: "Front to back. I don't hand off, I own the whole thing." },
    { emoji: "🎨", title: "Design-aware dev", body: "I care about how it looks, not just how it works." },
    { emoji: "🌏", title: "Adaptable by nature", body: "Moved countries at 18. Figuring things out is my Default mode." },
    { emoji: "⚡", title: "Always shipping", body: "I have live projects. Not just GitHub repos with one commit." },
];

export default function HireMe() {
    return (
        <main className="min-h-screen bg-[#0b0b0b] text-white overflow-x-hidden">

            {/* hero */}
            <section className="relative px-6 pb-16 pt-32 md:px-16">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0d001a] via-[#0b0b0b] to-[#0b0b0b]" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-transparent to-transparent" />

                <Motion.p
                    className="relative z-10 mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#c084fc]/60"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
                >
                    Open to opportunities
                </Motion.p>

                <Motion.h1
                    className="relative z-10 max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl"
                    initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                    Let's build something
                    <br />
                    <span className="text-[#c084fc]">worth shipping.</span>
                </Motion.h1>

                <Motion.p
                    className="relative z-10 mt-5 max-w-lg text-sm leading-relaxed text-white/50 md:text-base"
                    initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    CS Senior at CSUN graduating 2026. Full-stack developer who ships real
                    products. Looking for internships and new grad roles in software engineering.
                </Motion.p>

                {/* CTA buttons */}
                <Motion.div
                    className="relative z-10 mt-8 flex flex-wrap gap-3"
                    initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <a
                        href="mailto:aasthajoshi3010@gmail.com"
                        className="flex items-center gap-2 rounded-lg bg-[#c084fc] px-5 py-2.5 text-sm font-bold text-black transition hover:bg-[#c084fc]/90"
                    >
                        <Mail className="h-4 w-4" /> Email me
                    </a>
                    <a
                        href="https://linkedin.com/in/aasthajoshi23"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-bold text-white/80 transition hover:bg-white/10"
                    >
                        <Linkedin className="h-4 w-4" /> LinkedIn
                    </a>
                    <a
                        href="https://github.com/JoshiAastha04"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-bold text-white/80 transition hover:bg-white/10"
                    >
                        <Github className="h-4 w-4" /> GitHub
                    </a>

                    {/* Resume */}
                    <a
                        href="#"
                        className="flex items-center gap-2 rounded-lg border border-[#c084fc]/30 bg-[#c084fc]/10 px-5 py-2.5 text-sm font-bold text-[#c084fc] transition hover:bg-[#c084fc]/20"
                    >
                        <Download className="h-4 w-4" /> Resume
                    </a>
                </Motion.div>
            </section>

            {/* wy me*/}
            <section className="px-6 pb-16 md:px-16">
                <FadeUp>
                    <h2 className="mb-6 text-2xl font-black tracking-tight sm:text-3xl">
                        Why me?
                    </h2>
                </FadeUp>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {whyMe.map((w, i) => (
                        <FadeUp key={w.title} delay={i * 0.07}>
                            <div className="group flex flex-col gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-5 transition-all duration-300 hover:border-[#c084fc]/30 hover:bg-white/[0.055]">
                                <span className="text-2xl">{w.emoji}</span>
                                <p className="text-sm font-bold text-white">{w.title}</p>
                                <p className="text-xs leading-relaxed text-white/50">{w.body}</p>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </section>

            {/* skills */}
            <section className="px-6 pb-16 md:px-16">
                <FadeUp>
                    <h2 className="mb-6 text-2xl font-black tracking-tight sm:text-3xl">
                        Tech stack
                    </h2>
                </FadeUp>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {skills.map((group, i) => (
                        <FadeUp key={group.category} delay={i * 0.06}>
                            <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5">
                                <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-[#c084fc]/70">
                                    {group.category}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {group.items.map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </section>

            {/* expiernce */}
            <section className="px-6 pb-16 md:px-16">
                <FadeUp>
                    <h2 className="mb-6 text-2xl font-black tracking-tight sm:text-3xl">
                        Experience
                    </h2>
                </FadeUp>
                <div className="flex flex-col gap-4">
                    {experience.map((exp, i) => (
                        <FadeUp key={exp.role + exp.org} delay={i * 0.08}>
                            <div className="group relative rounded-2xl border border-white/8 bg-white/[0.03] p-6 transition-all duration-300 hover:border-[#c084fc]/20 overflow-hidden">
                                <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#c084fc]/8 blur-2xl group-hover:bg-[#c084fc]/15 transition-colors" />
                                <div className="flex flex-wrap items-start justify-between gap-2">
                                    <div>
                                        <h3 className="text-base font-bold text-white">{exp.role}</h3>
                                        <p className="text-xs text-[#c084fc]/80 mt-0.5">{exp.org}</p>
                                    </div>
                                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold text-white/40 whitespace-nowrap">
                                        {exp.period}
                                    </span>
                                </div>
                                <ul className="mt-4 flex flex-col gap-1.5">
                                    {exp.bullets.map((b) => (
                                        <li key={b} className="flex gap-2 text-sm text-white/55">
                                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#c084fc]/50" />
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </section>

            {/* edu */}
            <section className="px-6 pb-16 md:px-16">
                <FadeUp>
                    <h2 className="mb-6 text-2xl font-black tracking-tight sm:text-3xl">
                        Education
                    </h2>
                    <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-6">
                        <div className="flex flex-wrap items-start justify-between gap-2">
                            <div>
                                <h3 className="text-base font-bold text-white">{education.degree}</h3>
                                <p className="mt-0.5 text-xs text-[#c084fc]/80">{education.school}</p>
                            </div>
                            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold text-white/40">
                                {education.period}
                            </span>
                        </div>
                    </div>
                </FadeUp>
            </section>

            {/* cta */}
            <section className="relative overflow-hidden px-6 py-20 md:px-16">
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c084fc]/8 blur-3xl" />
                <FadeUp className="relative z-10 text-center">
                    <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                        Ready to talk?
                    </h2>
                    <p className="mx-auto mt-4 max-w-md text-sm text-white/50">
                        Whether it's a full-time role, internship, or a cool project,
                        I'm always happy to chat.
                    </p>
                    <a
                        href="mailto:aasthajoshi3010@gmail.com"
                        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#c084fc] px-8 py-3 text-sm font-bold text-black transition hover:bg-[#c084fc]/90"
                    >
                        <Mail className="h-4 w-4" /> aasthajoshi3010@gmail.com
                    </a>
                </FadeUp>
            </section>

            <footer className="border-t border-white/8 px-6 py-6 text-center text-xs text-white/20 md:px-16">
                © {new Date().getFullYear()} Aastha Joshi
            </footer>
        </main>
    );
}