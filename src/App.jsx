// src/App.jsx
import React, { useEffect, useRef, useState } from "react";
import PortfolioNetflixUI from "./components/PortfolioFlixUI.jsx";
import tadum from "./assets/tadumAudiio.m4a";

// 🚨 NOTE: no types like : string[] or : HTMLAudioElement in JSX files

function NetflixIntro() {
    const [visibleIndex, setVisibleIndex] = useState(-1);
    const audioRef = useRef(null);

    const letters = ["A", "A", "S", "T", "H", "A"];

    // set up audio once on mount
    useEffect(() => {
        const audio = new Audio(tadum);
        audio.volume = 1.0;
        audio.muted = true; // allow autoplay on mobile/desktop
        audio.playsInline = true;

        audioRef.current = audio;

        // try muted autoplay (some browsers let this run)
        audio
            .play()
            .catch(() => {
                // it's okay if this fails; we'll play on tap
            });

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    // reveal letters one by one
    useEffect(() => {
        const timeouts = letters.map((_, i) =>
            setTimeout(() => setVisibleIndex(i), i * 300)
        );

        return () => {
            timeouts.forEach((t) => clearTimeout(t));
        };
        // we can safely ignore letters here since it's a constant
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleIntroClick = () => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.muted = false; // unmute
        audio.currentTime = 0; // restart
        audio.play().catch(console.error);
    };

    return (
        <div
            onClick={handleIntroClick}
            className="flex flex-col items-center justify-center min-h-screen w-full bg-black text-[#e50914] px-4"
            style={{
                paddingTop: "env(safe-area-inset-top)",
                paddingBottom: "env(safe-area-inset-bottom)",
            }}
        >
            {/* Netflix-style letters */}
            <div className="flex space-x-1 xs:space-x-2 text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-[0.15em] sm:tracking-[0.3em]">
                {letters.map((letter, i) => (
                    <span
                        key={i}
                        className={`transition-opacity duration-500 ${
                            i <= visibleIndex ? "opacity-100" : "opacity-0"
                        }`}
                    >
            {letter}
          </span>
                ))}
            </div>

            {/* helper text */}
            <p className="mt-4 text-[11px] sm:text-sm text-neutral-400 text-center">
                Tap to enable sound 🔊
            </p>
        </div>
    );
}

export default function App() {
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowIntro(false);
        }, 3500); // long enough for letters + sound

        return () => clearTimeout(timer);
    }, []);

    return showIntro ? <NetflixIntro /> : <PortfolioNetflixUI />;
}
