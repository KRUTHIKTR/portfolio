import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Code, Globe, HelpCircle } from 'lucide-react';
import TiltCard from './TiltCard';

const timelineData = [
  {
    id: 1,
    role: "Co-Founder & Technical Lead (CTO)",
    company: "Berukodige Farm",
    period: "Jan 2025 - Present",
    details: "Directing software infrastructure and automating agricultural nursery workflows.",
    skills: ["IoT Automation", "Infrastructure Design", "Workflow Automation"],
    type: "work",
    icon: Briefcase,
    color: "#8B5CF6", // Purple
  },
  {
    id: 2,
    role: "Operations Automation Intern",
    company: "Sanjivini Eco Solutions",
    period: "Feb 2025 - June 2025",
    details: "Developed AI-driven CRM workflows and automated content pipelines using Python, LLMs, and GCP.",
    skills: ["Python", "Large Language Models", "GCP", "API Integrations"],
    type: "work",
    icon: Code,
    color: "#3B82F6", // Blue
  },
  {
    id: 3,
    role: "Google Product Expert & Cloud Innovator",
    company: "Google / Cloud Community",
    period: "Nov 2024 - Mar 2026",
    details: "Explored cloud deployments and supported technical queries on systems scaling.",
    skills: ["GCP Architecture", "Serverless Computing", "Technical Support"],
    type: "community",
    icon: Award,
    color: "#10B981", // Green
  },
  {
    id: 4,
    role: "Open Source Contributor",
    company: "GSSoC'25 (GirlScript Summer of Code)",
    period: "July 2025 - Oct 2025",
    details: "Contributed to complex repositories, focusing on pipeline configurations and code audits.",
    skills: ["Git", "GitHub Actions", "CI/CD Audits", "JavaScript"],
    type: "open-source",
    icon: Globe,
    color: "#EC4899", // Pink
  },
  {
    id: 5,
    role: "BE in Artificial Intelligence & Data Science",
    company: "SDM Institute of Technology",
    period: "2021 - 2025",
    details: "Specialized in AI algorithms and Big Data architectures. Represented the college football and volleyball teams, and performed district-level Veergase (traditional cultural dance of Karnataka).",
    skills: ["Machine Learning", "Data Structures", "District Athletics", "Veergase Dance"],
    type: "edu",
    icon: GraduationCap,
    color: "#F59E0B", // Amber
  }
];

export default function Timeline({ isZeroG }) {
  return (
    <section id="orbit" className="relative py-24 px-4 md:px-8 max-w-6xl mx-auto z-10">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono uppercase tracking-widest text-cosmicBlue">[ 01 // CAREER PATH ]</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-2 mb-4 font-sans tracking-tight">
            My Journey & Experience
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-electricPurple to-cosmicBlue mx-auto rounded-full" />
          <p className="text-slate-400 max-w-xl mx-auto mt-4 text-sm md:text-base">
            Tracing the path from academic foundations in AI/ML to engineering automated systems in agriculture and cloud architectures.
          </p>
        </motion.div>
      </div>

      {/* Timeline Path Container */}
      <div className="relative">
        {/* Orbital Trajectory Center Line (Glowing Neon Pipe) */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/80 via-blue-500/50 to-emerald-500/10 -translate-x-1/2 hidden md:block">
          {/* Animated signal pulse traversing down */}
          <motion.div 
            animate={{ y: ["0%", "100%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-transparent via-white to-transparent shadow-[0_0_12px_#fff]"
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
                {/* Node Dot / Orbit Point */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-10 h-10 rounded-full flex items-center justify-center border-2 bg-void backdrop-blur-md"
                    style={{ 
                      borderColor: item.color,
                      boxShadow: `0 0 15px ${item.color}50, inset 0 0 10px ${item.color}30`
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: item.color }} />
                  </motion.div>
                  {/* Glowing Radar Halo Ring */}
                  <span 
                    className="absolute w-12 h-12 rounded-full animate-ping opacity-25 pointer-events-none"
                    style={{ backgroundColor: item.color }}
                  />
                </div>

                {/* Content Layout */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isLeft ? 'md:pr-12 md:text-right md:ml-0' : 'md:pl-12 md:ml-auto'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <TiltCard isZeroG={isZeroG} className="relative overflow-hidden">
                      {/* Corner Accent Glow */}
                      <div 
                        className="absolute top-0 right-0 w-24 h-24 blur-[50px] opacity-10 pointer-events-none"
                        style={{ backgroundColor: item.color }}
                      />

                      <div className="flex flex-col gap-1">
                        <span className="text-xs font-mono tracking-widest uppercase opacity-70" style={{ color: item.color }}>
                          {item.period}
                        </span>
                        <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                          {item.role}
                        </h3>
                        <h4 className="text-sm font-semibold text-slate-300">
                          {item.company}
                        </h4>
                        <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                          {item.details}
                        </p>
                        
                        {/* Skills / Tech Tags */}
                        <div className={`flex flex-wrap gap-2 mt-4 ${isLeft ? 'md:justify-end' : 'justify-start'}`}>
                          {item.skills.map((skill, sIdx) => (
                            <span 
                              key={sIdx} 
                              className="text-[10px] md:text-xs px-2.5 py-0.5 rounded-full font-mono bg-white/5 border border-white/10 text-slate-300 hover:border-purple-500/50 hover:bg-purple-950/20 transition-all duration-300"
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
