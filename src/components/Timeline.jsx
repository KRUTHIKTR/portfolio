import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Code, Award, Terminal, GitBranch, TrendingUp, Cpu, Server, Database, Layers } from 'lucide-react';
import TiltCard from './TiltCard';

const layersData = [
  {
    id: 2,
    level: "03",
    name: "Orchestration & Strategy",
    short: "Directing technology, high-level design, and automated MLOps pipelines.",
    nodeId: "STACK_L3_ORCH",
    color: "text-[#06b6d4]",
    borderColor: "border-[#06b6d4]/30",
    glowColor: "rgba(6, 182, 212, 0.15)",
    roles: [
      {
        role: "Chief Technology Officer (CTO) & MLOps Lead",
        company: "Berukodige Farm",
        period: "Jan 2025 - Present",
        bullets: [
          "Directing AI strategy and cloud-native software infrastructure for an early-stage agritech startup.",
          "Engineering automated MLOps serving pipelines using Docker and GCP to deploy predictive models.",
          "Designing automated IoT data collection workflows and serverless API endpoints for real-time model inference."
        ]
      }
    ],
    skills: ["GCP", "Docker", "FastAPI", "IoT Automation", "MLOps Pipelines"]
  },
  {
    id: 1,
    level: "02",
    name: "Automation & API Integration",
    short: "LLM workflows, container orchestration, and continuous deployment systems.",
    nodeId: "STACK_L2_AUTO",
    color: "text-indigo-400",
    borderColor: "border-indigo-500/30",
    glowColor: "rgba(99, 102, 241, 0.15)",
    roles: [
      {
        role: "Cloud & MLOps Engineer Intern",
        company: "Sanjivini Eco Solutions Pvt Ltd",
        period: "Feb 2025 - June 2025",
        bullets: [
          "Developed AI-driven CRM workflows and automated LLM-orchestrated content generation pipelines using Python.",
          "Containerized workflow services and configured automated CI/CD pipelines to deploy systems on Google Cloud Platform (GCP)."
        ]
      },
      {
        role: "Open Source DevOps Contributor (GSSoC'25)",
        company: "GirlScript Summer of Code",
        period: "July 2025 - Oct 2025",
        bullets: [
          "Selected as an active contributor for open-source project deployment configurations.",
          "Collaborated to audit codebases, streamline CI/CD configurations, and fix Docker setup issues."
        ]
      },
      {
        role: "Google Cloud Innovator & Community Expert",
        company: "Google Developers",
        period: "Nov 2024 - March 2026",
        bullets: [
          "Explored real-world scale and containerization workflows involving Kubernetes, GCP GKE clusters, and Cloud Build.",
          "Supported technical audits and optimized user system troubleshooting workflows across key Google product suites."
        ]
      }
    ],
    skills: ["Python", "Docker", "CI/CD", "Kubernetes", "GCP Cloud Run", "Git & GitHub"]
  },
  {
    id: 0,
    level: "01",
    name: "Foundational Logic & Data Systems",
    short: "Core algorithms, data engineering scripts, database schemas, and academic CS.",
    nodeId: "STACK_L1_BASE",
    color: "text-emerald-400",
    borderColor: "border-emerald-500/30",
    glowColor: "rgba(16, 185, 129, 0.15)",
    roles: [
      {
        role: "Data Infrastructure Assistant",
        company: "CodeNimbus Solutions",
        period: "Nov 2023 - Dec 2023",
        bullets: [
          "Evaluated target metrics, clean market datasets, and set up simple ETL processing scripts to support analytics pipelines.",
          "Assisted in structuring relational database schemas to store analytics telemetry data."
        ]
      },
      {
        role: "B.E. Computer Science & Engineering",
        company: "SDMIT",
        period: "Completed",
        bullets: [
          "Studied core concepts including Data Structures, Database Management Systems, Operating System Kernels, and Network Protocols."
        ]
      }
    ],
    skills: ["SQL", "Data Analysis", "ETL Scripts", "Database Design", "Core CS Algorithms"]
  }
];

function ServerRackBlock({ layer, isActive, isHovered, onHover, onSelect }) {
  return (
    <motion.div
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      onClick={onSelect}
      whileHover={{ scale: 1.02, y: -2 }}
      style={{
        boxShadow: isHovered || isActive ? `0 0 25px ${layer.glowColor}` : 'none'
      }}
      className={`bg-[#080808]/90 border ${
        isActive || isHovered ? layer.borderColor.replace('/30', '') : 'border-white/10'
      } rounded-xl p-5 cursor-pointer relative overflow-hidden transition-all duration-300 flex justify-between items-center group`}
    >
      {/* Grid Pattern Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:12px_12px] opacity-10 pointer-events-none" />

      {/* Left side: Node ID & Level */}
      <div className="flex items-center gap-4 relative z-10 text-left">
        <div className={`font-mono text-xs border border-white/10 px-2 py-1 rounded bg-white/5 font-bold ${layer.color}`}>
          L_{layer.level}
        </div>
        <div>
          <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider">{layer.name}</h3>
          <p className="text-[10px] text-slate-500 font-mono mt-0.5">{layer.nodeId} // READY</p>
        </div>
      </div>

      {/* Right side: Blinking status LEDs */}
      <div className="flex gap-1.5 relative z-10">
        <span className={`w-2 h-2 rounded-full ${isActive || isHovered ? 'bg-emerald-400 animate-pulse' : 'bg-slate-700'}`} />
        <span className={`w-2 h-2 rounded-full ${isActive || isHovered ? 'bg-cyan-400 animate-pulse' : 'bg-slate-700'}`} />
        <span className="w-2 h-2 rounded-full bg-slate-700" />
      </div>
    </motion.div>
  );
}

export default function Timeline({ isZeroG }) {
  const [activeLayer, setActiveLayer] = useState(2); // Default to Top Layer (Orchestration)
  const [hoveredLayer, setHoveredLayer] = useState(null);

  const displayLayerIndex = hoveredLayer !== null ? hoveredLayer : activeLayer;
  const currentLayer = layersData.find(l => l.id === displayLayerIndex);

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
          A physical server rack visualization mapping your career progression from foundational systems up to high-level architecture.
        </p>
      </div>

      {/* Two Column Blueprint Stack Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Interactive 3D Server Blocks (5/12 width) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-4 h-full">
          {layersData.map((layer) => (
            <ServerRackBlock
              key={layer.id}
              layer={layer}
              isActive={activeLayer === layer.id}
              isHovered={hoveredLayer === layer.id}
              onHover={(hovering) => setHoveredLayer(hovering ? layer.id : null)}
              onSelect={() => setActiveLayer(layer.id)}
            />
          ))}
          
          {/* Tech Spec Box */}
          <div className="border border-white/5 bg-[#080808]/40 rounded-xl p-4 font-mono text-[9px] text-slate-500 text-left">
            <span className="text-white font-bold block mb-1">SYSTEM_SPECIFICATION:</span>
            <span>STACK_LAYER_COUPLING: LOOSELY_COUPLED</span>
            <br />
            <span>DEPLOYMENT_STRATEGY: CONTINUOUS_DEPLOYMENT</span>
          </div>
        </div>

        {/* Right Column: Layer Spec Panel (7/12 width) */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={displayLayerIndex}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.25 }}
              className="h-full"
            >
              <TiltCard isZeroG={isZeroG} className="relative overflow-hidden h-full flex flex-col justify-between border-white/15">
                <div className="flex flex-col gap-1 text-left">
                  
                  {/* Layer HUD Header */}
                  <div className="flex items-center justify-between gap-4 border-b border-white/5 pb-3 mb-4 font-mono text-[10px]">
                    <div className="flex items-center gap-2">
                      <Layers className={`w-3.5 h-3.5 ${currentLayer.color}`} />
                      <span className={`font-bold uppercase tracking-wider ${currentLayer.color}`}>
                        LAYER_{currentLayer.level}: {currentLayer.name}
                      </span>
                    </div>
                    <span className="text-slate-500 font-bold">{currentLayer.nodeId}</span>
                  </div>

                  {/* Short Description */}
                  <p className="text-xs text-slate-400 mb-6 italic font-sans leading-relaxed">
                    {currentLayer.short}
                  </p>

                  {/* List of Specific Roles/Experiences in this Layer */}
                  <div className="space-y-6">
                    {currentLayer.roles.map((roleItem, rIdx) => (
                      <div key={rIdx} className="space-y-3">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                          <h4 className="text-sm md:text-base font-bold text-white">
                            {roleItem.role}
                          </h4>
                          <span className="text-[9px] font-mono text-[#06b6d4] border border-[#06b6d4]/20 px-2 py-0.5 rounded bg-[#06b6d4]/5 md:self-center self-start">
                            {roleItem.period}
                          </span>
                        </div>
                        <h5 className="text-xs font-semibold text-slate-400 -mt-1">
                          {roleItem.company}
                        </h5>

                        <ul className="text-xs space-y-2 list-none text-slate-400">
                          {roleItem.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex gap-2 items-start font-mono leading-relaxed">
                              <span className="text-emerald-400 font-bold select-none">[OK]</span>
                              <span className="font-sans text-[11px] text-slate-300">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Floating Glowing Tech Tags */}
                  <div className="border-t border-white/5 pt-4 mt-6">
                    <span className="text-[9px] font-mono text-slate-500 block mb-2">// DETECTED_TECHNOLOGIES:</span>
                    <div className="flex flex-wrap gap-2">
                      {currentLayer.skills.map((skill, sIdx) => (
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
