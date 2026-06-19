import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal } from 'lucide-react';
import TiltCard from './TiltCard';

const skillsData = {
  languages: {
    title: "Languages",
    color: "#06b6d4",
    items: [
      { name: "Python", usage: "Core development language for machine learning models, scripting automated pipelines, and building FastAPI backends." },
      { name: "SQL", usage: "Enables querying and manipulating relational data, structuring databases for predictive pipelines and dashboard analytics." },
      { name: "Dart / HTML", usage: "Utilized for multi-platform application UI development and lightweight client-side scripts." }
    ]
  },
  mlData: {
    title: "ML & Data Science",
    color: "#06b6d4",
    items: [
      { name: "Machine Learning", usage: "Applies statistical algorithms to identify patterns, classify datasets, and optimize predictive model variables." },
      { name: "Predictive Modeling", usage: "Formulates Naive Bayes and Random Forest classifiers to solve agricultural and customer retention problems." },
      { name: "Agentic AI", usage: "Explores autonomous execution paths and LLM orchestrations to automate business logic tasks." },
      { name: "Data Analysis", usage: "Cleanses, structures, and audits incoming datasets to extract analytical insights." },
      { name: "Feature Engineering", usage: "Transforms raw data dimensions into mathematical input variables to maximize classifier recall." },
      { name: "Model Evaluation", usage: "Computes performance indicators like F1-Score, ROC-AUC, and confusion matrix dimensions." },
      { name: "Data Visualization", usage: "Constructs clean data dashboards to visualize agricultural yields and customer churn risk scores." }
    ]
  },
  devopsCloud: {
    title: "DevOps & Cloud",
    color: "#06b6d4",
    items: [
      { name: "Google Cloud (GCP)", usage: "Hosts automated automation runners, handles serverless compute instances, and secures API endpoints." },
      { name: "Oracle Cloud (OCI)", usage: "Utilized for setting up lightweight compute VMs and testing host network ingress rules." },
      { name: "Kubernetes", usage: "Explores container orchestration patterns and auto-scaling logic for serverless deployments." },
      { name: "Docker", usage: "Packages model dependencies and code interfaces into lightweight container instances for isolated, clean runs." },
      { name: "CI/CD", usage: "Automates code testing, lint validation, and Docker image build runs upon GitHub push actions." }
    ]
  },
  tools: {
    title: "Tools & IDEs",
    color: "#06b6d4",
    items: [
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
    usage: "Core development language for machine learning models, scripting automated pipelines, and building FastAPI backends.",
    color: "#06b6d4"
  });

  return (
    <section id="sphere" className="relative py-32 px-6 md:px-12 max-w-6xl mx-auto z-10 border-b border-white/5">
      {/* Section Header */}
      <div className="text-left mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-[#06b6d4] font-semibold">// 04_SKILLS_MATRIX</span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-2 mb-4 font-sans tracking-tight">
          Skills & Technologies
        </h2>
        <div className="h-[2px] w-24 bg-[#06b6d4]" />
        <p className="text-slate-400 max-w-2xl mt-4 text-base font-sans leading-relaxed">
          Select any technical badge below to query the response system and see how that technical proficiency is applied in a systems context.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Rounded Badge Categories (8 cols) */}
        <div className="lg:col-span-8 space-y-8">
          {Object.entries(skillsData).map(([key, category]) => (
            <div key={key} className="text-left space-y-3">
              <h3 className="text-xs uppercase font-mono tracking-widest text-slate-500 font-bold">
                {category.title}
              </h3>
              
              {/* Badges Flexbox */}
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill) => {
                  const isSelected = selectedSkill?.name === skill.name;
                  return (
                    <motion.div
                      key={skill.name}
                      onClick={() => setSelectedSkill({ name: skill.name, usage: skill.usage, color: category.color })}
                      whileHover={{ scale: 1.03 }}
                      className={`text-xs px-4 py-2 font-mono rounded-full border transition-all duration-300 cursor-pointer ${
                        isSelected 
                          ? 'bg-[#06b6d4]/15 border-[#06b6d4] text-white' 
                          : 'bg-white/[0.03] border-white/10 hover:border-[#06b6d4]/50 hover:bg-[#06b6d4]/5 text-slate-300'
                      }`}
                    >
                      {skill.name}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Console Output Card (4 cols) */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <TiltCard 
            isZeroG={isZeroG} 
            className="border-white/10 bg-white/5 h-full min-h-[300px] flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-2 text-[8px] font-mono text-slate-700 select-none">
              HUD_v1.40
            </div>
            
            <div className="space-y-6 text-left">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-mono font-semibold text-[#06b6d4] uppercase tracking-wider flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" /> SYSTEMS QUERY OUTPUT
                </span>
                <span className="w-2 h-2 rounded-full bg-[#06b6d4] shadow-[0_0_8px_#06b6d4]" />
              </div>

              {/* Console Screen */}
              <div className="border border-white/5 bg-black/60 rounded-xl p-5 min-h-[180px] flex flex-col justify-between">
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
