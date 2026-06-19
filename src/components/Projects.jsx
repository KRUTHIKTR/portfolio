import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import TiltCard from './TiltCard';

const projectsData = [
  {
    id: 1,
    title: "Crop Recommendation System",
    accuracy: "92.53% Accuracy",
    github: "https://github.com/KRUTHIKTR/Crop-recommendation-system",
    tags: ["Python", "Naive Bayes", "Agriculture ML"],
    glowColor: "group-hover:border-[#06b6d4]/30",
    themeColor: "#06b6d4"
  },
  {
    id: 2,
    title: "Customer Churn Prediction Pipeline",
    accuracy: "90.76% Accuracy",
    github: "https://github.com/KRUTHIKTR/Customer-churn-prediction",
    tags: ["Random Forest", "ETL Pipeline", "PostgreSQL"],
    glowColor: "group-hover:border-indigo-500/30",
    themeColor: "#6366f1"
  },
  {
    id: 3,
    title: "Titanic Survival Predictor",
    accuracy: "82.68% Accuracy",
    github: "https://github.com/KRUTHIKTR/Titanic-Survival-Prediction",
    tags: ["Random Forest", "Data Imputation", "Scikit-Learn"],
    glowColor: "group-hover:border-emerald-500/30",
    themeColor: "#10b981"
  }
];

function NeuralNetworkMesh({ mousePos, active }) {
  // Neural net nodes coordinates
  const nodes = [
    { cx: 50, cy: 50 }, { cx: 50, cy: 110 }, { cx: 50, cy: 170 },
    { cx: 150, cy: 60 }, { cx: 150, cy: 100 }, { cx: 150, cy: 140 }, { cx: 150, cy: 180 },
    { cx: 250, cy: 80 }, { cx: 250, cy: 140 },
    { cx: 330, cy: 110 }
  ];

  return (
    <motion.g
      animate={{
        x: mousePos.x * 0.08,
        y: mousePos.y * 0.08
      }}
      transition={{ type: "spring", stiffness: 120, damping: 25 }}
      style={{ opacity: active ? 0.35 : 0.08 }}
      className="transition-opacity duration-500"
    >
      {/* Network connection paths */}
      <line x1="50" y1="50" x2="150" y2="60" stroke={active ? "#06b6d4" : "rgba(255,255,255,0.2)"} strokeWidth="0.5" />
      <line x1="50" y1="50" x2="150" y2="100" stroke={active ? "#06b6d4" : "rgba(255,255,255,0.2)"} strokeWidth="0.5" />
      <line x1="50" y1="110" x2="150" y2="60" stroke={active ? "#06b6d4" : "rgba(255,255,255,0.2)"} strokeWidth="0.5" />
      <line x1="50" y1="110" x2="150" y2="140" stroke={active ? "#06b6d4" : "rgba(255,255,255,0.2)"} strokeWidth="0.5" />
      <line x1="50" y1="170" x2="150" y2="140" stroke={active ? "#06b6d4" : "rgba(255,255,255,0.2)"} strokeWidth="0.5" />
      <line x1="50" y1="170" x2="150" y2="180" stroke={active ? "#06b6d4" : "rgba(255,255,255,0.2)"} strokeWidth="0.5" />

      <line x1="150" y1="60" x2="250" y2="80" stroke={active ? "#06b6d4" : "rgba(255,255,255,0.2)"} strokeWidth="0.5" />
      <line x1="150" y1="100" x2="250" y2="80" stroke={active ? "#06b6d4" : "rgba(255,255,255,0.2)"} strokeWidth="0.5" />
      <line x1="150" y1="140" x2="250" y2="140" stroke={active ? "#06b6d4" : "rgba(255,255,255,0.2)"} strokeWidth="0.5" />
      <line x1="150" y1="180" x2="250" y2="140" stroke={active ? "#06b6d4" : "rgba(255,255,255,0.2)"} strokeWidth="0.5" />

      <line x1="250" y1="80" x2="330" y2="110" stroke={active ? "#06b6d4" : "rgba(255,255,255,0.2)"} strokeWidth="0.5" />
      <line x1="250" y1="140" x2="330" y2="110" stroke={active ? "#06b6d4" : "rgba(255,255,255,0.2)"} strokeWidth="0.5" />

      {/* Nodes */}
      {nodes.map((node, idx) => (
        <circle
          key={idx}
          cx={node.cx}
          cy={node.cy}
          r="2.5"
          fill="#080808"
          stroke={active ? "#06b6d4" : "rgba(255,255,255,0.3)"}
          strokeWidth="1"
        />
      ))}
    </motion.g>
  );
}

function VPCNetworkTopology({ mousePos, active }) {
  return (
    <motion.g
      animate={{
        x: mousePos.x * 0.08,
        y: mousePos.y * 0.08
      }}
      transition={{ type: "spring", stiffness: 120, damping: 25 }}
      style={{ opacity: active ? 0.35 : 0.08 }}
      className="transition-opacity duration-500"
    >
      {/* VPC Router boundary */}
      <rect x="30" y="30" width="310" height="150" rx="6" fill="none" stroke={active ? "#6366f1" : "rgba(255,255,255,0.2)"} strokeWidth="1" strokeDasharray="3 3" />
      <text x="40" y="45" fill={active ? "#6366f1" : "rgba(255,255,255,0.3)"} className="font-mono text-[7px]">VPC_SUBNET_10.0.0.0/16</text>

      {/* Servers/Databases */}
      <rect x="60" y="70" width="50" height="35" rx="3" fill="none" stroke={active ? "#6366f1" : "rgba(255,255,255,0.2)"} strokeWidth="1" />
      <text x="65" y="85" fill={active ? "#fff" : "rgba(255,255,255,0.4)"} className="font-mono text-[6px]">WEB_SERV</text>

      <rect x="160" y="70" width="50" height="35" rx="3" fill="none" stroke={active ? "#6366f1" : "rgba(255,255,255,0.2)"} strokeWidth="1" />
      <text x="165" y="85" fill={active ? "#fff" : "rgba(255,255,255,0.4)"} className="font-mono text-[6px]">APP_API</text>

      <circle cx="280" cy="88" r="18" fill="none" stroke={active ? "#6366f1" : "rgba(255,255,255,0.2)"} strokeWidth="1" />
      <text x="268" y="91" fill={active ? "#fff" : "rgba(255,255,255,0.4)"} className="font-mono text-[6px]">POSTGRES</text>

      {/* Connections */}
      <line x1="110" y1="88" x2="160" y2="88" stroke={active ? "#6366f1" : "rgba(255,255,255,0.2)"} strokeWidth="0.5" />
      <line x1="210" y1="88" x2="262" y2="88" stroke={active ? "#6366f1" : "rgba(255,255,255,0.2)"} strokeWidth="0.5" />
    </motion.g>
  );
}

function DecisionTreeFlow({ mousePos, active }) {
  return (
    <motion.g
      animate={{
        x: mousePos.x * 0.08,
        y: mousePos.y * 0.08
      }}
      transition={{ type: "spring", stiffness: 120, damping: 25 }}
      style={{ opacity: active ? 0.35 : 0.08 }}
      className="transition-opacity duration-500"
    >
      {/* Root Node */}
      <rect x="160" y="30" width="60" height="24" rx="4" fill="none" stroke={active ? "#10b981" : "rgba(255,255,255,0.2)"} strokeWidth="1" />
      <text x="190" y="44" textAnchor="middle" fill={active ? "#fff" : "rgba(255,255,255,0.4)"} className="font-mono text-[7px]">ROOT: SEX</text>

      {/* Branch Lines */}
      <line x1="190" y1="54" x2="110" y2="90" stroke={active ? "#10b981" : "rgba(255,255,255,0.2)"} strokeWidth="0.5" />
      <line x1="190" y1="54" x2="270" y2="90" stroke={active ? "#10b981" : "rgba(255,255,255,0.2)"} strokeWidth="0.5" />

      {/* Child Nodes */}
      <rect x="80" y="90" width="60" height="24" rx="4" fill="none" stroke={active ? "#10b981" : "rgba(255,255,255,0.2)"} strokeWidth="1" />
      <text x="110" y="104" textAnchor="middle" fill={active ? "#fff" : "rgba(255,255,255,0.4)"} className="font-mono text-[7px]">AGE &lt; 12</text>

      <rect x="240" y="90" width="60" height="24" rx="4" fill="none" stroke={active ? "#10b981" : "rgba(255,255,255,0.2)"} strokeWidth="1" />
      <text x="270" y="104" textAnchor="middle" fill={active ? "#fff" : "rgba(255,255,255,0.4)"} className="font-mono text-[7px]">PCLASS == 3</text>

      {/* Bottom Leaves */}
      <line x1="110" y1="114" x2="70" y2="150" stroke={active ? "#10b981" : "rgba(255,255,255,0.2)"} strokeWidth="0.5" />
      <line x1="110" y1="114" x2="150" y2="150" stroke={active ? "#10b981" : "rgba(255,255,255,0.2)"} strokeWidth="0.5" />

      <circle cx="70" cy="154" r="5" fill="none" stroke={active ? "#10b981" : "rgba(255,255,255,0.2)"} strokeWidth="1" />
      <text x="70" y="166" textAnchor="middle" fill={active ? "#10b981" : "rgba(255,255,255,0.3)"} className="font-mono text-[6px]">LEAF_01</text>

      <circle cx="150" cy="154" r="5" fill="none" stroke={active ? "#10b981" : "rgba(255,255,255,0.2)"} strokeWidth="1" />
      <text x="150" y="166" textAnchor="middle" fill={active ? "#10b981" : "rgba(255,255,255,0.3)"} className="font-mono text-[6px]">LEAF_02</text>
    </motion.g>
  );
}

function ProjectCard({ project, isZeroG }) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left - rect.width / 2,
      y: e.clientY - rect.top - rect.height / 2
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className="relative h-full"
    >
      <TiltCard 
        isZeroG={isZeroG} 
        className={`bg-[#080808]/90 border ${
          isHovered ? project.glowColor.replace('group-hover:', '') : 'border-white/10'
        } rounded-2xl h-80 flex flex-col justify-between p-6 relative overflow-hidden transition-all duration-300`}
      >
        {/* Interactive Vector Blueprint Canvas Background */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <svg className="w-full h-full" viewBox="0 0 380 220" preserveAspectRatio="none">
            {project.id === 1 && <NeuralNetworkMesh mousePos={mousePos} active={isHovered} />}
            {project.id === 2 && <VPCNetworkTopology mousePos={mousePos} active={isHovered} />}
            {project.id === 3 && <DecisionTreeFlow mousePos={mousePos} active={isHovered} />}
          </svg>
        </div>

        {/* Card Foreground Content */}
        <div className="flex flex-col h-full justify-between relative z-10 text-left pointer-events-none">
          
          {/* Top Row: Accuracy HUD Tag */}
          <div className="flex justify-between items-center w-full">
            <span 
              style={{
                borderColor: isHovered ? project.themeColor + '40' : 'rgba(255,255,255,0.1)',
                color: isHovered ? project.themeColor : '#94a3b8',
                backgroundColor: isHovered ? project.themeColor + '08' : 'transparent'
              }}
              className="font-mono text-[9px] font-bold px-2.5 py-1 border rounded-full transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
            >
              {project.accuracy}
            </span>

            {/* GitHub link with pointer-events-auto to keep it clickable */}
            <a 
              href={project.github}
              target="_blank"
              rel="noreferrer"
              style={{
                borderColor: isHovered ? project.themeColor + '40' : 'rgba(255,255,255,0.1)'
              }}
              className="p-1.5 border bg-[#080808]/80 hover:bg-[#080808] rounded-full text-slate-400 hover:text-white transition-all duration-300 pointer-events-auto"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Middle Row: Clean Project Title */}
          <div>
            <h3 
              style={{
                color: isHovered ? project.themeColor : '#ffffff'
              }}
              className="text-lg md:text-xl font-extrabold leading-snug tracking-tight transition-colors duration-300"
            >
              {project.title}
            </h3>
            <p className="text-[9px] font-mono text-slate-500 mt-1.5 uppercase tracking-wider">// COMPACT_BLUEPRINT_VIEW</p>
          </div>

          {/* Bottom Row: Technology Tags */}
          <div className="flex flex-wrap gap-1.5 border-t border-white/5 pt-3.5">
            {project.tags.map((tag, tIdx) => (
              <span 
                key={tIdx} 
                className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400"
              >
                {tag}
              </span>
            ))}
          </div>

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
          Interactive system blueprints. Hover over any card to project its digital architecture scheme reacting to your cursor.
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
