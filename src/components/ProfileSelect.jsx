import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { profiles } from "./profilesData";

export default function ProfileSelect({ onSelect }) {
    const [hovered, setHovered] = useState(null);
    const [selected, setSelected] = useState(null);
    const [leaving, setLeaving] = useState(false);

    const handleSelect = (profile) => {
        setSelected(profile.id);
        setTimeout(() => {
            setLeaving(true);
            setTimeout(() => onSelect(profile), 700);
        }, 400);
    };

    const hoveredProfile = profiles.find((p) => p.id === hovered);

    return (
        <AnimatePresence>
            {!leaving && (
                <Motion.div
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
                    style={{
                        background: hoveredProfile
                            ? `radial-gradient(ellipse at center, ${hoveredProfile.bgColor} 0%, #0b0b0b 70%)`
                            : "#0b0b0b",
                        transition: "background 0.4s ease",
                    }}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                    {/* Scanline texture */}
                    <div
                        className="pointer-events-none absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage:
                                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)",
                        }}
                    />

                    {/* Logo */}
                    <Motion.div
                        className="absolute top-8 left-8 text-2xl font-black tracking-tight"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="text-red-600">Aastha Joshi</span>
                        <span className="text-white/30 text-base font-light ml-1">portfolio</span>
                    </Motion.div>

                    {/* Title */}
                    <Motion.h1
                        className="mb-10 text-center text-3xl font-bold tracking-wide text-white/90 sm:text-4xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        style={{ fontFamily: "'Georgia', serif", letterSpacing: "0.05em" }}
                    >
                        Hey there, so where do you want to start?
                    </Motion.h1>

                    {/* Profiles */}
                    <div className="flex flex-wrap items-center justify-center gap-5 px-4 sm:gap-10">
                        {profiles.map((profile, i) => (
                            <Motion.button
                                key={profile.id}
                                onClick={() => handleSelect(profile)}
                                onHoverStart={() => setHovered(profile.id)}
                                onHoverEnd={() => setHovered(null)}
                                className="group flex flex-col items-center gap-3 outline-none"
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
                                whileHover={{ y: -6 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div
                                    className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-xl overflow-hidden"
                                    style={{
                                        boxShadow:
                                            hovered === profile.id
                                                ? `0 0 0 3px ${profile.color}, 0 8px 32px ${profile.color}44`
                                                : selected === profile.id
                                                    ? "0 0 0 3px white"
                                                    : "0 0 0 2px rgba(255,255,255,0.1)",
                                        transition: "box-shadow 0.25s ease",
                                    }}
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${profile.gradient} opacity-80`} />
                                    <div
                                        className="absolute inset-0 opacity-20"
                                        style={{
                                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                                        }}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center text-5xl select-none">
                                        {profile.emoji}
                                    </div>
                                    {selected === profile.id && (
                                        <Motion.div
                                            className="absolute inset-0 bg-white/20"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: [0, 0.4, 0] }}
                                            transition={{ duration: 0.4 }}
                                        />
                                    )}
                                </div>

                                <div className="text-center">
                                    <p
                                        className="text-sm font-semibold transition-colors duration-200"
                                        style={{
                                            color: hovered === profile.id ? profile.color : "rgba(255,255,255,0.75)",
                                        }}
                                    >
                                        {profile.name}
                                    </p>
                                    <p className="mt-0.5 text-[10px] text-white/40 group-hover:text-white/60 transition-colors">
                                        {profile.description}
                                    </p>
                                </div>
                            </Motion.button>
                        ))}
                    </div>

                    <Motion.p
                        className="mt-14 text-[10px] text-white/20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                    >
                        Each profile unlocks a different side of me
                    </Motion.p>
                </Motion.div>
            )}
        </AnimatePresence>
    );
}