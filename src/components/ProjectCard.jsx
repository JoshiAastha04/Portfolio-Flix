import React from "react";

const ProjectCard = ({ image, title, description }) => {
    return (
        <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4 text-white">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-gray-400 mt-1">{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
