import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, LayoutGrid } from "lucide-react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { profiles } from "./profilesData";

export default function SharedHeader({ activeProfile, onSwitchProfile, onGoProfiles }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        function handleClick(e) {
            if (ref.current && !ref.current.contains(e.target)) setDropdownOpen(false);
        }
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    const current = profiles.find((p) => p.id === activeProfile?.id) || profiles[0];

    return (
        <header className="sticky top-0 z-40 w-full bg-gradient-to-b from-[#0b0b0b] to-transparent px-4 py-3 shadow-lg shadow-black/20">
            <div className="flex w-full items-center justify-between px-4 md:px-10">
                {/* Logo */}
                <button
                    onClick={onGoProfiles}
                    className="text-lg font-black tracking-tight text-white hover:opacity-80 transition-opacity"
                >
                    <span className="text-red-600">Aastha</span>
                    <span className="text-white/30 text-sm font-light ml-1">portfolio</span>
                </button>

                {/* Right side */}
                <div className="flex items-center gap-3">
                    {/* Profile switcher */}
                    <div className="relative" ref={ref}>
                        <button
                            onClick={() => setDropdownOpen((v) => !v)}
                            className="flex items-center gap-1.5 rounded-md px-2 py-1 hover:bg-white/10 transition-colors"
                        >
                            <div
                                className="h-7 w-7 rounded-sm flex items-center justify-center text-base flex-shrink-0"
                                style={{ background: `${current.color}22` }}
                            >
                                {current.emoji}
                            </div>
                            <span className="hidden text-xs font-semibold text-white/70 sm:block">
                                {current.name}
                            </span>
                            <ChevronDown
                                className={`h-3.5 w-3.5 text-white/50 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                            />
                        </button>

                        <AnimatePresence>
                            {dropdownOpen && (
                                <Motion.div
                                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                                    transition={{ duration: 0.15 }}
                                    className="absolute right-0 top-full mt-2 w-48 rounded-lg border border-white/10 bg-[#111] shadow-2xl overflow-hidden"
                                >
                                    <div className="absolute -top-1.5 right-3 h-3 w-3 rotate-45 border-l border-t border-white/10 bg-[#111]" />
                                    <div className="py-1">
                                        {profiles.map((profile) => (
                                            <button
                                                key={profile.id}
                                                onClick={() => { setDropdownOpen(false); onSwitchProfile(profile); }}
                                                className="flex w-full items-center gap-3 px-3 py-2.5 text-left hover:bg-white/10 transition-colors"
                                            >
                                                <div
                                                    className="h-8 w-8 rounded flex-shrink-0 flex items-center justify-center text-sm"
                                                    style={{
                                                        background: `${profile.color}33`,
                                                        boxShadow: current.id === profile.id ? `0 0 0 2px ${profile.color}` : "none",
                                                    }}
                                                >
                                                    {profile.emoji}
                                                </div>
                                                <span
                                                    className="text-sm font-medium"
                                                    style={{ color: current.id === profile.id ? profile.color : "rgba(255,255,255,0.75)" }}
                                                >
                                                    {profile.name}
                                                </span>
                                                {current.id === profile.id && (
                                                    <span className="ml-auto text-[10px] text-white/30">active</span>
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="border-t border-white/10 px-3 py-2">
                                        <button
                                            onClick={() => { setDropdownOpen(false); onGoProfiles(); }}
                                            className="flex w-full items-center gap-2 text-xs text-white/40 hover:text-white/70 transition-colors"
                                        >
                                            <LayoutGrid className="h-3.5 w-3.5" />
                                            All profiles
                                        </button>
                                    </div>
                                </Motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </header>
    );
}