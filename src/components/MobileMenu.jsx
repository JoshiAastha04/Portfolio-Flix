import React from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";

function MobileMenu({ open, onToggleAbout }) {
    return (
        <AnimatePresence>
            {open && (
                <Motion.nav
                    className="md:hidden"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 160, damping: 20 }}
                >
                    <div className="space-y-2 bg-black/60 px-4 pb-4 pt-2 text-white backdrop-blur">
                        <a className="block" href="#hero">
                            Featured
                        </a>
                        <a className="block" href="#web">
                            Web Apps
                        </a>
                        <a className="block" href="#mobile">
                            Mobile
                        </a>
                        <a className="block" href="#game">
                            Game Dev
                        </a>
                        <a className="block" href="#extracurricular">
                            Extracurricular
                        </a>
                        <a className="block" href="#backend">
                            Backend
                        </a>
                        <button onClick={onToggleAbout} className="block w-full text-left">
                            About
                        </button>
                    </div>
                </Motion.nav>
            )}
        </AnimatePresence>
    );
}

export default MobileMenu;
