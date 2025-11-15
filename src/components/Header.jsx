import {Menu, Search, X} from "lucide-react";
import myPhoto from "@/assets/me2.png";
import React from "react";

function Header({ onToggleMobile, mobileOpen, onToggleAbout, query, setQuery }) {
    return (
        <header className="sticky top-0 z-40 w-full bg-gradient-to-b from-[#0b0b0b] to-transparent px-2 py-2 shadow-lg shadow-black/20 md:px-4 md:py-3">
            <div className="mx-auto flex w-full items-center justify-between px-2 md:px-4">
                <div className="flex items-center gap-3">
                    <button
                        className="md:hidden"
                        onClick={onToggleMobile}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? (
                            <X className="h-6 w-6 text-white" />
                        ) : (
                            <Menu className="h-6 w-6 text-white" />
                        )}
                    </button>

                    <div className="text-lg font-black tracking-tight text-white md:text-2xl">
                        <span className="text-red-600">Aastha Joshi</span>
                    </div>

                    <nav className="hidden gap-6 text-sm font-medium text-white/80 md:flex">
                        <a className="hover:text-white" href="#hero">
                            Featured
                        </a>
                        <a className="hover:text-white" href="#web">
                            Web Apps
                        </a>
                        <a className="hover:text-white" href="#mobile">
                            Mobile
                        </a>
                        <a className="hover:text-white" href="#game">
                            Game Dev
                        </a>
                        <a className="hover:text-white" href="#extracurricular">
                            Extracurricular
                        </a>
                        <a className="hover:text-white" href="#backend">
                            Backend
                        </a>
                        <button onClick={onToggleAbout} className="hover:text-white">
                            About
                        </button>
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

                    <button
                        onClick={onToggleAbout}
                        className="h-8 w-8 overflow-hidden rounded-full border border-white/20"
                    >
                        <img
                            src={myPhoto}
                            alt="Profile"
                            className="h-full w-full object-cover"
                        />
                    </button>
                </div>
            </div>
        </header>
    );
}
export default Header;