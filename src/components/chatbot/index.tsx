"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-8 left-8 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="absolute bottom-16 left-0 w-80 h-96 glass rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col"
                    >
                        <div className="p-4 bg-primary/10 border-b border-white/10 flex justify-between items-center">
                            <span className="font-bold text-sm tracking-wider uppercase">AI Assistant</span>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1 p-4 text-xs opacity-60">
                            How can I help you today?
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="relative group flex items-center justify-center w-14 h-14 rounded-full glass border border-white/20 shadow-lg transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                aria-label="Toggle chatbot"
            >
                <motion.div
                    className="absolute inset-0 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <div className="relative">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="w-6 h-6 text-foreground group-hover:text-primary transition-colors duration-300"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        />
                    </svg>
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                </div>
            </motion.button>
        </div>
    );
}