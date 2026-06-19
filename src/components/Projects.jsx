import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Cpu, Cloud, Terminal, Compass, Layers } from 'lucide-react';
import TiltCard from './TiltCard';

const projectsData = [
  {
    id: 1,
    title: "Crop Recommendation System",
    accuracy: "92.53% Accuracy",
    host: "GCP Cloud Run (Serverless)",
    latency: "42ms Latency",
    algorithm: "Gaussian Naive Bayes Classifier",
    github: "https://github.com/KRUTHIKTR/Crop-recommendation-system",
    details: [
      "Calculates optimal harvest options from soil sensor telemetry.",
      "Engineered automated MLOps serving using Docker containers."
    ],
    skills: ["Python", "GCP", "Docker", "Naive Bayes"],
    posClass: "left-[8%] lg:left-[12%] top-[10%] lg:top-[12%]",
    coreX: "22%",
    coreY: "25%"
  },
  {
    id: 2,
    title: "Customer Churn Prediction Pipeline",
    accuracy: "90.76% Accuracy",
    host: "FastAPI + Docker Container",
    latency: "65ms Latency",
    algorithm: "Random Forest Classifier",
    github: "https://github.com/KRUTHIKTR/Customer-churn-prediction",
    details: [
      "Tracks customer churn risks with weighted feature importances.",
      "Configured automated CI/CD builds on GCP Cloud SQL databases."
    ],
    skills: ["Random Forest", "ETL", "PostgreSQL", "FastAPI"],
    posClass: "right-[8%] lg:right-[12%] top-[12%] lg:top-[15%]",
    coreX: "78%",
    coreY: "28%"
  },
  {
    id: 3,
    title: "Titanic Survival Predictor",
    accuracy: "82.68% Accuracy",
    host: "Streamlit UI + HuggingFace Spaces",
    latency: "120ms Latency",
    algorithm: "Random Forest + KNN Imputer",
    github: "https://github.com/KRUTHIKTR/Titanic-Survival-Prediction",
    details: [
      "Handles missing tabular features with KNN imputation layers.",
      "Interactive Streamlit web frontend for real-time inference checks."
    ],
    skills: ["Scikit-Learn", "KNN Impute", "Streamlit", "HuggingFace"],
    posClass: "left-1/2 -translate-x-1/2 bottom-[5%] lg:bottom-[8%]",
    coreX: "50%",
    coreY: "72%"
  }
];

export default function Projects({ isZeroG }) {
  const [hoveredId, setHoveredId] = useState(null);

  const activeProject = projectsData.find(p => p.id === hoveredId);

  return (
    <section id="lab" className="relative py-28 px-6 md:px-12 max-w-6xl mx-auto z-10 border-b border-white/5">
      {/* Section Header */}
      <div className="text-left mb-12">
        <span className="text-xs font-mono uppercase tracking-widest text-[#06b6d4] font-semibold">// 05_FEATURED_WORK</span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-2 mb-4 font-sans tracking-tight">
          Featured Work
        </h2>
        <div className="h-[2px] w-24 bg-[#06b6d4]" />
        <p className="text-slate-400 max-w-xl mt-4 text-sm font-sans leading-relaxed">
          Hover near any orbital project satellite node to connect a laser telemetry tether and pull system details.
        </p>
      </div>

      {/* 3D Gravitational Orbit Container */}
      <div className="relative w-full h-[520px] md:h-[580px] border border-white/5 bg-[#080808]/40 rounded-2xl overflow-hidden mb-8">
        <div className="absolute inset-0 bg-[radial-gradient(#111_1px,transparent_1px)] [background-size:20px_20px] opacity-25 pointer-events-none" />

        {/* Orbit Background Guides */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
          <circle cx="50%" cy="50%" r="35%" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="4 8" />
          <circle cx="50%" cy="50%" r="20%" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="2 4" />
        </svg>

        {/* Laser Tether Layer */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
          {hoveredId !== null && (
            <>
              {/* Base Line */}
              <motion.line
                x1="50%"
                y1="50%"
                x2={activeProject.coreX}
                y2={activeProject.coreY}
                stroke="#06b6d4"
                strokeWidth="1.5"
                className="opacity-40"
              />
              {/* Pulsing Light particle */}
              <motion.circle
                r="4.5"
                fill="#06b6d4"
                className="shadow-[0_0_12px_#06b6d4]"
                animate={{
                  cx: ["50%", activeProject.coreX],
                  cy: ["50%", activeProject.coreY]
                }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              />
            </>
          )}
        </svg>

        {/* Center Deployment Core */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
          <div className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#06b6d4]/40 to-emerald-500/40 blur-xl animate-pulse" />
            <div className="absolute w-full h-full rounded-full border border-[#06b6d4]/20 animate-[spin_12s_linear_infinite]" />
            <div className="absolute w-4/5 h-4/5 rounded-full border border-emerald-500/20 border-dashed animate-[spin_8s_linear_infinite_reverse]" />
            <div className="absolute w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-tr from-[#06b6d4] to-emerald-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] flex flex-col items-center justify-center text-slate-950 select-none">
              <Cpu className="w-4 h-4 md:w-5 md:h-5 text-slate-950 animate-pulse" />
              <span className="text-[7px] font-mono font-bold mt-0.5 tracking-wider">CORE</span>
            </div>
          </div>
        </div>

        {/* Orbiting Satellite Cards */}
        {projectsData.map((project) => {
          const isSelected = hoveredId === project.id;
          const isDimmed = hoveredId !== null && hoveredId !== project.id;

          return (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`absolute z-30 transition-all duration-500 cursor-pointer ${project.posClass}`}
            >
              <motion.div
                animate={{
                  scale: isSelected ? 1.05 : 1,
                  y: isSelected ? -5 : [0, 4, 0],
                }}
                transition={{
                  scale: { duration: 0.3 },
                  y: { repeat: isSelected ? 0 : Infinity, duration: 4, ease: "easeInOut", delay: project.id * 0.5 }
                }}
                className={`w-64 border rounded-xl p-4 text-left font-mono backdrop-blur-md transition-opacity duration-500 ${
                  isSelected 
                    ? 'border-[#06b6d4] bg-[#06b6d4]/5 shadow-[0_0_20px_rgba(6,182,212,0.15)]' 
                    : isDimmed 
                      ? 'border-white/5 bg-[#080808]/20 opacity-30 blur-[0.5px]' 
                      : 'border-white/10 bg-[#080808]/60 hover:border-white/20'
                }`}
              >
                <div className="flex justify-between items-start gap-2 mb-2">
                  <span className="text-[9px] text-[#06b6d4] font-bold">NODE_{project.id} // ACTIVE</span>
                  <span className="text-[8px] text-slate-500 border border-white/5 px-1.5 py-0.5 rounded">{project.accuracy}</span>
                </div>
                <h3 className="text-xs font-bold text-white leading-normal truncate">{project.title}</h3>
                <p className="text-[9px] text-slate-500 mt-1 truncate">{project.algorithm}</p>

                {/* Micro path connector indicator */}
                {isSelected && (
                  <div className="h-0.5 w-12 bg-[#06b6d4] mt-3 animate-pulse" />
                )}
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Slide-Open Details Telemetry Drawer */}
      <div className="border border-white/10 bg-[#080808]/90 rounded-2xl p-5 md:p-6 font-mono text-left relative overflow-hidden backdrop-blur-xl min-h-[160px] flex flex-col justify-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:16px_16px] opacity-15 pointer-events-none" />

        <AnimatePresence mode="wait">
          {hoveredId ? (
            <motion.div
              key={hoveredId}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
            >
              {/* Left Column: Title & Metrics */}
              <div className="md:col-span-4 space-y-3">
                <div>
                  <span className="text-[8px] text-[#06b6d4] font-bold tracking-widest block uppercase">// SYSTEM_DETAILS_PULL</span>
                  <h3 className="text-base md:text-lg font-bold text-white leading-snug mt-1 font-sans">{activeProject.title}</h3>
                </div>
                
                <div className="flex gap-2">
                  <span className="text-[9px] font-bold text-white px-2 py-0.5 border border-emerald-500/20 bg-emerald-500/5 rounded">
                    {activeProject.accuracy}
                  </span>
                  <span className="text-[9px] font-bold text-white px-2 py-0.5 border border-[#06b6d4]/20 bg-[#06b6d4]/5 rounded">
                    {activeProject.latency}
                  </span>
                </div>
              </div>

              {/* Center Column: Description Logs */}
              <div className="md:col-span-5 space-y-1.5 text-xs text-slate-300">
                <span className="text-[8px] text-slate-600 block">// INFERENCE STDOUT</span>
                {activeProject.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex gap-2 items-start text-[11px] font-sans">
                    <span className="text-emerald-400 font-bold font-mono">[OK]</span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              {/* Right Column: Hosting & Link */}
              <div className="md:col-span-3 space-y-3 flex flex-col items-stretch justify-center md:border-l md:border-white/5 md:pl-6">
                <div className="text-[9px]">
                  <span className="text-slate-600 block">HOST TARGET:</span>
                  <span className="text-slate-300 font-bold block truncate">{activeProject.host}</span>
                </div>
                
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-1.5 px-3 border border-[#06b6d4]/30 bg-[#06b6d4]/5 hover:bg-[#06b6d4]/10 text-white rounded-lg text-[9px] font-mono transition-all duration-300 cursor-pointer"
                >
                  <span>SYNC_GITHUB</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative z-10 text-center py-6 text-slate-600 text-[10px] uppercase tracking-wider flex flex-col items-center justify-center gap-2"
            >
              <Compass className="w-5 h-5 text-slate-700 animate-spin" />
              <span>[ STATUS: WAITING_FOR_INFRASTRUCTURE_LINK_STIMULATION ... HOVER_NODE_TO_PULL_TELEMETRY ]</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </section>
  );
}
