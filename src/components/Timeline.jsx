import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Network, Terminal, MapPin, Activity, ShieldAlert, Cpu } from 'lucide-react';
import TiltCard from './TiltCard';

const hopData = [
  {
    id: 0,
    ip: "192.168.1.10",
    role: "Data Infrastructure Assistant",
    company: "CodeNimbus Solutions",
    period: "Nov 2023 - Dec 2023",
    location: "Tumakuru, IN",
    latency: "12ms",
    status: "SUCCESS",
    x: 50,
    y: 120,
    bullets: [
      "Evaluated target metrics, clean market datasets, and set up simple ETL processing scripts to support analytics pipelines.",
      "Assisted in structuring relational database schemas to store analytics telemetry data."
    ],
    skills: ["SQL", "Data Analysis", "ETL Scripts", "Database Design"]
  },
  {
    id: 1,
    ip: "192.168.1.20",
    role: "Google Cloud Innovator",
    company: "Google Developers",
    period: "Nov 2024 - March 2026",
    location: "Bangalore, IN",
    latency: "8ms",
    status: "SUCCESS",
    x: 130,
    y: 50,
    bullets: [
      "Explored real-world scale and containerization workflows involving Kubernetes, GCP GKE clusters, and Cloud Build.",
      "Implemented continuous training (CT) and model monitoring architectures in hybrid cloud environments."
    ],
    skills: ["GCP", "Kubernetes", "Docker", "CI/CD", "MLOps Tooling"]
  },
  {
    id: 2,
    ip: "192.168.1.30",
    role: "Chief Technology Officer (CTO) & MLOps Lead",
    company: "Berukodige Farm",
    period: "Jan 2025 - Present",
    location: "Koppa, IN",
    latency: "5ms",
    status: "ACTIVE",
    x: 210,
    y: 120,
    bullets: [
      "Directing AI strategy and cloud-native software infrastructure for an early-stage agritech startup.",
      "Engineering automated MLOps serving pipelines using Docker and GCP to deploy predictive models.",
      "Designing automated IoT data collection workflows and serverless API endpoints for real-time model inference."
    ],
    skills: ["Python", "MLOps Pipelines", "GCP", "Docker", "FastAPI", "IoT Automation"]
  },
  {
    id: 3,
    ip: "192.168.1.40",
    role: "Cloud & MLOps Engineer Intern",
    company: "Sanjivini Eco Solutions Pvt Ltd",
    period: "Feb 2025 - June 2025",
    location: "Koppa, IN",
    latency: "7ms",
    status: "SUCCESS",
    x: 290,
    y: 50,
    bullets: [
      "Developed AI-driven CRM workflows and automated LLM-orchestrated content generation pipelines using Python.",
      "Containerized workflow services and configured automated CI/CD pipelines to deploy systems on Google Cloud Platform (GCP)."
    ],
    skills: ["Python", "Docker", "GCP Cloud Run", "LLM Orchestration", "CI/CD Pipelines"]
  },
  {
    id: 4,
    ip: "192.168.1.50",
    role: "Open Source DevOps Contributor (GSSoC'25)",
    company: "GirlScript Summer of Code",
    period: "July 2025 - Oct 2025",
    location: "Remote",
    latency: "15ms",
    status: "SUCCESS",
    x: 370,
    y: 120,
    bullets: [
      "Selected as an active contributor for open-source project deployment configurations.",
      "Collaborated to audit codebases, streamline CI/CD configurations, and fix Docker setup issues."
    ],
    skills: ["Git & GitHub", "DevOps Workflows", "Dockerfiles", "Bash Scripting"]
  },
  {
    id: 5,
    ip: "192.168.1.60",
    role: "Google Product Expert",
    company: "Google Community Support",
    period: "July 2025 - March 2026",
    location: "Remote",
    latency: "9ms",
    status: "SUCCESS",
    x: 450,
    y: 50,
    bullets: [
      "Supported technical audits and optimized user system troubleshooting workflows across key Google product suites.",
      "Contributed to product accessibility, system usage guides, and cloud platform user support standards."
    ],
    skills: ["Technical Support", "Query Analysis", "System Auditing"]
  }
];

export default function Timeline({ isZeroG }) {
  const [selectedHop, setSelectedHop] = useState(2); // Default to CTO (Hop 3 / index 2)
  const [pingActive, setPingActive] = useState(false);

  // Trigger ripple ping animation on click
  const triggerPing = (idx) => {
    setSelectedHop(idx);
    setPingActive(true);
  };

  useEffect(() => {
    if (pingActive) {
      const timer = setTimeout(() => setPingActive(false), 600);
      return () => clearTimeout(timer);
    }
  }, [pingActive]);

  const currentHop = hopData[selectedHop];

  // Routing path coordinates used for background lines and packet tracking
  const pathD = "M 50,120 C 90,50 90,50 130,50 C 170,50 170,120 210,120 C 250,120 250,50 290,50 C 330,50 330,120 370,120 C 410,120 410,50 450,50";

  return (
    <section id="orbit" className="relative py-28 px-6 md:px-12 max-w-6xl mx-auto z-10 border-b border-white/5">
      {/* Section Header */}
      <div className="text-left mb-12">
        <span className="text-xs font-mono uppercase tracking-widest text-[#06b6d4] font-semibold">// 03_WORK_HISTORY</span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-2 mb-4 font-sans tracking-tight">
          Professional Experience
        </h2>
        <div className="h-[2px] w-24 bg-[#06b6d4] mb-4" />
        <p className="text-slate-400 max-w-xl text-sm font-sans leading-relaxed">
          Diagnostic cloud network traceroute mapping career progression as a sequence of router hops.
        </p>
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Diagnostic Network Map Panel (7/12 width) */}
        <div className="lg:col-span-7 border border-white/10 bg-[#080808]/90 rounded-2xl p-5 md:p-6 font-mono text-left relative overflow-hidden backdrop-blur-xl flex flex-col justify-between min-h-[360px]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:16px_16px] opacity-15 pointer-events-none" />

          {/* Traceroute HUD Header */}
          <div className="flex items-center justify-between border-b border-white/5 pb-3.5 mb-6 relative z-10">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4] animate-ping" />
              <span className="text-[10px] font-bold text-slate-300">TRACEROUTE_DIAGNOSTIC // HOST: CAREER_ROUTING_MAP</span>
            </div>
            <span className="text-[8px] text-[#06b6d4] font-bold">[ SCANNING ]</span>
          </div>

          {/* Interactive SVG Router Hop Map */}
          <div className="relative w-full aspect-[5/2] z-10 flex items-center justify-center">
            <svg viewBox="0 0 500 200" className="w-full h-full overflow-visible">
              
              {/* Fiber optic carrier path */}
              <path d={pathD} fill="none" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="3" />
              
              {/* Active illuminated path up to selected node */}
              <path d={pathD} fill="none" stroke="rgba(6, 182, 212, 0.2)" strokeWidth="3" />

              {/* Streaming Data Packets */}
              {[0, 2, 4].map((delayVal) => (
                <motion.circle
                  key={delayVal}
                  r="3.5"
                  fill="#06b6d4"
                  style={{ offsetPath: `path('${pathD}')` }}
                  animate={{ offsetDistance: ["0%", "100%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: delayVal }}
                  className="shadow-[0_0_8px_#06b6d4]"
                />
              ))}

              {/* Network Ping Ripple Circles */}
              {pingActive && (
                <motion.circle
                  cx={hopData[selectedHop].x}
                  cy={hopData[selectedHop].y}
                  r="35"
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="2.5"
                  initial={{ scale: 0.1, opacity: 0.8 }}
                  animate={{ scale: 1.5, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              )}

              {/* Hops (Node Router circles) */}
              {hopData.map((node, idx) => {
                const isSelected = selectedHop === idx;
                const isActiveHop = node.status === "ACTIVE";

                return (
                  <g 
                    key={node.id} 
                    className="cursor-pointer group"
                    onClick={() => triggerPing(idx)}
                  >
                    {/* Node glow indicator on hover */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="16"
                      fill="transparent"
                      stroke={isSelected ? "#06b6d4" : "transparent"}
                      strokeWidth="1"
                      className="transition-all duration-300 group-hover:stroke-white/30"
                    />

                    {/* Router physical circle */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="7"
                      fill={isSelected ? "#06b6d4" : "#080808"}
                      stroke={isSelected ? "#fff" : isActiveHop ? "#10b981" : "rgba(255, 255, 255, 0.25)"}
                      strokeWidth="1.5"
                      className="transition-all duration-300 group-hover:scale-125"
                      style={{ filter: isSelected ? "drop-shadow(0 0 6px #06b6d4)" : "none" }}
                    />

                    {/* Hop ID & Latency floating label */}
                    <text
                      x={node.x}
                      y={node.y + 24}
                      textAnchor="middle"
                      fill={isSelected ? "#fff" : "rgba(255, 255, 255, 0.4)"}
                      className="text-[7px] font-mono select-none"
                    >
                      HOP_{node.id + 1} ({node.latency})
                    </text>
                  </g>
                );
              })}

            </svg>
          </div>

          {/* Shell Diagnostic Command Prompt Footer */}
          <div className="border-t border-white/5 pt-4 mt-6 text-[8px] text-slate-500 flex justify-between items-center z-10">
            <span>PACKETS: SENT=64 RECEIVED=64 LOSS=0%</span>
            <span>SYSTEM: ROUTING_STABLE</span>
          </div>
        </div>

        {/* Right Column: Query Diagnostic details panel (5/12 width) */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedHop}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.25 }}
              className="h-full"
            >
              <TiltCard isZeroG={isZeroG} className="relative overflow-hidden h-full flex flex-col justify-between border-white/15">
                <div className="flex flex-col gap-1 text-left">
                  
                  {/* Query Response Header */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4 font-mono text-[10px]">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-[#06b6d4]" />
                      <span className="font-bold text-white uppercase tracking-wider">
                        QUERY_RESPONSE // HOP_{currentHop.id + 1}
                      </span>
                    </div>
                    <span className="text-[8px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded uppercase">
                      {currentHop.status}
                    </span>
                  </div>

                  {/* Network stats metadata grid */}
                  <div className="grid grid-cols-2 gap-4 font-mono text-[9px] text-slate-500 mb-6 bg-white/[0.02] border border-white/5 rounded-xl p-3">
                    <div className="flex flex-col">
                      <span className="text-slate-600">IP ADDRESS</span>
                      <span className="text-slate-300 font-bold">{currentHop.ip}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-slate-600">LATENCY</span>
                      <span className="text-[#06b6d4] font-bold">{currentHop.latency}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-slate-600">LOCATION</span>
                      <span className="text-slate-300 font-bold flex items-center gap-1">
                        <MapPin className="w-2.5 h-2.5 text-[#06b6d4]" />
                        {currentHop.location}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-slate-600">TIME PERIOD</span>
                      <span className="text-slate-300 font-bold">{currentHop.period}</span>
                    </div>
                  </div>

                  {/* Role Title & Specs */}
                  <div className="space-y-4">
                    <div className="text-left">
                      <h3 className="text-lg font-bold text-white">
                        {currentHop.role}
                      </h3>
                      <h4 className="text-xs font-semibold text-slate-400">
                        {currentHop.company}
                      </h4>
                    </div>

                    {/* Diagnostic Bullet list styled as stdout metrics logs */}
                    <div className="bg-black border border-white/5 rounded-xl p-3.5 font-mono text-[10px] text-slate-400 space-y-2 mt-4">
                      <div className="text-slate-500 border-b border-white/5 pb-1 flex justify-between mb-1.5">
                        <span>$ fetch stdout_accomplishments.log</span>
                        <span className="text-[7px] text-slate-600 font-normal">STDOUT</span>
                      </div>
                      {currentHop.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex gap-2 items-start leading-relaxed text-slate-300">
                          <span className="text-emerald-400 font-bold select-none">[+]</span>
                          <span className="font-sans text-[11px] text-slate-300">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technology tag logs */}
                  <div className="border-t border-white/5 pt-4 mt-6">
                    <span className="text-[9px] font-mono text-slate-500 block mb-2">// DETECTED_SKILL_METRICS:</span>
                    <div className="flex flex-wrap gap-2">
                      {currentHop.skills.map((skill, sIdx) => (
                        <span 
                          key={sIdx} 
                          className="text-[9px] px-2.5 py-1 rounded-full font-mono bg-white/5 border border-white/10 text-slate-300 hover:border-[#06b6d4]/40 hover:bg-[#06b6d4]/5 transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </TiltCard>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
