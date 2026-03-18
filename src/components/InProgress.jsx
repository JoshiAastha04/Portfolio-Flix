import React, { useRef } from "react";
import { motion as Motion, useInView } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

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

const STATUS = {
    live:       { label: "Live",        color: "#00c896", dot: "bg-emerald-400" },
    beta:       { label: "Beta",        color: "#f5a623", dot: "bg-amber-400" },
    building:   { label: "Building",    color: "#4a9eff", dot: "bg-blue-400" },
    planned:    { label: "Planned",     color: "#c084fc", dot: "bg-purple-400" },
};

const projects = [
    {
        title: "StanLore",
        tagline: "K-pop photocard collection tracker- because obsession deserves structure.",
        description:
            "Full-stack platform for K-pop fans to manage their photocard binders, spend earned stars in a rarity-tiered catalog, and engage with a community thread board (Lore Space) for theories, fashion takes, and trades.",
        stack: ["React + Vite", "Supabase", "Vercel"],
        status: "live",
        live: "https://www.stanloree.live",
        code: "https://github.com/JoshiAastha04/StanLore",
        accent: "#00c896",
    },
    {
        title: "Portfolio v2",
        tagline: "You're looking at it. Always iterating.",
        description:
            "The Netflix-style portfolio you're on right now. My Story is live, next chapter updates when I land a job. 🤞",
        stack: ["React + Vite", "Tailwind CSS", "Framer Motion"],
        status: "live",
        accent: "#4a9eff",
    },
    {
        title: "E-Commerce Store",
        tagline: "A full shopping experience- cart, payments, the works.",
        description:
            "Currently building a full-stack e-commerce platform with Stripe payments, MongoDB for product/user data, and a Node.js backend. Focused on clean UX and a smooth checkout flow.",
        stack: ["React", "Node.js", "MongoDB", "Stripe"],
        status: "building",
        accent: "#4a9eff",
    },
];

const ideas = [
    { emoji: "🎨", text: "Sketch portfolio- digitising my portrait work" },
    { emoji: "🌐", text: "Browser extension for K-drama subtitle sync" },
    { emoji: "📱", text: "Habit tracker with a ruthlessly minimal UI" },
];

export default function InProgress() {
    return (
        <main className="min-h-screen bg-[#0b0b0b] text-white overflow-x-hidden">

            {/* hero */}
            <section className="relative px-6 pb-16 pt-32 md:px-16">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#001a11] via-[#0b0b0b] to-[#0b0b0b]" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-transparent to-transparent" />

                <Motion.p
                    className="relative z-10 mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#00c896]/60"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
                >
                    Always building
                </Motion.p>
                <Motion.h1
                    className="relative z-10 max-w-2xl text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl"
                    initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                    What I'm building <span className="text-[#00c896]">right now.</span>
                </Motion.h1>
                <Motion.p
                    className="relative z-10 mt-5 max-w-lg text-sm leading-relaxed text-white/50 md:text-base"
                    initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    I'm never not building something. Here's the current state of the queue -
                    shipped, in progress, and on the horizon.
                </Motion.p>
            </section>

            {/* ── project cards ── */}
            <section className="px-6 pb-16 md:px-16">
                <div className="grid gap-5 md:grid-cols-2">
                    {projects.map((p, i) => {
                        const s = STATUS[p.status];
                        return (
                            <FadeUp key={p.title} delay={i * 0.08}>
                                <div
                                    className="group relative flex h-full flex-col rounded-2xl border border-white/8 bg-white/[0.03] p-6 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.055] overflow-hidden"
                                >
                                    {/* accent glow top-left */}
                                    <div
                                        className="pointer-events-none absolute -left-6 -top-6 h-24 w-24 rounded-full blur-2xl opacity-20 transition-opacity duration-300 group-hover:opacity-40"
                                        style={{ background: p.accent }}
                                    />

                                    {/* status pill */}
                                    <div className="mb-4 flex items-center gap-2">
                                        <span className={`inline-block h-2 w-2 rounded-full ${s.dot} animate-pulse`} />
                                        <span
                                            className="text-[10px] font-bold uppercase tracking-widest"
                                            style={{ color: s.color }}
                                        >
                                            {s.label}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-black tracking-tight text-white">
                                        {p.title}
                                    </h3>
                                    <p className="mt-1 text-xs font-medium text-white/50 italic">
                                        {p.tagline}
                                    </p>
                                    <p className="mt-3 text-sm leading-relaxed text-white/60 flex-1">
                                        {p.description}
                                    </p>

                                    {/* stack pills */}
                                    <div className="mt-4 flex flex-wrap gap-1.5">
                                        {p.stack.map((t) => (
                                            <span
                                                key={t}
                                                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-medium text-white/60"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* links */}
                                    {(p.live || p.code) && (
                                        <div className="mt-5 flex gap-2">
                                            {p.live && (
                                                <a
                                                    href={p.live}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-black hover:bg-white/90 transition"
                                                >
                                                    <ExternalLink className="h-3 w-3" /> Live
                                                </a>
                                            )}
                                            {p.code && (
                                                <a
                                                    href={p.code}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/70 hover:bg-white/10 transition"
                                                >
                                                    <Github className="h-3 w-3" /> Code
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </FadeUp>
                        );
                    })}
                </div>
            </section>

            {/* on the horizon */}
            <section className="px-6 pb-24 md:px-16">
                <FadeUp>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#00c896]/60">
                        On the horizon
                    </p>
                    <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
                        Ideas in the notes app
                    </h2>
                    <p className="mt-2 text-sm text-white/40">
                        Things that don't exist yet but probably should.
                    </p>
                </FadeUp>

                <div className="mt-6 flex flex-col gap-3">
                    {ideas.map((idea, i) => (
                        <FadeUp key={idea.text} delay={i * 0.07}>
                            <div className="flex items-center gap-4 rounded-xl border border-white/8 bg-white/[0.03] px-5 py-4">
                                <span className="text-2xl">{idea.emoji}</span>
                                <p className="text-sm text-white/70">{idea.text}</p>
                                <span className="ml-auto rounded-full border border-[#00c896]/20 bg-[#00c896]/10 px-2.5 py-0.5 text-[10px] font-semibold text-[#00c896]/70">
                                    Planned
                                </span>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </section>

            <footer className="border-t border-white/8 px-6 py-6 text-center text-xs text-white/20 md:px-16">
                © {new Date().getFullYear()} Aastha Joshi
            </footer>
        </main>
    );
}