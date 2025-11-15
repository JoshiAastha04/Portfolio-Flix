import { motion as Motion } from "framer-motion";

const MotionButton = Motion.button;
function ProjectCard({ project, onOpen }) {
    const tagsSafe = Array.isArray(project.tags) ? project.tags : [];

    return (
        <Motion.button
            layout
            onClick={() => onOpen(project)}
            className="group relative
            aspect-video
            w-full
            max-w-[360px]
            mx-auto
            overflow-hidden
            rounded-2xl
            bg-[#232323]
            "
            whileHover={{ scale: 1.05, y: -4 }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
        >
            {/* image area */}
            <div className="relative aspect-video w-full overflow-hidden">
                {project.image && (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                )}

            </div>

            {/* text area */}
            <div className="p-3">
                <div className="flex flex-wrap gap-0">
                    {tagsSafe.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium text-white/80"
                        >
                            {tag}
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
        </Motion.button>
    );
}

export default ProjectCard;
