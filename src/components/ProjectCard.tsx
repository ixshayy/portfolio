import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, description, image, tags }) => {
    return (
        <Link
            to={`/projects/${id}`}
            className="group block overflow-hidden rounded-lg bg-white dark:bg-dark-200 shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
        >
            <div className="relative">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 text-xs rounded-full bg-light-200 dark:bg-dark-300 text-gray-600 dark:text-gray-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard; 