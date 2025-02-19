"use client";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import ParticleBackground from "./components/ParticleBackground";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Update document class when theme changes
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    // Add smooth scrolling behavior
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute(
          "href"
        );
        const target = document.querySelector(href || "");
        target?.scrollIntoView({ behavior: "smooth" });
      });
    });
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 dark:from-gray-900 from-white dark:to-gray-800 to-gray-100 text-gray-900 dark:text-white transition-colors duration-300 relative">
      <ParticleBackground />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 py-4 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            KJM
          </span>
          <div className="flex items-center space-x-6">
            <a href="#about" className="hover:text-blue-500 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-blue-500 transition-colors">
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-blue-500 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-blue-500 transition-colors"
            >
              Contact
            </a>
            <button
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              onClick={toggleTheme}
            >
              <svg
                className="w-5 h-5 hidden dark:block"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
              </svg>
              <svg
                className="w-5 h-5 dark:hidden"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Updated Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16 relative">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl font-bold">
              Keith Jonathan Muwanguzi
              <span className="block h-20">
                <TypeAnimation
                  sequence={[
                    "Full-Stack Developer",
                    2000,
                    "Flutter Expert",
                    2000,
                    ".NET Specialist",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
                />
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Crafting exceptional digital experiences with Flutter & .NET
            </p>
            <div className="space-x-4">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                View My Work
              </button>
              <button className="border-2 border-blue-500 dark:border-purple-500 hover:bg-blue-500/10 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Contact Me
              </button>
            </div>
            <div className="flex space-x-4 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-500 transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-500 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-500 transition-colors"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-72 h-72 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center animate-float shadow-2xl backdrop-blur-sm">
              <span className="text-6xl animate-bounce">👨‍💻</span>
            </div>
          </div>
        </div>
      </section>

      {/* Updated About Section */}
      <section
        id="about"
        className="py-20 bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 space-y-6 mb-12">
            <p className="transform hover:scale-105 transition-transform duration-300">
              I'm a passionate full-stack developer with 5+ years of experience
              building robust applications. Specializing in Flutter for mobile
              development and .NET for backend services.
            </p>
            <p className="transform hover:scale-105 transition-transform duration-300">
              My unique approach combines technical expertise with creative
              problem-solving, ensuring that every project I tackle is both
              functionally sound and user-friendly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-blue-500">
                Frontend Development
              </h3>
              <p className="text-sm">
                Flutter, React, TailwindCSS, Material-UI
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-purple-500">
                Backend Development
              </h3>
              <p className="text-sm">.NET Core, Node.js, SQL, MongoDB</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-blue-500">
                DevOps & Tools
              </h3>
              <p className="text-sm">Git, Docker, Azure, CI/CD</p>
            </div>
          </div>
        </div>
      </section>

      {/* Other sections would follow similarly... */}
    </div>
  );
}
