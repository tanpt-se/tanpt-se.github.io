"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import * as d3 from "d3";
import { motion, AnimatePresence } from "framer-motion";

interface Skill {
    name: string;
    start: number;
    end: number;
    category: "frontend" | "backend" | "cloud";
    proficiency: number; // 0-100
}

const allSkills: Skill[] = [
    { name: "React / Next.js", start: 2019, end: 2026, category: "frontend", proficiency: 95 },
    { name: "React Native", start: 2019, end: 2026, category: "frontend", proficiency: 90 },
    { name: "TypeScript", start: 2019, end: 2026, category: "frontend", proficiency: 95 },
    { name: "VueJS", start: 2022, end: 2024, category: "frontend", proficiency: 75 },
    { name: "Tailwind CSS", start: 2020, end: 2026, category: "frontend", proficiency: 90 },
    { name: "Node.js", start: 2019, end: 2026, category: "backend", proficiency: 85 },
    { name: "Go Lang", start: 2022, end: 2023, category: "backend", proficiency: 60 },
    { name: "PostgreSQL / MySQL", start: 2019, end: 2026, category: "backend", proficiency: 80 },
    { name: "Java / Spring Boot", start: 2024, end: 2026, category: "backend", proficiency: 70 },
    { name: "AWS (S3/EC2/Lambda)", start: 2021, end: 2026, category: "cloud", proficiency: 80 },
    { name: "Docker / K8s", start: 2022, end: 2026, category: "cloud", proficiency: 75 },
    { name: "Firebase", start: 2020, end: 2023, category: "cloud", proficiency: 85 },
];

export default function SkillChart() {
    const [filter, setFilter] = useState<"all" | "frontend" | "backend" | "cloud">("all");
    const [windowWidth, setWindowWidth] = useState(0);
    const svgRef = useRef<SVGSVGElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const filteredSkills = useMemo(() => {
        return filter === "all" ? allSkills : allSkills.filter(s => s.category === filter);
    }, [filter]);

    useEffect(() => {
        if (!svgRef.current || !containerRef.current) return;

        // Clear previous SVG content
        d3.select(svgRef.current).selectAll("*").remove();

        const margin = { top: 40, right: 60, bottom: 40, left: 160 };
        const chartWidth = containerRef.current.clientWidth - margin.left - margin.right;
        const barHeight = 45;
        const height = (filteredSkills.length * (barHeight + 15));

        const svg = d3.select(svgRef.current)
            .attr("width", chartWidth + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        // X Scale (Years)
        const xScale = d3.scaleLinear()
            .domain([2019, 2026])
            .range([0, chartWidth]);

        // Y Scale (Skills)
        const yScale = d3.scaleBand()
            .domain(filteredSkills.map(d => d.name))
            .range([0, height])
            .padding(0.3);

        // Grid lines X
        const xAxis = d3.axisBottom(xScale)
            .ticks(7)
            .tickFormat(d => `${d}`)
            .tickSize(-height);

        svg.append("g")
            .attr("class", "x-axis")
            .attr("transform", `translate(0,${height})`)
            .call(xAxis)
            .call(g => g.select(".domain").remove())
            .call(g => g.selectAll(".tick line").attr("stroke", "rgba(255,255,255,0.05)"))
            .call(g => g.selectAll(".tick text").attr("dy", 15).attr("fill", "rgba(255,255,255,0.4)").attr("font-size", "12px"));

        // Heatmap color scale (proficiency)
        // From Blue (low) to Orange/Red (high) or tailored portfolio color
        const colorScale = d3.scaleLinear<string>()
            .domain([60, 80, 100])
            .range(["#3b82f6", "#6366f1", "#ef4444"]); // Blue -> Indigo -> Red

        // Bars
        const bars = svg.selectAll(".bar-group")
            .data(filteredSkills)
            .enter()
            .append("g")
            .attr("class", "bar-group");

        // Horizontal Grid/Guide lines for each skill
        bars.append("line")
            .attr("x1", 0)
            .attr("x2", chartWidth)
            .attr("y1", d => (yScale(d.name) || 0) + yScale.bandwidth() / 2)
            .attr("y2", d => (yScale(d.name) || 0) + yScale.bandwidth() / 2)
            .attr("stroke", "rgba(255,255,255,0.05)")
            .attr("stroke-dasharray", "4,4");

        // Main Bar
        bars.append("rect")
            .attr("x", d => xScale(d.start))
            .attr("y", d => yScale(d.name) || 0)
            .attr("width", 0) // Start with 0 for animation
            .attr("height", yScale.bandwidth())
            .attr("rx", 8)
            .attr("fill", d => colorScale(d.proficiency))
            .attr("opacity", 0.8)
            .style("cursor", "pointer")
            .on("mouseover", function (event, d) {
                d3.select(this).transition().duration(200).attr("opacity", 1).attr("transform", "scale(1.02)");
                // Could add tooltip here
            })
            .on("mouseout", function () {
                d3.select(this).transition().duration(200).attr("opacity", 0.8).attr("transform", "scale(1)");
            })
            .transition()
            .duration(1000)
            .delay((d, i) => i * 100)
            .attr("width", d => xScale(d.end) - xScale(d.start));

        // Skill Labels (Y axis)
        svg.append("g")
            .attr("class", "y-labels")
            .selectAll("text")
            .data(filteredSkills)
            .enter()
            .append("text")
            .attr("x", -20)
            .attr("y", d => (yScale(d.name) || 0) + yScale.bandwidth() / 2)
            .attr("dy", "0.35em")
            .attr("text-anchor", "end")
            .attr("fill", "white")
            .attr("font-weight", "600")
            .attr("font-size", "14px")
            .attr("opacity", 0)
            .text(d => d.name)
            .transition()
            .duration(800)
            .delay((d, i) => i * 100)
            .attr("opacity", 0.7);

        // Proficiency indicator inside bar
        bars.append("text")
            .attr("x", d => xScale(d.start) + 12)
            .attr("y", d => (yScale(d.name) || 0) + yScale.bandwidth() / 2)
            .attr("dy", "0.35em")
            .attr("fill", "white")
            .attr("font-size", "10px")
            .attr("font-weight", "bold")
            .attr("opacity", 0)
            .text(d => `${d.proficiency}%`)
            .transition()
            .duration(1000)
            .delay((d, i) => i * 100 + 500)
            .attr("opacity", 1);

    }, [filteredSkills, windowWidth]); // re-run on resize or filter

    // Force re-render on resize
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="w-full h-screen bg-background flex flex-col pt-32 pb-16 px-6 lg:px-32 overflow-hidden">
            <div className="w-full max-w-[1700px] mx-auto flex flex-col h-full">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-4xl md:text-7xl font-bold tracking-widest uppercase font-sans text-gray-950 dark:text-white mb-4"
                        >
                            Skill Chart
                        </motion.h2>
                        <p className="text-muted-foreground font-serif italic text-xl">Experience timeline & proficiency heatmap</p>
                    </div>

                    <div className="flex bg-white/5 p-1.5 rounded-2xl border border-white/10 backdrop-blur-sm">
                        {(["all", "frontend", "backend", "cloud"] as const).map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 ${filter === cat
                                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                                    : "text-muted-foreground hover:text-white"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div
                    ref={containerRef}
                    className="flex-1 w-full bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 md:p-12 overflow-y-auto scrollbar-hide relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
                    <svg ref={svgRef} className="w-full block" />
                </div>
            </div>
        </section>
    );
}