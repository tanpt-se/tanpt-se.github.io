"use client";

import { Experience, Footer, Header, HeroBanner, HomeSummary, LoadingScreen, Project, Sidebar, SkillChart, DemoProject } from "@/components";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Artificial delay to ensure fonts and assets are ready
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <Header />
      <Sidebar />
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll w-full">
        <HeroBanner />
        <HomeSummary />
        <Experience />
        <Project />
        <SkillChart />
        <DemoProject />
        <Footer />
      </div>
    </>
  );
}
