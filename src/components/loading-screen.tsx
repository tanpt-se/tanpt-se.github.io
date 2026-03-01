"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 15); // Roughly 1.5 seconds to reach 100%

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{
                opacity: 0,
                scale: 1.1,
                filter: "blur(40px)"
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#020617]"
        >
            <div className="relative flex flex-col items-center">
                {/* Logo/Icon Animation */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mb-8"
                >
                    <div className="relative w-20 h-20">
                        <motion.div
                            animate={{
                                rotate: 360,
                                borderRadius: ["25% 75% 75% 25% / 25% 25% 75% 75%", "75% 25% 25% 75% / 75% 75% 25% 25%", "25% 75% 75% 25% / 25% 25% 75% 75%"]
                            }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 border-2 border-blue-500/50 blur-[2px]"
                        />
                        <div className="absolute inset-2 border border-blue-400/30 rounded-lg flex items-center justify-center">
                            <span className="text-2xl font-bold text-blue-400">T</span>
                        </div>
                    </div>
                </motion.div>

                {/* Progress Text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-white/40 text-sm font-light tracking-[0.2em] uppercase mb-4"
                >
                    Loading Experience
                </motion.div>

                {/* Progress Bar Container */}
                <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
                    <motion.div
                        className="absolute h-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: "easeOut" }}
                    />
                </div>

                {/* Progress Percentage */}
                <div className="mt-4 text-xs font-mono text-blue-400/60 tabular-nums">
                    {progress}%
                </div>
            </div>

            {/* Decorative Orbs */}
            <div className="absolute top-[20%] left-[20%] w-64 h-64 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[20%] right-[20%] w-64 h-64 bg-blue-400/5 blur-[120px] rounded-full pointer-events-none" />
        </motion.div>
    );
}
