import React from "react";
import Layout from "./Layout";
import ProjectCard from "./ProjectCard";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { getFeaturedProjects } from '../data/projects';

const Home: React.FC = () => {
    const socialLinks = [
        { icon: FiGithub, href: "https://github.com/yourusername", label: "GitHub" },
        { icon: FiLinkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
        { icon: FiTwitter, href: "https://twitter.com/yourusername", label: "Twitter" },
    ];

    const featuredProjects = getFeaturedProjects();

    const projects = [
        {
            title: "Project 1",
            description: "A brief description of project 1 and its key features.",
            image: "/images/project1.svg",
            tags: ["React", "TypeScript", "Tailwind"],
            link: "https://project1.com"
        },
        {
            title: "Project 2",
            description: "A brief description of project 2 and its key features.",
            image: "/images/project2.svg",
            tags: ["Next.js", "Node.js", "MongoDB"],
            link: "https://project2.com"
        },
        // Add more projects as needed
    ];

    const experiences = [
        {
            title: "Senior Frontend Developer",
            company: "Company Name",
            period: "2022 - Present",
            description: "Led the frontend development team in building responsive web applications."
        },
        {
            title: "Frontend Developer",
            company: "Previous Company",
            period: "2020 - 2022",
            description: "Developed and maintained multiple client-facing applications."
        },
        // Add more experiences as needed
    ];

    return (
        <Layout>
            {/* Hero Section */}
            <section className="py-20 flex flex-col md:flex-row items-center justify-between gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex-1"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Your Name
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                        Frontend Developer & UI/UX Enthusiast
                    </p>
                    <div className="flex gap-4">
                        {socialLinks.map((social, index) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                                    aria-label={social.label}
                                >
                                    <Icon className="w-6 h-6" />
                                </a>
                            );
                        })}
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex-1 flex justify-center"
                >
                    <img
                        src="/images/profile.jpg"
                        alt="Profile"
                        className="w-64 h-64 rounded-full object-cover shadow-lg"
                    />
                </motion.div>
            </section>

            {/* About Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="py-16"
            >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    I'm a passionate frontend developer with X years of experience in building modern web applications.
                    I specialize in React, TypeScript, and modern CSS frameworks. My focus is on creating beautiful,
                    responsive, and user-friendly interfaces that provide great user experiences.
                </p>
            </motion.section>

            {/* Projects Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="py-16"
            >
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>
                    <Link
                        to="/projects"
                        className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                        View All Projects →
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {featuredProjects.map((project, index) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
            </motion.section>

            {/* Experience Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="py-16"
            >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Experience</h2>
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-dark-200 rounded-lg p-6 shadow-lg"
                        >
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                {exp.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-2">
                                {exp.company} • {exp.period}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300">
                                {exp.description}
                            </p>
                        </div>
                    ))}
                </div>
            </motion.section>
        </Layout>
    );
};

export default Home;