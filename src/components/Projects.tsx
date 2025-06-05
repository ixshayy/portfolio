import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from './Layout';
import ProjectCard from './ProjectCard';
import { projects, allSkills, filterProjectsBySkills } from '../data/projects';

const Projects: React.FC = () => {
    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

    const filteredProjects = filterProjectsBySkills(selectedSkills);

    const toggleSkill = (skill: string) => {
        setSelectedSkills(prev =>
            prev.includes(skill)
                ? prev.filter(s => s !== skill)
                : [...prev, skill]
        );
    };

    return (
        <Layout>
            <div className="py-16">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
                >
                    Projects
                </motion.h1>

                {/* Skills Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-8"
                >
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        Filter by Skills
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {allSkills.map(skill => (
                            <button
                                key={skill}
                                onClick={() => toggleSkill(skill)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                    selectedSkills.includes(skill)
                                        ? 'bg-dark-300 text-white dark:bg-dark-200'
                                        : 'bg-light-200 dark:bg-dark-300 text-gray-600 dark:text-gray-300 hover:bg-light-300 dark:hover:bg-dark-200'
                                }`}
                            >
                                {skill}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </motion.div>

                {filteredProjects.length === 0 && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center text-gray-600 dark:text-gray-400 mt-8"
                    >
                        No projects found with the selected skills.
                    </motion.p>
                )}
            </div>
        </Layout>
    );
};

export default Projects; 