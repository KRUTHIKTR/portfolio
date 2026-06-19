import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, Award, Terminal, GitBranch, TrendingUp } from 'lucide-react';
import TiltCard from './TiltCard';

const timelineData = [
  {
    id: 1,
    role: "Chief Technology Officer (CTO) & MLOps Lead",
    company: "Berukodige Farm",
    period: "Jan 2025 - Present",
    bullets: [
      "Directing AI strategy and cloud-native software infrastructure for an early-stage agri-tech startup.",
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
    bullets: [
      "Developed AI-driven CRM workflows and automated LLM-orchestrated content generation pipelines using Python.",
      "Containerized workflow services and configured automated CI/CD pipelines to deploy systems on Google Cloud Platform (GCP)."
    ],
    skills: ["Python", "Docker", "GCP Cloud Run", "LLM Orchestration", "CI/CD Pipelines"],
    icon: Code
  },
  {
    id: 3,
    role: "Google Cloud Innovator",
    company: "Google Developers",
    period: "Nov 2024 - March 2026",
    bullets: [
      "Explored real-world scale and containerization workflows involving Kubernetes, GCP GKE clusters, and Cloud Build.",
      "Implemented continuous training (CT) and model monitoring architectures in hybrid cloud environments."
    ],
    skills: ["GCP", "Kubernetes (GKE)", "Docker Containers", "CI/CD", "MLOps Tooling"],
    icon: Terminal
  },
  {
    id: 4,
    role: "Google Product Expert",
    company: "Google Community Support",
    period: "July 2025 - March 2026",
    bullets: [
      "Supported technical audits and optimized user system troubleshooting workflows across key Google product suites.",
      "Contributed to product accessibility, system usage guides, and cloud platform user support standards."
    ],
    skills: ["Technical Support", "Query Analysis", "System Auditing"],
    icon: Award
  },
  {
    id: 5,
    role: "Open Source DevOps Contributor (GSSoC'25)",
    company: "GirlScript Summer of Code",
    period: "July 2025 - Oct 2025",
    bullets: [
      "Selected as an active contributor for open-source project deployment configurations.",
      "Collaborated to audit codebases, streamline CI/CD configurations, and fix Docker setup issues."
    ],
    skills: ["Git & GitHub", "DevOps Workflows", "Dockerfiles", "Bash Scripting"],
    icon: GitBranch
  },
  {
    id: 6,
    role: "Data Infrastructure Assistant",
    company: "CodeNimbus Solutions",
    period: "Nov 2023 - Dec 2023",
    bullets: [
      "Evaluated target metrics, clean market datasets, and set up simple ETL processing scripts to support analytics pipelines.",
      "Assisted in structuring relational database schemas to store analytics telemetry data."
    ],
    skills: ["SQL", "Data Analysis", "ETL Scripts", "Database Design"],
    icon: TrendingUp
  }
];

export default function Timeline({ isZeroG }) {
  return (
    <section id="orbit" className="relative py-32 px-6 md:px-12 max-w-6xl mx-auto z-10 border-b border-white/5">
      {/* Section Header */}
      <div className="text-left mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-[#06b6d4] font-semibold">// 03_WORK_HISTORY</span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-2 mb-4 font-sans tracking-tight">
          Professional Experience
        </h2>
        <div className="h-[2px] w-24 bg-[#06b6d4]" />
        <p className="text-slate-400 max-w-xl mt-4 text-base font-sans leading-relaxed">
          A track record of engineering cloud automation workflows, developing machine learning models, and building startup systems.
        </p>
      </div>

      {/* Timeline Path Container */}
      <div className="relative max-w-4xl">
        {/* Glow center line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#06b6d4] via-[#06b6d4]/25 to-transparent -translate-x-1/2 hidden md:block">
          <motion.div 
            animate={{ y: ["0%", "100%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-transparent via-[#06b6d4] to-transparent shadow-[0_0_12px_#06b6d4]"
          />
        </div>

        {/* Timeline Items */}
        <div className="space-y-12 relative">
          {timelineData.map((item, idx) => {
            const Icon = item.icon;
            const isLeft = idx % 2 === 0;

            return (
              <div 
                key={item.id} 
                className="flex flex-col md:flex-row items-start md:items-center relative"
              >
                {/* Node Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="w-10 h-10 rounded-full flex items-center justify-center border bg-slate-950 border-white/10 hover:border-[#06b6d4] transition-all"
                    style={{ 
                      boxShadow: `0 0 10px rgba(6, 182, 212, 0.2)`
                    }}
                  >
                    <Icon className="w-4 h-4 text-[#06b6d4]" />
                  </motion.div>
                </div>

                {/* Content Box */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isLeft ? 'md:pr-12 md:text-left md:ml-0' : 'md:pl-12 md:ml-auto'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -25 : 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <TiltCard isZeroG={isZeroG} className="relative overflow-hidden">
                      <div className="flex flex-col gap-1 text-left">
                        <span className="text-[10px] font-mono tracking-wider uppercase font-semibold text-[#06b6d4]">
                          {item.period}
                        </span>
                        <h3 className="text-lg md:text-xl font-bold text-white transition-colors">
                          {item.role}
                        </h3>
                        <h4 className="text-sm font-semibold text-slate-400">
                          {item.company}
                        </h4>
                        
                        {/* Summary details formatted as Terminal System Logs */}
                        <ul className="text-xs mt-4 space-y-2.5 list-none text-slate-400">
                          {item.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex gap-2 items-start font-mono leading-relaxed">
                              <span className="text-[#06b6d4] font-bold select-none">&gt;</span>
                              <span className="font-sans text-slate-300">{bullet}</span>
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
