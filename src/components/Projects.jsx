import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitBranch, ArrowUpRight, ShieldAlert } from 'lucide-react';
import TiltCard from './TiltCard';

const projectsData = [
  {
    id: 1,
    title: "Developer Portfolio Console",
    category: "public",
    accuracy: "Vercel Active",
    description: "A public web-based portfolio showcasing project credentials, technical expertise, and career journey. Serves as a centralized landing page to route visitors directly.",
    github: "https://github.com/KRUTHIKTR/portfolio",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    themeColor: "#06b6d4",
    lightColor: "rgba(6, 182, 212, 0.08)",
    glowColor: "group-hover:border-[#06b6d4]/40"
  },
  {
    id: 2,
    title: "Crop Recommendation System",
    category: "public",
    accuracy: "92.53% Accuracy",
    description: "A machine learning system that analyzes soil properties (NPK values) and meteorological patterns (temperature, humidity, rainfall) to recommend optimal crops for cultivation.",
    github: "https://github.com/KRUTHIKTR/Crop-Recommendation-System-Using-Machine-Learning",
    tags: ["Python", "Scikit-Learn", "Pandas"],
    themeColor: "#10b981",
    lightColor: "rgba(16, 185, 129, 0.08)",
    glowColor: "group-hover:border-emerald-500/40"
  },
  {
    id: 3,
    title: "Customer Churn Prediction",
    category: "public",
    accuracy: "90.76% Accuracy",
    description: "A predictive analytics model built to identify customer churn risks by analyzing historic transaction records, engagement trends, and service-interaction datasets.",
    github: "https://github.com/KRUTHIKTR/Customer-Churn-Prediction",
    tags: ["Python", "Pandas", "Scikit-Learn"],
    themeColor: "#6366f1",
    lightColor: "rgba(99, 102, 241, 0.08)",
    glowColor: "group-hover:border-indigo-500/40"
  },
  {
    id: 4,
    title: "Titanic Survival Prediction",
    category: "public",
    accuracy: "82.68% Accuracy",
    description: "A classification project utilizing a Random Forest Classifier to predict individual survival rates based on passenger ticket classes, demographics, and age profiles.",
    github: "https://github.com/KRUTHIKTR/Titanic-Survival-Prediction",
    tags: ["Python", "Scikit-Learn", "Random Forest"],
    themeColor: "#f59e0b",
    lightColor: "rgba(245, 158, 11, 0.08)",
    glowColor: "group-hover:border-amber-500/40"
  },
  {
    id: 5,
    title: "ACCIRESCUE Router",
    category: "private",
    accuracy: "Secure Router",
    description: "\"Instant Accident Alerts and Smooth Emergency Routing\" — A specialized technical solution designed to establish real-time collision detection alerts and optimize emergency medical response paths.",
    github: "",
    tags: ["Python", "Routing API", "GIS Algorithms"],
    themeColor: "#ef4444",
    lightColor: "rgba(239, 68, 68, 0.08)",
    glowColor: "group-hover:border-red-500/40"
  },
  {
    id: 6,
    title: "Automated Fertigation System",
    category: "private",
    accuracy: "Active Hardware",
    description: "An automated hardware-software system integration designed to balance and deliver customized nutrient irrigation parameters (fertigation) according to crop requirements.",
    github: "",
    tags: ["Python", "IoT Controls", "Nutrient Balancer"],
    themeColor: "#10b981",
    lightColor: "rgba(16, 185, 129, 0.08)",
    glowColor: "group-hover:border-emerald-500/40"
  },
  {
    id: 7,
    title: "DataSentience AI/ML",
    category: "open-source",
    accuracy: "Forked / Public",
    description: "A collaborative repository focused on machine learning models, soil classifications, and predictive analysis tasks. Used to trace, test, and contribute codebase improvements.",
    github: "https://github.com/KRUTHIKTR/Opensource-DataSentience-AIML",
    tags: ["AI/ML Models", "Soil Classifier", "Collab Development"],
    themeColor: "#6366f1",
    lightColor: "rgba(99, 102, 241, 0.08)",
    glowColor: "group-hover:border-indigo-500/40"
  },
  {
    id: 8,
    title: "GSSoC'25 Contribution",
    category: "open-source",
    accuracy: "Selected Contributor",
    description: "Participated in reviewing community-driven codebase architectures, addressing issues, and collaborating with mentors to merge verified commits into major public open-source repositories.",
    github: "https://gssoc.girlscript.tech/",
    tags: ["Open Source", "Code Audit", "Git Workflows"],
    themeColor: "#ec4899",
    lightColor: "rgba(236, 72, 153, 0.08)",
    glowColor: "group-hover:border-pink-500/40"
  }
];

// 1. Portfolio system architecture schematic
function PortfolioTelemetry({ isHovered }) {
  return (
    <svg className="w-full h-full p-2" viewBox="0 0 200 80">
      <circle cx="100" cy="40" r="10" fill="none" stroke="#06b6d4" strokeWidth="1.2" className="animate-pulse" />
      <text x="100" y="43" textAnchor="middle" fill="#06b6d4" className="font-mono text-[8px] font-bold">PORTFOLIO</text>
      
      <line x1="100" y1="30" x2="100" y2="15" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
      <line x1="100" y1="50" x2="100" y2="65" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
      <line x1="90" y1="40" x2="50" y2="40" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
      <line x1="110" y1="40" x2="150" y2="40" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />

      <circle cx="100" cy="15" r="4" fill="#06b6d4" />
      <text x="100" y="11" textAnchor="middle" fill="rgba(255,255,255,0.3)" className="font-mono text-[6px]">UI</text>
      
      <circle cx="100" cy="65" r="4" fill="#10b981" />
      <text x="100" y="73" textAnchor="middle" fill="rgba(255,255,255,0.3)" className="font-mono text-[6px]">DEVOPS</text>
      
      <circle cx="50" cy="40" r="4" fill="#6366f1" />
      <text x="50" y="34" textAnchor="middle" fill="rgba(255,255,255,0.3)" className="font-mono text-[6px]">BLOG</text>
      
      <circle cx="150" cy="40" r="4" fill="#ec4899" />
      <text x="150" y="34" textAnchor="middle" fill="rgba(255,255,255,0.3)" className="font-mono text-[6px]">SKILLS</text>

      {isHovered && (
        <motion.path 
          d="M 50 40 L 100 40 M 100 15 L 100 40 M 150 40 L 100 40 M 100 65 L 100 40" 
          fill="none" 
          stroke="#06b6d4" 
          strokeWidth="1.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      )}
    </svg>
  );
}

// 2. Crop Accuracy Curve
function CropAccuracyCurve({ isHovered }) {
  return (
    <svg className="w-full h-full p-2" viewBox="0 0 200 80">
      <line x1="20" y1="10" x2="20" y2="70" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
      <line x1="80" y1="10" x2="80" y2="70" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" />
      <line x1="140" y1="10" x2="140" y2="70" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" />
      <line x1="20" y1="70" x2="190" y2="70" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
      <line x1="20" y1="40" x2="190" y2="40" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" />
      <line x1="20" y1="10" x2="190" y2="10" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" />
      
      <text x="8" y="14" fill="rgba(255,255,255,0.25)" className="font-mono text-[9px]">1.0</text>
      <text x="8" y="44" fill="rgba(255,255,255,0.25)" className="font-mono text-[9px]">0.5</text>
      <text x="8" y="74" fill="rgba(255,255,255,0.25)" className="font-mono text-[9px]">0.0</text>
      <text x="170" y="77" fill="rgba(255,255,255,0.25)" className="font-mono text-[9px]">EPOCH</text>
      <text x="24" y="20" fill="#10b981" className="font-mono text-[10px] tracking-widest font-bold">ACCURACY_CURVE</text>

      <motion.path 
        d="M 20 60 Q 60 25 100 20 T 190 14" 
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
        cy="14" 
        r="2.5" 
        fill="#10b981"
        animate={isHovered ? { r: 4, fill: "#fff" } : { r: 2.5, fill: "#10b981" }}
      />
    </svg>
  );
}

// 3. Churn Loss Curve
function ChurnLossCurve({ isHovered }) {
  return (
    <svg className="w-full h-full p-2" viewBox="0 0 200 80">
      <line x1="20" y1="10" x2="20" y2="70" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
      <line x1="80" y1="10" x2="80" y2="70" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" />
      <line x1="140" y1="10" x2="140" y2="70" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" />
      <line x1="20" y1="70" x2="190" y2="70" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
      <line x1="20" y1="40" x2="190" y2="40" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" />
      <line x1="20" y1="10" x2="190" y2="10" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" />
      
      <text x="8" y="14" fill="rgba(255,255,255,0.25)" className="font-mono text-[9px]">1.0</text>
      <text x="8" y="44" fill="rgba(255,255,255,0.25)" className="font-mono text-[9px]">0.5</text>
      <text x="8" y="74" fill="rgba(255,255,255,0.25)" className="font-mono text-[9px]">0.0</text>
      <text x="170" y="77" fill="rgba(255,255,255,0.25)" className="font-mono text-[9px]">EPOCH</text>
      <text x="24" y="20" fill="#6366f1" className="font-mono text-[10px] tracking-widest font-bold">LOG_LOSS_DECAY</text>

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

// 4. Titanic SGD Convergence
function TitanicOptimizationCurve({ isHovered }) {
  return (
    <svg className="w-full h-full p-2" viewBox="0 0 200 80">
      <line x1="20" y1="10" x2="20" y2="70" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
      <line x1="80" y1="10" x2="80" y2="70" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" />
      <line x1="140" y1="10" x2="140" y2="70" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" />
      <line x1="20" y1="70" x2="190" y2="70" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
      <line x1="20" y1="40" x2="190" y2="40" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" />
      <line x1="20" y1="10" x2="190" y2="10" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" />
      
      <text x="8" y="14" fill="rgba(255,255,255,0.25)" className="font-mono text-[9px]">1.0</text>
      <text x="8" y="44" fill="rgba(255,255,255,0.25)" className="font-mono text-[9px]">0.5</text>
      <text x="8" y="74" fill="rgba(255,255,255,0.25)" className="font-mono text-[9px]">0.0</text>
      <text x="170" y="77" fill="rgba(255,255,255,0.25)" className="font-mono text-[9px]">STEPS</text>
      <text x="24" y="20" fill="#f59e0b" className="font-mono text-[10px] tracking-widest font-bold">SGD_CONVERGENCE</text>

      <motion.path 
        d="M 20 62 L 60 50 L 100 28 L 140 25 L 190 22" 
        fill="none" 
        stroke="#f59e0b" 
        strokeWidth="1.5" 
        className="drop-shadow-[0_0_4px_#f59e0b]"
        initial={{ pathLength: 0.1 }}
        animate={isHovered ? { pathLength: 1 } : { pathLength: 0.85 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <motion.circle 
        cx="190" 
        cy="22" 
        r="2.5" 
        fill="#f59e0b"
        animate={isHovered ? { r: 4, fill: "#fff" } : { r: 2.5, fill: "#f59e0b" }}
      />
    </svg>
  );
}

// 5. ACCIRESCUE router telemetry
function AcciRescueTelemetry({ isHovered }) {
  return (
    <svg className="w-full h-full p-2" viewBox="0 0 200 80">
      <rect x="20" y="10" width="160" height="60" rx="6" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
      
      <line x1="60" y1="10" x2="60" y2="70" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
      <line x1="100" y1="10" x2="100" y2="70" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
      <line x1="140" y1="10" x2="140" y2="70" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
      <line x1="20" y1="30" x2="180" y2="30" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
      <line x1="20" y1="50" x2="180" y2="50" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />

      <path d="M 30 55 L 70 35 L 120 55 L 160 25" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      
      {isHovered ? (
        <motion.path 
          d="M 30 55 L 70 35 L 120 55 L 160 25" 
          fill="none" 
          stroke="#ef4444" 
          strokeWidth="1.8" 
          className="drop-shadow-[0_0_4px_#ef4444]"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      ) : (
        <path d="M 30 55 L 70 35 L 120 55 L 160 25" fill="none" stroke="#ef4444" strokeWidth="1.2" />
      )}

      <circle cx="160" cy="25" r="4.5" fill="#ef4444" />
      {isHovered && (
        <motion.circle 
          cx="160" 
          cy="25" 
          r="12" 
          fill="none" 
          stroke="#ef4444" 
          strokeWidth="0.8" 
          animate={{ scale: [1, 2], opacity: [0.6, 0] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
        />
      )}
      
      <circle cx="30" cy="55" r="3.5" fill="#ef4444" opacity="0.6" />
      
      <text x="24" y="20" fill="#ef4444" className="font-mono text-[9px] tracking-widest font-bold">ACCIDENT_RESPONDER</text>
      <text x="145" y="72" fill="rgba(255,255,255,0.3)" className="font-mono text-[8px]">SYS: ACTIVE</text>
    </svg>
  );
}

// 6. Fertigation hardware flow balancer
function FertigationTelemetry({ isHovered }) {
  return (
    <svg className="w-full h-full p-2" viewBox="0 0 200 80">
      <text x="24" y="20" fill="#10b981" className="font-mono text-[9px] tracking-widest font-bold">N-P-K_DOSING_MONITOR</text>
      
      {/* Nitrogen */}
      <text x="20" y="38" fill="rgba(255,255,255,0.4)" className="font-mono text-[8px]">N</text>
      <rect x="35" y="31" width="130" height="8" rx="2" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
      <motion.rect 
        x="35" 
        y="31" 
        height="8" 
        rx="2" 
        fill="#10b981" 
        initial={{ width: 40 }}
        animate={isHovered ? { width: 105 } : { width: 85 }}
        transition={{ duration: 0.8 }}
      />
      
      {/* Phosphorus */}
      <text x="20" y="52" fill="rgba(255,255,255,0.4)" className="font-mono text-[8px]">P</text>
      <rect x="35" y="45" width="130" height="8" rx="2" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
      <motion.rect 
        x="35" 
        y="45" 
        height="8" 
        rx="2" 
        fill="#06b6d4" 
        initial={{ width: 30 }}
        animate={isHovered ? { width: 75 } : { width: 60 }}
        transition={{ duration: 0.8, delay: 0.15 }}
      />

      {/* Potassium */}
      <text x="20" y="66" fill="rgba(255,255,255,0.4)" className="font-mono text-[8px]">K</text>
      <rect x="35" y="59" width="130" height="8" rx="2" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
      <motion.rect 
        x="35" 
        y="59" 
        height="8" 
        rx="2" 
        fill="#6366f1" 
        initial={{ width: 50 }}
        animate={isHovered ? { width: 115 } : { width: 95 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </svg>
  );
}

// 7. DataSentience collaborative classifier
function DataSentienceTelemetry({ isHovered }) {
  return (
    <svg className="w-full h-full p-2" viewBox="0 0 200 80">
      <text x="24" y="20" fill="#6366f1" className="font-mono text-[9px] tracking-widest font-bold">SOIL_CLASSIFIER_GRID</text>
      
      <rect x="25" y="30" width="40" height="35" rx="3" fill="none" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="0.8" />
      <rect x="80" y="30" width="40" height="35" rx="3" fill="none" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="0.8" />
      <rect x="135" y="30" width="40" height="35" rx="3" fill="none" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="0.8" />

      <text x="45" y="52" textAnchor="middle" fill="#6366f1" className="font-mono text-[8px]">SANDY</text>
      <text x="100" y="52" textAnchor="middle" fill="#10b981" className="font-mono text-[8px]">CLAY</text>
      <text x="155" y="52" textAnchor="middle" fill="#06b6d4" className="font-mono text-[8px]">LOAMY</text>

      {isHovered && (
        <>
          <motion.rect x="25" y="30" width="40" height="35" rx="3" fill="rgba(99, 102, 241, 0.1)" stroke="#6366f1" strokeWidth="1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
          <motion.rect x="80" y="30" width="40" height="35" rx="3" fill="rgba(16, 185, 129, 0.1)" stroke="#10b981" strokeWidth="1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} />
          <motion.rect x="135" y="30" width="40" height="35" rx="3" fill="rgba(6, 182, 212, 0.1)" stroke="#06b6d4" strokeWidth="1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} />
        </>
      )}
    </svg>
  );
}

// 8. GSSoc merge branches workflow
function GSSocTelemetry({ isHovered }) {
  return (
    <svg className="w-full h-full p-2" viewBox="0 0 200 80">
      <text x="24" y="20" fill="#ec4899" className="font-mono text-[9px] tracking-widest font-bold">GIT_MERGE_ACTIVITY</text>
      
      <line x1="20" y1="50" x2="180" y2="50" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      
      <path d="M 60 50 Q 80 25 100 25 T 140 50" fill="none" stroke="#ec4899" strokeWidth="1" />
      
      <circle cx="40" cy="50" r="3" fill="#fff" />
      <circle cx="70" cy="32" r="3" fill="#ec4899" />
      <circle cx="110" cy="32" r="3" fill="#ec4899" />
      <circle cx="160" cy="50" r="3.5" fill="#10b981" />
      
      {isHovered && (
        <motion.circle 
          cx="160" 
          cy="50" 
          r="8" 
          fill="none" 
          stroke="#10b981" 
          strokeWidth="0.8" 
          animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
        />
      )}
      
      <text x="160" y="66" textAnchor="middle" fill="#10b981" className="font-mono text-[8px] font-bold">MERGED</text>
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
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
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
            {project.id === 1 && <PortfolioTelemetry isHovered={isHovered} />}
            {project.id === 2 && <CropAccuracyCurve isHovered={isHovered} />}
            {project.id === 3 && <ChurnLossCurve isHovered={isHovered} />}
            {project.id === 4 && <TitanicOptimizationCurve isHovered={isHovered} />}
            {project.id === 5 && <AcciRescueTelemetry isHovered={isHovered} />}
            {project.id === 6 && <FertigationTelemetry isHovered={isHovered} />}
            {project.id === 7 && <DataSentienceTelemetry isHovered={isHovered} />}
            {project.id === 8 && <GSSocTelemetry isHovered={isHovered} />}
          </div>

          {/* Title & Accuracy Tag */}
          <div className="space-y-3.5 flex-grow">
            <div className="flex flex-col gap-1.5">
              <span 
                style={{ color: project.themeColor, borderColor: project.themeColor + '30', backgroundColor: project.themeColor + '08' }}
                className="self-start font-mono text-xs font-bold px-2.5 py-0.5 border rounded-full uppercase tracking-wider"
              >
                {project.accuracy}
              </span>
              
              <h3 className="text-xl font-bold text-white leading-snug group-hover:text-[#06b6d4] transition-colors duration-300">
                {project.title}
              </h3>
            </div>

            {/* Description without rigid height limitations to avoid half-cut text */}
            <p className="text-sm text-slate-400 leading-relaxed font-sans font-normal">
              {project.description}
            </p>
          </div>

          {/* Technology Tags */}
          <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-1.5 mb-5">
            {project.tags.map((tag, tIdx) => (
              <span 
                key={tIdx} 
                className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Button: Git Link or Private Shield */}
          {project.github ? (
            <a 
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/10 hover:border-[#06b6d4] bg-white/5 hover:bg-[#06b6d4]/10 text-xs font-mono font-bold tracking-wider text-slate-300 hover:text-white transition-all duration-300"
            >
              <GitBranch className="w-4 h-4 text-[#06b6d4]" />
              <span>EXPLORE CODE</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
          ) : (
            <div 
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-red-500/20 bg-red-500/5 text-xs font-mono font-bold tracking-wider text-red-400/90 cursor-default"
            >
              <ShieldAlert className="w-4 h-4 text-red-500" />
              <span>PROPRIETARY / PRIVATE LAB</span>
            </div>
          )}

        </div>
      </TiltCard>
    </motion.div>
  );
}

export default function Projects({ isZeroG }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'ALL_SYSTEMS' },
    { id: 'public', label: 'PUBLIC_REPOS' },
    { id: 'private', label: 'PRIVATE_LABS' },
    { id: 'open-source', label: 'OPEN_SOURCE' }
  ];

  const filteredProjects = projectsData.filter(project => {
    if (activeCategory === 'all') return true;
    return project.category === activeCategory;
  });

  return (
    <section id="lab" className="relative py-32 px-6 md:px-12 max-w-6xl mx-auto z-10 border-b border-white/5">
      {/* Section Header */}
      <div className="text-left mb-12">
        <span className="text-xs font-mono uppercase tracking-widest text-[#06b6d4] font-semibold">// 05_FEATURED_WORK</span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-2 mb-4 font-sans tracking-tight">
          Featured Work
        </h2>
        <div className="h-[2px] w-24 bg-[#06b6d4]" />
        <p className="text-slate-400 max-w-2xl mt-4 text-base font-sans leading-relaxed">
          Interactive telemetry profiles for verified credentials, custom machine learning pipelines, proprietary integrations, and open-source contributions.
        </p>
      </div>

      {/* Filter Tabs Dashboard */}
      <div className="flex flex-wrap gap-2 md:gap-3 mb-12 border-b border-white/5 pb-6">
        {categories.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveCategory(tab.id)}
            className={`font-mono text-xs font-bold tracking-widest px-5 py-2.5 rounded-full border transition-all duration-300 relative ${
              activeCategory === tab.id
                ? 'bg-[#06b6d4]/5 border-[#06b6d4]/40 text-white shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                : 'border-white/5 text-slate-500 hover:text-slate-300 hover:border-white/10'
            }`}
          >
            {activeCategory === tab.id && (
              <motion.span 
                layoutId="activeTabGlow"
                className="absolute inset-0 rounded-full border border-[#06b6d4]/20 shadow-[0_0_8px_#06b6d4] pointer-events-none"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div 
        layout 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              isZeroG={isZeroG} 
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
