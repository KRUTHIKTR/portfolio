import React from 'react';
import { GitBranch, ArrowUpRight } from 'lucide-react';
import TiltCard from './TiltCard';

const projectsData = [
  {
    id: 1,
    index: "01",
    nodeId: "CROP_RECS_PIPELINE",
    status: "Active",
    statusColor: "bg-emerald-400 shadow-[0_0_8px_#10b981]",
    title: "Crop Recommendation System",
    description: "Multi-parameter Machine Learning classifier using a Gaussian Naive Bayes algorithm to predict optimal crops based on real-time soil & meteorology metrics.",
    github: "https://github.com/KRUTHIKTR/Crop-recommendation-system",
    metrics: {
      accuracy: "92.53%",
      inference: "Real-time API",
      deploy: "Docker + GCP Cloud Run"
    },
    themeColor: "group-hover:border-[#06b6d4]/30"
  },
  {
    id: 2,
    index: "02",
    nodeId: "CHURN_PRED_PIPELINE",
    status: "Active",
    statusColor: "bg-emerald-400 shadow-[0_0_8px_#10b981]",
    title: "Customer Churn Prediction Pipeline",
    description: "Automated end-to-end telemetry data pipeline deploying a Random Forest Classifier to identify high-risk customer accounts and retention opportunities.",
    github: "https://github.com/KRUTHIKTR/Customer-churn-prediction",
    metrics: {
      accuracy: "90.76%",
      inference: "Real-time API",
      deploy: "Docker + GCP Cloud Run"
    },
    themeColor: "group-hover:border-indigo-500/30"
  },
  {
    id: 3,
    index: "03",
    nodeId: "TITANIC_SURV_NODE",
    status: "Completed",
    statusColor: "bg-cyan-400 shadow-[0_0_8px_#06b6d4]",
    title: "Titanic Survival Predictor",
    description: "Robust binary classification engine utilizing data imputation layers and optimized decision forest models to predict passenger survival outcomes.",
    github: "https://github.com/KRUTHIKTR/Titanic-Survival-Prediction",
    metrics: {
      accuracy: "82.68%",
      inference: "Batch inference",
      deploy: "Docker + Streamlit"
    },
    themeColor: "group-hover:border-emerald-500/30"
  }
];

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
          Unified deployment hub logs. View pipeline profiles, server states, and inference metrics for each active codebase.
        </p>
      </div>

      {/* Projects 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <TiltCard 
            key={project.id} 
            isZeroG={isZeroG} 
            className={`bg-[#080808]/90 border border-white/10 rounded-2xl h-full flex flex-col justify-between p-6 relative group transition-all duration-300 ${project.themeColor}`}
          >
            <div className="flex flex-col h-full justify-between text-left">
              
              {/* High-Tech Index Header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4 font-mono text-[9px]">
                <span className="text-slate-500">{project.index} // {project.nodeId}</span>
                <span className="flex items-center gap-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${project.statusColor}`} />
                  <span className="text-slate-400 font-bold uppercase">
                    Status: {project.status}
                  </span>
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white leading-snug group-hover:text-[#06b6d4] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-sans font-normal h-16 overflow-hidden">
                  {project.description}
                </p>
              </div>

              {/* Tabular Monospace Metrics Panel */}
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3.5 font-mono text-[10px] text-slate-400 space-y-2 mt-5">
                <div className="flex justify-between items-center border-b border-white/5 pb-1.5">
                  <span className="text-slate-600 uppercase">Accuracy</span>
                  <span className="text-[#06b6d4] font-bold">{project.metrics.accuracy}</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-1.5">
                  <span className="text-slate-600 uppercase">Inference</span>
                  <span className="text-slate-300">{project.metrics.inference}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 uppercase">Deploy</span>
                  <span className="text-slate-300">{project.metrics.deploy}</span>
                </div>
              </div>

              {/* Wide Git Branch outline button */}
              <a 
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/10 hover:border-[#06b6d4] bg-white/5 hover:bg-[#06b6d4]/10 text-[10px] font-mono font-bold tracking-wider text-slate-300 hover:text-white transition-all duration-300 mt-6"
              >
                <GitBranch className="w-3.5 h-3.5 text-[#06b6d4]" />
                <span>SOURCE CODE</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>

            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
