import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Award, ShieldCheck, Key, GitCommit, GitBranch } from 'lucide-react';
import TiltCard from './TiltCard';

const nodesData = {
  // Academic Nodes
  "ac-1": {
    id: "ac-1",
    branch: "left",
    category: "Academic Milestone",
    title: "BE in AI & Data Science",
    institution: "SDM Institute of Technology, Ujire",
    date: "2021 - 2025",
    color: "#06b6d4",
    details: [
      "Visvesvaraya Technological University (VTU) curriculum.",
      "Represented the varsity football team.",
      "NSS (National Service Scheme) volunteer."
    ]
  },
  "ac-2": {
    id: "ac-2",
    branch: "left",
    category: "Academic Milestone",
    title: "Pre-University (PCMB)",
    institution: "SDM PU College",
    date: "2019 - 2021",
    color: "#06b6d4",
    details: [
      "Specialized in Physics, Chemistry, Mathematics, and Biology.",
      "Rooted fundamentals in mathematical logic and analytics."
    ]
  },
  "ac-3": {
    id: "ac-3",
    branch: "left",
    category: "Academic Milestone",
    title: "Secondary School Certification",
    institution: "Morarji Desai Residential School",
    date: "Higher Secondary",
    color: "#06b6d4",
    details: [
      "Represented the school in volleyball, kabaddi, and javelin throw.",
      "Participated in district-level cultural group performance ('Veergase' team)."
    ]
  },
  // Professional Nodes
  "cert-1": {
    id: "cert-1",
    branch: "right",
    category: "Professional License",
    title: "Oracle Certified AI Foundations Associate",
    institution: "Oracle Cloud Infrastructure",
    date: "Issued Sep 2025",
    color: "#10b981",
    details: [
      "Credential ID: 322304644OCI25AICFA",
      "Covers fundamental concepts of AI, Machine Learning, Deep Learning, and Generative AI patterns on OCI."
    ]
  },
  "cert-2": {
    id: "cert-2",
    branch: "right",
    category: "Professional License",
    title: "Google Tech Equity Collective Member",
    institution: "Google TEC",
    date: "Active 2025",
    color: "#10b981",
    details: [
      "Selected member of the Google Tech Equity Collective.",
      "Focused on technical skill building, networking, and professional career readiness."
    ]
  },
  "cert-3": {
    id: "cert-3",
    branch: "right",
    category: "Professional License",
    title: "GSSoC Contributor Certificate",
    institution: "Girlscript Summer of Code",
    date: "Issued Oct 2025",
    color: "#10b981",
    details: [
      "Open source contributions to core developer repositories.",
      "Collaborated with international project maintainers on active codebases."
    ]
  },
  "cert-4": {
    id: "cert-4",
    branch: "right",
    category: "Professional License",
    title: "Data Science Job Simulation",
    institution: "BCGX Forage",
    date: "Issued Aug 2024",
    color: "#10b981",
    details: [
      "Completed EDA, feature engineering, and predictive modeling simulations.",
      "Formulated strategic business presentations based on data model insights."
    ]
  }
};

export default function EducationCertifications({ isZeroG }) {
  const [activeNodeId, setActiveNodeId] = useState("ac-1");
  const activeNode = nodesData[activeNodeId];

  return (
    <section id="education" className="relative py-32 px-6 md:px-12 max-w-6xl mx-auto z-10 border-b border-white/5">
      {/* Section Header */}
      <div className="text-left mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-[#06b6d4] font-semibold">// 07_ACADEMICS_TECH_TREE</span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-2 mb-4 font-sans tracking-tight">
          Education & Credentials
        </h2>
        <div className="h-[2px] w-24 bg-[#06b6d4]" />
        <p className="text-slate-400 max-w-2xl mt-4 text-sm font-sans leading-relaxed">
          Explore the interactive academic and professional branch nodes. Hover over any node on the technology tree to decrypt certifications, athletic achievements, and cultural activities.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: The Gaming-style Skill Tech Tree (7 cols) */}
        <div className="lg:col-span-7 relative border border-white/5 bg-[#080808]/40 rounded-2xl p-6 md:p-8 min-h-[460px] flex flex-col justify-center">
          
          {/* Central Vertical Trunk Spine */}
          <div className="absolute left-1/2 top-10 bottom-10 w-[2px] bg-white/10 -translate-x-1/2 z-0 hidden sm:block" />
          
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12">
            
            {/* Left Branch - Academic Milestones */}
            <div className="space-y-6 flex flex-col justify-center text-left sm:text-right">
              <div className="pb-2 border-b border-white/5 mb-2 flex items-center sm:justify-end gap-2 text-slate-400 font-mono text-sm uppercase tracking-widest font-bold">
                <GraduationCap className="w-5 h-5 text-[#06b6d4]" />
                <span>Academic Branch</span>
              </div>
              
              {Object.values(nodesData).filter(n => n.branch === "left").map((node) => {
                const isActive = activeNodeId === node.id;
                return (
                  <div
                    key={node.id}
                    onMouseEnter={() => setActiveNodeId(node.id)}
                    onClick={() => setActiveNodeId(node.id)}
                    className="relative cursor-pointer group"
                  >
                    {/* Connecting Line to Spine (Desktop only) */}
                    <div className={`absolute right-[-24px] top-1/2 -translate-y-1/2 w-6 h-[2px] z-0 transition-colors duration-300 hidden sm:block ${
                      isActive ? 'bg-[#06b6d4]' : 'bg-white/10 group-hover:bg-white/20'
                    }`} />
                    
                    <div className={`p-4 rounded-xl border transition-all duration-300 relative z-10 ${
                      isActive 
                        ? 'border-[#06b6d4] bg-[#06b6d4]/10 shadow-[0_0_12px_rgba(6,182,212,0.15)] text-white' 
                        : 'border-white/5 bg-[#080808]/80 hover:border-white/20 text-slate-400 hover:text-slate-200'
                    }`}>
                      <span className="text-xs font-mono text-slate-500 block mb-0.5">{node.date}</span>
                      <h4 className="text-base font-bold font-mono tracking-wide">{node.title}</h4>
                      <p className="text-sm text-slate-500 font-sans mt-0.5">{node.institution}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Branch - Professional Licenses */}
            <div className="space-y-6 flex flex-col justify-center text-left">
              <div className="pb-2 border-b border-white/5 mb-2 flex items-center gap-2 text-slate-400 font-mono text-sm uppercase tracking-widest font-bold">
                <Award className="w-5 h-5 text-emerald-400" />
                <span>Credentials Branch</span>
              </div>

              {Object.values(nodesData).filter(n => n.branch === "right").map((node) => {
                const isActive = activeNodeId === node.id;
                return (
                  <div
                    key={node.id}
                    onMouseEnter={() => setActiveNodeId(node.id)}
                    onClick={() => setActiveNodeId(node.id)}
                    className="relative cursor-pointer group"
                  >
                    {/* Connecting Line to Spine (Desktop only) */}
                    <div className={`absolute left-[-24px] top-1/2 -translate-y-1/2 w-6 h-[2px] z-0 transition-colors duration-300 hidden sm:block ${
                      isActive ? 'bg-emerald-400' : 'bg-white/10 group-hover:bg-white/20'
                    }`} />

                    <div className={`p-4 rounded-xl border transition-all duration-300 relative z-10 ${
                      isActive 
                        ? 'border-emerald-500 bg-emerald-500/10 shadow-[0_0_12px_rgba(16,185,129,0.15)] text-white' 
                        : 'border-white/5 bg-[#080808]/80 hover:border-white/20 text-slate-400 hover:text-slate-200'
                    }`}>
                      <span className="text-xs font-mono text-slate-500 block mb-0.5">{node.date}</span>
                      <h4 className="text-base font-bold font-mono tracking-wide">{node.title}</h4>
                      <p className="text-sm text-slate-500 font-sans mt-0.5">{node.institution}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* Right Column: Sticky Spec Telemetry Console (5 cols) */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
          <TiltCard 
            isZeroG={isZeroG} 
            className="border-white/10 bg-white/5 h-auto flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-2.5 text-xs font-mono text-slate-700 select-none">
              SEC_TREE_v1.0
            </div>

            <div className="space-y-6 text-left p-3">
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <span className="text-sm font-mono font-semibold text-[#06b6d4] uppercase tracking-wider flex items-center gap-2">
                  <Key className="w-5 h-5" /> NODE DECRYPTION CONSOLE
                </span>
                <span className="text-xs font-mono text-emerald-400 border border-emerald-500/20 bg-emerald-500/5 px-2 py-0.5 rounded uppercase">
                  ACTIVE
                </span>
              </div>

              {/* Console Screen */}
              <div className="border border-white/5 bg-black/60 rounded-xl p-5 min-h-[240px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeNode.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4 text-left"
                  >
                    <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold px-2 py-1 border border-emerald-500/20 bg-emerald-500/5 rounded self-start">
                      <ShieldCheck className="w-5 h-5" /> STATUS: DECRYPTED
                    </div>

                    <div className="space-y-4">
                      <div>
                        <span className="text-xs uppercase font-mono tracking-widest text-slate-500 block mb-1">
                          {activeNode.category} // Title:
                        </span>
                        <h4 className="text-lg font-extrabold text-white font-mono leading-tight">
                          {activeNode.title}
                        </h4>
                        <p className="text-sm text-slate-400 font-sans mt-1">{activeNode.institution}</p>
                      </div>

                      <div>
                        <span className="text-xs uppercase font-mono tracking-widest text-slate-500 block mb-1.5">
                          Node Attributes & Achievements:
                        </span>
                        <ul className="space-y-2">
                          {activeNode.details.map((detail, idx) => (
                            <li key={idx} className="flex gap-2 items-start font-sans text-base text-slate-300 leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4] mt-2 flex-shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-xs font-mono text-slate-600">
                  <span>NODE_ID: 0x{activeNode.id.toUpperCase()}</span>
                  <span>INTEGRITY: 100%</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-between items-center text-xs font-mono text-slate-500 text-left p-3">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#06b6d4] rounded-full" />
                Connection: Secure
              </span>
              <span>Sync Rate: Real-time</span>
            </div>
          </TiltCard>
        </div>

      </div>
    </section>
  );
}
