import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Server, CheckCircle2, Cloud, Code } from 'lucide-react';
import TiltCard from './TiltCard';

function ProjectCard({ project, isZeroG }) {
  const [activeTab, setActiveTab] = useState('ai'); // 'ai' or 'devops'

  return (
    <TiltCard 
      isZeroG={isZeroG} 
      className="w-full flex flex-col justify-between border-purple-500/20 hover:border-purple-500/40 bg-indigoSpace/60 min-h-[420px]"
    >
      <div>
        {/* Toggle Switch at Top */}
        <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/5">
          <div className="flex bg-black/40 p-1 rounded-xl border border-white/10 gap-1">
            <button
              onClick={() => setActiveTab('ai')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] md:text-xs font-mono font-bold transition-all ${
                activeTab === 'ai'
                  ? 'bg-purple-600 text-white shadow-[0_0_10px_rgba(139,92,246,0.3)]'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              🤖 AI Details
            </button>
            <button
              onClick={() => setActiveTab('devops')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] md:text-xs font-mono font-bold transition-all ${
                activeTab === 'devops'
                  ? 'bg-blue-600 text-white shadow-[0_0_10px_rgba(59,130,246,0.3)]'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              ☁️ Cloud & Ops
            </button>
          </div>

          <span className="text-[10px] md:text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" /> {project.accuracy} Accuracy
          </span>
        </div>

        {/* Project Meta Info */}
        <div className="mb-6">
          <h3 className="text-xl md:text-2xl font-extrabold text-white mb-1">
            {project.title}
          </h3>
          <span className="text-[10px] font-mono tracking-widest text-cosmicBlue uppercase">
            {project.subType}
          </span>
        </div>

        {/* Content Display based on active tab */}
        <div className="min-h-[160px]">
          <AnimatePresence mode="wait">
            {activeTab === 'ai' ? (
              <motion.div
                key="ai-content"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div>
                  <h4 className="text-xs uppercase font-mono text-purple-400 tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5" /> Core Algorithm
                  </h4>
                  <p className="text-sm text-slate-300 font-mono font-semibold">{project.aiSpecs.algorithm}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase font-mono text-purple-400 tracking-wider mb-1.5">Target Inputs</h4>
                  <p className="text-sm text-slate-300">{project.aiSpecs.inputs}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase font-mono text-purple-400 tracking-wider mb-1.5">Use Case Description</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{project.aiSpecs.description}</p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="devops-content"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div>
                  <h4 className="text-xs uppercase font-mono text-blue-400 tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Cloud className="w-3.5 h-3.5" /> Deployed Platform
                  </h4>
                  <p className="text-sm text-slate-300 font-mono font-semibold">{project.devopsSpecs.platform}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase font-mono text-blue-400 tracking-wider mb-1.5">Container & Setup</h4>
                  <p className="text-sm text-slate-300">{project.devopsSpecs.setup}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase font-mono text-blue-400 tracking-wider mb-1.5">Deployment Operations</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{project.devopsSpecs.operations}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Technology Tags */}
      <div className="mt-8 flex flex-wrap gap-2 border-t border-white/5 pt-4">
        {project.tags.map((tag, tIdx) => (
          <span 
            key={tIdx} 
            className="text-[10px] font-mono text-slate-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </TiltCard>
  );
}

export default function Projects({ isZeroG }) {
  const projectsData = [
    {
      id: 1,
      title: "Crop Recommendation Engine",
      subType: "Automated Classification System",
      accuracy: "92.53%",
      tags: ["Machine Learning", "Docker", "GCP", "Python API"],
      aiSpecs: {
        algorithm: "Gaussian Naive Bayes Model",
        inputs: "Soil metrics (Nitrogen, Phosphorus, Potassium), pH levels, temperature, and local rainfall.",
        description: "Classifies and matches complex soil telemetry values with high-yield crops to automate agricultural decision-making."
      },
      devopsSpecs: {
        platform: "Google Cloud Platform (GCP)",
        setup: "Containerized microservice packaged in Docker.",
        operations: "Ensures scalable HTTP response routes via Flask API. Auto-deploys with isolated dependencies, optimizing server overhead."
      }
    },
    {
      id: 2,
      title: "Customer Churn Analytics",
      subType: "Predictive Analytics Pipeline",
      accuracy: "90.76%",
      tags: ["Random Forest", "ETL Pipelines", "PostgreSQL", "Data Analytics"],
      aiSpecs: {
        algorithm: "Random Forest Classifier",
        inputs: "User behavior logs, interaction history, session details, and demographic parameters.",
        description: "Evaluates key patterns to flag churning users, calculating correlation coefficients to isolate risk vectors."
      },
      devopsSpecs: {
        platform: "Secure Environment & Storage",
        setup: "Relational storage schemas inside a PostgreSQL database.",
        operations: "Orchestrates scheduled ETL runs. Automated data preprocessing cleans raw telemetry into structured tables for predictive scoring."
      }
    }
  ];

  return (
    <section id="lab" className="relative py-24 px-4 md:px-8 max-w-6xl mx-auto z-10">
      {/* Background Section Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono uppercase tracking-widest text-electricPurple">[ 02 // TECHNICAL PROJECTS ]</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-2 mb-4 font-sans tracking-tight">
            AI & DevOps Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cosmicBlue to-electricPurple mx-auto rounded-full" />
          <p className="text-slate-400 max-w-xl mx-auto mt-4 text-sm md:text-base">
            Demonstrating MLOps: training accurate predictive models and setting up clean cloud pipelines for secure deployments.
          </p>
        </motion.div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} isZeroG={isZeroG} />
        ))}
      </div>
    </section>
  );
}
