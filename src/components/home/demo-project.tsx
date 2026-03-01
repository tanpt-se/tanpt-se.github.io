"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const demoProjects = [
    {
        name: "Portfolio OS",
        category: "Personal Brand",
        year: "2025",
        summary: "A high-touch personal portfolio experience that combines storytelling, animated navigation, and modular content blocks for consulting leads.",
        stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
        accent: "from-cyan-400/30 via-sky-500/10 to-transparent",
        badge: "Interactive UI",
    },
    {
        name: "Ops Dashboard",
        category: "Internal Tooling",
        year: "2024",
        summary: "A command-center style operations dashboard for monitoring SLAs, release flow, and support load with dense but readable data presentation.",
        stack: ["React", "TanStack Query", "Node.js", "PostgreSQL"],
        accent: "from-emerald-400/30 via-teal-500/10 to-transparent",
        badge: "Realtime Data",
    },
    {
        name: "Commerce Story",
        category: "Marketing Site",
        year: "2024",
        summary: "A product storytelling site focused on conversion, using bold editorial layout, modular sections, and motion-led product reveals.",
        stack: ["Next.js", "GSAP", "CMS", "Vercel"],
        accent: "from-amber-300/30 via-orange-500/10 to-transparent",
        badge: "Conversion First",
    },
];

export default function DemoProject() {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeProject = demoProjects[activeIndex];

    return (
        <section className="w-full h-screen bg-background flex flex-col pt-32 pb-16 px-6 lg:px-32 snap-start snap-always">
            <div className="w-full max-w-[1700px] mx-auto flex flex-col h-full">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="text-4xl md:text-7xl font-bold mb-16 tracking-widest uppercase font-sans text-foreground"
                >
                    Demo Project
                </motion.h2>

                <div className="flex-1 grid grid-cols-12 gap-8 h-full min-h-0">
                    <div className="col-span-12 lg:col-span-3 flex flex-col gap-3 overflow-y-auto pr-4 scrollbar-hide">
                        {demoProjects.map((project, index) => {
                            const isActive = activeIndex === index;

                            return (
                                <motion.button
                                    key={project.name}
                                    type="button"
                                    onMouseEnter={() => setActiveIndex(index)}
                                    onFocus={() => setActiveIndex(index)}
                                    onClick={() => setActiveIndex(index)}
                                    className={`text-left group p-5 rounded-2xl border transition-all duration-500 cursor-pointer ${isActive
                                        ? "bg-primary/5 border-primary/40 shadow-[0_0_25px_rgba(59,130,246,0.1)] scale-[1.02]"
                                        : "bg-transparent border-transparent hover:bg-white/5 opacity-50 hover:opacity-100"
                                        }`}
                                >
                                    <div className="flex items-start justify-between gap-3">
                                        <div>
                                            <p className={`text-lg font-bold transition-colors duration-300 ${isActive ? "text-primary" : "text-foreground"}`}>
                                                {project.name}
                                            </p>
                                            <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                                                {project.category}
                                            </p>
                                        </div>
                                        <span className="text-xs text-muted-foreground">{project.year}</span>
                                    </div>

                                    <p className="mt-4 text-sm leading-6 text-muted-foreground line-clamp-3">
                                        {project.summary}
                                    </p>
                                </motion.button>
                            );
                        })}
                    </div>

                    <div className="col-span-12 lg:col-span-9 relative rounded-[2rem] overflow-hidden border border-white/5 bg-white/[0.02] backdrop-blur-md min-h-[28rem]">
                        <div className={`absolute inset-0 bg-gradient-to-br ${activeProject.accent}`} />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeProject.name}
                                initial={{ opacity: 0, x: 40, filter: "blur(10px)" }}
                                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, x: -40, filter: "blur(10px)" }}
                                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                                className="absolute inset-0 z-10 p-8 md:p-16 flex flex-col justify-between"
                            >
                                <div className="max-w-3xl">
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="w-12 h-[2px] bg-primary" />
                                        <span className="text-primary font-black tracking-[0.3em] uppercase text-xs">
                                            {activeProject.badge}
                                        </span>
                                    </div>

                                    <h3 className="text-5xl md:text-8xl font-bold tracking-tighter">
                                        {activeProject.name}
                                    </h3>

                                    <div className="mt-6 flex flex-wrap gap-3 text-[11px] font-bold tracking-widest uppercase text-muted-foreground">
                                        <span>{activeProject.category}</span>
                                        <span>/</span>
                                        <span>{activeProject.year}</span>
                                    </div>

                                    <p className="mt-8 text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-serif italic font-light opacity-80">
                                        {activeProject.summary}
                                    </p>
                                </div>

                                <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr] items-end">
                                    <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-6 md:p-8">
                                        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                                            {activeProject.stack.map((item) => (
                                                <div
                                                    key={item}
                                                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-center text-xs font-bold uppercase tracking-[0.24em] text-foreground"
                                                >
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="rounded-[1.75rem] border border-primary/20 bg-primary/5 p-6">
                                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Outcome</p>
                                        <p className="mt-4 text-base leading-7 text-muted-foreground">
                                            Production-style demo section with full-height presentation, stable snap behavior, and enough content density to feel consistent with the existing `Project` block.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
