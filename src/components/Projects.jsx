import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Code, ChevronLeft, ChevronRight } from 'lucide-react';
import TiltCard from './TiltCard';

const projectsData = [
  {
    id: 1,
    title: "Crop Recommendation System",
    accuracy: "92.53% Accuracy",
    description: "Multi-parameter Machine Learning classifier using a Gaussian Naive Bayes algorithm to predict optimal crops based on real-time soil & meteorology metrics.",
    github: "https://github.com/KRUTHIKTR/Crop-recommendation-system",
    tags: ["Python", "Naive Bayes", "Agriculture ML"],
    themeColor: "#06b6d4"
  },
  {
    id: 2,
    title: "Customer Churn Prediction Pipeline",
    accuracy: "90.76% Accuracy",
    description: "Automated end-to-end telemetry data pipeline deploying a Random Forest Classifier to identify high-risk customer accounts and retention opportunities.",
    github: "https://github.com/KRUTHIKTR/Customer-churn-prediction",
    tags: ["Random Forest", "ETL Pipeline", "PostgreSQL"],
    themeColor: "#6366f1"
  },
  {
    id: 3,
    title: "Titanic Survival Predictor",
    accuracy: "82.68% Accuracy",
    description: "Robust binary classification engine utilizing data imputation layers and optimized decision forest models to predict passenger survival outcomes.",
    github: "https://github.com/KRUTHIKTR/Titanic-Survival-Prediction",
    tags: ["Random Forest", "Data Imputation", "Scikit-Learn"],
    themeColor: "#10b981"
  }
];

function CropTopology() {
  return (
    <svg className="w-4/5 h-4/5" viewBox="0 0 200 100">
      <path d="M 10 50 L 50 20 M 10 50 L 50 50 M 10 50 L 50 80 M 50 20 L 100 50 M 50 50 L 100 50 M 50 80 L 100 50" stroke="#06b6d4" strokeWidth="1" strokeDasharray="2 2" fill="none" opacity="0.6" />
      <circle cx="10" cy="50" r="3.5" fill="#06b6d4" />
      <circle cx="50" cy="20" r="3.5" fill="#06b6d4" />
      <circle cx="50" cy="50" r="3.5" fill="#06b6d4" />
      <circle cx="50" cy="80" r="3.5" fill="#06b6d4" />
      <circle cx="100" cy="50" r="5" fill="#06b6d4" className="animate-pulse" />
      <line x1="104" y1="50" x2="140" y2="50" stroke="#06b6d4" strokeWidth="1.2" />
      <rect x="150" y="35" width="30" height="30" rx="3" fill="none" stroke="#06b6d4" strokeWidth="1.5" />
      <rect x="155" y="40" width="5" height="5" fill="none" stroke="#06b6d4" strokeWidth="1" />
      <rect x="162" y="40" width="5" height="5" fill="none" stroke="#06b6d4" strokeWidth="1" />
      <rect x="169" y="40" width="5" height="5" fill="none" stroke="#06b6d4" strokeWidth="1" />
      <rect x="158" y="48" width="13" height="5" fill="none" stroke="#06b6d4" strokeWidth="1" />
    </svg>
  );
}

function ChurnTopology() {
  return (
    <svg className="w-4/5 h-4/5" viewBox="0 0 200 100">
      <path d="M 20 30 Q 60 10 100 50 T 150 50" stroke="#6366f1" strokeWidth="1.5" fill="none" />
      <circle cx="20" cy="30" r="3.5" fill="#6366f1" />
      <circle cx="100" cy="50" r="5" fill="#818cf8" />
      <g transform="translate(145, 25)">
        <ellipse cx="20" cy="15" rx="15" ry="6" fill="none" stroke="#6366f1" strokeWidth="1.5" />
        <path d="M 5 15 L 5 45 A 15 6 0 0 0 35 45 L 35 15" fill="none" stroke="#6366f1" strokeWidth="1.5" />
        <path d="M 5 30 A 15 6 0 0 0 35 30" fill="none" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="2 2" />
        <text x="20" y="32" textAnchor="middle" fill="#6366f1" className="font-mono text-[7px] font-bold">SQL_DB</text>
      </g>
    </svg>
  );
}

function TitanicTopology() {
  return (
    <svg className="w-4/5 h-4/5" viewBox="0 0 200 100">
      <rect x="20" y="30" width="30" height="40" rx="2" fill="none" stroke="#10b981" strokeWidth="1.5" />
      <line x1="20" y1="40" x2="50" y2="40" stroke="#10b981" strokeWidth="1" />
      <line x1="20" y1="50" x2="50" y2="50" stroke="#10b981" strokeWidth="1" />
      <line x1="20" y1="60" x2="50" y2="60" stroke="#10b981" strokeWidth="1" />
      <line x1="35" y1="30" x2="35" y2="70" stroke="#10b981" strokeWidth="1" strokeDasharray="1 1" />
      <path d="M 55 50 L 95 50" stroke="#10b981" strokeWidth="1.2" />
      <g transform="translate(100, 10)">
        <circle cx="40" cy="20" r="4.5" fill="none" stroke="#10b981" strokeWidth="1.5" />
        <line x1="38" y1="24" x2="22" y2="50" stroke="#10b981" strokeWidth="1" />
        <line x1="42" y1="24" x2="58" y2="50" stroke="#10b981" strokeWidth="1" />
        <circle cx="20" cy="54" r="4.5" fill="none" stroke="#10b981" strokeWidth="1.5" />
        <circle cx="60" cy="54" r="4.5" fill="none" stroke="#10b981" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

export default function Projects({ isZeroG }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
  };

  const currentProject = projectsData[activeIndex];

  return (
    <section id="lab" className="relative py-32 px-6 md:px-12 max-w-6xl mx-auto z-10 border-b border-white/5">
      {/* Section Header */}
      <div className="text-left mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#06b6d4] font-semibold">// 05_FEATURED_WORK</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-2 mb-4 font-sans tracking-tight">
            Featured Work
          </h2>
          <div className="h-[2px] w-24 bg-[#06b6d4]" />
          <p className="text-slate-400 max-w-xl mt-4 text-sm font-sans leading-relaxed">
            Spacious system architecture slide showcase. Cycle through project topology designs and codebases using arrow controls.
          </p>
        </div>

        {/* Elegant Navigation Arrows */}
        <div className="flex items-center gap-3">
          <button 
            onClick={handlePrev}
            className="p-3 rounded-full border border-white/10 hover:border-[#06b6d4] bg-white/5 hover:bg-[#06b6d4]/10 text-slate-400 hover:text-white transition-all cursor-pointer focus:outline-none"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="font-mono text-xs text-slate-500">
            0{activeIndex + 1} / 0{projectsData.length}
          </span>
          <button 
            onClick={handleNext}
            className="p-3 rounded-full border border-white/10 hover:border-[#06b6d4] bg-white/5 hover:bg-[#06b6d4]/10 text-slate-400 hover:text-white transition-all cursor-pointer focus:outline-none"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Large Spacious Horizontal Card */}
      <div className="min-h-[420px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            <TiltCard 
              isZeroG={isZeroG} 
              className="bg-white/5 border border-white/10 rounded-3xl p-8 relative overflow-hidden backdrop-blur-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Side: System Topology Diagram (5/12 width) */}
                <div className="lg:col-span-5 h-64 bg-[#080808]/85 border border-white/5 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
                  
                  {currentProject.id === 1 && <CropTopology />}
                  {currentProject.id === 2 && <ChurnTopology />}
                  {currentProject.id === 3 && <TitanicTopology />}
                </div>

                {/* Right Side: High-Impact Typography & Details (7/12 width) */}
                <div className="lg:col-span-7 flex flex-col justify-between text-left space-y-5 lg:pl-4">
                  
                  {/* Accuracy HUD Tag & Title */}
                  <div className="space-y-3">
                    <span 
                      style={{ color: currentProject.themeColor, borderColor: currentProject.themeColor + '30', backgroundColor: currentProject.themeColor + '08' }}
                      className="inline-block font-mono text-[9px] font-bold px-2.5 py-1 border rounded-full"
                    >
                      {currentProject.accuracy}
                    </span>
                    
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight tracking-tight">
                      {currentProject.title}
                    </h3>
                  </div>

                  {/* Project Description */}
                  <p className="text-sm text-slate-300 font-sans font-normal leading-relaxed">
                    {currentProject.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                    {currentProject.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="text-[9px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Explore Button */}
                  <div className="pt-4">
                    <a 
                      href={currentProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/10 hover:border-[#06b6d4] bg-white/5 hover:bg-[#06b6d4]/10 text-xs font-mono font-bold tracking-wider text-slate-300 hover:text-white transition-all duration-300"
                    >
                      <Code className="w-4 h-4" />
                      <span>EXPLORE CODEBASE</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                    </a>
                  </div>

                </div>

              </div>
            </TiltCard>
          </motion.div>
        </AnimatePresence>
      </div>

    </section>
  );
}
