import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../contexts/ThemeContext";

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isDark, toggleTheme } = useTheme();

    const navLinks = [
        { title: "Home", path: "/" },
        { title: "Projects", path: "/projects" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 bg-light dark:bg-dark-100 z-50">
            <div className="max-w-3xl mx-auto px-4">
                <div className="flex justify-end items-center h-16">
                    {/* Logo */}
                    {/* <Link to="/" className="flex items-center space-x-3">
                        <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
                        <span className="font-mono text-xl font-semibold text-gray-900 dark:text-white">Portfolio</span>
                    </Link> */}

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.title}
                                to={link.path}
                                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                            >
                                {link.title}
                            </Link>
                        ))}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg hover:bg-light-200 dark:hover:bg-dark-200 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {isDark ? 
                                <FiSun className="w-5 h-5 text-gray-300 hover:text-white" /> : 
                                <FiMoon className="w-5 h-5 text-gray-600 hover:text-gray-900" />
                            }
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-light-200 dark:hover:bg-dark-200 transition-colors"
                    >
                        <div className="w-6 h-0.5 bg-gray-600 dark:bg-gray-300 mb-1"></div>
                        <div className="w-6 h-0.5 bg-gray-600 dark:bg-gray-300 mb-1"></div>
                        <div className="w-6 h-0.5 bg-gray-600 dark:bg-gray-300"></div>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden pb-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.title}
                                to={link.path}
                                className="block py-2 px-4 text-gray-600 dark:text-gray-300 hover:bg-light-200 dark:hover:bg-dark-200 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.title}
                            </Link>
                        ))}
                        <button
                            onClick={toggleTheme}
                            className="w-full text-left py-2 px-4 text-gray-600 dark:text-gray-300 hover:bg-light-200 dark:hover:bg-dark-200 transition-colors"
                        >
                            <div className="flex items-center">
                                {isDark ? (
                                    <>
                                        <FiSun className="w-5 h-5 mr-2" />
                                        <span>Light Mode</span>
                                    </>
                                ) : (
                                    <>
                                        <FiMoon className="w-5 h-5 mr-2" />
                                        <span>Dark Mode</span>
                                    </>
                                )}
                            </div>
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;