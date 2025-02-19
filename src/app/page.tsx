"use client";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import ParticleBackground from "./components/ParticleBackground";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme/Theme";
import { Dialog, DialogContent } from "@mui/material";

type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    // Set initial theme based on saved preference or system preference
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    setIsDarkMode(shouldBeDark);

    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
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

  const projects: Project[] = [
    {
      id: 1,
      title: "Tanesco Mobile Admin Portal",
      description:
        "A comprehensive admin portal built with NextJS and .NET backend, featuring robust SQL server integration for efficient utility management.",
      longDescription:
        "A full-featured administrative platform that revolutionizes utility management. The portal provides real-time monitoring, advanced analytics, and streamlined operations for Tanesco's mobile services.",
      image: "tanesco.png",
      technologies: ["NextJS", ".NET", "SQL Server"],
      features: [
        "Real-time dashboard analytics",
        "User management system",
        "Payment processing integration",
        "Automated reporting system",
      ],
      liveUrl: "https://tanesco.com",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with Next.js and TailwindCSS, featuring dark mode, animations, and a clean design.",
      longDescription:
        "A personal portfolio website showcasing my projects and skills. Built with modern web technologies and featuring a responsive design, dark mode support, smooth animations, and interactive elements.",
      image: "be.png",
      technologies: ["Next.js", "TailwindCSS", "TypeScript", "Framer Motion"],
      features: [
        "Dark/Light mode toggle",
        "Responsive design",
        "Smooth animations",
        "Project showcase",
        "Contact form",
      ],
      liveUrl: "https://kjjm.dev",
    },
    {
      id: 3,
      title: "Ezy Agric Farmers App",
      description:
        "A mobile application built with Flutter, Flask and neo4j, helping farmers manage their produce sales and track credit transactions with customers.",
      longDescription:
        "A comprehensive mobile application designed to empower farmers in managing their agricultural business. The app enables farmers to track produce sales, manage customer relationships, and monitor credit transactions. Built with Flutter for cross-platform compatibility and Flask backend, it utilizes neo4j graph database for complex relationship mapping between farmers, customers, and transactions.",
      image: "agent.jpg",
      technologies: ["Flutter", "Flask", "Neo4j", "Stripe"],
      features: [
        "Credit tracking",
        "Sales analytics",
        "Customer management",
        "Inventory tracking",
        "Transaction history",
      ],
      liveUrl:
        "https://play.google.com/store/apps/details?id=com.ezyagric.extension.android&pcampaignid=web_share",
    },
    {
      id: 4,
      title: "Ezy Agric Agent App",
      description:
        "A mobile application designed for agricultural agents to connect and manage multiple farmers who lack access to smartphones, facilitating produce management and market access.",
      longDescription:
        "A comprehensive mobile platform that empowers agricultural agents to bridge the digital divide for farmers without smartphones. The app enables agents to manage multiple farmers' produce, track sales, provide real-time market price information, and facilitate credit purchases. This solution helps improve agricultural productivity and market access for traditionally underserved farming communities.",
      image: "farmer.jpg",
      technologies: ["Flutter", "Flask", "Neo4j", "Firebase", "Stripe"],
      features: [
        "Multi-farmer management",
        "Real-time market prices",
        "Credit system integration",
        "Produce tracking",
        "Sales management",
      ],
      liveUrl:
        "https://play.google.com/store/apps/details?id=com.ezyagric.extension.agent.android&pcampaignid=web_share",
    },
  ];

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="w-full min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-300 relative">
        <ParticleBackground />

        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 py-5 shadow-xl border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <span className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer">
              KJJM
            </span>
            <div className="flex items-center space-x-8">
              <a
                href="#about"
                className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 dark:after:bg-blue-400 after:transition-all"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 dark:after:bg-blue-400 after:transition-all"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 dark:after:bg-blue-400 after:transition-all"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 dark:after:bg-blue-400 after:transition-all"
              >
                Contact
              </a>
              <button
                className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-110"
                onClick={toggleTheme}
              >
                <svg
                  className="w-6 h-6 hidden dark:block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                </svg>
                <svg
                  className="w-6 h-6 dark:hidden"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center pt-16 relative">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
            {/* Left Content */}
            <div className="flex-1 space-y-8">
              {/* Name and Title */}
              <div className="space-y-4">
                <h1 className="text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Keith J. Muwanguzi
                </h1>
                <div className="h-20">
                  <TypeAnimation
                    sequence={[
                      "Full-Stack Developer",
                      2000,
                      "Flutter Expert",
                      2000,
                      ".NET Specialist",
                      2000,
                      "NextJs Developer",
                      2000,
                      "Flask & Django Dev",
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="text-4xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent bg-size-200 animate-gradient"
                  />
                </div>
              </div>

              {/* Description */}
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                Transforming ideas into elegant, scalable solutions.
                Specializing in creating exceptional digital experiences with
                Flutter, NextJs, Python & .NET.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1">
                  View My Work
                </button>
                <button className="border-2 border-blue-500 dark:border-purple-500 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:bg-blue-500/10 hover:-translate-y-1">
                  Contact Me
                </button>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-6 pt-4">
                <a
                  href="https://github.com/KeithMuwanguzi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl hover:text-blue-500 transition-all duration-300 hover:-translate-y-1"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl hover:text-blue-500 transition-all duration-300 hover:-translate-y-1"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl hover:text-blue-500 transition-all duration-300 hover:-translate-y-1"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>

            {/* Right Content - Avatar */}
            <div className="flex-1 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="w-80 h-80 rounded-full overflow-hidden">
                  <img
                    src="/1.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Updated About Section */}
        <section id="about" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-100/50 to-gray-200/50 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm"></div>

          <div className="container mx-auto px-4 relative">
            <div className="flex flex-col items-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8"></div>
              <p className="text-xl text-center max-w-3xl text-gray-700 dark:text-gray-300 leading-relaxed mb-12">
                A passionate software architect and full-stack developer with a
                drive for creating innovative solutions. I specialize in
                building scalable applications that make a difference.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Experience Card */}
              <div className="bg-white/90 dark:bg-gray-800/90 rounded-2xl p-8 shadow-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700 transform hover:-translate-y-2 transition-all duration-300">
                <div className="text-4xl font-bold text-blue-500 mb-2">5+</div>
                <h3 className="text-xl font-semibold mb-4">Years Experience</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Delivering high-quality software solutions across multiple
                  platforms and technologies.
                </p>
              </div>

              {/* Projects Card */}
              <div className="bg-white/90 dark:bg-gray-800/90 rounded-2xl p-8 shadow-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700 transform hover:-translate-y-2 transition-all duration-300">
                <div className="text-4xl font-bold text-purple-500 mb-2">
                  20+
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Projects Completed
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Successfully delivered projects ranging from mobile apps to
                  enterprise solutions.
                </p>
              </div>

              {/* Technologies Card */}
              <div className="bg-white/90 dark:bg-gray-800/90 rounded-2xl p-8 shadow-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700 transform hover:-translate-y-2 transition-all duration-300">
                <div className="text-4xl font-bold text-blue-500 mb-2">8+</div>
                <h3 className="text-xl font-semibold mb-4">
                  Technologies Mastered
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Expertise in Flutter, .NET, Python, React, and various other
                  modern technologies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-100/50 to-gray-200/50 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm"></div>

          <div className="container mx-auto px-4 relative">
            <div className="flex flex-col items-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Skills & Technologies
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8"></div>
              <p className="text-xl text-center max-w-3xl text-gray-700 dark:text-gray-300 leading-relaxed">
                I work with a variety of technologies across the full stack,
                specializing in modern frameworks and tools.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Frontend Development */}
              <div className="bg-white/90 dark:bg-gray-800/90 rounded-2xl p-8 shadow-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700 transform hover:-translate-y-2 transition-all duration-300">
                <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Frontend Development
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">
                      React/Next.js
                    </span>
                    <div className="w-48 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full w-[95%] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">
                      Flutter
                    </span>
                    <div className="w-48 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full w-[90%] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">
                      TailwindCSS
                    </span>
                    <div className="w-48 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full w-[85%] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Backend Development */}
              <div className="bg-white/90 dark:bg-gray-800/90 rounded-2xl p-8 shadow-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700 transform hover:-translate-y-2 transition-all duration-300">
                <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Backend Development
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">
                      .NET Core
                    </span>
                    <div className="w-48 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full w-[90%] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">
                      Python (Flask/Django)
                    </span>
                    <div className="w-48 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full w-[85%] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">
                      Node.js
                    </span>
                    <div className="w-48 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full w-[80%] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Database & Tools */}
              <div className="bg-white/90 dark:bg-gray-800/90 rounded-2xl p-8 shadow-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700 transform hover:-translate-y-2 transition-all duration-300">
                <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Database & Tools
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">
                      SQL Server
                    </span>
                    <div className="w-48 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full w-[90%] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">
                      Neo4j
                    </span>
                    <div className="w-48 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full w-[85%] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">
                      Git/GitHub
                    </span>
                    <div className="w-48 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full w-[95%] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-100/50 to-gray-200/50 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm"></div>

          <div className="container mx-auto px-4 relative">
            <div className="flex flex-col items-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>

            <div className="relative">
              {/* Gradient Overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10"></div>

              {/* Scrollable Container */}
              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex space-x-8 pb-8 px-32">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className="flex-none w-[400px] group bg-white/90 dark:bg-gray-800/90 rounded-2xl overflow-hidden shadow-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700 transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                      onClick={() => handleOpenModal(project)}
                    >
                      <div className="h-64 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <p className="text-white p-6">
                            Click to view details
                          </p>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-100/50 to-gray-200/50 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm"></div>

          <div className="container mx-auto px-4 relative">
            <div className="flex flex-col items-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8"></div>
              <p className="text-xl text-center max-w-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
                Have a project in mind or want to collaborate? Feel free to
                reach out!
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Info */}
                <div className="space-y-6">
                  <div className="bg-white/90 dark:bg-gray-800/90 rounded-2xl p-6 shadow-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-semibold mb-4">
                      Contact Information
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <svg
                          className="w-6 h-6 text-blue-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <a
                          href="mailto:contact@kjjm.dev"
                          className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
                        >
                          keithmuwanguzi@gmail.com
                        </a>
                      </div>
                      <div className="flex items-center space-x-4">
                        <svg
                          className="w-6 h-6 text-blue-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300">
                          +256 763-647885 || +256 774-538704
                        </span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <svg
                          className="w-6 h-6 text-blue-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300">
                          Kampala, Uganda
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/90 dark:bg-gray-800/90 rounded-2xl p-6 shadow-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-semibold mb-4">Social Media</h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://github.com/KeithMuwanguzi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-500 hover:text-white transition-all"
                      >
                        <FaGithub className="w-6 h-6" />
                      </a>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-500 hover:text-white transition-all"
                      >
                        <FaLinkedin className="w-6 h-6" />
                      </a>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-500 hover:text-white transition-all"
                      >
                        <FaTwitter className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <form className="bg-white/90 dark:bg-gray-800/90 rounded-2xl p-8 shadow-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700 space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Add the Modal */}
        <Dialog
          open={isModalOpen}
          onClose={handleCloseModal}
          maxWidth="md"
          fullWidth
          className="backdrop-blur-sm"
        >
          <DialogContent className="bg-white dark:bg-gray-800 p-0">
            {selectedProject && (
              <div className="relative">
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <div className="h-72 relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="absolute bottom-0 p-6">
                      <h2 className="text-2xl font-bold text-white mb-2">
                        {selectedProject.title}
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {selectedProject.longDescription}
                  </p>
                  <h3 className="text-lg font-semibold mb-3">Key Features:</h3>
                  <ul className="list-disc list-inside mb-6 space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li
                        key={index}
                        className="text-gray-600 dark:text-gray-300"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-4">
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all"
                      >
                        View Live
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 border-2 border-blue-500 dark:border-purple-500 rounded-lg hover:bg-blue-500/10 transition-all"
                      >
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </ThemeProvider>
  );
}
