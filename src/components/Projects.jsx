import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Code, Terminal } from 'lucide-react';
import TiltCard from './TiltCard';

const projectsData = [
  {
    id: 1,
    title: "Crop Recommendation System",
    accuracy: "92.53% Accuracy",
    description: "Multi-parameter Machine Learning classifier using a Gaussian Naive Bayes algorithm to predict optimal crops based on real-time soil & meteorology metrics.",
    github: "https://github.com/KRUTHIKTR/Crop-recommendation-system",
    tags: ["Python", "Naive Bayes", "Agriculture ML"],
    glowColor: "group-hover:border-[#06b6d4]/30",
    themeColor: "#06b6d4",
    codeSnippet: `# Train model
from sklearn.naive_bayes import GaussianNB
model = GaussianNB()
model.fit(X_train, y_train)
accuracy = model.score(X_test, y_test)
print(f"Accuracy: {accuracy * 100:.2f}%")`
  },
  {
    id: 2,
    title: "Customer Churn Prediction Pipeline",
    accuracy: "90.76% Accuracy",
    description: "Automated end-to-end telemetry data pipeline deploying a Random Forest Classifier to identify high-risk customer accounts and retention opportunities.",
    github: "https://github.com/KRUTHIKTR/Customer-churn-prediction",
    tags: ["Random Forest", "ETL Pipeline", "PostgreSQL"],
    glowColor: "group-hover:border-indigo-500/30",
    themeColor: "#6366f1",
    codeSnippet: `# Dockerfile
FROM python:3.10-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["uvicorn", "main:app", "--host", "0.0.0.0"]`
  },
  {
    id: 3,
    title: "Titanic Survival Predictor",
    accuracy: "82.68% Accuracy",
    description: "Robust binary classification engine utilizing data imputation layers and optimized decision forest models to predict passenger survival outcomes.",
    github: "https://github.com/KRUTHIKTR/Titanic-Survival-Prediction",
    tags: ["Random Forest", "Data Imputation", "Scikit-Learn"],
    glowColor: "group-hover:border-emerald-500/30",
    themeColor: "#10b981",
    codeSnippet: `# Preprocessing & Forest
from sklearn.impute import KNNImputer
imputer = KNNImputer(n_neighbors=5)
X_imp = imputer.fit_transform(X)
clf = RandomForestClassifier(n_estimators=100)
clf.fit(X_imp, y)`
  }
];

function CropGraphic() {
  return (
    <svg className="w-3/5 h-3/5" viewBox="0 0 200 100">
      <path d="M 10 50 L 50 20 M 10 50 L 50 50 M 10 50 L 50 80 M 50 20 L 100 50 M 50 50 L 100 50 M 50 80 L 100 50" stroke="#06b6d4" strokeWidth="1" strokeDasharray="2 2" fill="none" opacity="0.6" />
      <circle cx="10" cy="50" r="3.5" fill="#06b6d4" />
      <circle cx="50" cy="20" r="3.5" fill="#06b6d4" />
      <circle cx="50" cy="50" r="3.5" fill="#06b6d4" />
      <circle cx="50" cy="80" r="3.5" fill="#06b6d4" />
      <circle cx="100" cy="50" r="5" fill="#06b6d4" className="animate-pulse" />
      <path d="M 104 50 L 140 50" stroke="#06b6d4" strokeWidth="1.2" />
      <rect x="150" y="35" width="30" height="30" rx="3" fill="none" stroke="#06b6d4" strokeWidth="1.5" />
      <rect x="155" y="40" width="5" height="5" fill="none" stroke="#06b6d4" strokeWidth="1" />
      <rect x="162" y="40" width="5" height="5" fill="none" stroke="#06b6d4" strokeWidth="1" />
      <rect x="169" y="40" width="5" height="5" fill="none" stroke="#06b6d4" strokeWidth="1" />
      <rect x="158" y="48" width="13" height="5" fill="none" stroke="#06b6d4" strokeWidth="1" />
    </svg>
  );
}

function ChurnGraphic() {
  return (
    <svg className="w-3/5 h-3/5" viewBox="0 0 200 100">
      <path d="M 20 30 Q 60 10 100 50 T 150 50" stroke="#6366f1" strokeWidth="1.5" fill="none" />
      <circle cx="20" cy="30" r="3.5" fill="#6366f1" />
      <circle cx="100" cy="50" r="5" fill="#818cf8" />
      <g transform="translate(145, 25)">
        <ellipse cx="20" cy="15" rx="15" ry="6" fill="none" stroke="#6366f1" strokeWidth="1.5" />
        <path d="M 5 15 L 5 45 A 15 6 0 0 0 35 45 L 35 15" fill="none" stroke="#6366f1" strokeWidth="1.5" />
        <path d="M 5 30 A 15 6 0 0 0 35 30" fill="none" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="2 2" />
        <text x="20" y="32" textAnchor="middle" fill="#6366f1" className="font-mono text-[7px] font-bold">SQL_DB</text>
      </g>
    </svg>
  );
}

function TitanicGraphic() {
  return (
    <svg className="w-3/5 h-3/5" viewBox="0 0 200 100">
      <rect x="20" y="30" width="30" height="40" rx="2" fill="none" stroke="#10b981" strokeWidth="1.5" />
      <line x1="20" y1="40" x2="50" y2="40" stroke="#10b981" strokeWidth="1" />
      <line x1="20" y1="50" x2="50" y2="50" stroke="#10b981" strokeWidth="1" />
      <line x1="20" y1="60" x2="50" y2="60" stroke="#10b981" strokeWidth="1" />
      <line x1="35" y1="30" x2="35" y2="70" stroke="#10b981" strokeWidth="1" strokeDasharray="1 1" />
      <path d="M 55 50 L 95 50" stroke="#10b981" strokeWidth="1.2" />
      <g transform="translate(100, 10)">
        <circle cx="40" cy="20" r="4.5" fill="none" stroke="#10b981" strokeWidth="1.5" />
        <line x1="38" y1="24" x2="22" y2="50" stroke="#10b981" strokeWidth="1" />
        <line x1="42" y1="24" x2="58" y2="50" stroke="#10b981" strokeWidth="1" />
        <circle cx="20" cy="54" r="4.5" fill="none" stroke="#10b981" strokeWidth="1.5" />
        <circle cx="60" cy="54" r="4.5" fill="none" stroke="#10b981" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

function ProjectCard({ project, isZeroG }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
      className="h-full"
    >
      <TiltCard 
        isZeroG={isZeroG} 
        className="bg-white/5 border border-white/10 rounded-2xl h-full flex flex-col justify-between p-6 relative group transition-all duration-300"
      >
        <div className="flex flex-col h-full justify-between text-left">
          
          {/* Top Panel: Graphical View vs. Monospace Code Block */}
          <div className="relative h-40 w-full overflow-hidden rounded-xl mb-6 bg-[#080808] border border-white/5 flex items-center justify-center group-hover:border-[#06b6d4]/20 transition-all duration-500">
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:12px_12px] pointer-events-none" />
            
            {isHovered ? (
              // Code Block Hover State
              <motion.div 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full h-full p-4 font-mono text-[8px] md:text-[9px] text-[#06b6d4]/90 overflow-y-auto text-left leading-normal whitespace-pre bg-black/80"
              >
                <div className="flex items-center gap-1.5 border-b border-white/5 pb-1.5 mb-2 text-slate-500 text-[7px] uppercase font-bold tracking-wider">
                  <Terminal className="w-2.5 h-2.5 text-[#06b6d4]" />
                  <span>source_code.py</span>
                </div>
                {project.codeSnippet}
              </motion.div>
            ) : (
              // Stylized SVG Graphic Default State
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full h-full flex items-center justify-center"
              >
                {project.id === 1 && <CropGraphic />}
                {project.id === 2 && <ChurnGraphic />}
                {project.id === 3 && <TitanicGraphic />}
              </motion.div>
            )}
          </div>

          {/* Title & Accuracy HUD Tag */}
          <div className="space-y-3.5 flex-grow">
            <div className="flex flex-col gap-1.5">
              <span 
                style={{ color: project.themeColor, borderColor: project.themeColor + '30', backgroundColor: project.themeColor + '08' }}
                className="self-start font-mono text-[9px] font-bold px-2 py-0.5 border rounded-full"
              >
                {project.accuracy}
              </span>
              
              <h3 className="text-lg font-bold text-white leading-snug group-hover:text-[#06b6d4] transition-colors duration-300">
                {project.title}
              </h3>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-sans font-normal h-16 overflow-hidden">
              {project.description}
            </p>
          </div>

          {/* Technology Tags */}
          <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-1.5 mb-5">
            {project.tags.map((tag, tIdx) => (
              <span 
                key={tIdx} 
                className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Wide Explore Button */}
          <a 
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/10 hover:border-[#06b6d4] bg-white/5 hover:bg-[#06b6d4]/10 text-[10px] font-mono font-bold tracking-wider text-slate-300 hover:text-white transition-all duration-300"
          >
            <Code className="w-3.5 h-3.5" />
            <span>EXPLORE CODE</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>
          
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
          Interactive system pipelines. Hover over the graphics at the top of each card to reveal the underlying model training or deployment code.
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
