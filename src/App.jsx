import React, { useState, useEffect, useRef } from "react";
import PortfolioFlixUI from "./components/PortfolioFlixUI";
import tadum from "./assets/tadumAudiio.m4a";

// =======================
// MAIN APP
// =======================

export default function App() {
    const [showIntro, setShowIntro] = useState(true);

    return showIntro ? (
        <Intro onFinish={() => setShowIntro(false)} />
    ) : (
        <PortfolioFlixUI />
    );
}

// =======================
// NETFLIX-STYLE INTRO
// =======================

function Intro({ onFinish }) {
    const [step, setStep] = useState(0);
    const [soundEnabled, setSoundEnabled] = useState(false);
    const audioRef = useRef(null);

    const letters = ["A", "A", "S", "T", "H", "A"];


    // AUDIO + TIMERS
    useEffect(() => {
        const audio = new Audio(tadum);
        audio.volume = 1.0;
        audio.muted = true;   // must start muted for autoplay
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


    // TAP TO ENABLE SOUND
    const enableSound = () => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.muted = false;
        audio.currentTime = 0;
        audio.play().catch(() => {});

        setSoundEnabled(true); // hide text after tap
    };

    // UI
    return (
        <div
            onClick={enableSound}
            className="relative flex items-center justify-center min-h-screen text-white font-extrabold tracking-tight cursor-pointer"
            style={{
                background: "#000",
                userSelect: "none",
            }}
        >
            {/* LETTER ANIMATION */}
            <div className="flex items-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl gap-1 netflix-arc">
                {letters.map((letter, i) => {
                    let classes = [
                        "inline-block",
                        "transition-all",
                        "duration-500",
                        "text-red-600",
                        "netflix-pop",
                        "netflix-sweep"
                    ];

                    if (i === 0) {
                        // Main A
                        classes.push(step < 1 ? "opacity-10" : "opacity-100");

                        if (step === 2) classes.push("-translate-x-1");
                    } else {
                        // Remaining letters
                        if (step < 3) classes.push("opacity-100");
                        else {
                            classes.push(`intro-letter-${i}`, "animate-letter-reveal");
                        }
                    }

                    return (
                        <span
                            key={i}
                            className={classes.join(" ")}
                            style={i === 0 ? {} : { animationDelay: `${0.12 * (i - 1)}s` }}
                        >
            {letter}
        </span>
                    );
                })}

            </div>

            {/* TAP TO ENABLE SOUND MESSAGE */}
            {!soundEnabled && (
                <div
                    className="absolute bottom-30 left-1/2 -translate-x-1/2
                               text-white text-lg opacity-80
                               animate-pulse"
                >
                    Tap to enable sound 🔊
                </div>
            )}
        </div>
    );
}
