import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Cloud, Wrench, ShieldAlert } from 'lucide-react';
import TiltCard from './TiltCard';

const skillsData = {
  intelligence: {
    title: "Intelligence",
    subtitle: "AI & Data Science Core",
    icon: Brain,
    color: "#8B5CF6", // Purple
    glowColor: "rgba(139, 92, 246, 0.4)",
    items: [
      { name: "Machine Learning", usage: "Engineered Gaussian Naive Bayes classification model with 92.53% accuracy for soil matching." },
      { name: "Predictive Modeling", usage: "Implemented Random Forest customer churn analysis model achieving 90.76% accuracy." },
      { name: "Agentic AI", usage: "Explored LLM automation workflows and custom agents for CRM tasks at Sanjivini Eco Solutions." },
      { name: "Feature Engineering", usage: "Optimized dataset inputs, handling correlation matrices for agricultural and customer pipelines." },
      { name: "SQL", usage: "Designed structured database schemas for agricultural inventory and customer metrics." },
      { name: "Python", usage: "Core language used for model architecture, script automations, and back-end logic." },
    ]
  },
  infrastructure: {
    title: "Infrastructure",
    subtitle: "Cloud-Native & DevOps",
    icon: Cloud,
    color: "#3B82F6", // Blue
    glowColor: "rgba(59, 130, 246, 0.4)",
    items: [
      { name: "Google Cloud Platform (GCP)", usage: "Deployed content automation scripts and automated API integrations in Google Cloud environments." },
      { name: "Oracle Cloud (OCI)", usage: "Orchestrated free-tier compute instances and set up cloud-native virtual networks." },
      { name: "Kubernetes", usage: "Studied scaling serverless containers and ingress controllers in Cloud Innovator labs." },
      { name: "Docker", usage: "Containerized the Crop Recommendation classification API for independent deployment." },
      { name: "APIs", usage: "Created FastAPI routes, handled REST requests, and managed automated webhook triggers." },
      { name: "Git", usage: "Coordinated codebase versions, audited pull requests, and maintained clean commit histories." },
    ]
  },
  instrumentation: {
    title: "Instrumentation",
    subtitle: "Development Tools & BI",
    icon: Wrench,
    color: "#10B981", // Emerald
    glowColor: "rgba(16, 185, 129, 0.4)",
    items: [
      { name: "Jupyter Notebook", usage: "Conducted exploratory data analysis (EDA), model training, and data visualization phases." },
      { name: "Power BI", usage: "Designed metrics dashboards to visualize agricultural yields and customer churn predictions." },
      { name: "Excel", usage: "Created complex lookups and pivot tables for early-stage nursery inventory tracking." },
      { name: "Figma", usage: "Created digital wireframes, telemetry dashboard mockups, and UI element prototypes." },
    ]
  }
};

export default function SkillsMatrix({ isZeroG }) {
  const [selectedSkill, setSelectedSkill] = useState({
    name: "Machine Learning",
    usage: "Engineered Gaussian Naive Bayes classification model with 92.53% accuracy for soil matching.",
    cluster: "intelligence"
  });

  return (
    <section id="sphere" className="relative py-24 px-4 md:px-8 max-w-6xl mx-auto z-10">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-widest text-emerald-400 font-mono">Telemetry Matrix</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-2 mb-4 font-sans tracking-tight">
            The Sphere
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-cosmicBlue mx-auto rounded-full" />
          <p className="text-slate-400 max-w-xl mx-auto mt-4 text-sm md:text-base">
            An interactive matrix of competencies. Select any cluster node to query where that specific skill was applied in the field.
          </p>
        </motion.div>
      </div>

      {/* Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left/Middle Column: The Clusters */}
        <div className="lg:col-span-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                        <h3 className="text-base font-bold text-white leading-none">{cluster.title}</h3>
                        <span className="text-[10px] text-slate-400 font-mono">{cluster.subtitle}</span>
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

        {/* Right Column: Holographic Display HUD */}
        <div className="lg:col-span-4 h-full">
          <TiltCard 
            isZeroG={isZeroG} 
            className="border-purple-500/20 bg-indigoSpace/80 h-full min-h-[300px] flex flex-col justify-between relative overflow-hidden"
          >
            {/* Cybernetic HUD Overlays */}
            <div className="absolute top-0 right-0 p-2 text-[9px] font-mono text-slate-600 select-none">
              HUD_v1.09
            </div>
            
            <div className="space-y-6">
              {/* Telemetry Tag */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-cosmicBlue uppercase tracking-wider">
                  SYSTEM QUERY RESPONSE
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              {/* Holographic Output Console */}
              <div className="border border-white/5 bg-black/40 rounded-xl p-4 min-h-[160px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedSkill?.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 block mb-1">
                        Selected Node:
                      </span>
                      <h4 
                        className="text-lg font-extrabold text-white font-mono"
                        style={{ color: skillsData[selectedSkill?.cluster]?.color }}
                      >
                        {selectedSkill?.name}
                      </h4>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 block mb-1">
                        Application Deployment Log:
                      </span>
                      <p className="text-sm text-slate-300 font-sans leading-relaxed">
                        {selectedSkill?.usage}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
                
                <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-[9px] font-mono text-slate-500">
                  <span>SECTOR: 0x{selectedSkill?.name.charCodeAt(0).toString(16).toUpperCase()}</span>
                  <span>STATUS: OPTIMAL</span>
                </div>
              </div>
            </div>

            {/* Bottom HUD decoration */}
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
