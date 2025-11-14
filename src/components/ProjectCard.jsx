import { motion } from "framer-motion";

function ProjectCard({ project, onOpen }) {
    const tagsSafe = Array.isArray(project.tags) ? project.tags : [];

    return (
        <motion.button
            layout
            onClick={() => onOpen(project)}
            className="
                group
                relative
                shrink-0
                min-w-[210px]
                max-w-[230px]
                md:min-w-[230px]
                md:max-w-[260px]
                overflow-hidden
                rounded-2xl
                bg-[#232323]
                text-left
            "
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
        </motion.button>
    );
}

export default ProjectCard;
