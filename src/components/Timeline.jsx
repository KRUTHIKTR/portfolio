import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Code, Award, Terminal, GitBranch, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import TiltCard from './TiltCard';

const timelineData = [
  {
    id: 1,
    role: "Data Infrastructure Assistant",
    company: "CodeNimbus Solutions",
    period: "Nov 2023 - Dec 2023",
    nodeId: "Data_Node_01",
    status: "COMPLETED",
    statusColor: "text-cyan-400 border-cyan-500/30 bg-cyan-500/5",
    dotClass: "bg-cyan-400",
    bullets: [
      "Evaluated target metrics, clean market datasets, and set up simple ETL processing scripts to support analytics pipelines.",
      "Assisted in structuring relational database schemas to store analytics telemetry data."
    ],
    skills: ["SQL", "Data Analysis", "ETL Scripts", "Database Design"],
    icon: TrendingUp
  },
  {
    id: 2,
    role: "Google Cloud Innovator",
    company: "Google Developers",
    period: "Nov 2024 - March 2026",
    nodeId: "Google_Node_02",
    status: "ARCHIVED",
    statusColor: "text-slate-500 border-slate-500/20 bg-slate-500/5",
    dotClass: "bg-slate-500",
    bullets: [
      "Explored real-world scale and containerization workflows involving Kubernetes, GCP GKE clusters, and Cloud Build.",
      "Implemented continuous training (CT) and model monitoring architectures in hybrid cloud environments."
    ],
    skills: ["GCP", "Kubernetes (GKE)", "Docker Containers", "CI/CD", "MLOps Tooling"],
    icon: Terminal
  },
  {
    id: 3,
    role: "Chief Technology Officer (CTO) & MLOps Lead",
    company: "Berukodige Farm",
    period: "Jan 2025 - Present",
    nodeId: "CTO_Node_03",
    status: "ACTIVE",
    statusColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5",
    dotClass: "bg-emerald-400 animate-pulse",
    bullets: [
      "Directed AI strategy and cloud-native software infrastructure for an early-stage agritech startup.",
      "Engineered automated MLOps serving pipelines using Docker and GCP to deploy predictive models.",
      "Designed automated IoT data collection workflows and serverless API endpoints for real-time model inference."
    ],
    skills: ["Python", "MLOps Pipelines", "GCP", "Docker", "FastAPI", "IoT Automation"],
    icon: Briefcase
  },
  {
    id: 4,
    role: "Cloud & MLOps Engineer Intern",
    company: "Sanjivini Eco Solutions Pvt Ltd",
    period: "Feb 2025 - June 2025",
    nodeId: "Intern_Node_04",
    status: "COMPLETED",
    statusColor: "text-cyan-400 border-cyan-500/30 bg-cyan-500/5",
    dotClass: "bg-cyan-400",
    bullets: [
      "Developed AI-driven CRM workflows and automated LLM-orchestrated content generation pipelines using Python.",
      "Containerized workflow services and configured automated CI/CD pipelines to deploy systems on Google Cloud Platform (GCP)."
    ],
    skills: ["Python", "Docker", "GCP Cloud Run", "LLM Orchestration", "CI/CD Pipelines"],
    icon: Code
  },
  {
    id: 5,
    role: "Open Source DevOps Contributor (GSSoC'25)",
    company: "GirlScript Summer of Code",
    period: "July 2025 - Oct 2025",
    nodeId: "DevOps_Node_05",
    status: "COMPLETED",
    statusColor: "text-cyan-400 border-cyan-500/30 bg-cyan-500/5",
    dotClass: "bg-cyan-400",
    bullets: [
      "Selected as an active contributor for open-source project deployment configurations.",
      "Collaborated to audit codebases, streamline CI/CD configurations, and fix Docker setup issues."
    ],
    skills: ["Git & GitHub", "DevOps Workflows", "Dockerfiles", "Bash Scripting"],
    icon: GitBranch
  },
  {
    id: 6,
    role: "Google Product Expert",
    company: "Google Community Support",
    period: "July 2025 - March 2026",
    nodeId: "Expert_Node_06",
    status: "ARCHIVED",
    statusColor: "text-slate-500 border-slate-500/20 bg-slate-500/5",
    dotClass: "bg-slate-500",
    bullets: [
      "Supported technical audits and optimized user system troubleshooting workflows across key Google product suites.",
      "Contributed to product accessibility, system usage guides, and cloud platform user support standards."
    ],
    skills: ["Technical Support", "Query Analysis", "System Auditing"],
    icon: Award
  }
];

function ServerNodeCard({ item, isZeroG }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full max-w-2xl mx-auto"
    >
      <TiltCard isZeroG={isZeroG} className={`relative overflow-hidden transition-all duration-300 border ${isHovered ? 'border-[#06b6d4] shadow-[0_0_20px_rgba(6,182,212,0.1)]' : 'border-white/10'}`}>
        <div className="flex flex-col gap-1 text-left">
          
          {/* Server Node Status Header */}
          <div className="flex items-center justify-between gap-4 border-b border-white/5 pb-2.5 mb-2.5 font-mono text-[9px]">
            <div className="flex items-center gap-2">
              <span className={`w-1.5 h-1.5 rounded-full ${item.dotClass}`} />
              <span className={`font-bold uppercase tracking-wider ${item.statusColor.split(' ')[0]}`}>
                STATUS: {item.status} ({item.nodeId})
              </span>
            </div>
            <span className="text-slate-500 tracking-wider">VM_INST // GCE</span>
          </div>

          <span className="text-[10px] font-mono tracking-wider uppercase font-semibold text-[#06b6d4]">
            {item.period}
          </span>
          
          <h3 className="text-lg md:text-xl font-bold text-white transition-colors">
            {item.role}
          </h3>
          
          <h4 className="text-sm font-semibold text-slate-400">
            {item.company}
          </h4>
          
          {/* Skill Tags */}
          <div className="flex flex-wrap gap-2 mt-4 justify-start">
            {item.skills.map((skill, sIdx) => (
              <span 
                key={sIdx} 
                className="text-[9px] px-2 py-1 rounded-full font-mono bg-white/5 border border-white/10 text-slate-300 hover:border-[#06b6d4]/40 hover:bg-[#06b6d4]/5 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Prompt to Hover */}
          {!isHovered && (
            <div className="text-[8px] font-mono text-slate-600 mt-4 text-center tracking-widest uppercase animate-pulse">
              // HOVER NODE TO DECRYPT METRICS
            </div>
          )}

          {/* Interactive Metric Terminal Expansion */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="bg-black border border-white/5 rounded-xl p-3.5 font-mono text-[10px] text-slate-400 space-y-2 mt-4">
                  <div className="text-[#06b6d4] font-bold border-b border-white/5 pb-1 flex justify-between">
                    <span>$ cat stdout_metrics.log</span>
                    <span className="text-[8px] text-slate-500 font-normal">STDOUT_SCAN</span>
                  </div>
                  {item.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex gap-2 items-start leading-relaxed text-slate-300">
                      <span className="text-emerald-400 font-bold select-none">[OK]</span>
                      <span className="font-sans text-[11px] text-slate-300">{bullet}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </TiltCard>
    </div>
  );
}

export default function Timeline({ isZeroG }) {
  // Default to Berukodige Farm (CTO & MLOps Lead - index 2)
  const [activeIndex, setActiveIndex] = useState(2);

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
          Interactive deployment timeline slider representing career roles as container nodes.
        </p>
      </div>

      {/* Horizontal Deployment Pipeline Slider */}
      <div className="relative mb-12 py-8 overflow-x-auto scrollbar-none bg-slate-950/20 border border-white/5 rounded-2xl p-4 md:p-6">
        <div className="relative min-w-[700px] px-8">
          
          {/* Background Fiber Optic Cable line */}
          <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-[2px] bg-white/5 z-0">
            {/* Active loading flow */}
            <motion.div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-400"
              animate={{ width: `${(activeIndex / (timelineData.length - 1)) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>

          {/* Node checkmarks */}
          <div className="flex justify-between items-center relative z-10">
            {timelineData.map((item, idx) => {
              const isSelected = activeIndex === idx;
              const isActiveNode = item.status === "ACTIVE";

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className="flex flex-col items-center gap-3 group focus:outline-none cursor-pointer"
                >
                  {/* Node Dot with pulse/indicator ring */}
                  <motion.div 
                    animate={{
                      scale: isSelected ? 1.25 : 1,
                      borderColor: isSelected ? "#06b6d4" : "rgba(255, 255, 255, 0.1)"
                    }}
                    className={`w-9 h-9 rounded-full border bg-slate-950 flex items-center justify-center transition-all ${
                      isSelected 
                        ? "shadow-[0_0_15px_rgba(6,182,212,0.4)] border-[#06b6d4]" 
                        : "hover:border-white/30"
                    }`}
                  >
                    <span className={`w-2.5 h-2.5 rounded-full ${
                      isSelected 
                        ? "bg-[#06b6d4]" 
                        : isActiveNode 
                        ? "bg-emerald-400 animate-pulse shadow-[0_0_6px_#10b981]" 
                        : "bg-slate-700"
                    }`} />
                  </motion.div>

                  {/* Metadata Checkpoint Labels */}
                  <div className="flex flex-col items-center font-mono">
                    <span className={`text-[9px] tracking-wider transition-colors uppercase ${
                      isSelected ? "text-white font-bold" : "text-slate-500 group-hover:text-slate-300"
                    }`}>
                      {item.company.split(' ')[0]}
                    </span>
                    <span className="text-[7px] text-slate-600 tracking-normal mt-0.5">{item.period.split(' ')[0]}</span>
                  </div>
                </button>
              );
            })}
          </div>

        </div>
      </div>

      {/* Selected Node Details Card with slide up/fade transition */}
      <div className="min-h-[200px] flex items-center justify-center relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <ServerNodeCard item={timelineData[activeIndex]} isZeroG={isZeroG} />
          </motion.div>
        </AnimatePresence>
      </div>

    </section>
  );
}
