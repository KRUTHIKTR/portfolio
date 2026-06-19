import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileCode, Terminal, Cloud, Play, CheckCircle2, ArrowUpRight, Cpu } from 'lucide-react';
import TiltCard from './TiltCard';

const projectsData = [
  {
    id: 1,
    fileName: "crop_recommendation.py",
    title: "Crop Recommendation System",
    accuracy: "92.53%",
    latency: "42ms",
    host: "GCP Cloud Run (Serverless)",
    baseImage: "python:3.10-slim",
    database: "Local CSV cache",
    github: "https://github.com/KRUTHIKTR/Crop-recommendation-system",
    code: `import pandas as pd
from sklearn.naive_bayes import GaussianNB
from mlops import ModelRegistry

# Load agricultural feature logs
df = pd.read_csv("data/soil_metrics.csv")
X = df[['N', 'P', 'K', 'temp', 'hum', 'pH', 'rain']]
y = df['crop']

# Train Naive Bayes classifier
model = GaussianNB()
model.fit(X, y)

# Log and register model telemetry
registry = ModelRegistry.connect()
registry.log_model(model, "crop-bayes-v1")`,
    logs: [
      "[INFO] Loading data/soil_metrics.csv... [OK]",
      "[INFO] Executing GaussianNB model training...",
      "[SUCCESS] Model fitted. Accuracy score: 92.53%",
      "[INFO] Registering artifact 'crop-bayes-v1' in GCP Registry...",
      "[SUCCESS] Serving API endpoint deployed on GCP Cloud Run."
    ]
  },
  {
    id: 2,
    fileName: "churn_prediction.py",
    title: "Customer Churn Prediction",
    accuracy: "90.76%",
    latency: "65ms",
    host: "FastAPI + Docker Container",
    baseImage: "python:3.10-alpine",
    database: "PostgreSQL (GCP Cloud SQL)",
    github: "https://github.com/KRUTHIKTR/Customer-churn-prediction",
    code: `import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from mlops.pipelines import ETLPipeline

# Execute ETL data preparation
etl = ETLPipeline(source="postgresql://db:5432/telecom")
df = etl.extract_and_clean()

# Fit Random Forest Classifier
clf = RandomForestClassifier(n_estimators=100)
clf.fit(df.drop('churn', axis=1), df['churn'])

# Serve inference API inside Docker container
app = etl.package_as_fastapi(clf)`,
    logs: [
      "[INFO] Extracting raw datasets from PostgreSQL database...",
      "[INFO] Running ETL cleanup pipeline...",
      "[INFO] Training RandomForestClassifier (100 estimators)...",
      "[SUCCESS] Training complete. Accuracy score: 90.76%",
      "[SUCCESS] Packaged API model inside python:3.10-alpine container."
    ]
  },
  {
    id: 3,
    fileName: "titanic_imputation.py",
    title: "Titanic Survival Predictor",
    accuracy: "82.68%",
    latency: "120ms",
    host: "Streamlit + HuggingFace Spaces",
    baseImage: "python:3.9-slim",
    database: "In-memory cached state",
    github: "https://github.com/KRUTHIKTR/Titanic-Survival-Prediction",
    code: `import pandas as pd
from sklearn.impute import KNNImputer
from sklearn.ensemble import RandomForestClassifier

# Read passenger list logs
train = pd.read_csv("train.csv")

# Impute missing passenger ages via KNN
imputer = KNNImputer(n_neighbors=5)
age_imputed = imputer.fit_transform(train[['Age']])

# Train baseline forest classifier
clf = RandomForestClassifier(max_depth=6)
clf.fit(train[['Pclass', 'Sex', 'Age', 'Fare']], train['Survived'])`,
    logs: [
      "[INFO] Loading passenger registry train.csv...",
      "[INFO] Executing KNNImputer for missing values...",
      "[INFO] Training baseline RandomForest Classifier...",
      "[SUCCESS] Training complete. Accuracy score: 82.68%",
      "[SUCCESS] UI dashboard deployed successfully on HuggingFace."
    ]
  }
];

export default function Projects({ isZeroG }) {
  const [activeFileId, setActiveFileId] = useState(1);
  const currentProject = projectsData.find(p => p.id === activeFileId);

  // Syntax highlighting mock helper
  const highlightCode = (codeText) => {
    return codeText.split('\n').map((line, idx) => {
      // Very simple syntax highlighting for mockup presentation
      let styledLine = line;
      if (line.startsWith('#')) {
        styledLine = <span className="text-slate-500">{line}</span>;
      } else {
        // Highlight import
        styledLine = line.replace(/(import|from|as)/g, '<span class="text-purple-400 font-bold">$1</span>')
                         // Highlight strings
                         .replace(/("[^"]*")/g, '<span class="text-emerald-400">$1</span>')
                         // Highlight functions
                         .replace(/(\.\w+)(?=\()/g, '.<span class="text-cyan-400">$1</span>');
      }

      return (
        <div key={idx} className="flex font-mono text-[10px] md:text-xs leading-relaxed text-slate-300">
          <span className="w-8 select-none text-slate-600 pr-3 border-r border-white/5 text-right mr-3">
            {idx + 1}
          </span>
          <span 
            className="flex-1 text-left" 
            dangerouslySetInnerHTML={{ __html: typeof styledLine === 'string' ? styledLine : line }}
          />
        </div>
      );
    });
  };

  return (
    <section id="lab" className="relative py-28 px-6 md:px-12 max-w-6xl mx-auto z-10 border-b border-white/5">
      {/* Section Header */}
      <div className="text-left mb-12">
        <span className="text-xs font-mono uppercase tracking-widest text-[#06b6d4] font-semibold">// 05_FEATURED_WORK</span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-2 mb-4 font-sans tracking-tight">
          Featured Work
        </h2>
        <div className="h-[2px] w-24 bg-[#06b6d4]" />
        <p className="text-slate-400 max-w-xl mt-4 text-sm font-sans leading-relaxed">
          Interactive development workspace displaying model logic, infrastructure pipelines, and build status telemetry.
        </p>
      </div>

      {/* Code Editor Workspace */}
      <TiltCard 
        isZeroG={isZeroG} 
        className="bg-[#080808]/90 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl p-0 flex flex-col shadow-[0_0_50px_rgba(6,182,212,0.02)]"
      >
        {/* Editor Title Bar */}
        <div className="flex items-center justify-between border-b border-white/5 bg-[#0b0b0b] px-4 py-3 font-mono text-[10px]">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5 mr-3">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <Terminal className="w-3.5 h-3.5 text-[#06b6d4]" />
            <span className="text-slate-400">MLOPS_WORKSPACE // {currentProject.fileName}</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-400 font-bold uppercase tracking-wider bg-emerald-500/5 border border-emerald-500/20 px-2 py-0.5 rounded text-[8px]">
            <CheckCircle2 className="w-2.5 h-2.5" />
            STABLE_BUILD
          </div>
        </div>

        {/* 3-Column Split Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[380px] items-stretch">
          
          {/* Column 1: Explorer Sidebar (3/12 width) */}
          <div className="lg:col-span-3 border-r border-white/5 bg-[#090909] p-4 flex flex-col gap-4 text-left">
            <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block font-bold">// File Explorer</span>
            
            <div className="space-y-1.5">
              {projectsData.map((project) => {
                const isActive = project.id === activeFileId;

                return (
                  <button
                    key={project.id}
                    onClick={() => setActiveFileId(project.id)}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg font-mono text-[10px] md:text-xs transition-all border text-left cursor-pointer ${
                      isActive 
                        ? 'border-[#06b6d4]/30 bg-[#06b6d4]/5 text-white font-bold' 
                        : 'border-transparent text-slate-400 hover:bg-white/[0.02] hover:text-slate-200'
                    }`}
                  >
                    <FileCode className={`w-4 h-4 ${isActive ? 'text-[#06b6d4]' : 'text-slate-500'}`} />
                    <span>{project.fileName}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Column 2: Code Editor Center (6/12 width) */}
          <div className="lg:col-span-6 bg-[#080808] p-4 md:p-6 flex flex-col gap-4 overflow-x-auto">
            {/* Active File Tab Header */}
            <div className="flex border-b border-white/5 pb-2.5 font-mono text-[9px] text-[#06b6d4] items-center gap-1.5 text-left">
              <FileCode className="w-3 h-3" />
              <span>{currentProject.fileName}</span>
            </div>

            {/* Syntax Highlighted Code block */}
            <div className="space-y-1.5 select-all overflow-x-auto min-w-[300px]">
              {highlightCode(currentProject.code)}
            </div>
          </div>

          {/* Column 3: Live Telemetry & Metrics Right Panel (3/12 width) */}
          <div className="lg:col-span-3 border-l border-white/5 bg-[#090909] p-4 md:p-5 flex flex-col justify-between text-left">
            
            {/* Metrics block */}
            <div className="space-y-5">
              <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block font-bold">// Telemetry Specs</span>
              
              <div className="space-y-3 font-mono text-[9px] md:text-[10px]">
                <div className="border border-white/5 bg-white/[0.02] p-2.5 rounded-xl">
                  <span className="text-slate-600 block mb-0.5">PROJECT TITLE</span>
                  <span className="text-white font-bold font-sans text-xs md:text-sm block leading-snug">{currentProject.title}</span>
                </div>

                <div className="border border-emerald-500/20 bg-emerald-500/5 p-2.5 rounded-xl flex items-center justify-between">
                  <span className="text-slate-400">ACCURACY</span>
                  <span className="text-emerald-400 font-bold text-xs">{currentProject.accuracy}</span>
                </div>

                <div className="border border-[#06b6d4]/20 bg-[#06b6d4]/5 p-2.5 rounded-xl flex items-center justify-between">
                  <span className="text-slate-400">API LATENCY</span>
                  <span className="text-[#06b6d4] font-bold text-xs">{currentProject.latency}</span>
                </div>

                <div className="border border-white/5 bg-white/[0.02] p-2.5 rounded-xl space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">TARGET HOST:</span>
                    <span className="text-slate-300 font-bold text-[8px]">{currentProject.host}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">BASE IMAGE:</span>
                    <span className="text-slate-300 font-bold text-[8px]">{currentProject.baseImage}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">DATABASE:</span>
                    <span className="text-slate-300 font-bold text-[8px]">{currentProject.database}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Outbound Link Button */}
            <div className="mt-6 pt-4 border-t border-white/5">
              <a
                href={currentProject.github}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2 px-3 border border-[#06b6d4]/30 bg-[#06b6d4]/5 hover:bg-[#06b6d4]/10 text-white rounded-xl font-mono text-[10px] transition-all duration-300"
              >
                <span>OPEN_GITHUB_REPO</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

        {/* Console logs output drawer */}
        <div className="border-t border-white/5 bg-[#060606] p-4 text-left font-mono text-[9px] text-slate-500">
          <div className="flex items-center gap-2 mb-2">
            <Play className="w-3 h-3 text-emerald-400 animate-pulse" />
            <span className="text-slate-400 font-bold">TERMINAL_STDOUT:</span>
          </div>
          <div className="space-y-1 pl-4">
            {currentProject.logs.map((logLine, lIdx) => (
              <div key={lIdx} className={logLine.startsWith('[SUCCESS]') ? 'text-emerald-400' : 'text-slate-400'}>
                {logLine}
              </div>
            ))}
          </div>
        </div>

      </TiltCard>
    </section>
  );
}
