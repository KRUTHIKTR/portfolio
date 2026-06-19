import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import TiltCard from './TiltCard';

const projectsData = [
  {
    id: 1,
    title: "Crop Recommendation System",
    accuracy: "92.53% Accuracy",
    description: "Machine learning system using a Gaussian Naive Bayes algorithm to recommend crops based on soil and meteorology metrics.",
    github: "https://github.com/KRUTHIKTR/Crop-recommendation-system",
    tags: ["Python", "Naive Bayes", "Agriculture ML"],
    gradient: "from-emerald-600/30 to-[#06b6d4]/5"
  },
  {
    id: 2,
    title: "Customer Churn Prediction Pipeline",
    accuracy: "90.76% Accuracy",
    description: "Automated data pipeline deploying a Random Forest Classifier to detect customer retention risks.",
    github: "https://github.com/KRUTHIKTR/Customer-churn-prediction",
    tags: ["Random Forest", "ETL Pipeline", "PostgreSQL"],
    gradient: "from-blue-600/30 to-[#06b6d4]/5"
  },
  {
    id: 3,
    title: "Titanic Survival Predictor",
    accuracy: "82.68% Accuracy",
    description: "Baseline ML classification engine utilizing data imputation and Random Forest models.",
    github: "https://github.com/KRUTHIKTR/Titanic-Survival-Prediction",
    tags: ["Random Forest", "Data Imputation", "Scikit-Learn"],
    gradient: "from-cyan-600/30 to-[#06b6d4]/5"
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
        <p className="text-slate-400 max-w-2xl mt-4 text-base font-sans leading-relaxed">
          A selection of machine learning pipeline architectures and predictive modeling systems complete with active repositories.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <TiltCard 
            key={project.id} 
            isZeroG={isZeroG} 
            className="bg-white/5 border border-white/10 rounded-2xl h-full flex flex-col justify-between"
          >
            <div className="flex flex-col h-full justify-between">
              
              {/* Image Module with Grayscale-to-Color hover transition */}
              <div className="relative h-40 w-full overflow-hidden rounded-xl mb-6 bg-slate-950 border border-white/5 flex items-center justify-center group-hover:border-[#06b6d4]/20 transition-all duration-500">
                
                {/* Graphic layout inside image container */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-all duration-500 filter grayscale group-hover:grayscale-0`} />
                
                {/* Tech Line Art Pattern (Abstract Pipeline design) */}
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
                
                {/* Accuracy HUD tag */}
                <span className="relative z-10 font-mono text-xs font-bold text-white px-3 py-1.5 border border-white/15 bg-black/60 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                  {project.accuracy}
                </span>
              </div>

              {/* Title & Description */}
              <div className="text-left space-y-3 flex-grow">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-lg font-bold text-white leading-snug group-hover:text-[#06b6d4] transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* GitHub Outbound Link */}
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 border border-white/10 hover:border-[#06b6d4] bg-white/5 hover:bg-[#06b6d4]/10 rounded-full text-slate-400 hover:text-white transition-all duration-300 flex-shrink-0"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-xs text-white/60 leading-relaxed font-sans">
                  {project.description}
                </p>
              </div>

              {/* Tags and Metadata */}
              <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-2">
                {project.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
