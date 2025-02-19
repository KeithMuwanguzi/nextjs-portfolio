"use client";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import ParticleBackground from "./components/ParticleBackground";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme/Theme";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Tanesco Mobile Admin Portal */}
              <div className="bg-white/90 dark:bg-gray-800/90 rounded-2xl overflow-hidden shadow-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700 transform hover:-translate-y-2 transition-all duration-300">
                <div className="h-64 bg-gray-200 dark:bg-gray-700 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="tanesco.png"
                      alt="Tanesco Mobile Admin Portal"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    Tanesco Mobile Admin Portal
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    A comprehensive admin portal built with NextJS and .NET
                    backend, featuring robust SQL server integration for
                    efficient utility management.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                      NextJS
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                      .NET
                    </span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full text-sm">
                      SQL Server
                    </span>
                  </div>
                </div>
              </div>

              {/* Ezy Agric Farmers App */}
              <div className="bg-white/90 dark:bg-gray-800/90 rounded-2xl overflow-hidden shadow-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700 transform hover:-translate-y-2 transition-all duration-300">
                <div className="h-64 bg-gray-200 dark:bg-gray-700 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="agent.jpg"
                      alt="Ezy Agric Farmers App"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    Ezy Agric Farmers App
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Mobile application developed in Flutter with Flask backend,
                    empowering farmers with digital agricultural solutions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                      Flutter
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                      Flask
                    </span>
                  </div>
                </div>
              </div>

              {/* Ezy Agric Agent App */}
              <div className="bg-white/90 dark:bg-gray-800/90 rounded-2xl overflow-hidden shadow-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700 transform hover:-translate-y-2 transition-all duration-300">
                <div className="h-64 bg-gray-200 dark:bg-gray-700 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="farmer.jpg"
                      alt="Ezy Agric Agent App"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    Ezy Agric Agent App
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Field agent mobile application built with Flutter and Flask,
                    streamlining agricultural operations and data collection.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                      Flutter
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                      Flask
                    </span>
                  </div>
                </div>
              </div>

              {/* Ezy Agric Admin Portal */}
              <div className="bg-white/90 dark:bg-gray-800/90 rounded-2xl overflow-hidden shadow-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700 transform hover:-translate-y-2 transition-all duration-300">
                <div className="h-64 bg-gray-200 dark:bg-gray-700 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="be.png"
                      alt="Ezy Agric Admin Portal"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    Ezy Agric Admin Portal
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Powerful administrative backend built with Flask, managing
                    agricultural data and user operations efficiently.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                      Flask
                    </span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full text-sm">
                      Python
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ThemeProvider>
  );
}
