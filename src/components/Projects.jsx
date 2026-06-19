import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GitBranch, ArrowUpRight } from 'lucide-react';
import TiltCard from './TiltCard';

const projectsData = [
  {
    id: 1,
    title: "Crop Recommendation System",
    accuracy: "92.53% Accuracy",
    description: "Multi-parameter Machine Learning classifier using a Gaussian Naive Bayes algorithm to predict optimal crops based on real-time soil & meteorology metrics.",
    github: "https://github.com/KRUTHIKTR/Crop-recommendation-system",
    tags: ["Python", "Naive Bayes", "GCP"],
    themeColor: "#06b6d4",
    lightColor: "rgba(6, 182, 212, 0.08)",
    glowColor: "group-hover:border-[#06b6d4]/40"
  },
  {
    id: 2,
    title: "Customer Churn Prediction Pipeline",
    accuracy: "90.76% Accuracy",
    description: "Automated end-to-end telemetry data pipeline deploying a Random Forest Classifier to identify high-risk customer accounts and retention opportunities.",
    github: "https://github.com/KRUTHIKTR/Customer-churn-prediction",
    tags: ["Random Forest", "ETL Pipeline", "PostgreSQL"],
    themeColor: "#6366f1",
    lightColor: "rgba(99, 102, 241, 0.08)",
    glowColor: "group-hover:border-indigo-500/40"
  },
  {
    id: 3,
    title: "Titanic Survival Predictor",
    accuracy: "82.68% Accuracy",
    description: "Robust binary classification engine utilizing data imputation layers and optimized decision forest models to predict passenger survival outcomes.",
    github: "https://github.com/KRUTHIKTR/Titanic-Survival-Prediction",
    tags: ["Random Forest", "Data Imputation", "Scikit-Learn"],
    themeColor: "#10b981",
    lightColor: "rgba(16, 185, 129, 0.08)",
    glowColor: "group-hover:border-emerald-500/40"
  }
];

function CropAccuracyCurve({ isHovered }) {
  return (
    <svg className="w-full h-full p-2" viewBox="0 0 200 80">
      {/* Grid Lines */}
      <line x1="20" y1="10" x2="20" y2="70" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
      <line x1="80" y1="10" x2="80" y2="70" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" />
      <line x1="140" y1="10" x2="140" y2="70" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" />
      <line x1="20" y1="70" x2="190" y2="70" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
      <line x1="20" y1="40" x2="190" y2="40" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" />
      <line x1="20" y1="10" x2="190" y2="10" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" />
      
      {/* Axis Labels */}
      <text x="8" y="14" fill="rgba(255,255,255,0.25)" className="font-mono text-[6px]">1.0</text>
      <text x="8" y="44" fill="rgba(255,255,255,0.25)" className="font-mono text-[6px]">0.5</text>
      <text x="8" y="74" fill="rgba(255,255,255,0.25)" className="font-mono text-[6px]">0.0</text>
      <text x="180" y="77" fill="rgba(255,255,255,0.25)" className="font-mono text-[6px]">EPOCH</text>
      <text x="24" y="20" fill="#06b6d4" className="font-mono text-[6px] tracking-widest font-bold">ACCURACY_CURVE</text>

      {/* Logarithmic accuracy line */}
      <motion.path 
        d="M 20 60 Q 60 25 100 20 T 190 14" 
        fill="none" 
        stroke="#06b6d4" 
        strokeWidth="1.5" 
        className="drop-shadow-[0_0_4px_#06b6d4]"
        initial={{ pathLength: 0.1 }}
        animate={isHovered ? { pathLength: 1 } : { pathLength: 0.85 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <motion.circle 
        cx="190" 
        cy="14" 
        r="2.5" 
        fill="#06b6d4"
        animate={isHovered ? { r: 4, fill: "#fff" } : { r: 2.5, fill: "#06b6d4" }}
      />
    </svg>
  );
}

function ChurnLossCurve({ isHovered }) {
  return (
    <svg className="w-full h-full p-2" viewBox="0 0 200 80">
      {/* Grid Lines */}
      <line x1="20" y1="10" x2="20" y2="70" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
      <line x1="80" y1="10" x2="80" y2="70" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" />
      <line x1="140" y1="10" x2="140" y2="70" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" />
      <line x1="20" y1="70" x2="190" y2="70" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
      <line x1="20" y1="40" x2="190" y2="40" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" />
      <line x1="20" y1="10" x2="190" y2="10" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" />
      
      {/* Axis Labels */}
      <text x="8" y="14" fill="rgba(255,255,255,0.25)" className="font-mono text-[6px]">1.0</text>
      <text x="8" y="44" fill="rgba(255,255,255,0.25)" className="font-mono text-[6px]">0.5</text>
      <text x="8" y="74" fill="rgba(255,255,255,0.25)" className="font-mono text-[6px]">0.0</text>
      <text x="180" y="77" fill="rgba(255,255,255,0.25)" className="font-mono text-[6px]">EPOCH</text>
      <text x="24" y="20" fill="#6366f1" className="font-mono text-[6px] tracking-widest font-bold">LOG_LOSS_DECAY</text>

      {/* Exponential loss decay line */}
      <motion.path 
        d="M 20 18 Q 50 65 100 68 T 190 69" 
        fill="none" 
        stroke="#6366f1" 
        strokeWidth="1.5" 
        className="drop-shadow-[0_0_4px_#6366f1]"
        initial={{ pathLength: 0.1 }}
        animate={isHovered ? { pathLength: 1 } : { pathLength: 0.85 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <motion.circle 
        cx="190" 
        cy="69" 
        r="2.5" 
        fill="#6366f1"
        animate={isHovered ? { r: 4, fill: "#fff" } : { r: 2.5, fill: "#6366f1" }}
      />
    </svg>
  );
}

function TitanicOptimizationCurve({ isHovered }) {
  return (
    <svg className="w-full h-full p-2" viewBox="0 0 200 80">
      {/* Grid Lines */}
      <line x1="20" y1="10" x2="20" y2="70" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
      <line x1="80" y1="10" x2="80" y2="70" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" />
      <line x1="140" y1="10" x2="140" y2="70" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" />
      <line x1="20" y1="70" x2="190" y2="70" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
      <line x1="20" y1="40" x2="190" y2="40" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" />
      <line x1="20" y1="10" x2="190" y2="10" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" />
      
      {/* Axis Labels */}
      <text x="8" y="14" fill="rgba(255,255,255,0.25)" className="font-mono text-[6px]">1.0</text>
      <text x="8" y="44" fill="rgba(255,255,255,0.25)" className="font-mono text-[6px]">0.5</text>
      <text x="8" y="74" fill="rgba(255,255,255,0.25)" className="font-mono text-[6px]">0.0</text>
      <text x="180" y="77" fill="rgba(255,255,255,0.25)" className="font-mono text-[6px]">STEPS</text>
      <text x="24" y="20" fill="#10b981" className="font-mono text-[6px] tracking-widest font-bold">SGD_CONVERGENCE</text>

      {/* Step optimization line */}
      <motion.path 
        d="M 20 62 L 60 50 L 100 28 L 140 25 L 190 22" 
        fill="none" 
        stroke="#10b981" 
        strokeWidth="1.5" 
        className="drop-shadow-[0_0_4px_#10b981]"
        initial={{ pathLength: 0.1 }}
        animate={isHovered ? { pathLength: 1 } : { pathLength: 0.85 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <motion.circle 
        cx="190" 
        cy="22" 
        r="2.5" 
        fill="#10b981"
        animate={isHovered ? { r: 4, fill: "#fff" } : { r: 2.5, fill: "#10b981" }}
      />
    </svg>
  );
}

function ProjectCard({ project, isZeroG }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="h-full relative"
    >
      <TiltCard 
        isZeroG={isZeroG} 
        className={`bg-[#080808]/90 border border-white/10 rounded-2xl h-full flex flex-col justify-between p-6 relative group transition-all duration-300 ${project.glowColor}`}
      >
        {/* Subtle Mathematical Grid Coordinate Background Pattern */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-5 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:12px_12px]" />

        {/* Dynamic Cursor Spotlight Radial Glow */}
        <div 
          className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(280px circle at ${mousePos.x}px ${mousePos.y}px, ${project.lightColor}, transparent 80%)`
          }}
        />

        <div className="flex flex-col h-full justify-between text-left relative z-10">
          
          {/* Top Section: Glowing Neon Statistical Curve */}
          <div className="relative h-28 w-full overflow-hidden rounded-xl mb-5 bg-black/60 border border-white/5 flex items-center justify-center group-hover:border-white/15 transition-all duration-500">
            {project.id === 1 && <CropAccuracyCurve isHovered={isHovered} />}
            {project.id === 2 && <ChurnLossCurve isHovered={isHovered} />}
            {project.id === 3 && <TitanicOptimizationCurve isHovered={isHovered} />}
          </div>

          {/* Title & Accuracy Tag */}
          <div className="space-y-3.5 flex-grow">
            <div className="flex flex-col gap-1.5">
              <span 
                style={{ color: project.themeColor, borderColor: project.themeColor + '30', backgroundColor: project.themeColor + '08' }}
                className="self-start font-mono text-[9px] font-bold px-2 py-0.5 border rounded-full"
              >
                {project.accuracy}
              </span>
              
              <h3 className="text-lg font-bold text-white leading-snug group-hover:text-[#06b6d4] transition-colors duration-300">
                {project.title}
              </h3>
            </div>

            {/* Description without rigid height limitations to avoid half-cut text */}
            <p className="text-xs text-slate-400 leading-relaxed font-sans font-normal">
              {project.description}
            </p>
          </div>

          {/* Technology Tags */}
          <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-1.5 mb-5">
            {project.tags.map((tag, tIdx) => (
              <span 
                key={tIdx} 
                className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Wide Git Branch outline button */}
          <a 
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/10 hover:border-[#06b6d4] bg-white/5 hover:bg-[#06b6d4]/10 text-[10px] font-mono font-bold tracking-wider text-slate-300 hover:text-white transition-all duration-300"
          >
            <GitBranch className="w-3.5 h-3.5 text-[#06b6d4]" />
            <span>EXPLORE CODE</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>

        </div>
      </TiltCard>
    </div>
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
          Mathematical coordinate profiles. Monitor optimization rates, loss convergence parameters, and validation accuracies.
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
