"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const experiences = [
    {
        year: "2015 - 2019",
        title: "Telecommunications University",
        company: "Education",
        desc: "Bachelor’s in Information Technology.",
        color: "bg-white border border-gray-100 shadow-sm",
        logo: "/tcu.webp"
    },
    {
        year: "2019 - 2022",
        title: "Hybrid Mobile Engineer",
        company: "Infodation",
        desc: "Developed web and mobile apps for Dutch energy management systems.",
        color: "bg-slate-50 border border-slate-200/50 shadow-sm",
        logo: "/infodation-2024-dark.svg"
    },
    {
        year: "2022 - 2025",
        title: "Software Engineer",
        company: "FPT Software",
        desc: "Led frontend development, R&D initiatives, and AWS integration for enterprise Japanese and Korean clients.",
        color: "bg-blue-50/50 border border-blue-100/50 shadow-sm",
        logo: "/FPT_Software_logo.svg"
    },
    {
        year: "2025 - Present",
        title: "Software Engineer",
        company: "GCode INC",
        desc: "Led frontend and hybrid mobile development, R&D initiatives, and AWS integration for enterprise Japanese clients.",
        color: "bg-gray-900 text-white shadow-2xl",
        logo: "/GCode_logo.svg"
    }
];

export default function Experience() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="w-full h-screen flex flex-col items-center justify-center bg-gray-50 overflow-hidden">
            <div className="w-full max-w-[1700px] px-6 md:px-12 lg:px-32 mx-auto flex flex-col items-center">
                <h2 className="text-3xl md:text-6xl font-bold mb-20 tracking-widest uppercase font-sans text-center text-gray-950">
                    Education & Experience
                </h2>

                <div className="flex w-full h-[550px] gap-4 justify-center">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            animate={{
                                flex: hoveredIndex === index ? 4 : hoveredIndex === null ? 1 : 0.5,
                            }}
                            transition={{
                                duration: 0.6,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            className={`relative group cursor-pointer overflow-hidden ${exp.color} px-12 py-12 flex flex-col justify-end origin-bottom skew-x-[-10deg] border-r border-gray-100 last:border-r-0`}
                        >
                            {/* Background Interactive Logo (Chìm) */}
                            <motion.div
                                animate={{
                                    opacity: hoveredIndex === index ? 0.8 : 0.08,
                                    scale: hoveredIndex === index ? 1.2 : 1,
                                }}
                                transition={{ duration: 0.6 }}
                                className="absolute bottom-8 right-8 w-32 h-32 pointer-events-none skew-x-[10deg] flex items-center justify-center z-0"
                            >
                                <img
                                    src={exp.logo}
                                    alt=""
                                    className="w-full h-full object-contain filter drop-shadow-sm"
                                />
                            </motion.div>

                            {/* Un-skew content */}
                            <div
                                className={`relative z-10 skew-x-[10deg] h-full flex flex-col ${exp.color.includes('bg-gray-900') || exp.color.includes('bg-black') ? 'text-white' : 'text-gray-950'}`}
                            >
                                <div className="pt-4">
                                    <motion.h3
                                        layout="position"
                                        className="text-2xl font-bold ml-3 mb-1 leading-tight whitespace-nowrap"
                                    >
                                        {exp.company}
                                    </motion.h3>
                                    <motion.p
                                        layout="position"
                                        className="text-lg opacity-70 whitespace-nowrap"
                                    >
                                        {exp.title}
                                    </motion.p>

                                    <motion.div
                                        initial={false}
                                        animate={{
                                            opacity: hoveredIndex === index ? 1 : 0,
                                            height: hoveredIndex === index ? "auto" : 0,
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            ease: [0.22, 1, 0.36, 1]
                                        }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pt-6">
                                            <div className={`h-px w-12 mb-6 ${exp.color.includes('bg-gray-900') || exp.color.includes('bg-black') ? 'bg-white/30' : 'bg-gray-900/20'}`} />
                                            <p className={`text-lg leading-relaxed font-serif italic ${exp.color.includes('bg-gray-900') || exp.color.includes('bg-black') ? 'text-white/90' : 'text-gray-700'}`}>
                                                {exp.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Background Decorative Year */}
                            <motion.div
                                animate={{
                                    opacity: hoveredIndex === index ? 0.1 : 0.05,
                                    scale: hoveredIndex === index ? 1.1 : 1
                                }}
                                className={`absolute top-12 right-6 text-4xl font-black select-none skew-x-[10deg] whitespace-nowrap ${exp.color.includes('bg-gray-900') || exp.color.includes('bg-black') ? 'text-white' : 'text-gray-900'}`}
                            >
                                {hoveredIndex === index ? exp.year : exp.year.split(' - ').pop()}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}