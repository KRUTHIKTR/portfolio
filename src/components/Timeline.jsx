import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Code, Award, Terminal, GitBranch, TrendingUp, Cpu, Monitor, Play, Pause } from 'lucide-react';
import TiltCard from './TiltCard';

const timelineData = [
  {
    id: 1,
    role: "Chief Technology Officer (CTO) & MLOps Lead",
    company: "Berukodige Farm",
    period: "Jan 2025 - Present",
    nodeId: "CTO_Node_01",
    status: "ACTIVE",
    statusColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5",
    bullets: [
      "Directing AI strategy and cloud-native software infrastructure for an early-stage agritech startup.",
      "Engineering automated MLOps serving pipelines using Docker and GCP to deploy predictive models.",
      "Designing automated IoT data collection workflows and serverless API endpoints for real-time model inference."
    ],
    skills: ["Python", "MLOps Pipelines", "GCP", "Docker", "FastAPI", "IoT Automation"],
    icon: Briefcase
  },
  {
    id: 2,
    role: "Cloud & MLOps Engineer Intern",
    company: "Sanjivini Eco Solutions Pvt Ltd",
    period: "Feb 2025 - June 2025",
    nodeId: "Intern_Node_02",
    status: "COMPLETED",
    statusColor: "text-cyan-400 border-cyan-500/30 bg-cyan-500/5",
    bullets: [
      "Developed AI-driven CRM workflows and automated LLM-orchestrated content generation pipelines using Python.",
      "Containerized workflow services and configured automated CI/CD pipelines to deploy systems on Google Cloud Platform (GCP)."
    ],
    skills: ["Python", "Docker", "GCP Cloud Run", "LLM Orchestration", "CI/CD Pipelines"],
    icon: Code
  },
  {
    id: 3,
    role: "Google Product Expert",
    company: "Google Community Support",
    period: "July 2025 - March 2026",
    nodeId: "Expert_Node_03",
    status: "ARCHIVED",
    statusColor: "text-slate-500 border-slate-500/20 bg-slate-500/5",
    bullets: [
      "Supported technical audits and optimized user system troubleshooting workflows across key Google product suites.",
      "Contributed to product accessibility, system usage guides, and cloud platform user support standards."
    ],
    skills: ["Technical Support", "Query Analysis", "System Auditing"],
    icon: Award
  },
  {
    id: 4,
    role: "Open Source DevOps Contributor (GSSoC'25)",
    company: "GirlScript Summer of Code",
    period: "July 2025 - Oct 2025",
    nodeId: "DevOps_Node_04",
    status: "COMPLETED",
    statusColor: "text-cyan-400 border-cyan-500/30 bg-cyan-500/5",
    bullets: [
      "Selected as an active contributor for open-source project deployment configurations.",
      "Collaborated to audit codebases, streamline CI/CD configurations, and fix Docker setup issues."
    ],
    skills: ["Git & GitHub", "DevOps Workflows", "Dockerfiles", "Bash Scripting"],
    icon: GitBranch
  },
  {
    id: 5,
    role: "Google Cloud Innovator",
    company: "Google Developers",
    period: "Nov 2024 - March 2026",
    nodeId: "Google_Node_05",
    status: "ARCHIVED",
    statusColor: "text-slate-500 border-slate-500/20 bg-slate-500/5",
    bullets: [
      "Explored real-world scale and containerization workflows involving Kubernetes, GCP GKE clusters, and Cloud Build.",
      "Implemented continuous training (CT) and model monitoring architectures in hybrid cloud environments."
    ],
    skills: ["GCP", "Kubernetes (GKE)", "Docker Containers", "CI/CD", "MLOps Tooling"],
    icon: Terminal
  },
  {
    id: 6,
    role: "Data Infrastructure Assistant",
    company: "CodeNimbus Solutions",
    period: "Nov 2023 - Dec 2023",
    nodeId: "Data_Node_06",
    status: "COMPLETED",
    statusColor: "text-cyan-400 border-cyan-500/30 bg-cyan-500/5",
    bullets: [
      "Evaluated target metrics, clean market datasets, and set up simple ETL processing scripts to support analytics pipelines.",
      "Assisted in structuring relational database schemas to store analytics telemetry data."
    ],
    skills: ["SQL", "Data Analysis", "ETL Scripts", "Database Design"],
    icon: TrendingUp
  }
];

export default function Timeline({ isZeroG }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  // Start Autoplay Loop
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % timelineData.length);
      }, 4500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  // Handle Manual Selection & Auto Pause
  const handleSelect = (idx) => {
    setActiveIndex(idx);
    setIsPaused(true);
  };

  const currentItem = timelineData[activeIndex];

  return (
    <section id="orbit" className="relative py-28 px-6 md:px-12 max-w-6xl mx-auto z-10 border-b border-white/5">
      {/* Section Header */}
      <div className="text-left mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#06b6d4] font-semibold">// 03_WORK_HISTORY</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-2 mb-4 font-sans tracking-tight">
            Professional Experience
          </h2>
          <div className="h-[2px] w-24 bg-[#06b6d4] mb-4" />
          <p className="text-slate-400 max-w-xl text-sm font-sans leading-relaxed">
            Autoplay loop with split-screen details scan. Hover or click to pause and override.
          </p>
        </div>

        {/* Autoplay status badge */}
        <div className="flex items-center gap-2 border border-white/10 bg-[#080808]/40 px-3 py-1.5 rounded-xl font-mono text-[9px]">
          <span className={`w-1.5 h-1.5 rounded-full ${isPaused ? 'bg-amber-400' : 'bg-emerald-400 animate-pulse'}`} />
          <span className="text-slate-400 uppercase">
            AUTOPLAY: {isPaused ? 'PAUSED (MANUAL_OVERRIDE)' : 'RUNNING (4.5s)'}
          </span>
          <button 
            onClick={() => setIsPaused(!isPaused)} 
            className="ml-2 hover:text-[#06b6d4] text-slate-500 transition-colors focus:outline-none"
          >
            {isPaused ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
          </button>
        </div>
      </div>

      {/* Split Screen Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: Compact Role Selection Grid (5/12 width) */}
        <div className="lg:col-span-5 flex flex-col gap-3 h-full justify-between">
          <div className="space-y-2.5">
            {timelineData.map((item, idx) => {
              const isSelected = activeIndex === idx;
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => handleSelect(idx)}
                  onClick={() => handleSelect(idx)}
                  className={`border rounded-xl p-4 transition-all duration-300 cursor-pointer relative overflow-hidden flex items-center justify-between group ${
                    isSelected 
                      ? 'border-[#06b6d4] bg-[#06b6d4]/5 shadow-[0_0_15px_rgba(6,182,212,0.1)]' 
                      : 'border-white/5 bg-[#080808]/30 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-4 text-left relative z-10">
                    {/* Role Icon */}
                    <div className={`p-2 rounded-lg border ${
                      isSelected ? 'border-[#06b6d4]/30 bg-[#06b6d4]/10 text-[#06b6d4]' : 'border-white/5 bg-white/[0.02] text-slate-500'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>

                    <div>
                      <h3 className={`text-xs font-bold font-mono tracking-wider uppercase ${isSelected ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>
                        {item.company}
                      </h3>
                      <p className="text-[10px] text-slate-500 font-sans mt-0.5">{item.role}</p>
                    </div>
                  </div>

                  {/* Period Tag */}
                  <span className={`text-[8px] font-mono border px-1.5 py-0.5 rounded uppercase select-none ${
                    isSelected ? 'border-[#06b6d4]/30 text-[#06b6d4] bg-[#06b6d4]/5' : 'border-white/5 text-slate-600'
                  }`}>
                    {item.period.split(' ')[0]}
                  </span>
                </div>
              );
            })}
          </div>

          {/* System Spec console log */}
          <div className="border border-white/5 bg-[#080808]/40 rounded-xl p-4 font-mono text-[9px] text-slate-500 text-left hidden lg:block mt-4">
            <span className="text-white font-bold block mb-1">SYSTEM_SPECIFICATION:</span>
            <span>AUTO_CYCLE_RATE: 4500ms</span>
            <br />
            <span>INTERRUPT_MODE: INSTANT_MOUSE_INTERRUPT</span>
          </div>
        </div>

        {/* Right Side: High-Detail Spec Viewer Card (7/12 width) */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.25 }}
              className="h-full"
            >
              <TiltCard isZeroG={isZeroG} className="relative overflow-hidden h-full flex flex-col justify-between border-white/15">
                <div className="flex flex-col gap-1 text-left">
                  
                  {/* Console Header */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4 font-mono text-[10px]">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-[#06b6d4]" />
                      <span className="font-bold text-white uppercase tracking-wider">
                        CONSOLE // DIAGNOSTIC_SCAN
                      </span>
                    </div>
                    <span className={`text-[8px] font-bold border px-1.5 py-0.5 rounded uppercase ${currentItem.statusColor}`}>
                      {currentItem.status} ({currentItem.nodeId})
                    </span>
                  </div>

                  {/* Metadata log grid */}
                  <div className="grid grid-cols-2 gap-4 font-mono text-[9px] text-slate-500 mb-6 bg-white/[0.02] border border-white/5 rounded-xl p-3">
                    <div className="flex flex-col">
                      <span className="text-slate-600">TIME PERIOD</span>
                      <span className="text-slate-300 font-bold">{currentItem.period}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-slate-600">INFRA NODE</span>
                      <span className="text-[#06b6d4] font-bold">{currentItem.nodeId}</span>
                    </div>
                  </div>

                  {/* Role & Company Header */}
                  <div className="mb-4">
                    <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                      {currentItem.role}
                    </h3>
                    <h4 className="text-sm font-semibold text-slate-400 mt-0.5">
                      {currentItem.company}
                    </h4>
                  </div>

                  {/* Diagnostic logs bullet stdout list */}
                  <div className="bg-black border border-white/5 rounded-xl p-3.5 font-mono text-[10px] text-slate-400 space-y-2 mt-4">
                    <div className="text-slate-500 border-b border-white/5 pb-1 flex justify-between mb-1.5">
                      <span>$ fetch stdout_metrics.log</span>
                      <span className="text-[7px] text-slate-600 font-normal">STDOUT</span>
                    </div>
                    {currentItem.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex gap-2 items-start leading-relaxed text-slate-300">
                        <span className="text-emerald-400 font-bold select-none">[OK]</span>
                        <span className="font-sans text-[11px] text-slate-300">{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Package Tags */}
                  <div className="border-t border-white/5 pt-4 mt-6">
                    <span className="text-[9px] font-mono text-slate-500 block mb-2">// LOADED_SKILL_PACKAGES:</span>
                    <div className="flex flex-wrap gap-2">
                      {currentItem.skills.map((skill, sIdx) => (
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
