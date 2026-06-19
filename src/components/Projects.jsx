import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Server, Layers, ArrowRight, RotateCw, CheckCircle2 } from 'lucide-react';
import TiltCard from './TiltCard';

function ProjectCard({ project, isZeroG }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = (e) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="perspective-1000 w-full min-h-[460px] md:h-[460px] relative">
      <motion.div
        className="w-full h-full transform-style-3d relative"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* CARD FRONT SIDE */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <TiltCard isZeroG={isZeroG} className="w-full h-full flex flex-col justify-between border-purple-500/20 hover:border-purple-500/40 bg-indigoSpace/60">
            <div>
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <span className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <Cpu className="w-6 h-6" />
                </span>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center gap-1.5 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                  <CheckCircle2 className="w-3.5 h-3.5" /> {project.accuracy} Accuracy
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-xs font-mono tracking-widest text-cosmicBlue uppercase mb-4">
                {project.subType}
              </p>

              {/* Specs & Description */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs uppercase font-mono text-purple-400 tracking-wider mb-1">AI/ML Core</h4>
                  <p className="text-sm text-slate-300 font-sans">{project.aiDomain}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase font-mono text-blue-400 tracking-wider mb-1">Cloud & DevOps</h4>
                  <p className="text-sm text-slate-300 font-sans">{project.devopsDomain}</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex justify-between items-center border-t border-white/5 pt-4">
              <div className="flex gap-2">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <button
                onClick={handleFlip}
                className="flex items-center gap-2 text-xs font-mono font-bold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 px-4 py-2 rounded-lg transition-all duration-300 group shadow-[0_4px_12px_rgba(139,92,246,0.2)] hover:shadow-[0_4px_20px_rgba(139,92,246,0.4)]"
              >
                Architecture <RotateCw className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
              </button>
            </div>
          </TiltCard>
        </div>

        {/* CARD BACK SIDE (ARCHITECTURE DIAGRAM) */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <TiltCard isZeroG={isZeroG} className="w-full h-full flex flex-col justify-between border-blue-500/20 hover:border-blue-500/40 bg-indigoSpace/80">
            <div>
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <span className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <Server className="w-6 h-6" />
                </span>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                  System Architecture
                </span>
              </div>

              <h3 className="text-lg md:text-xl font-bold text-white mb-4">
                {project.title} Pipeline
              </h3>

              {/* Custom SVG Architecture Render */}
              <div className="bg-black/40 rounded-xl p-4 border border-white/5 flex items-center justify-center">
                {project.svgDiagram}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-4 flex justify-between items-center border-t border-white/5 pt-4">
              <span className="text-[10px] font-mono text-slate-400">
                Containerized Topology
              </span>
              <button
                onClick={handleFlip}
                className="flex items-center gap-2 text-xs font-mono font-bold text-slate-300 hover:text-white border border-white/10 hover:border-white/20 bg-white/5 px-4 py-2 rounded-lg transition-all"
              >
                Back to Specs <RotateCw className="w-3.5 h-3.5 rotate-180" />
              </button>
            </div>
          </TiltCard>
        </div>
      </motion.div>
    </div>
  );
}

export default function Projects({ isZeroG }) {
  const projectsData = [
    {
      id: 1,
      title: "Crop Recommendation Engine",
      subType: "Containerized Microservice",
      accuracy: "92.53%",
      aiDomain: "Classification engine built using Gaussian Naive Bayes, evaluating soil components (Nitrogen, Phosphorus, Potassium), pH levels, and climate parameters.",
      devopsDomain: "Packaged as a lightweight containerized REST API microservice, optimizing response footprint and streamlining automated deployment pipelines.",
      tags: ["ML Classification", "Docker", "Python", "APIs"],
      svgDiagram: (
        <svg viewBox="0 0 400 160" className="w-full max-w-sm h-36 font-mono text-[9px] fill-slate-300">
          {/* Definitions for Glow effects */}
          <defs>
            <filter id="glow-p1" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#8B5CF6" floodOpacity="0.6"/>
            </filter>
            <filter id="glow-b1" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#3B82F6" floodOpacity="0.6"/>
            </filter>
          </defs>

          {/* Connective Paths */}
          <path d="M 90 80 L 150 80" stroke="#3B82F6" strokeWidth="2" strokeDasharray="3,3" />
          <path d="M 230 80 L 290 80" stroke="#8B5CF6" strokeWidth="2" />
          
          {/* Animated pulses */}
          <circle r="3" fill="#fff" filter="url(#glow-b1)">
            <animateMotion dur="3s" repeatCount="indefinite" path="M 90 80 L 150 80" />
          </circle>
          <circle r="3" fill="#fff" filter="url(#glow-p1)">
            <animateMotion dur="2.5s" repeatCount="indefinite" path="M 230 80 L 290 80" />
          </circle>

          {/* Node 1: Client/Inputs */}
          <rect x="10" y="55" width="80" height="50" rx="6" fill="#1F193B" stroke="#3B82F6" strokeWidth="1" />
          <text x="50" y="75" textAnchor="middle" fill="#fff" fontWeight="bold" fontSize="8">SOIL METRICS</text>
          <text x="50" y="88" textAnchor="middle" opacity="0.6" fontSize="7">N, P, K, pH, Climate</text>
          
          {/* Node 2: Container API */}
          <rect x="150" y="45" width="80" height="70" rx="6" fill="#130F26" stroke="#8B5CF6" strokeWidth="1.5" filter="url(#glow-p1)" />
          <text x="190" y="65" textAnchor="middle" fill="#fff" fontWeight="bold" fontSize="8">DOCKER CONTAINER</text>
          <text x="190" y="78" textAnchor="middle" fill="#A78BFA" fontSize="7">FastAPI Service</text>
          <text x="190" y="90" textAnchor="middle" opacity="0.6" fontSize="6.5">Gaussian NB Model</text>
          
          {/* Node 3: Output */}
          <rect x="290" y="55" width="100" height="50" rx="6" fill="#1F193B" stroke="#10B981" strokeWidth="1" />
          <text x="340" y="75" textAnchor="middle" fill="#fff" fontWeight="bold" fontSize="8">RECOMMENDED CROP</text>
          <text x="340" y="88" textAnchor="middle" fill="#34D399" fontSize="7">High-Yield Match</text>
        </svg>
      )
    },
    {
      id: 2,
      title: "Customer Churn Analytics Pipeline",
      subType: "End-to-End ETL Pipeline",
      accuracy: "90.76%",
      aiDomain: "Predictive behavioral intelligence using Random Forest Classifier. Includes feature weights analysis, hyperparameter tuning, and correlation matrices.",
      devopsDomain: "Automated end-to-end data pipeline: scheduled extraction, cleaning, storage, and batch prediction workflows using secure environment protocols.",
      tags: ["Random Forest", "ETL Pipelines", "Data Eng", "PostgreSQL"],
      svgDiagram: (
        <svg viewBox="0 0 400 160" className="w-full max-w-sm h-36 font-mono text-[9px] fill-slate-300">
          <defs>
            <filter id="glow-p2" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#8B5CF6" floodOpacity="0.6"/>
            </filter>
            <filter id="glow-b2" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#3B82F6" floodOpacity="0.6"/>
            </filter>
          </defs>

          {/* Connective Paths */}
          <path d="M 85 80 L 140 80" stroke="#3B82F6" strokeWidth="1.5" />
          <path d="M 220 80 L 285 80" stroke="#8B5CF6" strokeWidth="1.5" />
          
          {/* Animated pulses */}
          <circle r="3.5" fill="#fff" filter="url(#glow-b2)">
            <animateMotion dur="2.8s" repeatCount="indefinite" path="M 85 80 L 140 80" />
          </circle>
          <circle r="3.5" fill="#fff" filter="url(#glow-p2)">
            <animateMotion dur="2.2s" repeatCount="indefinite" path="M 220 80 L 285 80" />
          </circle>

          {/* Node 1: Raw Data */}
          <rect x="10" y="55" width="75" height="50" rx="6" fill="#1F193B" stroke="#3B82F6" strokeWidth="1" />
          <text x="47" y="75" textAnchor="middle" fill="#fff" fontWeight="bold" fontSize="8">RAW DATA</text>
          <text x="47" y="88" textAnchor="middle" opacity="0.6" fontSize="7">User Logs, Postgres</text>

          {/* Node 2: ETL & ML */}
          <rect x="140" y="45" width="80" height="70" rx="6" fill="#130F26" stroke="#8B5CF6" strokeWidth="1.5" filter="url(#glow-p2)" />
          <text x="180" y="63" textAnchor="middle" fill="#fff" fontWeight="bold" fontSize="8">ETL PIPELINE</text>
          <text x="180" y="75" textAnchor="middle" fill="#A78BFA" fontSize="7">Pandas / Feature Eng</text>
          <text x="180" y="87" textAnchor="middle" fill="#3B82F6" fontSize="6.5">Random Forest Clf</text>
          <text x="180" y="98" textAnchor="middle" opacity="0.5" fontSize="5.5">Batch Predictions</text>

          {/* Node 3: Analytics Dashboard */}
          <rect x="285" y="55" width="105" height="50" rx="6" fill="#1F193B" stroke="#10B981" strokeWidth="1" />
          <text x="337" y="75" textAnchor="middle" fill="#fff" fontWeight="bold" fontSize="8">TELEMETRY LAB</text>
          <text x="337" y="88" textAnchor="middle" fill="#34D399" fontSize="7">Churn Analytics BI</text>
        </svg>
      )
    }
  ];

  return (
    <section id="lab" className="relative py-24 px-4 md:px-8 max-w-6xl mx-auto z-10">
      {/* Background glow behind section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-widest text-electricPurple font-mono">Experimental Repository</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-2 mb-4 font-sans tracking-tight">
            The Systems Lab
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cosmicBlue to-electricPurple mx-auto rounded-full" />
          <p className="text-slate-400 max-w-xl mx-auto mt-4 text-sm md:text-base">
            Where mathematical models fuse with cloud deployment frameworks. Hover to tilt the systems; click to flip and review their deployment topologies.
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
