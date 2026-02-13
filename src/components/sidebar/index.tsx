"use client";

import { useEffect, useState } from "react";

const Sidebar = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <aside className="fixed top-0 right-0 h-full w-16 bg-white/5 backdrop-blur-md border-l border-white/10 flex flex-col justify-between p-4 z-40">
            <div className="flex flex-col items-center">
                <h2 className="text-xs uppercase tracking-widest font-bold [writing-mode:vertical-lr] rotate-180 py-4 opacity-50">Menu</h2>
            </div>

            <button
                onClick={scrollToTop}
                className={`flex items-center justify-center p-2 rounded-full transition-all duration-300 hover:text-primary hover:scale-110 ${isVisible ? 'opacity-50 cursor-pointer' : 'opacity-0 cursor-default pointer-events-none'}`}
                aria-label="Back to top"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>
            </button>
        </aside>
    );
};

export default Sidebar;