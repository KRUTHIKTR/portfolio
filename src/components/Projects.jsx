import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import TiltCard from './TiltCard';

const projectsData = [
  {
    id: 1,
    title: "Crop Recommendation System",
    accuracy: "92.53%",
    status: "SUCCESS",
    description: "Multi-parameter Machine Learning classifier using a Gaussian Naive Bayes algorithm to predict optimal crops based on real-time soil & meteorology metrics.",
    github: "https://github.com/KRUTHIKTR/Crop-recommendation-system",
    tags: ["Python", "Naive Bayes", "GCP"],
    themeColor: "hover:border-[#06b6d4]/30"
  },
  {
    id: 2,
    title: "Customer Churn Prediction Pipeline",
    accuracy: "90.76%",
    status: "SUCCESS",
    description: "Automated end-to-end telemetry data pipeline deploying a Random Forest Classifier to identify high-risk customer accounts and retention opportunities.",
    github: "https://github.com/KRUTHIKTR/Customer-churn-prediction",
    tags: ["Random Forest", "ETL Pipeline", "PostgreSQL"],
    themeColor: "hover:border-indigo-500/30"
  },
  {
    id: 3,
    title: "Titanic Survival Predictor",
    accuracy: "82.68%",
    status: "COMPLETED",
    description: "Robust binary classification engine utilizing data imputation layers and optimized decision forest models to predict passenger survival outcomes.",
    github: "https://github.com/KRUTHIKTR/Titanic-Survival-Prediction",
    tags: ["Random Forest", "Data Imputation", "Scikit-Learn"],
    themeColor: "hover:border-emerald-500/30"
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
          Continuous Integration workflow stack. All code compilation, testing suites, and container deployments verified successfully.
        </p>
      </div>

      {/* CI Dashboard Stack */}
      <div className="flex flex-col gap-5">
        {projectsData.map((project) => (
          <TiltCard 
            key={project.id} 
            isZeroG={isZeroG} 
            className={`bg-[#080808]/90 border border-white/10 rounded-2xl p-5 md:p-6 backdrop-blur-xl transition-all duration-300 ${project.themeColor}`}
          >
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6">
              
              {/* Left Column: Build Status & Title (25% width) */}
              <div className="md:w-1/4 flex flex-col items-start text-left border-b md:border-b-0 md:border-r border-white/5 pb-4 md:pb-0 md:pr-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="font-mono text-[9px] font-bold px-2 py-0.5 border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 rounded uppercase">
                    {project.status}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mt-3 leading-snug group-hover:text-[#06b6d4] transition-colors duration-300">
                  {project.title}
                </h3>
              </div>

              {/* Center Column: Description & Accuracy (50% width) */}
              <div className="md:w-1/2 flex flex-col justify-center text-left space-y-2.5">
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  {project.description}
                </p>
                <div className="font-mono text-[9.5px] text-slate-500 flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#06b6d4]" />
                  <span>Validation Accuracy:</span>
                  <span className="text-[#06b6d4] font-bold">{project.accuracy}</span>
                </div>
              </div>

              {/* Right Column: Tags & Explore Button (25% width) */}
              <div className="md:w-1/4 flex flex-col md:items-end justify-between gap-4 border-t md:border-t-0 md:border-l border-white/5 pt-4 md:pt-0 md:pl-6">
                {/* Tech Tags */}
                <div className="flex flex-wrap md:justify-end gap-1.5">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Explore button */}
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-white/10 hover:border-[#06b6d4] bg-white/5 hover:bg-[#06b6d4]/10 text-[9px] font-mono font-bold tracking-wider text-slate-300 hover:text-white transition-all duration-300"
                >
                  <GitBranch className="w-3 h-3 text-[#06b6d4]" />
                  <span>CODE REPOSITORY</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </div>

            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
