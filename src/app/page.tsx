"use client";

import { Experience, Footer, Header, HeroBanner, HomeSummary, Project, Sidebar, SkillChart } from "@/components";


export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Sidebar />
      <HeroBanner />
      <HomeSummary />
      <Experience />
      <Project />
      <SkillChart />
      <Footer />
    </div>
  );
}
