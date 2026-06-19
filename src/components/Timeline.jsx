import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, Code, Award, Terminal, GitBranch, TrendingUp, Cpu } from 'lucide-react';
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
  const containerRef = useRef(null);

  // Capture scroll position of the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Map scroll progress to the neon packet's vertical position
  const pulseY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section 
      id="orbit" 
      ref={containerRef} 
      className="relative py-32 px-6 md:px-12 max-w-5xl mx-auto z-10 border-b border-white/5"
    >
      {/* Section Header */}
      <div className="text-left mb-20">
        <span className="text-xs font-mono uppercase tracking-widest text-[#06b6d4] font-semibold">// 03_WORK_HISTORY</span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-2 mb-4 font-sans tracking-tight">
          Professional Experience
        </h2>
        <div className="h-[2px] w-24 bg-[#06b6d4]" />
        <p className="text-slate-400 max-w-xl mt-4 text-base font-sans leading-relaxed">
          A continuous-scroll MLOps deployment pipeline timeline. A glowing neon data packet automatically tracks your scroll path down the cable.
        </p>
      </div>

      {/* Vertical Timeline Cable Container */}
      <div className="relative max-w-4xl mx-auto">
        
        {/* Fiber Optic Center Line Cable (Background Track) */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 z-0">
          
          {/* Active colored path following scroll */}
          <motion.div 
            style={{ scaleY: scrollYProgress }} 
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#06b6d4] via-indigo-500 to-emerald-400 origin-top" 
          />

          {/* Neon Packet Data Pulse */}
          <motion.div 
            style={{ top: pulseY }}
            className="absolute w-3.5 h-3.5 rounded-full bg-[#06b6d4] shadow-[0_0_15px_#06b6d4] -left-[6px] -translate-y-1/2 z-10"
          >
            <span className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-75" />
          </motion.div>
        </div>

        {/* Timeline Items */}
        <div className="space-y-16 relative">
          {timelineData.map((item, idx) => {
            const Icon = item.icon;
            const isLeft = idx % 2 === 0;

            return (
              <div 
                key={item.id} 
                className={`flex flex-col md:flex-row items-stretch relative ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Center Node dot marker */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-8 z-20 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="w-8 h-8 rounded-full flex items-center justify-center border bg-slate-950 border-white/10 hover:border-[#06b6d4] transition-all"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#06b6d4]" />
                  </motion.div>
                </div>

                {/* Content Box */}
                <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${
                  isLeft ? 'md:pr-8 md:text-left md:ml-0' : 'md:pl-8 md:ml-0'
                }`}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                  >
                    <TiltCard isZeroG={isZeroG} className="relative overflow-hidden h-full">
                      <div className="flex flex-col gap-1 text-left">
                        
                        {/* Status Header */}
                        <div className="flex items-center justify-between gap-4 border-b border-white/5 pb-2 mb-2 font-mono text-[9px]">
                          <div className="flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-[#06b6d4]" />
                            <span className="text-slate-400 font-bold uppercase">
                              {item.nodeId}
                            </span>
                          </div>
                          <span className={`px-1.5 py-0.5 rounded border text-[8px] font-bold ${item.statusColor}`}>
                            {item.status}
                          </span>
                        </div>

                        <span className="text-[10px] font-mono tracking-wider uppercase font-semibold text-[#06b6d4]">
                          {item.period}
                        </span>
                        
                        <h3 className="text-lg font-bold text-white transition-colors">
                          {item.role}
                        </h3>
                        
                        <h4 className="text-sm font-semibold text-slate-400">
                          {item.company}
                        </h4>
                        
                        {/* Terminal Logs stdout representation */}
                        <ul className="text-xs mt-4 space-y-2 list-none text-slate-400">
                          {item.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex gap-2 items-start font-mono leading-relaxed">
                              <span className="text-[#06b6d4] font-bold select-none">&gt;</span>
                              <span className="font-sans text-slate-300 text-[11px]">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                        
                        {/* Skill Tags */}
                        <div className="flex flex-wrap gap-2 mt-5 justify-start">
                          {item.skills.map((skill, sIdx) => (
                            <span 
                              key={sIdx} 
                              className="text-[9px] px-2 py-1 rounded-full font-mono bg-white/5 border border-white/10 text-slate-300 hover:border-[#06b6d4]/40 hover:bg-[#06b6d4]/5 transition-all duration-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                      </div>
                    </TiltCard>
                  </motion.div>
                </div>

                {/* Empty column buffer space for layout balancing on desktop */}
                <div className="hidden md:block w-[45%]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
