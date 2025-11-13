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
    const audioRef = useRef(null);

    const letters = ["A", "A", "S", "T", "H", "A"];

    useEffect(() => {
        const audio = new Audio(tadum);
        audio.volume = 1.0;
        audio.muted = true;
        audio.playsInline = true;
        audioRef.current = audio;

        audio.play().catch(() => {});

        // animation timeline
        const timers = [
            setTimeout(() => setStep(1), 500),   // show first A
            setTimeout(() => setStep(2), 1400),  // slide first A left
            setTimeout(() => setStep(3), 1500),  // reveal rest
            setTimeout(() => setStep(4), 3000),  // hold / pulse
            setTimeout(() => onFinish(), 3800),  // go to main UI
        ];

        return () => timers.forEach(clearTimeout);
    }, [onFinish]);

    const enableSound = () => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.muted = false;
        audio.currentTime = 0;
        audio.play().catch(() => {});
    };

    return (
        <div
            onClick={enableSound}
            className="flex items-center justify-center min-h-screen text-white font-extrabold tracking"
            style={{
                background: "radial-gradient(circle at center, #e50914 0%, #000 70%)",
                userSelect: "none",
            }}
        >
            <div className="flex items-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl">

                {letters.map((letter, i) => {
                    let base = "inline-block transition-all duration-500";

                    if (i === 0) {
                        // FIRST A
                        if (step < 1) {
                            base += " opacity-0";          // hidden
                        } else {
                            base += " opacity-100";        // visible after step 1
                        }

                        if (step === 2) {
                            // slide only DURING step 2
                            base += " -translate-x-10";     // small left shift
                        }
                    } else {
                        // (A S T H A)
                        if (step < 3) {
                            base += " opacity-0";
                        } else {
                            base += " opacity-0 animate-letter-reveal";
                        }
                    }

                    return (
                        <span
                            key={i}
                            className={base}
                            style={
                                i === 0
                                    ? {}
                                    : { animationDelay: `${0.12 * (i - 1)}s` }
                            }
                        >
      {letter}
    </span>
                    );
                })}

            </div>
        </div>
    );
}
