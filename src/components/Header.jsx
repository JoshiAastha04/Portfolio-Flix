import { Menu, Search, X, ChevronDown, LayoutGrid } from "lucide-react";
import myPhoto from "@/assets/me2.png";
import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { profiles } from "./profilesData";

function Header({ onToggleMobile, mobileOpen, onToggleAbout, query, setQuery, activeProfile, onSwitchProfile, onGoProfiles }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const current = profiles.find((p) => p.id === activeProfile?.id) || profiles[0];

    const handleSwitch = (profile) => {
        setDropdownOpen(false);
        onSwitchProfile(profile);
    };

    return (
        <header className="sticky top-0 z-40 w-full bg-gradient-to-b from-[#0b0b0b] to-transparent px-2 py-2 shadow-lg shadow-black/20 md:px-4 md:py-3">
            <div className="mx-auto flex w-full items-center justify-between px-2 md:px-4">
                <div className="flex items-center gap-3">
                    <button className="md:hidden" onClick={onToggleMobile} aria-label="Toggle menu">
                        {mobileOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
                    </button>

                    <div className="text-lg font-black tracking-tight text-white md:text-2xl">
                        <span className="text-red-600">Aastha Joshi</span>
                    </div>

                    <nav className="hidden gap-6 text-sm font-medium text-white/80 md:flex">
                        <a className="hover:text-white" href="#hero">Featured</a>
                        <a className="hover:text-white" href="#web">Web Apps</a>
                        <a className="hover:text-white" href="#mobile">Mobile</a>
                        <a className="hover:text-white" href="#game">Game Dev</a>
                        <a className="hover:text-white" href="#backend">Backend</a>
                        <button onClick={onToggleAbout} className="hover:text-white">About</button>
                    </nav>
                </div>

                <div className="flex items-center gap-3">
                    <div className="relative hidden items-center md:flex">
                        <Search className="absolute left-2 h-4 w-4 text-white/50" />
                        <input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search projects"
                            className="w-52 rounded-xl bg-white/10 px-8 py-2 pr-3 text-sm text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-white/30"
                        />
                    </div>

                    {/* Profile switcher */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setDropdownOpen((v) => !v)}
                            className="flex items-center gap-1.5 rounded-md p-0.5 hover:bg-white/10 transition-colors"
                            aria-label="Switch profile"
                        >
                            <div
                                className="h-8 w-8 overflow-hidden rounded-sm border border-white/20 flex items-center justify-center text-base"
                                style={{ background: `${current.color}22` }}
                            >
                                <span>{current.emoji}</span>
                            </div>
                            <ChevronDown className={`h-3.5 w-3.5 text-white/70 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                        </button>

                        <AnimatePresence>
                            {dropdownOpen && (
                                <Motion.div
                                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                                    transition={{ duration: 0.15, ease: "easeOut" }}
                                    className="absolute right-0 top-full mt-2 w-48 rounded-lg border border-white/10 bg-[#111] shadow-2xl overflow-hidden"
                                >
                                    <div className="absolute -top-1.5 right-3 h-3 w-3 rotate-45 border-l border-t border-white/10 bg-[#111]" />

                                    <div className="py-1">
                                        {profiles.map((profile) => (
                                            <button
                                                key={profile.id}
                                                onClick={() => handleSwitch(profile)}
                                                className="flex w-full items-center gap-3 px-3 py-2.5 text-left transition-colors hover:bg-white/10"
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
                                                    className="text-sm font-medium transition-colors"
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

                                    <div className="border-t border-white/10 px-3 py-2 flex flex-col gap-1">
                                        <button
                                            onClick={() => { setDropdownOpen(false); onGoProfiles?.(); }}
                                            className="flex w-full items-center gap-2 text-xs text-white/40 hover:text-white/70 transition-colors py-1"
                                        >
                                            <LayoutGrid className="h-3.5 w-3.5" />
                                            All profiles
                                        </button>
                                        <button
                                            onClick={() => { setDropdownOpen(false); onToggleAbout(); }}
                                            className="flex w-full items-center gap-2 text-xs text-white/40 hover:text-white/70 transition-colors"
                                        >
                                            <div className="h-5 w-5 overflow-hidden rounded-full border border-white/20 flex-shrink-0">
                                                <img src={myPhoto} alt="Profile" className="h-full w-full object-cover" />
                                            </div>
                                            About Me
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

export default Header;