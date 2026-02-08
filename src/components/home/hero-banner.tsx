import Image from "next/image";
export default function HeroBanner() {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden" >
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg.png"
                    alt="Hero Background"
                    fill
                    className="object-cover opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
            </div>

            <div className="absolute z-10 top-[10%] left-[5%]">
                <h1 className="uppercase text-4xl md:text-8xl font-bold tracking-tight text-foreground drop-shadow-sm neon-text">
                    Software<br /> Engineer
                </h1>
            </div>

            <div className="absolute z-10 max-w-5xl w-full h-full flex flex-col items-center space-y-8">
                <div className="relative">
                    <img src="/avatar.png" alt="avatar" className="object-cover h-[90vh]" />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent opacity-60" />
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