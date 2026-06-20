import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Database, Cpu, Blocks, Route, ChevronRight, ChevronDown } from 'lucide-react';
import TiltCard from './TiltCard';

const pipelineStages = [
  {
    id: "ingestion",
    number: "01",
    name: "DATA INGESTION",
    icon: Database,
    skills: [
      { name: "Python", usage: "Core development language for data retrieval, stream scripting, and building model ingestion pipelines." },
      { name: "SQL", usage: "Enables querying, joining, and auditing relational datasets from central database warehouses." },
      { name: "Data Analysis", usage: "Performs exploratory data audits, null checks, and statistical cleaning of raw features." },
      { name: "Jupyter Notebook", usage: "Interactive sandbox used for data exploration, cleaning, and model prototyping." },
      { name: "Dart / HTML", usage: "Utilized for multi-platform client UI data views and localized front-end data displays." }
    ]
  },
  {
    id: "training",
    number: "02",
    name: "MODEL TRAINING",
    icon: Cpu,
    skills: [
      { name: "Machine Learning", usage: "Applies predictive algorithms to fit model coefficients, map trends, and classify inputs." },
      { name: "Predictive Modeling", usage: "Formulates statistical Naive Bayes and Random Forest systems to predict target variables." },
      { name: "Agentic AI", usage: "Integrates LLM APIs and autonomous logic agents to perform continuous workflow execution." },
      { name: "Feature Engineering", usage: "Imputes missing records, scales parameters, and extracts high-impact mathematical variables." },
      { name: "Model Evaluation", usage: "Computes performance indicators like F1-Score, ROC-AUC, and maps validation loss curves." }
    ]
  },
  {
    id: "orchestration",
    number: "03",
    name: "ORCHESTRATION",
    icon: Blocks,
    skills: [
      { name: "Kubernetes", usage: "Coordinates auto-scaling container workloads, schedules tasks, and balances ingress traffic." },
      { name: "Docker", usage: "Encapsulates model runtimes, environment configs, and dependencies into isolated container images." },
      { name: "Google Cloud (GCP)", usage: "Hosts scalable VMs, handles Google Kubernetes Engine clusters, and manages artifact storage." },
      { name: "Oracle Cloud (OCI)", usage: "Provides compute infrastructure resources, Virtual Cloud Networks, and lightweight database hosts." }
    ]
  },
  {
    id: "automation",
    number: "04",
    name: "PIPELINE AUTOMATION",
    icon: Route,
    skills: [
      { name: "CI/CD", usage: "Automates lint validation tests, unit testing, and Docker image builds upon code commits." },
      { name: "Git & GitHub", usage: "Maintains code branch trees, tracks pipeline commit histories, and manages deployment pull requests." },
      { name: "Power BI", usage: "Builds live interactive analytical reports and tracks training performance parameters." },
      { name: "Figma", usage: "Used for rapid UI wireframing and designing data flow blueprints." },
      { name: "Microsoft Excel", usage: "Performs tabular data sorting and handles baseline telemetry spreadsheets." }
    ]
  }
];

export default function SkillsMatrix({ isZeroG }) {
  const [selectedSkill, setSelectedSkill] = useState({
    name: "Python",
    usage: "Core development language for data retrieval, stream scripting, and building model ingestion pipelines.",
    stageId: "ingestion"
  });

  return (
    <section id="sphere" className="relative py-32 px-6 md:px-12 max-w-6xl mx-auto z-10 border-b border-white/5">
      {/* Section Header */}
      <div className="text-left mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-[#06b6d4] font-semibold">// 04_SKILLS_FLOW</span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-2 mb-4 font-sans tracking-tight">
          Skills & Technologies
        </h2>
        <div className="h-[2px] w-24 bg-[#06b6d4]" />
        <p className="text-slate-400 max-w-2xl mt-4 text-sm font-sans leading-relaxed">
          Interactive MLOps Pipeline Flow Map. Click on any skill node to trace the ingestion-to-deployment dependency path and query the system application context.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Flow Map (8 cols) */}
        <div className="lg:col-span-8 flex flex-col gap-6 relative">
          
          {/* Glowing laser path background animation */}
          <div className="absolute top-[48px] left-[5%] right-[5%] h-[2px] bg-white/[0.04] pointer-events-none z-0 hidden md:block" />
          
          <AnimatePresence>
            {selectedSkill && (
              <motion.div 
                className="absolute top-[48px] left-[5%] right-[5%] h-[2px] pointer-events-none z-0 hidden md:block"
                style={{
                  background: "linear-gradient(90deg, transparent, #06b6d4, transparent)"
                }}
                initial={{ backgroundPosition: "-200px 0" }}
                animate={{ backgroundPosition: "400px 0" }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              />
            )}
          </AnimatePresence>

          <div className="flex flex-col md:flex-row items-stretch justify-between gap-4 md:gap-2 relative z-10">
            {pipelineStages.map((stage, idx) => {
              const StageIcon = stage.icon;
              const isStageActive = selectedSkill?.stageId === stage.id;

              return (
                <React.Fragment key={stage.id}>
                  {/* Stage Column Card */}
                  <div className={`flex-1 bg-[#080808]/90 border rounded-2xl p-4 flex flex-col text-left transition-all duration-300 ${
                    isStageActive 
                      ? 'border-[#06b6d4] bg-[#06b6d4]/[0.02] shadow-[0_0_15px_rgba(6,182,212,0.06)]' 
                      : 'border-white/5 hover:border-white/10'
                  }`}>
                    {/* Stage Header */}
                    <div className="flex items-center gap-2 border-b border-white/5 pb-2.5 mb-3.5">
                      <div className={`p-1.5 rounded-lg border ${
                        isStageActive ? 'border-[#06b6d4]/30 bg-[#06b6d4]/10 text-[#06b6d4]' : 'border-white/5 bg-white/[0.02] text-slate-500'
                      }`}>
                        <StageIcon className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="font-mono text-[7.5px] text-slate-600 tracking-widest block font-bold">
                          STAGE {stage.number}
                        </span>
                        <h3 className={`font-mono text-[9px] font-extrabold tracking-wider ${
                          isStageActive ? 'text-white' : 'text-slate-400'
                        }`}>
                          {stage.name}
                        </h3>
                      </div>
                    </div>

                    {/* Stage Skill Badges */}
                    <div className="flex flex-col gap-2">
                      {stage.skills.map((skill) => {
                        const isSkillSelected = selectedSkill?.name === skill.name;
                        return (
                          <motion.div
                            key={skill.name}
                            onClick={() => setSelectedSkill({ name: skill.name, usage: skill.usage, stageId: stage.id })}
                            whileHover={{ scale: 1.02 }}
                            className={`text-[10px] font-mono p-2 rounded-lg border cursor-pointer transition-all duration-200 ${
                              isSkillSelected 
                                ? 'bg-[#06b6d4]/15 border-[#06b6d4] text-white shadow-[0_0_8px_rgba(6,182,212,0.15)] font-bold' 
                                : 'bg-white/[0.02] border-white/5 hover:border-white/20 text-slate-400 hover:text-slate-200'
                            }`}
                          >
                            {skill.name}
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Connecting Arrow */}
                  {idx < 3 && (
                    <div className="flex items-center justify-center text-slate-700 py-2 md:py-0 self-center z-10">
                      <ChevronRight className="w-4 h-4 hidden md:block opacity-40 text-[#06b6d4]" />
                      <ChevronDown className="w-4 h-4 md:hidden opacity-40 text-[#06b6d4]" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Right Column: Console Output Card (4 cols) */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <TiltCard 
            isZeroG={isZeroG} 
            className="border-white/10 bg-white/5 h-full min-h-[300px] flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-2 text-[8px] font-mono text-slate-700 select-none">
              HUD_v1.50
            </div>
            
            <div className="space-y-6 text-left">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-mono font-semibold text-[#06b6d4] uppercase tracking-wider flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" /> SYSTEMS QUERY OUTPUT
                </span>
                <span className="w-2 h-2 rounded-full bg-[#06b6d4] shadow-[0_0_8px_#06b6d4]" />
              </div>

              {/* Console Screen */}
              <div className="border border-white/5 bg-black/60 rounded-xl p-5 min-h-[190px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedSkill?.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div>
                      <span className="text-[9px] uppercase font-mono tracking-widest text-slate-500 block mb-1">
                        Active Competency:
                      </span>
                      <h4 className="text-sm font-extrabold text-white font-mono">
                        {selectedSkill?.name}
                      </h4>
                    </div>

                    <div>
                      <span className="text-[9px] uppercase font-mono tracking-widest text-slate-500 block mb-1">
                        System Application Context:
                      </span>
                      <p className="text-xs text-white/80 font-sans leading-relaxed">
                        {selectedSkill?.usage}
                      </p>
                    </div>

                    <div>
                      <span className="text-[9px] uppercase font-mono tracking-widest text-slate-500 block mb-1">
                        Pipeline Dependency Route:
                      </span>
                      <div className="font-mono text-[8px] text-[#06b6d4] uppercase tracking-widest flex items-center gap-1">
                        <span>INGESTION</span>
                        <span>➔</span>
                        <span className={selectedSkill?.stageId === 'training' ? 'font-bold underline' : ''}>TRAINING</span>
                        <span>➔</span>
                        <span className={selectedSkill?.stageId === 'orchestration' ? 'font-bold underline' : ''}>ORCHESTRATION</span>
                        <span>➔</span>
                        <span className={selectedSkill?.stageId === 'automation' ? 'font-bold underline' : ''}>AUTOMATION</span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
                
                <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-[8px] font-mono text-slate-600">
                  <span>QUERY_ID: 0x{selectedSkill?.name.charCodeAt(0).toString(16).toUpperCase()}</span>
                  <span>STATUS: READY</span>
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
