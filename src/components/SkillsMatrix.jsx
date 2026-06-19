import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Cloud, BarChart3 } from 'lucide-react';
import TiltCard from './TiltCard';

const skillsData = {
  intelligence: {
    title: "AI & Machine Learning",
    subtitle: "Algorithm & Model Design",
    icon: Brain,
    color: "#8B5CF6", // Purple
    items: [
      { name: "Machine Learning", usage: "Engineered a Gaussian Naive Bayes model with 92.53% accuracy for Berukodige Farm." },
      { name: "Predictive Modeling", usage: "Implemented customer churn random forest model with 90.76% accuracy." },
      { name: "Agentic AI", usage: "Explored LLM automation workflows and custom agents at Sanjivini Eco Solutions." },
      { name: "Feature Engineering", usage: "Optimized dataset inputs for the crop recommendation engine and churn analytics." },
      { name: "SQL", usage: "Designed database queries for customer analytics and agricultural nursery records." },
      { name: "Python", usage: "Core development language for machine learning models and server automation." },
      { name: "Data Analysis", usage: "Analyzed dataset metrics, correlation matrices, and output trends to refine classification accuracy." },
    ]
  },
  infrastructure: {
    title: "Cloud & Deployment",
    subtitle: "Infrastructure & DevOps",
    icon: Cloud,
    color: "#3B82F6", // Blue
    items: [
      { name: "Google Cloud Platform (GCP)", usage: "Deployed CRM integrations and automated API runs in cloud environments." },
      { name: "Oracle Cloud (OCI)", usage: "Orchestrated virtual servers and networking configurations for scalable nodes." },
      { name: "Kubernetes", usage: "Used in Cloud Innovator labs to scale serverless containers." },
      { name: "Docker", usage: "Containerized crop recommendation classification API microservice." },
      { name: "APIs", usage: "Created Flask/FastAPI backend routes and integrated CRM automation hooks." },
      { name: "Git/GitHub", usage: "Coordinated codebase versions and audited deployment pipelines." },
    ]
  },
  instrumentation: {
    title: "Software & Analytics",
    subtitle: "Tools & BI Interfaces",
    icon: BarChart3,
    color: "#10B981", // Emerald
    items: [
      { name: "Jupyter Notebook", usage: "Conducted exploratory data analysis (EDA) and trained classification models." },
      { name: "Power BI", usage: "Visualized customer churn trends and telemetry metrics." },
      { name: "Excel", usage: "Managed tabular records and structured agricultural inventory data." },
      { name: "Figma", usage: "Designed interactive wireframes and layouts for the telemetry dashboards." },
    ]
  }
};

export default function SkillsMatrix({ isZeroG }) {
  const [selectedSkill, setSelectedSkill] = useState({
    name: "Machine Learning",
    usage: "Engineered a Gaussian Naive Bayes model with 92.53% accuracy for Berukodige Farm.",
    cluster: "intelligence"
  });

  return (
    <section id="sphere" className="relative py-24 px-4 md:px-8 max-w-6xl mx-auto z-10">
      {/* Background Section Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">[ 03 // TECH MATRIX ]</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-2 mb-4 font-sans tracking-tight">
            Core Skills & Tech Stack
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-cosmicBlue mx-auto rounded-full" />
          <p className="text-slate-400 max-w-xl mx-auto mt-4 text-sm md:text-base">
            Click any skill node on the left to query the telemetry response panel and view its real-world implementation context.
          </p>
        </motion.div>
      </div>

      {/* Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left/Middle Column: The Three Columns */}
        <div className="lg:col-span-8 space-y-8 flex flex-col justify-between">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
            {Object.entries(skillsData).map(([key, cluster]) => {
              const ClusterIcon = cluster.icon;
              return (
                <TiltCard 
                  key={key} 
                  isZeroG={isZeroG} 
                  className="bg-indigoSpace/40 border-slate-800 hover:border-slate-700 h-full flex flex-col justify-between"
                >
                  <div>
                    {/* Cluster Header */}
                    <div className="flex items-center gap-3 mb-6 pb-3 border-b border-white/5">
                      <span 
                        className="p-2 rounded-lg bg-white/5" 
                        style={{ color: cluster.color, boxShadow: `0 0 10px ${cluster.color}20` }}
                      >
                        <ClusterIcon className="w-5 h-5" />
                      </span>
                      <div>
                        <h3 className="text-sm font-bold text-white leading-none">{cluster.title}</h3>
                        <span className="text-[9px] text-slate-400 font-mono">{cluster.subtitle}</span>
                      </div>
                    </div>

                    {/* Skill Nodes List */}
                    <div className="flex flex-col gap-2">
                      {cluster.items.map((skill) => {
                        const isSelected = selectedSkill?.name === skill.name;
                        return (
                          <motion.button
                            key={skill.name}
                            onClick={() => setSelectedSkill({ ...skill, cluster: key })}
                            whileHover={{ x: 4 }}
                            className={`w-full text-left py-2 px-3 rounded-lg text-xs font-mono transition-all duration-300 flex items-center justify-between border ${
                              isSelected
                                ? 'bg-white/10 text-white font-bold'
                                : 'bg-transparent text-slate-400 border-transparent hover:text-slate-200'
                            }`}
                            style={{ 
                              borderColor: isSelected ? cluster.color : 'transparent',
                              boxShadow: isSelected ? `0 0 15px ${cluster.color}30` : 'none'
                            }}
                          >
                            <span>{skill.name}</span>
                            {isSelected && (
                              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: cluster.color }} />
                            )}
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>

        {/* Right Column: Interactive Panel */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <TiltCard 
            isZeroG={isZeroG} 
            className="border-purple-500/20 bg-indigoSpace/80 h-full min-h-[320px] flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-2 text-[9px] font-mono text-slate-600 select-none">
              HUD_v1.09
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-semibold text-cosmicBlue uppercase tracking-wider">
                  SYSTEM QUERY RESPONSE
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              {/* Holographic Output Console */}
              <div className="border border-white/5 bg-black/40 rounded-xl p-4 min-h-[180px] flex flex-col justify-between">
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
                      <span className="text-[9px] uppercase font-mono tracking-widest text-slate-400 block mb-1">
                        Active Competency:
                      </span>
                      <h4 
                        className="text-base font-extrabold text-white font-mono"
                        style={{ color: skillsData[selectedSkill?.cluster]?.color }}
                      >
                        {selectedSkill?.name}
                      </h4>
                    </div>

                    <div>
                      <span className="text-[9px] uppercase font-mono tracking-widest text-slate-400 block mb-1">
                        Practical Application:
                      </span>
                      <p className="text-sm text-slate-300 font-sans leading-relaxed">
                        {selectedSkill?.usage}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
                
                <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-[9px] font-mono text-slate-500">
                  <span>QUERY_ID: 0x{selectedSkill?.name.charCodeAt(0).toString(16).toUpperCase()}</span>
                  <span>STATUS: OPTIMAL</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-between items-center text-[10px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                Active Telemetry
              </span>
              <span>EST: 45ms</span>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
