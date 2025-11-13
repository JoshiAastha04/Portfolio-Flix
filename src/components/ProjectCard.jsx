function ProjectCard({ project, onOpen }) {
    const tagsSafe = Array.isArray(project.tags) ? project.tags : [];

    return (
        <motion.button
            layout
            onClick={() => onOpen(project)}
            className="
        group
        relative
        aspect-video
        w-64
        sm:w-72
        md:w-64
        lg:w-72
        shrink-0
        overflow-hidden
        rounded-2xl
        bg-[#232323]
      "
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
export default ProjectCard;
