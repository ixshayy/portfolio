import React from 'react';
import { motion } from 'framer-motion';

interface Position {
    title: string;
    startDate: string;
    endDate: string;
    description: string[];
}

interface ExperienceCardProps {
    company: string;
    companyLogo?: string;
    location: string;
    positions: Position[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
    company,
    companyLogo,
    location,
    positions
}) => {
    const totalDuration = () => {
        const firstPosition = positions[positions.length - 1];
        const lastPosition = positions[0];
        return `${firstPosition.startDate} - ${lastPosition.endDate}`;
    };

    return (
        <div className="bg-white dark:bg-dark-200 rounded-lg p-6 shadow-lg">
            <div className="flex items-start gap-4">
                {companyLogo && (
                    <img
                        src={companyLogo}
                        alt={`${company} logo`}
                        className="w-12 h-12 rounded object-contain"
                    />
                )}
                <div className="flex-1">
                   <div className='ml-4'>
                     <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {company}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {totalDuration()} • {location}
                    </p>
                   </div>

                    <div className="mt-4 space-y-6 relative">
                        {positions.map((position, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative pl-4"
                            >
                                {/* Connecting line - only show between positions within same company */}
                                {index < positions.length - 1 && (
                                    <div
                                        className="absolute left-[5px] w-[2px] bg-gray-200 dark:bg-gray-700"
                                        style={{
                                            top: '25%',
                                            height: '95%',
                                        }}
                                    />
                                )}

                                <div className='ml-4'>
                                    {/* Timeline dot */}
                                    <div
                                        className="absolute left-0 top-2 w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full z-10 border-2 border-white dark:border-dark-200"
                                    />

                                    <h4 className="font-medium text-gray-900 dark:text-white">
                                        {position.title}
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {position.startDate} - {position.endDate}
                                    </p>
                                    <ul className="mt-2 space-y-1">
                                        {position.description.map((desc, i) => (
                                            <li
                                                key={i}
                                                className="text-sm text-gray-600 dark:text-gray-300"
                                            >
                                                {desc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;