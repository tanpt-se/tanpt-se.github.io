"use client";

import { motion } from "framer-motion";

export const Highlight = ({ children }: { children: React.ReactNode }) => (
    <motion.span
        className="relative inline font-bold cursor-default px-0.5 font-serif"
        whileHover="visible"
        initial="hidden"
    >
        <motion.span
            className="absolute inset-0 bg-gray-900 rounded-sm overflow-hidden"
            variants={{
                hidden: { left: 0, width: "0%" },
                visible: {
                    left: ["0%", "0%", "100%"],
                    width: ["0%", "100%", "0%"],
                }
            }}
            transition={{
                duration: 0.4,
                ease: "easeInOut",
                times: [0, 0.4, 1]
            }}
        />
        <motion.span
            className="relative z-10"
            variants={{
                hidden: { color: "#000000" },
                visible: {
                    color: ["#000000", "#ffffff", "#000000"]
                }
            }}
            transition={{
                duration: 0.4,
                times: [0, 0.4, 1]
            }}
        >
            {children}
        </motion.span>
    </motion.span>
);
