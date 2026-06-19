import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, CheckCircle } from 'lucide-react';

const logBlocks = [
  {
    id: 1,
    header: "[2025-01-15 09:00:00] [CTO_LEAD] STATUS: ACTIVE // COMPANY: Berukodige Farm",
    headerColor: "text-emerald-400 font-bold",
    bullets: [
      "[+] Directed AI strategy and cloud-native software infrastructure for an early-stage agritech startup.",
      "[+] Engineered automated MLOps serving pipelines using Docker and GCP to deploy predictive models.",
      "[+] Designed automated IoT data collection workflows and serverless API endpoints for real-time model inference."
    ],
    skills: "Python, MLOps Pipelines, GCP, Docker, FastAPI, IoT Automation"
  },
  {
    id: 2,
    header: "[2025-02-01 10:30:00] [MLOPS_INTERN] STATUS: COMPLETED // COMPANY: Sanjivini Eco Solutions",
    headerColor: "text-cyan-400 font-bold",
    bullets: [
      "[+] Developed AI-driven CRM workflows and automated LLM-orchestrated content generation pipelines using Python.",
      "[+] Containerized workflow services and configured automated CI/CD pipelines to deploy systems on GCP."
    ],
    skills: "Python, Docker, GCP Cloud Run, LLM Orchestration, CI/CD Pipelines"
  },
  {
    id: 3,
    header: "[2025-07-01 08:45:00] [PRODUCT_EXPERT] STATUS: ARCHIVED // COMPANY: Google Community Support",
    headerColor: "text-slate-500 font-bold",
    bullets: [
      "[+] Supported technical audits and optimized user system troubleshooting workflows across key Google product suites.",
      "[+] Contributed to product accessibility, system usage guides, and cloud platform user support standards."
    ],
    skills: "Technical Support, Query Analysis, System Auditing"
  },
  {
    id: 4,
    header: "[2025-07-15 11:15:00] [DEVOPS_CONTRIB] STATUS: COMPLETED // COMPANY: GirlScript Summer of Code",
    headerColor: "text-cyan-400 font-bold",
    bullets: [
      "[+] Selected as an active contributor for open-source project deployment configurations.",
      "[+] Collaborated to audit codebases, streamline CI/CD configurations, and fix Docker setup issues."
    ],
    skills: "Git & GitHub, DevOps Workflows, Dockerfiles, Bash Scripting"
  },
  {
    id: 5,
    header: "[2024-11-01 09:00:00] [CLOUD_INNOVATOR] STATUS: ARCHIVED // COMPANY: Google Developers",
    headerColor: "text-slate-500 font-bold",
    bullets: [
      "[+] Explored real-world scale and containerization workflows involving Kubernetes, GCP GKE clusters, and Cloud Build.",
      "[+] Implemented continuous training (CT) and model monitoring architectures in hybrid cloud environments."
    ],
    skills: "GCP, Kubernetes (GKE), Docker Containers, CI/CD, MLOps Tooling"
  },
  {
    id: 6,
    header: "[2023-11-01 14:00:00] [DATA_INFRA_AST] STATUS: COMPLETED // COMPANY: CodeNimbus Solutions",
    headerColor: "text-cyan-400 font-bold",
    bullets: [
      "[+] Evaluated target metrics, clean market datasets, and set up simple ETL processing scripts to support analytics pipelines.",
      "[+] Assisted in structuring relational database schemas to store analytics telemetry data."
    ],
    skills: "SQL, Data Analysis, ETL Scripts, Database Design"
  }
];

export default function Timeline() {
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const lineVariants = {
    initial: { opacity: 0, x: -8 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.25, ease: "easeOut" } }
  };

  return (
    <section id="orbit" className="relative py-28 px-6 md:px-12 max-w-5xl mx-auto z-10 border-b border-white/5">
      {/* Section Header */}
      <div className="text-left mb-12">
        <span className="text-xs font-mono uppercase tracking-widest text-[#06b6d4] font-semibold">// 03_WORK_HISTORY</span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-2 mb-4 font-sans tracking-tight">
          Professional Experience
        </h2>
        <div className="h-[2px] w-24 bg-[#06b6d4] mb-4" />
        <p className="text-slate-400 max-w-xl text-sm font-sans leading-relaxed">
          Cascading stdout build console compiling career logs. 100% readable, zero navigation blocks.
        </p>
      </div>

      {/* Large Glassmorphic Terminal Window */}
      <div className="border border-white/10 bg-[#080808]/90 rounded-2xl p-6 font-mono text-left relative overflow-hidden backdrop-blur-xl shadow-[0_0_40px_rgba(6,182,212,0.02)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:16px_16px] opacity-15 pointer-events-none" />

        {/* Console Windows Title Bar */}
        <div className="flex items-center justify-between border-b border-white/5 pb-3.5 mb-6 relative z-10">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="text-[10px] text-slate-500 font-mono ml-2">STDOUT // WORK_HISTORY_BUILD.sh</span>
          </div>
          <span className="text-[8px] text-[#06b6d4] border border-[#06b6d4]/20 px-2 py-0.5 rounded bg-[#06b6d4]/5 uppercase tracking-widest font-bold">
            [ BUILD: SUCCESS ]
          </span>
        </div>

        {/* Staggered Cascading Log Lines */}
        <motion.div 
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6 relative z-10"
        >
          {logBlocks.map((block) => (
            <div key={block.id} className="space-y-2 border-l border-white/5 pl-4 ml-2">
              
              {/* Header log entry line */}
              <motion.div variants={lineVariants} className="text-xs md:text-sm flex flex-col md:flex-row md:items-center gap-1.5">
                <span className="text-[#06b6d4] select-none font-bold">&gt;&gt;&gt;</span>
                <span className={block.headerColor}>{block.header}</span>
              </motion.div>

              {/* Accomplishment log stdout lines */}
              <div className="space-y-1 pl-4">
                {block.bullets.map((bullet, bIdx) => (
                  <motion.div 
                    key={bIdx} 
                    variants={lineVariants} 
                    className="text-slate-300 text-[11px] md:text-xs font-sans leading-relaxed flex gap-2 items-start"
                  >
                    <span className="text-emerald-400 font-mono font-bold select-none">[OK]</span>
                    <span>{bullet.replace('[+] ', '')}</span>
                  </motion.div>
                ))}
              </div>

              {/* Packages/Skills tag logs */}
              <motion.div variants={lineVariants} className="pl-4 text-[10px] text-slate-500 leading-normal flex gap-2 items-start">
                <span className="text-[#06b6d4]/80 font-mono select-none">DEBUG:</span>
                <span>PACKAGES_LOADED: {block.skills}</span>
              </motion.div>

            </div>
          ))}

          {/* Compilation terminal success final tag */}
          <motion.div 
            variants={lineVariants}
            className="pt-4 border-t border-white/5 text-xs text-emerald-400 font-bold flex items-center gap-2 mt-4"
          >
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Process finished with exit code 0. Infrastructure logs synced.</span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
