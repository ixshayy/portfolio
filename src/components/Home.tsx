import React from "react";
import Layout from "./Layout";
import ProjectCard from "./ProjectCard";
import ExperienceCard from "./ExperienceCard";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { getFeaturedProjects } from '../data/projects';

const Home: React.FC = () => {
    const socialLinks = [
        { icon: FiGithub, href: "https://github.com/ixshayy", label: "GitHub" },
        { icon: FiLinkedin, href: "https://linkedin.com/in/iakshayk", label: "LinkedIn" },
        { icon: FiTwitter, href: "https://x.com/iakxshayy/", label: "Twitter" },
        { icon: SiLeetcode, href: "https://leetcode.com/u/iakshay/", label: "Leetcode" },
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
            company: "Bricks and Pixels",
            companyLogo: "/images/bnp.png",
            location: "Delhi, India",
            positions: [
                {
                    title: "Senior Developer",
                    startDate: "Jan 2025",
                    endDate: "Present",
                    description: [
                        "Designing and implementing scalable systems with modular architecture, enabling real-time sync, fault tolerance, and smooth data pipelines."
                    ]
                },
                {
                    title: "Junior Full Stack Developer",
                    startDate: "Mar 2023",
                    endDate: "Dec 2024",
                    description: [
                        "Built an apartment tour web app with React & Redux; improved UI and cut load time by 80%.",
                        "Developed a real-time house manager with MERN & WebSocket.",
                        "Created secure backend with JWT and EJS UI; boosted user engagement and data accuracy."
                    ]
                }
            ]
        },
        {
            company: "Fynd",
            companyLogo: "/images/fynd.png",
            location: "Mumbai, India",
            positions: [
                {
                    title: "Full Stack Trainee",
                    startDate: "September 2022",
                    endDate: "November 2022",
                    description: [
                        "Built scalable APIs with Node.js for e-commerce.",
                        "Tested endpoints using Jest.",
                        "Collaborated closely with frontend teams to deliver seamless backend integrations."
                    ]
                }
            ]
        }
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
                        Akshay Kumar
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                        Full stack Developer
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
                    Hi, I’m Akshay Kumar — a Full Stack Developer with a knack for building scalable, efficient, and user-centric web applications. With around 2+ years of hands-on experience in the MERN stack, I specialize in crafting robust backend systems and dynamic frontends. Whether it's optimizing performance, writing clean APIs, or refining user interfaces, I bring precision and purpose to every line of code. I’m driven by a passion for clean architecture, seamless user experience, and turning ideas into impactful digital products.
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
                <div className="space-y-6">
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={index} {...exp} />
                    ))}
                </div>
            </motion.section>
        </Layout>
    );
};

export default Home;