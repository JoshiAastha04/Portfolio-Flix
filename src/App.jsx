import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";

import ProfileSelect from "./components/ProfileSelect.jsx";
import PortfolioFlixUI from "./components/PortfolioFlixUI.jsx";
import MyStory from "./components/MyStory.jsx";
import InProgress from "./components/InProgress.jsx";
import HireMe from "./components/HireMe.jsx";
import tadum from "./assets/tadumAudiio.m4a";
import SharedHeader from "./components/ShareHeader.jsx";

// ── page wrapper with fade transition ──
function Page({ children, profileId }) {
    return (
        <Motion.div
            key={profileId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            {children}
        </Motion.div>
    );
}

export default function App() {
    const [showIntro, setShowIntro] = useState(true);
    const [showProfiles, setShowProfiles] = useState(false);
    const [activeProfile, setActiveProfile] = useState(null);

    const handleIntroFinish = () => {
        setShowIntro(false);
        setShowProfiles(true);
    };

    const handleProfileSelect = (profile) => {
        setActiveProfile(profile);
        setShowProfiles(false);
    };

    const handleSwitchProfile = (profile) => {
        setActiveProfile(profile);
    };

    const goToProfileSelect = () => {
        setActiveProfile(null);
        setShowProfiles(true);
    };

    if (showIntro) return <Intro onFinish={handleIntroFinish} />;
    if (showProfiles) return <ProfileSelect onSelect={handleProfileSelect} />;

    const id = activeProfile?.id ?? "projects";

    return (
        <AnimatePresence mode="wait">
            {id === "projects" && (
                <Page profileId="projects">
                    <PortfolioFlixUI
                        initialProfile={activeProfile}
                        onSwitchProfile={handleSwitchProfile}
                        onGoProfiles={goToProfileSelect}
                    />
                </Page>
            )}

            {id === "story" && (
                <Page profileId="story">
                    <SharedHeader
                        activeProfile={activeProfile}
                        onSwitchProfile={handleSwitchProfile}
                        onGoProfiles={goToProfileSelect}
                    />
                    <MyStory />
                </Page>
            )}

            {id === "inprogress" && (
                <Page profileId="inprogress">
                    <SharedHeader
                        activeProfile={activeProfile}
                        onSwitchProfile={handleSwitchProfile}
                        onGoProfiles={goToProfileSelect}
                    />
                    <InProgress />
                </Page>
            )}

            {id === "hireme" && (
                <Page profileId="hireme">
                    <SharedHeader
                        activeProfile={activeProfile}
                        onSwitchProfile={handleSwitchProfile}
                        onGoProfiles={goToProfileSelect}
                    />
                    <HireMe />
                </Page>
            )}
        </AnimatePresence>
    );
}

// Netflix intro
function Intro({ onFinish }) {
    const [step, setStep] = useState(0);
    const [soundEnabled, setSoundEnabled] = useState(false);
    const audioRef = useRef(null);
    const letters = ["A", "A", "S", "T", "H", "A"];

    useEffect(() => {
        const audio = new Audio(tadum);
        audio.volume = 1.0;
        audio.muted = true;
        audio.playsInline = true;
        audioRef.current = audio;
        audio.play().catch(() => {});

        const timers = [
            setTimeout(() => setStep(1), 500),
            setTimeout(() => setStep(2), 1400),
            setTimeout(() => setStep(3), 1500),
            setTimeout(() => setStep(4), 3000),
            setTimeout(() => onFinish(), 3800),
        ];
        return () => timers.forEach(clearTimeout);
    }, [onFinish]);

    const enableSound = () => {
        const audio = audioRef.current;
        if (!audio) return;
        audio.muted = false;
        audio.currentTime = 0;
        audio.play().catch(() => {});
        setSoundEnabled(true);
    };

    return (
        <div
            onClick={enableSound}
            className="relative flex items-center justify-center min-h-screen text-white font-extrabold tracking-tight cursor-pointer"
            style={{ background: "#000", userSelect: "none" }}
        >
            <div className="flex items-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl gap-1 netflix-arc">
                {letters.map((letter, i) => {
                    let classes = ["inline-block", "transition-all", "duration-500", "text-red-600", "netflix-pop", "netflix-sweep"];
                    if (i === 0) {
                        classes.push(step < 1 ? "opacity-10" : "opacity-100");
                        if (step === 2) classes.push("-translate-x-1");
                    } else {
                        if (step < 3) classes.push("opacity-100");
                        else classes.push(`intro-letter-${i}`, "animate-letter-reveal");
                    }
                    return (
                        <span key={i} className={classes.join(" ")} style={i === 0 ? {} : { animationDelay: `${0.12 * (i - 1)}s` }}>
                            {letter}
                        </span>
                    );
                })}
            </div>
            {!soundEnabled && (
                <div className="absolute bottom-30 left-1/2 -translate-x-1/2 text-white text-lg opacity-80 animate-pulse">
                    Tap to enable sound 🔊
                </div>
            )}
        </div>
    );
}