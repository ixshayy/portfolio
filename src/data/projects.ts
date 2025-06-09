export interface Project {
    id: string;
    title: string;
    description: string;
    fullDescription: string;
    image: string;
    tags: string[];
    githubLink?: string;
    demoLink?: string;
    youtubeId?: string;
    featured: boolean;
    skills: string[];
    date: string;
    highlights?: string[];
    techStack?: string[];
    challenges?: string[];
    solutions?: string[];
}

export const projects: Project[] = [
    {
        id: "nest-quest",
        title: "Nest Quest",
        description: "An intuitive platform to effortlessly discover and compare dream flats through smart filters and interactive visuals.",
        fullDescription: `
A comprehensive e-commerce solution built with React and Node.js. Features include:

- Real-time inventory management
- Secure payment processing
- Admin dashboard
- Order tracking system
- Customer reviews and ratings
- Responsive design for all devices
        `,
        image: "/images/explorer-web.png",
        tags: ["React", "Typescript"],
        demoLink: "https://project1.com",
        githubLink: "https://github.com/yourusername/project1",
        youtubeId: "your-youtube-video-id",
        featured: true,
        skills: ["Frontend"],
        date: "2024-03",
        highlights: [
            "Implemented real-time inventory tracking using WebSocket",
            "Reduced page load time by 60% using React Suspense and lazy loading",
            "Integrated secure payment processing with Stripe"
        ],
        techStack: [
            "React"
        ],
        challenges: [
            "Handling real-time inventory updates across multiple users",
            "Implementing secure payment processing",
            "Optimizing performance for large product catalogs"
        ],
        solutions: [
            "Used WebSocket for real-time bidirectional communication",
            "Implemented Stripe's secure payment gateway with custom hooks",
            "Applied pagination and lazy loading for better performance"
        ]
    },
    {
        id: "project-2",
        title: "AI Image Generator",
        description: "An AI-powered image generation tool using stable diffusion.",
        fullDescription: `
An innovative image generation tool that leverages stable diffusion models. Key features:

- Custom image generation
- Multiple style options
- Batch processing
- Image editing capabilities
- Export in multiple formats
        `,
        image: "/images/project2.svg",
        tags: ["Python", "React", "TensorFlow"],
        demoLink: "https://project2.com",
        githubLink: "https://github.com/yourusername/project2",
        featured: true,
        skills: ["AI/ML", "Frontend", "Python"],
        date: "2024-02",
        highlights: [
            "Implemented stable diffusion model for image generation",
            "Created intuitive UI for model parameter adjustment",
            "Added batch processing capabilities"
        ],
        techStack: [
            "Python",
            "TensorFlow",
            "React",
            "FastAPI",
            "Docker"
        ]
    },
    {
        id: "project-3",
        title: "Social Media Dashboard",
        description: "Real-time analytics dashboard for social media management.",
        fullDescription: `
A comprehensive social media analytics dashboard. Features include:

- Real-time data tracking
- Custom report generation
- Multi-platform integration
- Automated scheduling
- Performance metrics
        `,
        image: "/images/project3.svg",
        tags: ["Vue.js", "Firebase", "D3.js"],
        demoLink: "https://project3.com",
        skills: ["Frontend", "Analytics", "Data Visualization"],
        featured: false,
        date: "2024-01",
        highlights: [
            "Built real-time data visualization using D3.js",
            "Integrated multiple social media APIs",
            "Implemented automated report generation"
        ],
        techStack: [
            "Vue.js",
            "Firebase",
            "D3.js",
            "Node.js"
        ]
    }
];

export const allSkills = Array.from(
    new Set(projects.flatMap(project => project.skills))
).sort();

export const getFeaturedProjects = () => projects.filter(project => project.featured);

export const getProjectById = (id: string) => projects.find(project => project.id === id);

export const filterProjectsBySkills = (selectedSkills: string[]) => {
    if (selectedSkills.length === 0) return projects;
    return projects.filter(project =>
        selectedSkills.some(skill => project.skills.includes(skill))
    );
}; 