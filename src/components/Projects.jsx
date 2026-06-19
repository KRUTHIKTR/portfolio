import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Cpu, Cloud, Settings, Layers, Database, Timer } from 'lucide-react';
import TiltCard from './TiltCard';

const projectsData = [
  {
    id: 1,
    title: "Crop Recommendation System",
    accuracy: "92.53% Accuracy",
    github: "https://github.com/KRUTHIKTR/Crop-recommendation-system",
    gradient: "from-emerald-600/30 to-[#06b6d4]/5",
    ai: {
      algorithm: "Gaussian Naive Bayes Classifier",
      inputs: "N-P-K Soil Ratios, Temperature, Humidity, pH, Rainfall",
      dataset: "2,200 Agricultural Soil samples",
      notes: "Directly calculates optimal harvest configurations based on real-time sensor array inputs."
    },
    devops: {
      host: "GCP Cloud Run (Serverless)",
      baseImage: "python:3.10-slim",
      database: "Local cache / CSV storage",
      latency: "42ms Response Latency",
      pipeline: "GitHub Actions CI/CD"
    },
    tags: ["Python", "Naive Bayes", "Agriculture ML"]
  },
  {
    id: 2,
    title: "Customer Churn Prediction Pipeline",
    accuracy: "90.76% Accuracy",
    github: "https://github.com/KRUTHIKTR/Customer-churn-prediction",
    gradient: "from-blue-600/30 to-[#06b6d4]/5",
    ai: {
      algorithm: "Random Forest Classifier",
      inputs: "Tenure, Contract Type, Monthly Charges, Support Tickets",
      dataset: "7,043 Telecom Client records",
      notes: "Identifies high-risk customer segments using weighted feature importances."
    },
    devops: {
      host: "Docker Container (FastAPI + Gunicorn)",
      baseImage: "python:3.10-alpine",
      database: "PostgreSQL (GCP Cloud SQL)",
      latency: "65ms Response Latency",
      pipeline: "GCP Cloud Build Workflow"
    },
    tags: ["Random Forest", "ETL Pipeline", "PostgreSQL"]
  },
  {
    id: 3,
    title: "Titanic Survival Predictor",
    accuracy: "82.68% Accuracy",
    github: "https://github.com/KRUTHIKTR/Titanic-Survival-Prediction",
    gradient: "from-cyan-600/30 to-[#06b6d4]/5",
    ai: {
      algorithm: "Random Forest + KNN Imputation",
      inputs: "Passenger Class, Sex, Age, Fare, Cabin Deck, Family Size",
      dataset: "891 Historical Passenger profiles",
      notes: "Enforces missing value imputation layers for high-variance tabular features."
    },
    devops: {
      host: "Streamlit UI + HuggingFace Spaces",
      baseImage: "python:3.9-slim",
      database: "In-memory caching layer",
      latency: "120ms UI Interaction latency",
      pipeline: "HuggingFace Sync Actions"
    },
    tags: ["Random Forest", "Data Imputation", "Scikit-Learn"]
  }
];

function ProjectCard({ project, isZeroG }) {
  // Mode state: 'ai' or 'devops'
  const [mode, setMode] = useState('ai');

  return (
    <TiltCard 
      isZeroG={isZeroG} 
      className="bg-white/5 border border-white/10 rounded-2xl h-full flex flex-col justify-between p-5 relative group"
    >
      <div className="flex flex-col h-full justify-between">
        
        {/* Toggle Switch Bar */}
        <div className="flex bg-black/40 border border-white/10 rounded-xl p-1 font-mono text-[9px] mb-5 relative z-20">
          <button
            onClick={() => setMode('ai')}
            className={`flex-grow py-1.5 rounded-lg text-center transition-all cursor-pointer font-bold ${
              mode === 'ai' 
                ? 'bg-[#06b6d4] text-black' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            🤖 AI MODEL
          </button>
          <button
            onClick={() => setMode('devops')}
            className={`flex-grow py-1.5 rounded-lg text-center transition-all cursor-pointer font-bold ${
              mode === 'devops' 
                ? 'bg-indigo-500 text-white' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            ☁️ CLOUD SETUP
          </button>
        </div>

        {/* Dynamic Display Panel */}
        <div className="flex-grow flex flex-col justify-between min-h-[220px]">
          <AnimatePresence mode="wait">
            {mode === 'ai' ? (
              <motion.div
                key="ai"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
                className="flex-grow flex flex-col justify-between text-left"
              >
                {/* AI Model Content */}
                <div className="space-y-3.5">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-base md:text-lg font-bold text-white leading-snug group-hover:text-[#06b6d4] transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    {/* GitHub link */}
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 border border-white/10 hover:border-[#06b6d4] bg-white/5 hover:bg-[#06b6d4]/10 rounded-full text-slate-400 hover:text-white transition-all duration-300 flex-shrink-0"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[9px] font-bold text-white px-2.5 py-1 border border-emerald-500/20 bg-emerald-500/5 rounded-full">
                      {project.accuracy}
                    </span>
                  </div>

                  {/* Diagnostic stats */}
                  <div className="space-y-2 font-mono text-[10px] text-slate-400 bg-white/[0.02] border border-white/5 rounded-xl p-3">
                    <div>
                      <span className="text-slate-600 block">ALGORITHM</span>
                      <span className="text-slate-200 font-bold">{project.ai.algorithm}</span>
                    </div>
                    <div>
                      <span className="text-slate-600 block">TARGET INPUTS</span>
                      <span className="text-slate-300 text-[9px]">{project.ai.inputs}</span>
                    </div>
                  </div>

                  <p className="text-xs text-white/50 leading-relaxed font-sans font-normal">
                    {project.ai.notes}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-white/5 flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="devops"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="flex-grow flex flex-col justify-between text-left"
              >
                {/* Cloud/DevOps Setup Content */}
                <div className="space-y-3.5">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-base md:text-lg font-bold text-white leading-snug group-hover:text-indigo-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 border border-white/10 hover:border-indigo-400 bg-white/5 hover:bg-indigo-500/10 rounded-full text-slate-400 hover:text-white transition-all duration-300 flex-shrink-0"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[9px] font-bold text-white px-2.5 py-1 border border-indigo-500/20 bg-indigo-500/5 rounded-full flex items-center gap-1">
                      <Cloud className="w-2.5 h-2.5 text-indigo-400" />
                      DEPLOYED
                    </span>
                  </div>

                  {/* Infrastructure stats */}
                  <div className="space-y-2 font-mono text-[10px] text-slate-400 bg-white/[0.02] border border-white/5 rounded-xl p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">TARGET HOST</span>
                      <span className="text-slate-200 font-bold">{project.devops.host}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">DOCKER BASE</span>
                      <span className="text-slate-300 font-bold">{project.devops.baseImage}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">DATABASE</span>
                      <span className="text-slate-300">{project.devops.database}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">LATENCY</span>
                      <span className="text-indigo-400 font-bold">{project.devops.latency}</span>
                    </div>
                  </div>

                  <p className="text-xs text-white/50 leading-relaxed font-sans font-normal">
                    Pipeline setup: {project.devops.pipeline}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-white/5 flex justify-between items-center text-[8px] font-mono text-slate-500">
                  <span>TELEMETRY: CONNECTED</span>
                  <span>BUILD_OK</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </TiltCard>
  );
}

export default function Projects({ isZeroG }) {
  return (
    <section id="lab" className="relative py-32 px-6 md:px-12 max-w-6xl mx-auto z-10 border-b border-white/5">
      {/* Section Header */}
      <div className="text-left mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-[#06b6d4] font-semibold">// 05_FEATURED_WORK</span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-2 mb-4 font-sans tracking-tight">
          Featured Work
        </h2>
        <div className="h-[2px] w-24 bg-[#06b6d4]" />
        <p className="text-slate-400 max-w-2xl mt-4 text-sm font-sans leading-relaxed">
          Interactive MLOps system dashboards. Use the split-toggle switch to view model metrics vs. container infrastructure.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            isZeroG={isZeroG} 
          />
        ))}
      </div>
    </section>
  );
}
