"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
    {
        name: "A-NAVI",
        subtitle: "AMAX (Automotive)",
        image: "/amax-logo.png",
        description: "Comprehensive automotive navigation and infotainment systems. Focusing on real-time data processing and intuitive user interfaces for modern driving experiences.",
        tech: ["React Native", "TypeScript", "Redux", "AWS"],
        role: "Senior Hybrid Mobile Engineer"
    },
    {
        name: "Research 360",
        subtitle: "LG Electronics",
        image: "/lge-logo.png",
        description: "Advanced R&D platform for LG Electronics. A centralized system for gathering and analyzing research data across multiple departments with high-performance data visualization.",
        tech: ["React", "D3.js", "Node.js", "PostgreSQL"],
        role: "Fullstack Developer"
    },
    {
        name: "Jinjer Admin",
        subtitle: "HR/ERP Solution",
        image: "/jinjer-logo.svg",
        description: "Enterprise HR and administrative management solution. Streamlining complex organizational workflows, payroll processing, and employee management for Japanese market.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Storybook"],
        role: "Frontend Lead"
    },
    {
        name: "R&D Security",
        subtitle: "Penta Security",
        image: "/penta-logo.png",
        description: "Innovative security systems focusing on web application firewalls and data encryption. Implementing robust security protocols for high-stakes enterprise environments.",
        tech: ["React", "Go", "Docker", "Kubernetes"],
        role: "Technical Researcher"
    },
    {
        name: "Kikker Energie",
        subtitle: "Dutch Utility",
        image: "/kikker-logo.png",
        description: "Smart energy management platform for Dutch utility providers. Integrating real-time meter tracking, billing systems, and consumer consumption analysis.",
        tech: ["Angular", "Spring Boot", "AWS", "MySql"],
        role: "Senior Software Engineer"
    },
];

export default function Project() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="w-full h-screen bg-background flex flex-col pt-32 pb-16 px-6 lg:px-32 overflow-hidden">
            <div className="w-full max-w-[1700px] mx-auto flex flex-col h-full">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-7xl font-bold mb-16 tracking-widest uppercase font-sans text-gray-950 dark:text-white"
                >
                    Projects
                </motion.h2>

                <div className="flex-1 grid grid-cols-12 gap-8 h-full min-h-0">
                    {/* Left Sidebar: 2/12 - 3/12 for readability */}
                    <div className="col-span-12 lg:col-span-3 flex flex-col gap-3 overflow-y-auto pr-4 scrollbar-hide">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                onMouseEnter={() => setActiveIndex(index)}
                                className={`group p-5 rounded-2xl border transition-all duration-500 cursor-pointer flex items-center gap-4 ${activeIndex === index
                                    ? "bg-primary/5 border-primary/40 shadow-[0_0_25px_rgba(59,130,246,0.1)] scale-[1.02]"
                                    : "bg-transparent border-transparent grayscale hover:grayscale-0 hover:bg-white/5 opacity-40 hover:opacity-100"
                                    }`}
                            >
                                <div className={`w-14 h-14 relative flex-shrink-0 rounded-xl p-2.5 transition-all duration-500 ${activeIndex === index ? "bg-white shadow-lg" : "bg-white/10"
                                    }`}>
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="flex flex-col overflow-hidden">
                                    <span className={`font-bold text-lg leading-tight transition-colors duration-300 ${activeIndex === index ? "text-primary" : "text-foreground"
                                        }`}>
                                        {project.name}
                                    </span>
                                    <span className="text-[10px] opacity-50 uppercase tracking-widest font-semibold truncate mt-1">
                                        {project.subtitle}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Content Detail: 10/12 */}
                    <div className="col-span-12 lg:col-span-9 relative rounded-[2rem] overflow-hidden border border-white/5 bg-white/[0.02] backdrop-blur-md">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 40, filter: "blur(10px)" }}
                                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, x: -40, filter: "blur(10px)" }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                className="absolute inset-0 p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12"
                            >
                                <div className="flex-1 flex flex-col justify-center">
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <div className="flex items-center gap-3 mb-6">
                                            <span className="w-12 h-[2px] bg-primary"></span>
                                            <span className="text-primary font-black tracking-[0.3em] uppercase text-xs">
                                                {projects[activeIndex].role}
                                            </span>
                                        </div>
                                        <h3 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter">
                                            {projects[activeIndex].name}
                                        </h3>
                                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-10 max-w-2xl font-serif italic font-light opacity-80">
                                            "{projects[activeIndex].description}"
                                        </p>

                                        <div className="flex flex-wrap gap-3 mt-auto">
                                            {projects[activeIndex].tech.map((t, i) => (
                                                <span
                                                    key={i}
                                                    className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold tracking-widest uppercase transition-colors hover:bg-primary/20 hover:border-primary/50"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>

                                <div className="hidden lg:flex flex-1 relative h-full items-center justify-center">
                                    <motion.div
                                        initial={{ scale: 0.8, rotate: -5, opacity: 0 }}
                                        animate={{ scale: 1, rotate: 0, opacity: 1 }}
                                        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                                        className="w-full aspect-square max-w-[500px] relative"
                                    >
                                        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
                                        <img
                                            src={projects[activeIndex].image}
                                            alt={projects[activeIndex].name}
                                            className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_0_50px_rgba(59,130,246,0.2)]"
                                        />
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}