"use client";

import { motion } from "framer-motion";

interface MarqueeTextProps {
    items: string[];
    direction?: "left" | "right";
    className?: string;
}

export const MarqueeText = ({
    items,
    direction = "left",
    className = ""
}: MarqueeTextProps) => {
    const isLeft = direction === "left";

    return (
        <section className={`w-full bg-white py-4 overflow-hidden border-y border-gray-100 ${className}`}>
            <div className="flex whitespace-nowrap">
                <motion.div
                    initial={{ x: isLeft ? 0 : "-50%" }}
                    animate={{ x: isLeft ? "-50%" : 0 }}
                    transition={{
                        duration: 30, // Slower for smoother feel
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex"
                >
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex items-center">
                            {items.map((text, index) => (
                                <div
                                    key={index}
                                    className="flex items-center px-12"
                                >
                                    <span className="tracking-widest text-xl font-bold text-gray-950 uppercase tracking-tighter whitespace-nowrap">
                                        {text}
                                    </span>
                                    <span className="ml-12 text-blue-600">✦</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
