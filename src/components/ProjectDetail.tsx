import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from './Layout';
import { getProjectById } from '../data/projects';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const project = id ? getProjectById(id) : null;

    if (!project) {
        return <Navigate to="/projects" replace />;
    }

    return (
        <Layout>
            <article className="py-16">
                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        {project.title}
                    </h1>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-4">
                        {project.githubLink && (
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                            >
                                <FiGithub className="w-5 h-5" />
                                <span>View on GitHub</span>
                            </a>
                        )}
                        {project.demoLink && (
                            <a
                                href={project.demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                            >
                                <FiExternalLink className="w-5 h-5" />
                                <span>Live Demo</span>
                            </a>
                        )}
                    </div>
                </motion.header>

                {/* Main Image */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-8 rounded-lg overflow-hidden"
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto object-cover"
                    />
                </motion.div>

                {/* Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="prose dark:prose-invert max-w-none mb-12"
                >
                    <div className="whitespace-pre-line">
                        {project.fullDescription}
                    </div>
                </motion.div>

                {/* Tech Stack */}
                {project.techStack && (
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mb-12"
                    >
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Tech Stack
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 text-sm rounded-full bg-light-200 dark:bg-dark-300 text-gray-600 dark:text-gray-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.section>
                )}

                {/* Key Highlights */}
                {project.highlights && (
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mb-12"
                    >
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Key Highlights
                        </h2>
                        <ul className="space-y-2">
                            {project.highlights.map((highlight, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                                >
                                    <span className="text-gray-600 dark:text-gray-300">•</span>
                                    {highlight}
                                </li>
                            ))}
                        </ul>
                    </motion.section>
                )}

                {/* Challenges and Solutions */}
                {project.challenges && project.solutions && (
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mb-12"
                    >
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Challenges & Solutions
                        </h2>
                        <div className="space-y-6">
                            {project.challenges.map((challenge, index) => (
                                <div key={index} className="bg-light-200 dark:bg-dark-200 rounded-lg p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                        Challenge:
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">{challenge}</p>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                        Solution:
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {project.solutions[index]}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.section>
                )}

                {/* YouTube Video */}
                {project.youtubeId && (
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mb-8"
                    >
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Project Demo
                        </h2>
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                src={`https://www.youtube.com/embed/${project.youtubeId}`}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="rounded-lg"
                            ></iframe>
                        </div>
                    </motion.section>
                )}
            </article>
        </Layout>
    );
};

export default ProjectDetail; 