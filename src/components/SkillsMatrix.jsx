import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Activity, ShieldAlert, Cpu } from 'lucide-react';
import TiltCard from './TiltCard';

const domainData = {
  aiml: {
    id: "aiml",
    title: "AI/ML Engineering",
    score: "92.5%",
    color: "#06b6d4",
    skills: [
      { name: "Machine Learning", pct: 95 },
      { name: "Predictive Modeling", pct: 92 },
      { name: "Agentic AI", pct: 90 },
      { name: "Feature Engineering", pct: 92 },
      { name: "Model Evaluation", pct: 90 }
    ],
    defaultVals: { ai: 64.4, cloud: 42, data: 40, infra: 40 }
  },
  cloud: {
    id: "cloud",
    title: "Cloud-Native Systems",
    score: "88.0%",
    color: "#6366f1",
    skills: [
      { name: "Google Cloud (GCP)", pct: 92 },
      { name: "Docker", pct: 90 },
      { name: "Kubernetes", pct: 85 },
      { name: "Oracle Cloud (OCI)", pct: 85 }
    ],
    defaultVals: { ai: 40, cloud: 61.6, data: 40, infra: 40 }
  },
  data: {
    id: "data",
    title: "Data Analytics",
    score: "85.2%",
    color: "#10b981",
    skills: [
      { name: "Python", pct: 95 },
      { name: "SQL", pct: 88 },
      { name: "Data Analysis", pct: 90 },
      { name: "Jupyter Notebook", pct: 92 },
      { name: "Microsoft Excel", pct: 80 }
    ],
    defaultVals: { ai: 40, cloud: 42, data: 59.5, infra: 40 }
  },
  infra: {
    id: "infra",
    title: "Automation & Infra",
    score: "90.0%",
    color: "#e11d48",
    skills: [
      { name: "Git & GitHub", pct: 92 },
      { name: "CI/CD", pct: 90 },
      { name: "Dart / HTML", pct: 85 },
      { name: "Power BI", pct: 85 },
      { name: "Figma", pct: 80 }
    ],
    defaultVals: { ai: 40, cloud: 42, data: 40, infra: 63.0 }
  }
};

export default function SkillsMatrix({ isZeroG }) {
  const [activeDomain, setActiveDomain] = useState("aiml");

  const activeInfo = domainData[activeDomain];

  // Base coordinates for center
  const cx = 150;
  const cy = 150;

  // Render the current radar polygon dimensions based on active domain
  // We stretch the active axis slightly for a clean hover shift effect
  const getRadarPolygon = () => {
    let aiR = 55;
    let cloudR = 52;
    let dataR = 50;
    let infraR = 54;

    if (activeDomain === "aiml") aiR = 72;
    if (activeDomain === "cloud") cloudR = 70;
    if (activeDomain === "data") dataR = 68;
    if (activeDomain === "infra") infraR = 71;

    // Up (AI), Right (Cloud), Down (Data), Left (Infra)
    const p1 = `${cx},${cy - aiR}`;
    const p2 = `${cx + cloudR},${cy}`;
    const p3 = `${cx},${cy + dataR}`;
    const p4 = `${cx - infraR},${cy}`;

    return `${p1} ${p2} ${p3} ${p4}`;
  };

  return (
    <section id="sphere" className="relative py-32 px-6 md:px-12 max-w-6xl mx-auto z-10 border-b border-white/5">
      {/* Section Header */}
      <div className="text-left mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-[#06b6d4] font-semibold">// 04_OBSERVABILITY_RADAR</span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-2 mb-4 font-sans tracking-tight">
          System Diagnostics
        </h2>
        <div className="h-[2px] w-24 bg-[#06b6d4]" />
        <p className="text-slate-400 max-w-2xl mt-4 text-sm font-sans leading-relaxed">
          Real-time MLOps domain monitoring. Hover over or click any metric axis on the radar chart to query system capabilities and verify telemetry metrics.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Interactive Radar (6 cols) */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
          
          <div className="w-[300px] h-[300px] relative">
            
            {/* The SVG Radar Graph */}
            <svg className="w-full h-full" viewBox="0 0 300 300">
              
              {/* Concentric grid diamonds (25%, 50%, 75%, 100%) */}
              {[25, 50, 75, 95].map((val, idx) => {
                const r = val * 0.8;
                return (
                  <polygon
                    key={idx}
                    points={`${cx},${cy - r} ${cx + r},${cy} ${cx},${cy + r} ${cx - r},${cy}`}
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.04)"
                    strokeWidth="0.8"
                  />
                );
              })}

              {/* Axis lines */}
              <line x1={cx} y1={cy - 90} x2={cx} y2={cy + 90} stroke="rgba(255, 255, 255, 0.06)" strokeWidth="1" />
              <line x1={cx - 90} y1={cy} x2={cx + 90} y2={cy} stroke="rgba(255, 255, 255, 0.06)" strokeWidth="1" />

              {/* Interactive Radar Area Polygon */}
              <motion.polygon
                points={getRadarPolygon()}
                fill={`${activeInfo.color}15`}
                stroke={activeInfo.color}
                strokeWidth="1.8"
                className="drop-shadow-[0_0_6px_var(--glow)]"
                style={{ "--glow": activeInfo.color }}
                layout
                transition={{ type: "spring", stiffness: 80, damping: 15 }}
              />

              {/* Axis Target Interactive Dots */}
              <circle cx={cx} cy={cy - 72} r="5" fill={activeDomain === 'aiml' ? '#fff' : '#06b6d4'} className="cursor-pointer" onClick={() => setActiveDomain('aiml')} />
              <circle cx={cx + 70} cy={cy} r="5" fill={activeDomain === 'cloud' ? '#fff' : '#6366f1'} className="cursor-pointer" onClick={() => setActiveDomain('cloud')} />
              <circle cx={cx} cy={cy + 68} r="5" fill={activeDomain === 'data' ? '#fff' : '#10b981'} className="cursor-pointer" onClick={() => setActiveDomain('data')} />
              <circle cx={cx - 71} cy={cy} r="5" fill={activeDomain === 'infra' ? '#fff' : '#e11d48'} className="cursor-pointer" onClick={() => setActiveDomain('infra')} />
            </svg>

            {/* Labels overlay placed perfectly around the radar */}
            <button 
              onClick={() => setActiveDomain('aiml')}
              className={`absolute top-0 left-1/2 -translate-x-1/2 font-mono text-[9px] font-bold tracking-widest px-3 py-1 border rounded-md transition-all ${
                activeDomain === 'aiml' 
                  ? 'border-[#06b6d4] bg-[#06b6d4]/10 text-white' 
                  : 'border-white/5 bg-black/40 text-slate-500 hover:text-slate-300'
              }`}
            >
              AI/ML_ENGINEERING
            </button>

            <button 
              onClick={() => setActiveDomain('cloud')}
              className={`absolute right-[-24px] top-1/2 -translate-y-1/2 font-mono text-[9px] font-bold tracking-widest px-3 py-1 border rounded-md transition-all ${
                activeDomain === 'cloud' 
                  ? 'border-indigo-500 bg-indigo-500/10 text-white' 
                  : 'border-white/5 bg-black/40 text-slate-500 hover:text-slate-300'
              }`}
            >
              CLOUD_NATIVE
            </button>

            <button 
              onClick={() => setActiveDomain('data')}
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 font-mono text-[9px] font-bold tracking-widest px-3 py-1 border rounded-md transition-all ${
                activeDomain === 'data' 
                  ? 'border-emerald-500 bg-emerald-500/10 text-white' 
                  : 'border-white/5 bg-black/40 text-slate-500 hover:text-slate-300'
              }`}
            >
              DATA_ANALYTICS
            </button>

            <button 
              onClick={() => setActiveDomain('infra')}
              className={`absolute left-[-24px] top-1/2 -translate-y-1/2 font-mono text-[9px] font-bold tracking-widest px-3 py-1 border rounded-md transition-all ${
                activeDomain === 'infra' 
                  ? 'border-rose-500 bg-rose-500/10 text-white' 
                  : 'border-white/5 bg-black/40 text-slate-500 hover:text-slate-300'
              }`}
            >
              INFRA_AUTOMATION
            </button>

          </div>
        </div>

        {/* Right Column: Console Metrics Output (6 cols) */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <TiltCard 
            isZeroG={isZeroG} 
            className="border-white/10 bg-white/5 h-full min-h-[340px] flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-2 text-[8px] font-mono text-slate-700 select-none">
              DIAG_v2.0
            </div>
            
            <div className="space-y-6 text-left">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-mono font-semibold text-[#06b6d4] uppercase tracking-wider flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5" /> DIAGNOSTICS TELEMETRY
                </span>
                <span className="w-2 h-2 rounded-full bg-[#06b6d4] shadow-[0_0_8px_#06b6d4]" />
              </div>

              {/* Console Screen */}
              <div className="border border-white/5 bg-black/60 rounded-xl p-5 min-h-[220px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeDomain}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-5"
                  >
                    {/* Header Details */}
                    <div className="flex justify-between items-end">
                      <div>
                        <span className="text-[8px] uppercase font-mono tracking-widest text-slate-600 block mb-0.5">
                          Active Domain:
                        </span>
                        <h4 className="text-base font-extrabold text-white font-mono uppercase tracking-tight">
                          {activeInfo.title}
                        </h4>
                      </div>
                      <div className="text-right">
                        <span className="text-[8px] uppercase font-mono tracking-widest text-slate-600 block mb-0.5">
                          CAPACITY:
                        </span>
                        <span 
                          style={{ color: activeInfo.color }}
                          className="text-base font-mono font-bold"
                        >
                          {activeInfo.score}
                        </span>
                      </div>
                    </div>

                    {/* Progress Bars for Skills */}
                    <div className="space-y-3">
                      {activeInfo.skills.map((skill) => (
                        <div key={skill.name} className="space-y-1">
                          <div className="flex justify-between text-[9px] font-mono text-slate-400">
                            <span>{skill.name}</span>
                            <span>{skill.pct}%</span>
                          </div>
                          {/* Outer Bar */}
                          <div className="h-1.5 w-full bg-white/[0.03] border border-white/5 rounded-full overflow-hidden">
                            {/* Inner Glowing Bar */}
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.pct}%` }}
                              transition={{ duration: 0.8, ease: "easeOut" }}
                              style={{ backgroundColor: activeInfo.color }}
                              className="h-full rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
                
                <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-[8px] font-mono text-slate-600">
                  <span>ACTIVE_NODE: 0x{activeDomain.toUpperCase()}</span>
                  <span>STATUS: RUNNING</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-between items-center text-[9px] font-mono text-slate-500 text-left">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#06b6d4] rounded-full" />
                Connection: Active
              </span>
              <span>Latency: 45ms</span>
            </div>
          </TiltCard>
        </div>

      </div>
    </section>
  );
}
