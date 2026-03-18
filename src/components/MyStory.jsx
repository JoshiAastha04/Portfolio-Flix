import React, { useRef } from "react";
import { motion as Motion, useInView } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

import panipuri from "../assets/panipuri.png";
import vadapav from "../assets/vadapav.png";
import dosa from "../assets/dosa.png";

/* ── tiny helpers ─────────────────────────────────── */
function FadeUp({ children, delay = 0, className = "" }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    return (
        <Motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </Motion.div>
    );
}

/* ── vibe cards data ──────────────────────────────── */
const vibes = [
    { emoji: "🎨", label: "Portrait sketching", sub: "faces, expressions, moods" },
    { emoji: "🍳", label: "Cooking", sub: "survival → obsession" },
    { emoji: "🏋️", label: "Gym 4×/week", sub: "non-negotiable" },
    { emoji: "📺", label: "K & C Dramas", sub: "Our Beloved Summer · First Frost" },
    { emoji: "🎵", label: "Music in 4 languages", sub: "Gujarati · Hindi · Korean · English" },
    { emoji: "🫶", label: "Pani Puri loyalist", sub: "also: Vada Pav · Dosa" },
];

/* fav artists */
const artists = [
    { name: "Shreya Ghoshal", tag: "timeless" },
    { name: "BTS", tag: "forever" },
    { name: "Aditya Gadhvi", tag: "timeless" },
];

/*main component */
export default function MyStory() {
    return (
        <main className="min-h-screen bg-[#0b0b0b] text-white overflow-x-hidden">

            {/* chapter 1 */}
            <section className="relative flex min-h-[70vh] flex-col justify-end overflow-hidden px-6 pb-16 pt-32 md:px-16 md:pb-24">
                {/* faint blue tint — story profile colour */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#00091a] via-[#0b0b0b] to-[#0b0b0b]" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-transparent to-transparent" />

                {/* chapter label */}
                <Motion.p
                    className="relative z-10 mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#4a9eff]/60"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Chapter 01
                </Motion.p>

                {/* headline */}
                <Motion.h1
                    className="relative z-10 max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                    Moving countries at 18
                    <br />
                    <span className="text-[#4a9eff]">didn't break me.</span>
                </Motion.h1>

                {/* subtext */}
                <Motion.p
                    className="relative z-10 mt-6 max-w-xl text-base leading-relaxed text-white/60 md:text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                >
                    It just made me very good at figuring things out.
                    Grew up in India with family doing everything for me and then packed a bag, crossed
                    an ocean, and landed in California for my CS degree at CSUN. Tough at first.
                    Lonely at times. But everything worked out, like it always does.
                </Motion.p>

                {/* decorative line */}
                <Motion.div
                    className="relative z-10 mt-10 h-px w-16 bg-[#4a9eff]/40"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    style={{ transformOrigin: "left" }}
                />
            </section>

            {/* chapter2- current life  */}
            <section className="px-6 py-16 md:px-16 md:py-24">
                <FadeUp>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#4a9eff]/60">
                        Chapter 02
                    </p>
                    <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                        Now? Senior. All settled in.
                        <span className="ml-2 text-[#4a9eff]">Time flies.</span>
                    </h2>
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/50 md:text-base">
                        CS degree almost done, ACM VP, ISA Secretary and outside the
                        classroom? Here's what actually keeps me going.
                    </p>
                </FadeUp>

                {/* vibe grid */}
                <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                    {vibes.map((v, i) => (
                        <FadeUp key={v.label} delay={i * 0.07}>
                            <div className="group flex flex-col gap-2 rounded-2xl border border-white/8 bg-white/[0.03] p-4 transition-all duration-300 hover:border-[#4a9eff]/30 hover:bg-white/[0.06]">
                                <span className="text-3xl">{v.emoji}</span>
                                <p className="text-xs font-semibold text-white/90 leading-tight">{v.label}</p>
                                <p className="text-[10px] text-white/40 leading-tight">{v.sub}</p>
                            </div>
                        </FadeUp>
                    ))}
                </div>

                {/* artists strip */}
                <FadeUp delay={0.3} className="mt-10">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
                        My Favorite Artists ♡
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {artists.map((a) => (
                            <div
                                key={a.name}
                                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"
                            >
                                <span className="text-base">🎵</span>
                                <span className="text-sm font-semibold text-white/80">{a.name}</span>
                                <span className="rounded-full bg-[#4a9eff]/20 px-2 py-0.5 text-[10px] font-medium text-[#4a9eff]">
                                    {a.tag}
                                </span>
                            </div>
                        ))}
                    </div>
                </FadeUp>

                {/* food love */}
                <FadeUp delay={0.2} className="mt-10">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#4a9eff]/60">
                        Foods I'd fly back for
                    </p>
                    <div className="grid grid-cols-3 gap-3 max-w-lg">
                        {[
                            { img: panipuri, name: "Pani Puri", caption: "the obsession is real" },
                            { img: vadapav,  name: "Vada Pav",  caption: "Mumbai's finest" },
                            { img: dosa,     name: "Dosa",      caption: "crispy perfection" },
                        ].map((f) => (
                            <div
                                key={f.name}
                                className="group overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03]"
                            >
                                <div className="h-28 w-full overflow-hidden">
                                    <img
                                        src={f.img}
                                        alt={f.name}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-3">
                                    <p className="text-xs font-bold text-white/90">{f.name}</p>
                                    <p className="text-[10px] text-white/40 italic">{f.caption}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="mt-3 text-xs text-white/30 italic">
                        (The Pani Puri obsession is very real and very serious.)
                    </p>
                </FadeUp>
            </section>

            {/* Chapter 3 - getting hireddd */}
            <section className="relative px-6 py-20 md:px-16 md:py-28 overflow-hidden">
                {/* background accent */}
                <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-[#4a9eff]/5 blur-3xl" />

                <FadeUp>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#4a9eff]/60">
                        Chapter 03
                    </p>
                </FadeUp>

                <FadeUp delay={0.1}>
                    <h2 className="max-w-2xl text-2xl font-black leading-snug tracking-tight text-white sm:text-3xl md:text-4xl">
                        Recruiter? Hit the{" "}
                        <span className="text-[#c084fc]">Hire Me</span> tab.
                        <br />
                        Just curious?{" "}
                        <span className="text-[#4a9eff]">Hope you enjoyed the read.</span>
                        <br />
                        Either way —{" "}
                        <span className="text-white/60">hi, I'm Aastha. 👋</span>
                    </h2>
                </FadeUp>

                <FadeUp delay={0.2} className="mt-6 max-w-lg">
                    <p className="text-sm leading-relaxed text-white/40 md:text-base">
                        No pitch needed. You already know if you want to reach out.
                    </p>
                </FadeUp>

                {/* social links */}
                <FadeUp delay={0.3} className="mt-10">
                    <div className="flex flex-wrap gap-3">
                        <a
                            href="https://github.com/JoshiAastha04"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/70 transition hover:border-[#4a9eff]/40 hover:text-white"
                        >
                            <Github className="h-4 w-4" /> GitHub
                        </a>
                        <a
                            href="https://linkedin.com/in/aasthajoshi23"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/70 transition hover:border-[#4a9eff]/40 hover:text-white"
                        >
                            <Linkedin className="h-4 w-4" /> LinkedIn
                        </a>
                        <a
                            href="mailto:aasthajoshi3010@gmail.com"
                            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/70 transition hover:border-[#4a9eff]/40 hover:text-white"
                        >
                            <Mail className="h-4 w-4" /> Email
                        </a>
                    </div>
                </FadeUp>
            </section>

            {/* footer */}
            <footer className="border-t border-white/8 px-6 py-6 text-center text-xs text-white/20 md:px-16">
                © {new Date().getFullYear()} Aastha Joshi
            </footer>
        </main>
    );
}