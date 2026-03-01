"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroBanner() {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-background snap-start snap-always" >
            {/* Liquid Water Background Effect - Toned down for subtlety */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* Wave 1 - Subdued brightness and slower movement */}
                <motion.div
                    animate={{
                        x: [-80, 80, -80],
                        y: [-30, 30, -30],
                        scale: [1, 1.15, 1],
                        rotate: [0, 20, 0],
                        borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "70% 30% 30% 70% / 70% 70% 30% 30%", "30% 70% 70% 30% / 30% 30% 70% 70%"],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -top-[10%] -left-[10%] w-[75%] h-[75%] bg-blue-500/25 blur-[100px]"
                />

                {/* Wave 2 - Subtle Cyan */}
                <motion.div
                    animate={{
                        x: [80, -80, 80],
                        y: [30, -30, 30],
                        scale: [1.1, 1, 1.1],
                        rotate: [0, -15, 0],
                        borderRadius: ["50% 50% 50% 50% / 30% 30% 70% 70%", "30% 30% 70% 70% / 50% 50% 50% 50%", "50% 50% 50% 50% / 30% 30% 70% 70%"],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -bottom-[10%] -right-[10%] w-[65%] h-[65%] bg-cyan-400/20 blur-[120px]"
                />

                {/* Subtle Central Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />

                <Image
                    src="/hero-bg.png"
                    alt="Hero Background"
                    fill
                    className="object-cover opacity-35"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
            </div>

            {/* Content */}
            <div className="absolute z-10 top-[10%] left-[5%]">
                <h1 className="uppercase text-4xl md:text-8xl font-bold tracking-tight text-foreground drop-shadow-sm neon-text">
                    Software<br /> Engineer
                </h1>
            </div>

            <div className="absolute z-10 max-w-5xl w-full h-full flex flex-col items-center justify-end space-y-8">
                <div className="relative">
                    {/* Subtle Glow behind avatar */}
                    <div className="absolute inset-x-[-15%] top-0 h-[55%] bg-blue-500/15 blur-[100px] -z-10" />

                    <img src="/avatar.png" alt="avatar" className="object-cover h-[90vh] relative z-10 drop-shadow-[0_0_40px_rgba(59,130,246,0.2)]" />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent opacity-80 z-20" />
                </div>
            </div>

            <div className="absolute z-10 bottom-[10%] right-[5%]">
                <h1 className="text-5xl tracking-tight text-foreground drop-shadow-sm neon-text font-serif">
                    Pham Trong Tan
                </h1>
                <p className="mt-5 text-xl tracking-tight text-foreground drop-shadow-sm neon-text font-serif">
                    Nên điền cái gì đây...
                </p>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section >
    );
};