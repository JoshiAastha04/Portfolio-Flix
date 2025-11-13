import React, { useMemo, useRef, useState } from "react";
import {
    ChevronLeft,
    ChevronRight,
    Play,
    Github,
    ExternalLink,
    Search,
    Menu,
    X,
    Mail,
    Linkedin,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// assets
import myPhoto from "../assets/pic.png";
import foodblog from "../assets/foodblog.png";
import airline from "../assets/airline.png";
import leveleditor from "../assets/elev8.png";
import adhdapp from "../assets/fkfa.png";
import studyplatform from "../assets/dct.png";
import keycard from "../assets/keycard.png";
import acm from "../assets/ACM.png";
import isa from "../assets/isa.png";
import ecom from "../assets/ecom.png";
import subdub from "../assets/subdub.png";

/* ================================
   Projects
================================== */
const sampleProjects = [
    {
        id: "p1",
        title: "Aastha Joshi",
        year: 2024,
        tags: ["Creative", "Communication", "Leadership"],
        category: "Web",
        description: "Full Stack Developer",
        image: myPhoto,
        links: {
            live: "https://linkedin.com/in/aasthajoshi23",
            code: "https://github.com/JoshiAastha04/Portfolio-Flix",
        },
        featured: true,
    },
    {
        id: "p2",
        title: "Food Blog",
        subtitle: "Personal Project",
        year: 2023,
        tags: ["HTML", "Tailwind CSS", "AWS"],
        category: "Web",
        description:
            "Developed a responsive food blog showcasing diverse vegetarian recipes with engaging UI using Tailwind CSS." +
            "Implemented interactive features for recipe descriptions with JavaScript to enhance user experience." +
            "Utilized AWS for hosting, ensuring reliable performance and accessibility." +
            "Employed best practices in web development for clean, maintainable code and user-friendly navigation..",
        image: foodblog,
        links: {
            live: "https://s3.us-east-2.amazonaws.com/aasthablog.click/blogindex.html",
            code: "https://github.com/JoshiAastha04/Blog-website",
        },
        featured: true,
    },
    {
        id: "p10",
        title: "E-Commerce Store",
        subtitle: "Personal Project",
        year: 2025,
        tags: ["React", "Node.js", "MongoDB"],
        category: "Web",
        description:
            "Currently Developing a full-stack e commerce platform with seamless shopping experience, secure payments." +
            "Integrated Stripe payment gateway for secure transactions." +
            "Utilizing mongodb for efficient product and user data management and Node.js for backend Services.",
        image: ecom,
        links: {
            live: "",
            code: "#",
        },
        featured: false,
    },
    {
        id: "p3",
        title: "ADHD Social App",
        subtitle: "Hackathon Project",
        year: 2025,
        tags: ["Mobile", "Flutter"],
        category: "Mobile",
        description:
            "BeReal-style task check-ins with selfies, chat, and coin rewards." +
            "Developed a Flask backend API for social media platform designed for ADHD users, supporting user auth, task based posts and reactions." +
            "Integrated bcrypt password hashing for auth and stored images in static folder, serving them via API endpoints.",
        image: adhdapp,
        links: { code: "https://github.com/babyzibaa/FKFA2" },
        featured: false,
    },
    {
        id: "p4",
        title: "Study Config Platform",
        subtitle: "NSF Sponsored Summer Internship",
        year: 2025,
        tags: ["FastAPI", "PostgreSQL", "Next.js"],
        category: "Web",
        description:
            "Engineering a full encrypted data collection tool using FastAPI(Python), secured with AES encryption and\n" +
            "role-based access to enure HIPAA compliance.\n" +
            "Developing an user-friendly frontend components using React.js, ensuring accessibility and responsiveness across\n" +
            "devices.",
        image: studyplatform,
        links: { code: "https://github.com/cfd-summer-internship" },
        featured: false,
    },
    {
        id: "p5",
        title: "Elev8",
        subtitle: "Group Project",
        year: 2025,
        tags: ["Godot", "GDScript", "json"],
        category: "Game",
        description:
            "Mini Game engine with Seamless UI to make it easy for users to get started in their platformer developing journey." +
            "Used Godot and GdScript to build the UI, load level, and demo level." +
            "All the changes made in level editor is saved locally.",
        image: leveleditor,
        links: { code: "https://github.com/amyktruongdev/Elev8" },
        featured: false,
    },
    {
        id: "p6",
        title: "Key Card.net",
        subtitle: "Group Project",
        year: 2025,
        tags: [".NET", "C#", "Blazor"],
        category: "Web",
        description:
            "Guest-facing portal for booking, payment, check-in, booking verification, and digital room keys.",
        image: keycard,
        links: { code: "https://github.com/NimaShafie/keycard.net" },
        featured: false,
    },
    {
        id: "p7",
        title: "Airline Reservation System",
        subtitle: "Group Project",
        year: 2024,
        tags: ["Spring Boot", "JSP", "Postgres"],
        category: "Web",
        description:
            "Developed a full-stack flight reservation system using JSP for a dynamic user interface and Spring Boot(Java) for backend services." +
            "Implementing RESTful APIs for seamless communication between frontend and backend using JSON," +
            "ensuring real-time flight search and booking capabilities." +
            "PostgreSQL database to manage user accounts, flight data, and booking transactions effectively." +
            "Integrated secure user authentication with JWT tokens, allowing users to manage their bookings safely and efficiently.",
        image: airline,
        links: { code: "https://github.com/MSantoscoy/MITA-projDev" },
        featured: true,
    },
    {
        id: "p8",
        title: "ACM",
        subtitle: "Vice President",
        year: 2023,
        tags: ["TeamWork", "Willing to Adapt", "Problem Solving"],
        category: "extracurricular",
        description: "Organised Events like Leetcode Workshop to help students",
        image: acm,
        links: { live: "#" },
        featured: false,
    },
    {
        id: "p9",
        title: "ISA",
        subtitle: "Secretary",
        year: 2024,
        tags: ["Leadership", "Collaboration", "Accountabilty"],
        category: "extracurricular",
        description:
            "Organised events to promote Indian Culture and build a community." +
            "Cultural events made students feel like home away from home.",
        image: isa,
        links: { live: "#" },
        featured: false,
    },
    {
        id: "p11",
        title: "Subscription Tracker",
        subtitle: "Personal Project",
        year: 2024,
        tags: ["Node.js", "MongoDb", "NodeMailer", "express.js"],
        category: "backend",
        description:
            "JWT-based authentication system with secure user login and signup. RESTful APIs for managing users, subscriptions, billing cycles, and payments" +
            "Automated email notifications for subscription renewals and payment reminders" +
            "Postman-tested API collection for robust and consistent endpoint testing" +
            "Scalable database schema using MongoDB, optimized for recurring subscriptions",
        image: subdub,
        links: { code: "https://github.com/JoshiAastha04/Subscription_tracker" },
        featured: false,
    },
];

/* ================================
   REUSABLE UI
================================== */
function ProjectCard({ project, onOpen }) {
    const tagsSafe = Array.isArray(project.tags) ? project.tags : [];
    return (
        <motion.button
            layout
            onClick={() => onOpen(project)}
            className="group relative aspect-video w-[70vw] sm:w-[44vw] md:w-[24vw] lg:w-[18vw] xl:w-[16vw] 2xl:w-[14vw] shrink-0 overflow-hidden rounded-2xl bg-[#232323]"
            whileHover={{ scale: 1.05, y: -4 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
        >
            <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
            />

            <div className="pointer-events-none absolute left-2 top-2 rounded-full bg-black/70 px-2 py-0.5 text-[10px] font-medium text-white">
                {project.year}
            </div>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="flex items-center gap-2">
          <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] text-white">
            {project.category}
          </span>
                    {tagsSafe.slice(0, 2).map((t) => (
                        <span
                            key={t}
                            className="rounded bg-white/10 px-2 py-0.5 text-[10px] text-white"
                        >
              {t}
            </span>
                    ))}
                </div>
                <h4 className="mt-1 line-clamp-1 text-left text-sm font-semibold text-white">
                    {project.title}
                </h4>
                <p className="line-clamp-1 text-left text-[11px] text-white/70">
                    {project.subtitle}
                </p>
            </div>
        </motion.button>
    );
}

function Row({ title, items, onOpen }) {
    const scrollerRef = useRef(null);
    const slide = (dir) => {
        const el = scrollerRef.current;
        if (!el) return;
        const delta = Math.round(el.clientWidth * 0.9);
        el.scrollBy({ left: dir === "left" ? -delta : delta, behavior: "smooth" });
    };

    if (!items?.length) return null;

    return (
        <section className="relative">
            <h3 className="mb-3 px-4 text-base font-semibold text-white md:px-8 md:text-lg">
                {title}
            </h3>

            {/* hide arrows on mobile, show md+ */}
            <button
                aria-label="Scroll left"
                onClick={() => slide("left")}
                className="hidden md:inline-flex absolute left-1 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/60 p-2 backdrop-blur hover:bg-black/80"
            >
                <ChevronLeft className="h-5 w-5 text-white" />
            </button>

            <div
                ref={scrollerRef}
                className="scrollbar-none relative flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-1 md:gap-4 md:px-8"
            >
                {items.map((p) => (
                    <ProjectCard key={p.id} project={p} onOpen={onOpen} />
                ))}
            </div>

            <button
                aria-label="Scroll right"
                onClick={() => slide("right")}
                className="hidden md:inline-flex absolute right-1 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/60 p-2 backdrop-blur hover:bg-black/80"
            >
                <ChevronRight className="h-5 w-5 text-white" />
            </button>
        </section>
    );
}

function ProjectModal({ open, onClose, project }) {
    return (
        <AnimatePresence>
            {open && project && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="w-full max-w-3xl overflow-hidden rounded-2xl bg-[#111] ring-1 ring-white/10"
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                    >
                        {/* image banner */}
                        <div className="relative aspect-video w-full">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                            <div className="absolute bottom-3 left-3 flex flex-wrap items-center gap-2">
                                <button className="inline-flex items-center gap-2 rounded-xl bg-white/95 px-3 py-1.5 text-sm font-semibold text-black hover:bg-white">
                                    <Play className="h-4 w-4" /> Preview
                                </button>
                                {project.links.code && (
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href={project.links.code}
                                        className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-1.5 text-sm font-semibold text-white hover:bg-white/20"
                                    >
                                        <Github className="h-4 w-4" /> Code
                                    </a>
                                )}
                                {project.links.live && (
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href={project.links.live}
                                        className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-1.5 text-sm font-semibold text-white hover:bg-white/20"
                                    >
                                        <ExternalLink className="h-4 w-4" /> Live
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* content */}
                        <div className="space-y-3 p-5">
                            <div className="flex flex-wrap items-center justify-between gap-3">
                                <div>
                                    <h3 className="text-lg font-bold text-white md:text-xl">
                                        {project.title}
                                    </h3>
                                    <p className="text-xs text-white/70 md:text-sm">
                                        {project.subtitle}
                                    </p>
                                </div>
                                <div className="flex flex-wrap items-center gap-2 text-[11px] text-white/80">
                  <span className="rounded bg-white/10 px-2 py-0.5">
                    {project.category}
                  </span>
                                    {(project.tags || []).map((t) => (
                                        <span
                                            key={t}
                                            className="rounded bg-white/10 px-2 py-0.5"
                                        >
                      {t}
                    </span>
                                    ))}
                                </div>
                            </div>
                            <p className="text-xs leading-6 text-white/80 md:text-sm">
                                {project.description}
                            </p>
                        </div>

                        <div className="flex justify-end gap-3 border-t border-white/10 p-4">
                            <button
                                onClick={onClose}
                                className="rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20"
                            >
                                Close
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

function Banner({ project, onOpen }) {
    if (!project) return null;
    return (
        <section
            id="hero"
            className="relative h-[52vh] md:h-[60vh] w-full overflow-hidden rounded-b-3xl bg-[#0b0b0b]"
        >
            <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-[#0b0b0b]/40 to-transparent" />

            {/* text overlay */}
            <div className="relative z-10 mx-auto flex h-full w-full max-w-[100rem] flex-col justify-end px-4 pb-8 md:px-10 md:pb-10">
                <h2 className="max-w-2xl text-2xl font-black tracking-tight text-white sm:text-3xl md:text-5xl">
                    {project.title}
                </h2>
                <p className="mt-2 max-w-xl text-xs text-white/80 sm:text-sm md:mt-3 md:text-lg">
                    {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                    <button
                        onClick={() => onOpen(project)}
                        className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-xs font-semibold text-black hover:bg:white/90 sm:text-sm"
                    >
                        <Play className="h-4 w-4" /> Open
                    </button>
                    {project.links.code && (
                        <a
                            href={project.links.code}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 text-xs font-semibold text-white hover:bg-white/20 sm:text-sm"
                        >
                            <Github className="h-4 w-4" /> View Code
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
}

/* ================================
   HEADER + MOBILE MENU
================================== */
function Header({ onToggleMobile, mobileOpen, onToggleAbout, query, setQuery }) {
    return (
        <header className="sticky top-0 z-40 w-full bg-gradient-to-b from-[#0b0b0b] to-transparent shadow-lg shadow-black/20 px-2 py-2 md:px-4 md:py-3">
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
                        <a className="hover:text:white" href="#hero">
                            Featured
                        </a>
                        <a className="hover:text:white" href="#web">
                            Web Apps
                        </a>
                        <a className="hover:text:white" href="#mobile">
                            Mobile
                        </a>
                        <a className="hover:text:white" href="#game">
                            Game Dev
                        </a>
                        <a className="hover:text:white" href="#extracurricular">
                            Extracurricular
                        </a>
                        <a className="hover:text:white" href="#backend">
                            Backend
                        </a>
                        <button onClick={onToggleAbout} className="hover:text:white">
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
                            className="w-52 rounded-xl bg:white/10 pl-8 pr-3 py-2 text-sm text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring:white/30"
                        />
                    </div>

                    <button
                        onClick={onToggleAbout}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-purple-600 ring-2 ring-white/20 hover:scale-105 hover:ring:white/40 transition-transform"
                        title="About Me"
                    >
                        <span className="sr-only">About Me</span>
                    </button>
                </div>
            </div>
        </header>
    );
}

function MobileMenu({ open, onToggleAbout }) {
    return (
        <AnimatePresence>
            {open && (
                <motion.nav
                    className="md:hidden"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
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
                </motion.nav>
            )}
        </AnimatePresence>
    );
}

/* ================================
   ABOUT SIDE PANEL
================================== */
function AboutPanel({ open, onClose }) {
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    role="dialog"
                    aria-modal="true"
                    aria-label="About Me"
                    className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.aside
                        className="h-full w-full sm:w-96 bg-[#111] text-white shadow-[0_0_40px_rgba(0,0,0,0.6)] ring-1 ring-white/10 p-6 flex flex-col"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 140, damping: 18 }}
                        onClick={(e) => e.stopPropagation()}
                        onKeyDown={(e) => e.key === "Escape" && onClose()}
                        tabIndex={-1}
                    >
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold tracking-tight">About Me</h3>
                            <button
                                onClick={onClose}
                                className="rounded-md bg-white/10 p-1.5 hover:bg:white/20"
                                aria-label="Close About panel"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <div className="mt-4 flex flex-col items-center text-center">
                            <div className="relative">
                                <img
                                    src={myPhoto}
                                    alt="Aastha Joshi"
                                    className="h-20 w-20 rounded-full ring-2 ring:white/20 object-cover shadow-lg"
                                />
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500/40 to-purple-600/40 blur-md opacity-70 animate-pulse" />
                            </div>

                            <h4 className="mt-2 text-white font-semibold text-base">
                                Aastha Joshi
                            </h4>
                            <p className="mt-1 text-xs text-white/60">
                                Full-Stack Developer
                            </p>
                        </div>

                        <div className="mt-4 space-y-4 text-sm text-white/80">
                            <p className="leading-6 text-xs sm:text-sm">
                                Hey there! I’m Aastha Joshi, a CompSci student at Cal State
                                Northridge, and a passionate Full Stack Developer who loves
                                bringing creative ideas to life through code. My portfolio
                                showcases projects that blend design and functionality, from
                                full-stack web apps to mobile experiences and even a bit game
                                development. I’ve built everything from an e-commerce store and
                                a flight reservation system to an ADHD support app and data
                                collection tools using technologies like React, Spring Boot,
                                FastAPI, and PostgreSQL. Beyond coding, I’m also active in
                                leadership roles as the Vice President of ACM and Secretary of
                                ISA, where I enjoy collaborating, organizing events, and
                                empowering others in tech. For me, development is all about
                                creating meaningful digital experiences that inspire and connect
                                people.
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {[
                                    "HTML/CSS (Tailwind)",
                                    "Javascript",
                                    "React.js",
                                    "Spring Boot(Java)",
                                    "FastAPI(Python)",
                                    "PostgreSQL",
                                    "MongoDB",
                                ].map((t) => (
                                    <span
                                        key={t}
                                        className="rounded-full bg-white/10 px-3 py-1 text-xs"
                                    >
                    {t}
                  </span>
                                ))}
                            </div>

                            <div className="mt-2 grid grid-cols-3 gap-2 border-t border-white/10 pt-4">
                                <a
                                    href="https://github.com/joshiaastha04"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex flex-col items-center gap-1 rounded-xl bg-white/5 p-3 hover:bg:white/10"
                                >
                                    <Github className="h-5 w-5" />
                                    <span className="text-xs text-white/80 group-hover:text:white">
                    GitHub
                  </span>
                                </a>
                                <a
                                    href="https://linkedin.com/in/aasthajoshi23"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex flex-col items-center gap-1 rounded-xl bg-white/5 p-3 hover:bg:white/10"
                                >
                                    <Linkedin className="h-5 w-5" />
                                    <span className="text-xs text-white/80 group-hover:text:white">
                    LinkedIn
                  </span>
                                </a>
                                <a
                                    href="mailto:aasthajoshi3010@gmail.com"
                                    className="group flex flex-col items-center gap-1 rounded-xl bg-white/5 p-3 hover:bg:white/10"
                                >
                                    <Mail className="h-5 w-5" />
                                    <span className="text-xs text-white/80 group-hover:text:white">
                    Email
                  </span>
                                </a>
                            </div>
                        </div>

                        <div className="mt-auto flex items-center justify-between border-t border:white/10 pt-4">
              <span className="text-xs text-white/50">
                © {new Date().getFullYear()} Aastha Joshi
              </span>
                            <button className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-semibold hover:bg:white/20">
                                Close
                            </button>
                        </div>
                    </motion.aside>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

/* ================================
   MAIN PAGE
================================== */
export default function PortfolioNetflixUI() {
    const [query, setQuery] = useState("");
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeProject, setActiveProject] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);

    // pick the newest featured project (by year)
    const featuredProject = useMemo(() => {
        const feats = sampleProjects.filter((p) => p.featured);
        if (!feats.length) return null;
        return feats.reduce((a, b) => (a.year >= b.year ? a : b));
    }, []);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return sampleProjects;
        return sampleProjects.filter(
            (p) =>
                p.title.toLowerCase().includes(q) ||
                p.subtitle?.toLowerCase().includes(q) ||
                (Array.isArray(p.tags) &&
                    p.tags.join(" ").toLowerCase().includes(q))
        );
    }, [query]);

    // rows: exclusive buckets (no duplicates across rows)
    const rows = useMemo(() => {
        const list = Array.isArray(filtered) ? filtered : [];
        const used = new Set();
        const uniq = (arr) =>
            arr.filter((p) => {
                if (used.has(p.id)) return false;
                used.add(p.id);
                return true;
            });

        const featured = uniq(list.filter((p) => p.featured));
        const web = uniq(list.filter((p) => p.category === "Web"));
        const mobile = uniq(list.filter((p) => p.category === "Mobile"));
        const game = uniq(list.filter((p) => p.category === "Game"));
        const backend = uniq(list.filter((p) => p.category === "backend"));
        const extracurricular = uniq(
            list.filter((p) => p.category === "extracurricular")
        );
        const rest = uniq(list);

        return [
            { id: "featured", title: "Featured Projects", items: featured },
            { id: "web", title: "Web Apps", items: web },
            { id: "mobile", title: "Mobile", items: mobile },
            { id: "game", title: "Game Development", items: game },
            { id: "backend", title: "Backend Development", items: backend },
            {
                id: "extracurricular",
                title: "Extracurricular",
                items: extracurricular,
            },
            { id: "all", title: "All Projects", items: rest },
        ];
    }, [filtered]);

    const openProject = (p) => {
        setActiveProject(p);
        setModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-[#0b0b0b] text-white">
            <Header
                onToggleMobile={() => setMobileOpen((v) => !v)}
                mobileOpen={mobileOpen}
                onToggleAbout={() => setAboutOpen(true)}
                query={query}
                setQuery={setQuery}
            />
            <MobileMenu
                open={mobileOpen}
                onToggleAbout={() => setAboutOpen(true)}
            />

            {/* mobile search */}
            <div className="mx-auto mt-2 block w-full px-4 md:hidden">
                <div className="relative">
                    <Search className="absolute left-2 h-4 w-4 text-white/50" />
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search projects"
                        className="w-full rounded-xl bg-white/10 pl-8 pr-3 py-2 text-sm text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring:white/30"
                    />
                </div>
            </div>

            {/* hero banner (full-bleed) */}
            <Banner project={featuredProject} onOpen={openProject} />

            {/* rows */}
            <main className="mt-4 grid w-full gap-8 pb-10">
                {rows.map((row) => (
                    <div key={row.id} id={row.id} className="px-0 scroll-mt-24">
                        <Row title={row.title} items={row.items} onOpen={openProject} />
                    </div>
                ))}
            </main>

            {/* footer */}
            <section className="mt-4 w-full px-6 md:px-10">
                <footer className="mt-2 flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-white/60 md:flex-row md:text-sm">
                    <div>© {new Date().getFullYear()} Aastha Joshi</div>
                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/joshiaastha04"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text:white"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://linkedin.com/in/aasthajoshi23"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text:white"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="mailto:aasthajoshi3010@gmail.com"
                            className="hover:text:white"
                        >
                            Email
                        </a>
                    </div>
                </footer>
            </section>

            {/* panels & modals */}
            <>
                <AboutPanel open={aboutOpen} onClose={() => setAboutOpen(false)} />
                <ProjectModal
                    open={modalOpen}
                    onClose={() => setModalOpen(false)}
                    project={activeProject}
                />
            </>
        </div>
    );
}
