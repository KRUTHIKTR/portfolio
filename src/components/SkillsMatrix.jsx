import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ShieldCheck, RefreshCw, Cpu, Database, Cloud, Settings } from 'lucide-react';
import TiltCard from './TiltCard';

const skillsData = {
  languages: {
    title: "LANGUAGES // MODULE_01",
    icon: Database,
    skills: [
      { name: "Python", usage: "Core development language for machine learning models, scripting automated pipelines, and building FastAPI backends." },
      { name: "SQL", usage: "Enables querying and manipulating relational data, structuring databases for predictive pipelines." },
      { name: "Dart / HTML", usage: "Utilized for multi-platform UI development and lightweight client-side scripts." }
    ]
  },
  ml: {
    title: "ML & DATA SCIENCE // MODULE_02",
    icon: Cpu,
    skills: [
      { name: "Machine Learning", usage: "Applies statistical algorithms to identify patterns, classify datasets, and optimize predictive model variables." },
      { name: "Predictive Modeling", usage: "Formulates Naive Bayes and Random Forest classifiers to solve agricultural and customer retention problems." },
      { name: "Agentic AI", usage: "Explores autonomous execution paths and LLM orchestrations to automate business logic tasks." },
      { name: "Data Analysis", usage: "Cleanses, structures, and audits incoming datasets to extract analytical insights." },
      { name: "Feature Engineering", usage: "Transforms raw data dimensions into mathematical input variables to maximize classifier recall." },
      { name: "Model Evaluation", usage: "Computes performance indicators like F1-Score, ROC-AUC, and confusion matrix dimensions." }
    ]
  },
  devops: {
    title: "CLOUD & DEVOPS // MODULE_03",
    icon: Cloud,
    skills: [
      { name: "Google Cloud (GCP)", usage: "Hosts automated automation runners, handles serverless compute instances, and secures API endpoints." },
      { name: "Oracle Cloud (OCI)", usage: "Utilized for setting up lightweight compute VMs and testing host network ingress rules." },
      { name: "Kubernetes", usage: "Explores container orchestration patterns and auto-scaling logic for serverless deployments." },
      { name: "Docker", usage: "Packages model dependencies and code interfaces into lightweight container instances for isolated, clean runs." },
      { name: "CI/CD", usage: "Automates code testing, lint validation, and Docker image build runs upon GitHub push actions." }
    ]
  },
  tools: {
    title: "TOOLS & IDES // MODULE_04",
    icon: Settings,
    skills: [
      { name: "Jupyter Notebook", usage: "Core environment for exploratory data analysis, algorithm prototyping, and running machine learning validation checks." },
      { name: "Git & GitHub", usage: "Handles distributed version control, pull request review logs, and coordinates CI/CD trigger webhooks." },
      { name: "Microsoft Excel", usage: "Used for sorting baseline telemetry reports and performing quick data audits." },
      { name: "Power BI", usage: "Integrates with relational databases to construct interactive analytical dashboard charts." },
      { name: "Figma", usage: "Used for rapid UI layouts, vector blueprint prototyping, and application mockup blueprints." }
    ]
  }
};

export default function SkillsMatrix({ isZeroG }) {
  const [selectedSkill, setSelectedSkill] = useState({
    name: "Python",
    usage: "Core development language for machine learning models, scripting automated pipelines, and building FastAPI backends."
  });
  const [isBooting, setIsBooting] = useState(false);
  const [bootProgress, setBootProgress] = useState(0);

  // Trigger boot sequence animation when selected skill changes
  useEffect(() => {
    setIsBooting(true);
    setBootProgress(0);
    
    let current = 0;
    const interval = setInterval(() => {
      current += 20;
      setBootProgress(current);
      if (current >= 100) {
        clearInterval(interval);
        setIsBooting(false);
      }
    }, 60);

    return () => clearInterval(interval);
  }, [selectedSkill.name]);

  return (
    <section id="sphere" className="relative py-12 md:py-32 px-6 md:px-12 max-w-6xl mx-auto z-10 border-b border-white/5">
      {/* Section Header */}
      <div className="text-left mb-12">
        <span className="text-sm font-mono uppercase tracking-widest text-[#06b6d4] font-semibold">// 04_TECHNICAL_ABILITIES</span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-2 mb-4 font-sans tracking-tight">
          Skills & Technologies
        </h2>
        <div className="h-[2px] w-24 bg-[#06b6d4]" />
        <p className="text-slate-400 max-w-2xl mt-4 text-base font-sans leading-relaxed">
          Hover or click on any technical skill node below. All core proficiencies are fully highlighted. Selecting a skill boots up its system query context on the telemetry console.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: 2x2 Grid of Category Drawers (7 cols) */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(skillsData).map(([key, category]) => {
            const CatIcon = category.icon;
            return (
              <div key={key} className="text-left space-y-3 border border-white/5 bg-[#080808]/40 rounded-2xl p-5 flex flex-col justify-between">
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-2.5 text-slate-400 border-b border-white/5 pb-2.5 mb-3.5">
                    <CatIcon className="w-4 h-4 text-[#06b6d4]" />
                    <h3 className="text-xs uppercase font-mono tracking-widest font-bold">
                      {category.title}
                    </h3>
                  </div>
                  
                  {/* Grid of highly visible skills */}
                  <div className="flex flex-col gap-2.5">
                    {category.skills.map((skill) => {
                      const isSelected = selectedSkill.name === skill.name;
                      return (
                        <motion.div
                          key={skill.name}
                          onClick={() => setSelectedSkill({ name: skill.name, usage: skill.usage })}
                          whileHover={{ scale: 1.02 }}
                          className={`px-4 py-3 text-sm font-extrabold font-mono tracking-wider border rounded-xl cursor-pointer transition-all duration-300 flex items-center justify-between ${
                            isSelected 
                              ? 'bg-[#06b6d4]/15 border-[#06b6d4] text-white shadow-[0_0_15px_rgba(6,182,212,0.25)]' 
                              : 'bg-white/[0.03] border-white/10 hover:border-[#06b6d4]/50 hover:bg-[#06b6d4]/5 text-slate-300 hover:text-white'
                          }`}
                        >
                          <span>{skill.name}</span>
                          <span className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            isSelected ? 'bg-emerald-400 shadow-[0_0_8px_#10b981] animate-pulse' : 'bg-slate-700'
                          }`} />
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Sticky Console Details Output (5 cols) */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
          <TiltCard 
            isZeroG={isZeroG} 
            className="border-white/10 bg-white/5 h-auto flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-2.5 text-[10px] font-mono text-slate-600 select-none">
              HUD_v2.0
            </div>
            
            <div className="space-y-6 text-left p-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-[#06b6d4] uppercase tracking-wider flex items-center gap-2">
                  <Terminal className="w-4 h-4" /> SYSTEMS QUERY OUTPUT
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#06b6d4] shadow-[0_0_8px_#06b6d4]" />
              </div>

              {/* Console Screen */}
              <div className="border border-white/5 bg-black/60 rounded-xl p-5 min-h-[220px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  {isBooting ? (
                    /* Booting terminal loader */
                    <motion.div
                      key="booting"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-4 font-mono text-xs text-slate-400 flex flex-col justify-between"
                    >
                      <div className="space-y-2 text-left">
                        <div className="text-slate-500 border-b border-white/5 pb-1.5 flex justify-between">
                          <span>$ query --comp {selectedSkill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}</span>
                          <RefreshCw className="w-3 h-3 animate-spin text-[#06b6d4]" />
                        </div>
                        <div className="flex gap-2 items-start text-left">
                          <span className="text-[#06b6d4] font-bold select-none">&gt;&gt;</span>
                          <span className="leading-relaxed">Connecting to competency directory...</span>
                        </div>
                        <div className="flex gap-2 items-start text-left">
                          <span className="text-[#06b6d4] font-bold select-none">&gt;&gt;</span>
                          <span className="leading-relaxed">Retrieving application metadata specs...</span>
                        </div>
                        <div className="flex gap-2 items-start text-left">
                          <span className="text-[#06b6d4] font-bold select-none">&gt;&gt;</span>
                          <span className="leading-relaxed">Syncing details telemetry output...</span>
                        </div>
                      </div>

                      <div className="space-y-1.5 mt-4">
                        <div className="flex justify-between text-[10px] text-slate-500 uppercase tracking-widest">
                          <span>Loading specs</span>
                          <span>{bootProgress}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/[0.03] border border-white/5 rounded-full overflow-hidden">
                          <div style={{ width: `${bootProgress}%` }} className="h-full bg-[#06b6d4] rounded-full" />
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    /* Loaded Competency Specifications */
                    <motion.div
                      key="loaded"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4 text-left"
                    >
                      <div className="flex items-center gap-2 text-emerald-400 font-mono text-[10px] font-bold px-2 py-1 border border-emerald-500/20 bg-emerald-500/5 rounded self-start">
                        <ShieldCheck className="w-4 h-4" /> QUERY STATUS: CONNECTED
                      </div>

                      <div className="space-y-4">
                        <div>
                          <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 block mb-1">
                            Competency Key:
                          </span>
                          <h4 className="text-lg font-extrabold text-white font-mono">
                            {selectedSkill.name}
                          </h4>
                        </div>

                        <div>
                          <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 block mb-1.5">
                            System Application Context:
                          </span>
                          <p className="text-sm text-slate-300 font-sans leading-relaxed">
                            {selectedSkill.usage}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-slate-600">
                  <span>QUERY_ID: 0x{selectedSkill.name.charCodeAt(0).toString(16).toUpperCase()}</span>
                  <span>INGRESS: OK</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-between items-center text-[10px] font-mono text-slate-500 text-left p-3">
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
