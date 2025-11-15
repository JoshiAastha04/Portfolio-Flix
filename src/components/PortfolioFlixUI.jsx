import React, { useMemo, useState } from "react";

import ProjectCard from "./ProjectCard.jsx";
import ProjectModal from "./ProjectModal.jsx";

import Header from "./Header.jsx";
import MobileMenu from "./MobileMenu.jsx";
import AboutPanel from "./AboutPanel.jsx";
import Row from "./Row.jsx";
import Banner from "./Banner.jsx";

import { Search } from "lucide-react";


// assets
import myphoto2 from "../assets/pic.png";
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

//PROJECT DATA
const Projects = [
    {
        id: "p1",
        title: "Aastha Joshi",
        tags: ["Creative", "Communication", "Leadership"],
        category: "",
        year: 2025,
        description:
            "Built this portfolio Netflix-style...\nNow imagine what I'll build for your company ;)",
        image: myphoto2,
        links: {
            live: "https://linkedin.com/in/aasthajoshi23",
            code: "https://github.com/JoshiAastha04/Portfolio-Flix",
        },
        featured: true,
    },
    {
        id: "p5",
        title: "Food Blog",
        subtitle: "Personal Project",
        year: 2023,
        tags: ["HTML", "Tailwind CSS", "AWS"],
        category: "Web",
        description:
            "Developed a responsive food blog showcasing diverse vegetarian recipes with engaging UI using Tailwind CSS. " +
            "Implemented interactive features for recipe descriptions with JavaScript to enhance user experience. " +
            "Utilized AWS for hosting, ensuring reliable performance and accessibility. " +
            "Employed best practices in web development for clean, maintainable code and user-friendly navigation.",
        image: foodblog,
        links: {
            live: "https://s3.us-east-2.amazonaws.com/aasthablog.click/blogindex.html",
            code: "https://github.com/JoshiAastha04/Blog-website",
        },
        featured: true,
    },
    {
        id: "p3",
        title: "E-Commerce Store",
        subtitle: "Personal Project",
        year: 2025,
        tags: ["React", "Node.js", "MongoDB"],
        category: "Web",
        description:
            "Currently developing a full-stack e-commerce platform with seamless shopping experience and secure payments. " +
            "Integrated Stripe payment gateway for secure transactions. " +
            "Utilizing MongoDB for efficient product and user data management and Node.js for backend services.",
        image: ecom,
        links: {
            live: "",
            code: "#",
        },
        featured: false,
    },
    {
        id: "p4",
        title: "ADHD Social App",
        subtitle: "Hackathon Project",
        year: 2025,
        tags: ["Mobile", "Flutter"],
        category: "Mobile",
        description:
            "BeReal-style task check-ins with selfies, chat, and coin rewards. " +
            "Developed a Flask backend API for a social media platform designed for ADHD users, supporting user auth, task-based posts and reactions. " +
            "Integrated bcrypt password hashing for auth and served images via API endpoints.",
        image: adhdapp,
        links: { code: "https://github.com/babyzibaa/FKFA2" },
        featured: false,
    },
    {
        id: "p2",
        title: "Data Collection Tool",
        subtitle: "NSF Sponsored Summer Internship",
        year: 2025,
        tags: ["FastAPI", "PostgreSQL", "Next.js"],
        category: "Web",
        description:
            "Engineering a fully encrypted data collection tool using FastAPI (Python), secured with AES encryption and " +
            "role-based access to ensure HIPAA compliance. Developing user-friendly frontend components using React/Next.js.",
        image: studyplatform,
        links: { code: "https://github.com/cfd-summer-internship" },
        featured: true,
    },
    {
        id: "p6",
        title: "Elev8",
        subtitle: "Group Project",
        year: 2025,
        tags: ["Godot", "GDScript", "JSON"],
        category: "Game",
        description:
            "Mini game engine with seamless UI to make it easy for users to get started in their platformer journey. " +
            "Built in Godot + GDScript with level editing, saving, and a demo level.",
        image: leveleditor,
        links: { code: "https://github.com/amyktruongdev/Elev8" },
        featured: false,
    },
    {
        id: "p7",
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
        id: "p8",
        title: "Airline Reservation System",
        subtitle: "Group Project",
        year: 2024,
        tags: ["Spring Boot", "JSP", "Postgres"],
        category: "Web",
        description:
            "Developed a full-stack flight reservation system using JSP for dynamic UI and Spring Boot for backend services. " +
            "Implemented RESTful APIs for real-time flight search and booking. " +
            "Used PostgreSQL to manage user accounts, flight data, and booking transactions. " +
            "Integrated JWT-based auth so users can safely manage their bookings.",
        image: airline,
        links: { code: "https://github.com/MSantoscoy/MITA-projDev" },
        featured: false,
    },
    {
        id: "p9",
        title: "ACM",
        subtitle: "Vice President",
        year: 2023,
        tags: ["Teamwork", "Willing to Adapt", "Problem Solving"],
        category: "extracurricular",
        description: "Organised events like LeetCode workshops to help students grow in problem solving.",
        image: acm,
        links: { live: "#" },
        featured: false,
    },
    {
        id: "p10",
        title: "ISA",
        subtitle: "Secretary",
        year: 2024,
        tags: ["Leadership", "Collaboration", "Accountability"],
        category: "extracurricular",
        description:
            "Organised events to promote Indian culture and build a community. " +
            "Cultural events helped students feel at home away from home.",
        image: isa,
        links: { live: "#" },
        featured: false,
    },
    {
        id: "p11",
        title: "Subscription Tracker",
        subtitle: "Personal Project",
        year: 2024,
        tags: ["Node.js", "MongoDB", "NodeMailer", "Express.js"],
        category: "backend",
        description:
            "JWT-based auth with secure login/signup. RESTful APIs for users, subscriptions, billing cycles, and payments. " +
            "Automated email notifications for renewals and reminders. " +
            "Postman-tested endpoints and a scalable MongoDB schema for recurring subscriptions.",
        image: subdub,
        links: { code: "https://github.com/JoshiAastha04/Subscription_tracker" },
        featured: false,
    },
];


/* ================================
   MAIN PAGE
================================== */
export default function PortfolioNetflixUI() {
    const [query, setQuery] = useState("");
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeProject, setActiveProject] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);

    // pick the newest featured project
    const featuredProject = useMemo(() => {
        const feats = Projects.filter((p) => p.featured);
        if (!feats.length) return null;
        return feats.reduce((a, b) => (a.year >= b.year ? a : b));
    }, []);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return Projects;
        return Projects.filter((p) => {
            const inTitle = p.title.toLowerCase().includes(q);
            const inSubtitle = p.subtitle?.toLowerCase().includes(q);
            const inTags =
                Array.isArray(p.tags) &&
                p.tags.join(" ").toLowerCase().includes(q);

            return inTitle || inSubtitle || inTags;
        });
    }, [query]);

    const rows = useMemo(() => {
        const list = Array.isArray(filtered) ? filtered : [];

        const uniqueAll = Array.from(new Map(list.map((p) => [p.id, p])).values());

        const featured = list.filter((p) => p.featured);
        const web = list.filter((p) => p.category === "Web");
        const mobile = list.filter((p) => p.category === "Mobile");
        const game = list.filter((p) => p.category === "Game");
        const backend = list.filter((p) => p.category === "backend");
        const extracurricular = list.filter(
            (p) => p.category === "extracurricular"
        );

        return [
            { id: "featured", title: "Featured Projects", items: featured },
            { id: "web", title: "Web Apps", items: web },
            { id: "mobile", title: "Mobile", items: mobile },
            { id: "game", title: "Game Development", items: game },
            { id: "backend", title: "Backend Development", items: backend },
            { id: "extracurricular", title: "Extracurricular", items: extracurricular },
            { id: "all", title: "All Projects", items: uniqueAll },
        ];
    }, [filtered]);

    const openProject = (p) => {
        setActiveProject(p);
        setModalOpen(true);
    };

    const closeProject = () => {
        setModalOpen(false);
        setActiveProject(null);
    };

    return (
        <main className="min-h-screen bg-[#0b0b0b] text-white">
            <div className="w-full overflow-x-hidden">
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
                            className="w-full rounded-xl bg-white/10 px-8 py-2 pr-3 text-sm text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-white/30"
                        />
                    </div>
                </div>

                {/* hero banner */}
                <Banner project={featuredProject} onOpen={openProject} />

                {/* rows */}
                <section className="mt-4 grid w-full gap-8 pb-10">
                    {rows.map((row) => (
                        <div
                            key={row.id}
                            id={row.id}
                            className="px-0 scroll-mt-24"
                        >
                            <Row title={row.title} items={row.items} onOpen={openProject} />
                        </div>
                    ))}
                </section>

                {/* footer */}
                <section className="mt-4 w-full px-6 md:px-10">
                    <footer className="mt-2 flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-white/60 md:flex-row md:text-sm">
                        <div>© {new Date().getFullYear()} Aastha Joshi</div>
                        <div className="flex items-center gap-4">
                            <a
                                href="https://github.com/joshiaastha04"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-white"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://linkedin.com/in/aasthajoshi23"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-white"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="mailto:aasthajoshi3010@gmail.com"
                                className="hover:text-white"
                            >
                                Email
                            </a>
                        </div>
                    </footer>
                </section>

                {/* About & Project modal */}
                <AboutPanel open={aboutOpen} onClose={() => setAboutOpen(false)} />
                <ProjectModal
                    open={modalOpen}
                    project={activeProject}
                    onClose={closeProject}
                />
            </div>
        </main>
    );
}
