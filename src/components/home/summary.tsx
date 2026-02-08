"use client";

import { motion } from "framer-motion";
import { Highlight } from "../ui/highlight";
import { MarqueeText } from "../ui/marquee-text";
const skills = [
    "Frontend Architecture",
    "Hybrid Mobile Apps",
    "UI/UX Design",
    "Scalable Solutions",
    "High Performance",
    "React Native",
    "Next.js",
];

const certificates = [
    "React Developer Expert",
    "Professional Scrum Master™ I",
    "Cloud DevOps Engineer",
];

export const HomeSummary = () => {
    return (
        <>
            <MarqueeText items={skills} direction="left" />
            <section className="w-full bg-gray-50 py-24 flex flex-col items-center justify-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-4xl"
                >
                    <p className="text-2xl text-gray-950 mb-8 max-w-4xl mx-auto leading-relaxed px-4">
                        With a strong foundation in <Highlight>frontend architecture</Highlight> and <br /> extensive experience in <Highlight>hybrid mobile applications</Highlight>,
                        <br />I focus on creating scalable, high-performance web and mobile solutions with strong <Highlight>UI thinking</Highlight> and a solid sense of <Highlight>visual design</Highlight>.
                    </p>
                </motion.div>
            </section>
            <MarqueeText items={certificates} direction="right" />
        </>

    );
};
