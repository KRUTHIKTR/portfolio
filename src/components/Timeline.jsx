import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Play, PlayCircle, Loader2 } from 'lucide-react';

const pipelineStages = [
  {
    id: "initialize",
    label: "01_INITIALIZE",
    title: "Foundations & Academic Hackathons",
    duration: "42s",
    status: "PASSED",
    color: "text-emerald-400 border-emerald-500/30",
    jobs: [
      {
        role: "Data Infrastructure Assistant",
        company: "CodeNimbus Solutions",
        period: "Nov 2023 - Dec 2023",
        bullets: [
          "Evaluated target metrics, cleaned market datasets, and set up ETL scripts to support analytics pipelines.",
          "Assisted in structuring relational database schemas to store analytics telemetry data."
        ],
        skills: ["SQL", "Data Analysis", "ETL Scripts", "Database Design"]
      },
      {
        role: "Academic Hackathon Innovator",
        company: "SDMIT / RVITM Teams",
        period: "2024",
        bullets: [
          "Won 2nd and 3rd Places in national and regional hackathons/prototyping sprints.",
          "Configured containerized systems and Edge-to-Cloud telemetry under 24-hour constraints."
        ],
        skills: ["IoT Automation", "Docker", "Rapid Prototyping"]
      }
    ]
  },
  {
    id: "build_verify",
    label: "02_BUILD_VERIFY",
    title: "Scale, Containerize & Validate",
    duration: "1m 15s",
    status: "PASSED",
    color: "text-emerald-400 border-emerald-500/30",
    jobs: [
      {
        role: "Cloud & MLOps Engineer Intern",
        company: "Sanjivini Eco Solutions Pvt Ltd",
        period: "Feb 2025 - June 2025",
        bullets: [
          "Developed AI-driven CRM workflows and automated LLM-orchestrated content generation pipelines using Python.",
          "Containerized workflow services and configured automated CI/CD pipelines to deploy systems on Google Cloud Platform (GCP)."
        ],
        skills: ["Python", "Docker", "GCP Cloud Run", "LLM Orchestration", "CI/CD Pipelines"]
      },
      {
        role: "Google Cloud Innovator & Community Expert",
        company: "Google Developers Community Support",
        period: "2024 - 2026",
        bullets: [
          "Explored scale-up configurations including Kubernetes, GKE clusters, and Cloud Build pipelines.",
          "Supported community technical audits and optimized user system troubleshooting workflows."
        ],
        skills: ["GCP", "Kubernetes (GKE)", "Docker Containers", "CI/CD", "Technical Support"]
      },
      {
        role: "Open Source DevOps Contributor",
        company: "GirlScript Summer of Code",
        period: "July 2025 - Oct 2025",
        bullets: [
          "Selected as a contributor for core DevOps configurations.",
          "Fixed Docker setups and streamlined CI/CD pipeline verification files."
        ],
        skills: ["Git & GitHub", "DevOps Workflows", "Dockerfiles", "Bash Scripting"]
      }
    ]
  },
  {
    id: "deploy",
    label: "03_DEPLOY",
    title: "Deploy to Production & Lead",
    duration: "ACTIVE",
    status: "DEPLOYED",
    color: "text-cyan-400 border-cyan-500/30",
    jobs: [
      {
        role: "Chief Technology Officer (CTO) & MLOps Lead",
        company: "Berukodige Farm",
        period: "Jan 2025 - Present",
        bullets: [
          "Directing AI strategy and cloud-native software infrastructure for an early-stage agri-tech startup.",
          "Engineering automated MLOps serving pipelines using Docker and GCP to deploy predictive models.",
          "Designing automated IoT data collection workflows and serverless API endpoints for real-time model inference."
        ],
        skills: ["Python", "MLOps Pipelines", "GCP", "Docker", "FastAPI", "IoT Automation"]
      }
    ]
  }
];

export default function Timeline({ isZeroG }) {
  const [selectedStage, setSelectedStage] = useState("deploy");
  const [animatedStage, setAnimatedStage] = useState(0);

  // Progressive pipeline run animation on mount
  useEffect(() => {
    const timers = [
      setTimeout(() => setAnimatedStage(1), 800),
      setTimeout(() => setAnimatedStage(2), 1600),
      setTimeout(() => setAnimatedStage(3), 2400)
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section id="orbit" className="relative py-28 px-6 md:px-12 max-w-6xl mx-auto z-10 border-b border-white/5">
      {/* Section Header */}
      <div className="text-left mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-[#06b6d4] font-semibold">// 03_WORK_HISTORY</span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-2 mb-4 font-sans tracking-tight">
          Professional Experience
        </h2>
        <div className="h-[2px] w-24 bg-[#06b6d4] mb-4" />
        <p className="text-slate-400 max-w-xl text-sm font-sans leading-relaxed">
          Your career progress styled as an automated CI/CD pipeline run. Select a pipeline stage to decrypt build stdout logs.
        </p>
      </div>

      {/* CI/CD Pipeline Board */}
      <div className="relative max-w-4xl mx-auto bg-slate-950/40 border border-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-md mb-8">
        
        {/* Horizontal connections grid */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 relative">
          
          {/* Connector Line 1 (Initialize to Build) */}
          <div className="absolute left-[16%] right-[60%] top-[20px] -translate-y-1/2 h-[2px] bg-white/5 pointer-events-none hidden md:block z-0">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-emerald-400"
              initial={{ width: 0 }}
              animate={animatedStage >= 1 ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </div>

          {/* Connector Line 2 (Build to Deploy) */}
          <div className="absolute left-[50%] right-[20%] top-[20px] -translate-y-1/2 h-[2px] bg-white/5 pointer-events-none hidden md:block z-0">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-emerald-400"
              initial={{ width: 0 }}
              animate={animatedStage >= 2 ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </div>

          {pipelineStages.map((stage, idx) => {
            const isSelected = selectedStage === stage.id;
            const isStageActive = animatedStage >= idx;
            const isDeployStage = stage.id === "deploy";

            return (
              <button
                key={stage.id}
                onClick={() => setSelectedStage(stage.id)}
                className={`flex-1 flex flex-col items-center md:items-start text-center md:text-left group relative z-10 focus:outline-none cursor-pointer w-full max-w-xs md:max-w-none`}
              >
                {/* Node Top Row: Badge + Status */}
                <div className="flex items-center gap-3 mb-3">
                  {/* Status Indicator checkmark */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isStageActive ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0.2 }}
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all ${
                      isSelected 
                        ? 'border-[#06b6d4] bg-[#06b6d4]/10 shadow-[0_0_12px_rgba(6,182,212,0.3)]' 
                        : isStageActive
                        ? isDeployStage
                          ? 'border-cyan-500/40 bg-cyan-500/5'
                          : 'border-emerald-500/40 bg-emerald-500/5'
                        : 'border-white/10 bg-slate-950'
                    }`}
                  >
                    {isDeployStage && isStageActive ? (
                      <Loader2 className="w-5 h-5 text-cyan-400 animate-spin" />
                    ) : isStageActive ? (
                      <Check className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <span className="text-[10px] font-mono text-slate-600">WAIT</span>
                    )}
                  </motion.div>

                  {/* Stage metadata */}
                  <div className="flex flex-col items-start font-mono text-left">
                    <span className={`text-[10px] font-bold tracking-wider transition-colors ${
                      isSelected ? 'text-[#06b6d4]' : 'text-slate-400 group-hover:text-slate-200'
                    }`}>
                      {stage.label}
                    </span>
                    <span className="text-[8px] text-slate-500 uppercase tracking-widest">
                      {stage.status === 'ACTIVE' || stage.id === 'deploy' ? 'STATUS: ACTIVE' : `PASS in ${stage.duration}`}
                    </span>
                  </div>
                </div>

                {/* Node Title */}
                <h3 className={`text-sm font-bold text-white transition-colors duration-300 pl-1 ${
                  isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'
                }`}>
                  {stage.title}
                </h3>
              </button>
            );
          })}
        </div>

      </div>

      {/* Expandable Build Log console under the active stage */}
      <div className="min-h-[260px] relative">
        <AnimatePresence mode="wait">
          {selectedStage && (
            <motion.div
              key={selectedStage}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto border border-white/10 bg-[#080808]/95 rounded-2xl p-5 md:p-6 font-mono text-left relative overflow-hidden backdrop-blur-xl shadow-[0_0_30px_rgba(6,182,212,0.03)] z-10"
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:16px_16px] opacity-15 pointer-events-none" />

              {/* Terminal Log Header */}
              <div className="flex justify-between items-center border-b border-white/5 pb-3 mb-6 relative z-10">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[9px] font-bold text-slate-300 uppercase tracking-wider">
                    BUILD_LOG_SCANNER // STAGE: {selectedStage.toUpperCase()}
                  </span>
                </div>
                <span className="text-[8px] text-slate-500 uppercase tracking-widest font-mono">// RUN_ID: #GHA-48201</span>
              </div>

              {/* Logs Stream */}
              <div className="space-y-8 relative z-10">
                {pipelineStages.find(s => s.id === selectedStage).jobs.map((job, jIdx) => (
                  <div key={jIdx} className="space-y-4">
                    {/* Job banner block */}
                    <div className="bg-white/[0.02] border border-white/5 rounded-lg p-3 text-[10px] space-y-1.5">
                      <div className="flex justify-between items-center text-emerald-400 font-bold">
                        <span>&gt; RUNNING JOB: {job.role.toUpperCase().replace(/ /g, "_")}</span>
                        <span className={`text-[7px] border px-1.5 py-0.5 rounded ${
                          selectedStage === 'deploy' 
                            ? 'border-cyan-500/30 text-cyan-400 bg-cyan-500/5' 
                            : 'border-emerald-500/30 text-emerald-400 bg-emerald-500/5'
                        }`}>
                          {selectedStage === 'deploy' ? '[ ACTIVE ]' : '[ SUCCESS ]'}
                        </span>
                      </div>
                      <div className="text-slate-400 font-sans font-semibold text-[11px]">{job.company} // {job.period}</div>
                    </div>

                    {/* Stdout metrics logs */}
                    <div className="space-y-2 pl-3">
                      {job.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex gap-2.5 items-start text-[11px] text-slate-300 font-sans">
                          <span className="text-emerald-400 font-mono font-bold select-none">[OK]</span>
                          <span className="leading-relaxed">{bullet}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pl-3 pt-1">
                      {job.skills.map((skill, sIdx) => (
                        <span 
                          key={sIdx} 
                          className="text-[9px] px-2 py-0.5 rounded font-mono bg-white/5 border border-white/10 text-slate-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </section>
  );
}
