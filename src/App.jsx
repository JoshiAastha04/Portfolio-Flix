import React, { useEffect, useRef, useState } from "react";
import PortfolioNetflixUI from "./components/PortfolioFlixUI.jsx";
import tadum from "./assets/tadumAudiio.m4a";

function NetflixIntro() {
    const [visibleIndex, setVisibleIndex] = useState(-1);
    const audioRef = useRef(null);

    const letters = ["A", "A", "S", "T", "H", "A"];

    useEffect(() => {
        const audio = new Audio(tadum);
        audio.volume = 1.0;
        audio.muted = true;         // 🟢 allows autoplay
        audio.playsInline = true;
        audio.autoplay = true;

        audioRef.current = audio;

        audio.play().catch(() => {
            console.log("Muted autoplay only");
        });

        return () => audio.pause();
    }, []);

    useEffect(() => {
        letters.forEach((_, i) => {
            setTimeout(() => setVisibleIndex(i), i * 300);
        });
    }, []);

    const handleIntroClick = () => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.muted = false;    // unmute
        audio.currentTime = 0;  // restart
        audio.play().catch(console.error);
    };

    return (
        <div
            className="flex flex-col items-center justify-center h-screen bg-black text-[#e50914] cursor-pointer"
            onClick={handleIntroClick}
        >
            <div className="flex space-x-2 text-7xl tracking-[0.35em]">
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
            <p className="mt-4 text-neutral-400 text-sm">
                (click to enable sound 🔊)
            </p>
        </div>
    );
}

export default function App() {
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShowIntro(false), 3500);
        return () => clearTimeout(timer);
    }, []);

    return showIntro ? <NetflixIntro /> : <PortfolioNetflixUI />;
}
