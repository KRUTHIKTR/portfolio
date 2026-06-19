import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Download, Globe, Activity, ShieldAlert, Sparkles, Compass, Cpu, Info } from 'lucide-react';

// Subcomponents
import ParticleBackground from './components/ParticleBackground';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import SkillsMatrix from './components/SkillsMatrix';
import ContactForm from './components/ContactForm';

export default function App() {
  const [isZeroG, setIsZeroG] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll progress for custom cyber progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleGravity = () => {
    setIsZeroG(!isZeroG);
    setShowWarning(true);
    // Auto fade warning banner after 3.5s
    setTimeout(() => {
      setShowWarning(false);
    }, 3500);
  };

  // Dynamic Dossier download exporter
  const downloadDossier = () => {
    const dossierText = `==================================================================
KRUTHIK T R | AI ENGINEER & CLOUD-NATIVE ARCHITECT DOSSIER
==================================================================

[PROFILE SUMMARY]
An Artificial Intelligence & Data Science graduate, Co-Founder & CTO 
of Berukodige Farm, and Cloud-Native systems enthusiast. Specializes
in bridging the gap between Machine Learning pipelines and containerized
deployments.

[CONTACT DETAILS]
- Email: kruthiktrgowda24@gmail.com
- Github: https://github.com/KRUTHIKTR
- LinkedIn: https://linkedin.com/in/kruthiktrgowda

[ORBIT TRAJECTORY (CHRONOLOGY)]
1. Co-Founder & Technical Lead (CTO) | Berukodige Farm (Jan 2025 - Present)
   * Directing software infrastructure and automating agricultural nursery workflows.
2. Operations Automation Intern | Sanjivini Eco Solutions (Feb 2025 - June 2025)
   * Developed AI-driven CRM workflows and automated content pipelines.
3. Google Product Expert & Cloud Innovator (Nov 2024 - Mar 2026)
   * Explored cloud deployments and supported technical queries on scaling.
4. Open Source Contributor | GSSoC'25 (July 2025 - Oct 2025)
   * Audited codebase workflows and managed pipeline configurations.
5. BE in AI & Data Science | SDM Institute of Technology (2021 - 2025)
   * Academic core; Football & volleyball representative; District-level Veergase dancer.

[THE LAB (KEY REPOSITORIES)]
1. Crop Recommendation Engine (Accuracy: 92.53%)
   * Gaussian Naive Bayes classification microservice inside a Docker container.
2. Customer Churn Analytics Pipeline (Accuracy: 90.76%)
   * Automated ETL and feature engineering pipeline with Random Forest analysis.

[THE SPHERE (SKILLS MATRIX)]
* Intelligence: Machine Learning, Predictive Modeling, Agentic AI, SQL, Python
* Infrastructure: GCP, Oracle Cloud (OCI), Kubernetes, Docker, APIs, Git
* Instrumentation: Jupyter Notebook, Power BI, Excel, Figma

==================================================================
Generated from Antigravity Systems HUD Terminal.
==================================================================`;

    const blob = new Blob([dossierText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Kruthik_TR_Dossier.txt');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-screen text-slate-100 overflow-x-hidden">
      {/* Canvas Space Particle Engine */}
      <ParticleBackground isZeroG={isZeroG} />

      {/* Cyber progress bar at the very top */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-electricPurple via-cosmicBlue to-emerald-400 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Sleek Navigation Bar */}
      <nav className="sticky top-0 w-full bg-void/50 backdrop-blur-md border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center z-40">
        <a href="#hero" className="flex items-center gap-2.5 font-mono text-sm md:text-base font-extrabold text-white tracking-widest group">
          <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse-glow group-hover:bg-blue-400 transition-colors" />
          KRUTHIK T R <span className="text-[10px] text-slate-500 font-normal hidden sm:inline">| SYS_ENGINEER</span>
        </a>
        
        <div className="flex gap-4 md:gap-8 text-xs md:text-sm font-mono text-slate-400">
          <a href="#orbit" className="hover:text-purple-400 transition-colors">01_ORBIT</a>
          <a href="#lab" className="hover:text-blue-400 transition-colors">02_LAB</a>
          <a href="#sphere" className="hover:text-emerald-400 transition-colors">03_SPHERE</a>
          <a href="#contact" className="hover:text-white transition-colors">04_DOCK</a>
        </div>
      </nav>

      {/* Zero-G Warning Banner */}
      <AnimatePresence>
        {showWarning && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-[#1F193B]/90 border border-purple-500/50 rounded-full px-6 py-2.5 backdrop-blur-md flex items-center gap-3 shadow-[0_0_20px_rgba(139,92,246,0.3)]"
          >
            <ShieldAlert className="w-4 h-4 text-purple-400 animate-bounce" />
            <span className="text-xs font-mono text-white tracking-wide">
              {isZeroG ? 'WARNING: ZERO-G PHYSICS ACTIVATED. LAYOUT FLOATING ENGAGED.' : 'GRAVITY RESTORED. SYSTEM ENFORCING STANDARD LAYOUT.'}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Extra floating background trash elements under Zero-G */}
      {isZeroG && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: Math.random() * window.innerHeight + 100
              }}
              animate={{
                x: [Math.random() * 40, -Math.random() * 40, Math.random() * 40],
                y: [Math.random() * 40, -Math.random() * 40, Math.random() * 40],
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute w-3 h-3 rounded-full border border-purple-500/20 bg-purple-500/5 blur-[1px]"
              style={{
                top: `${20 + i * 10}%`,
                left: `${10 + i * 12}%`,
              }}
            />
          ))}
        </div>
      )}

      {/* Main Container */}
      <main className="relative">
        
        {/* SECTION 1: HERO ("Escape Velocity") */}
        <section id="hero" className="min-h-[85vh] flex flex-col items-center justify-center text-center px-6 relative z-10">
          <div className="max-w-4xl mx-auto space-y-6">
            
            {/* Mission Identifier Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-400"
            >
              <Rocket className="w-3.5 h-3.5 text-purple-400" />
              STATUS: ESCAPE VELOCITY READY
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight"
            >
              Engineering <span className="bg-gradient-to-r from-electricPurple via-cosmicBlue to-emerald-400 bg-clip-text text-transparent glow-text">Intelligent Systems</span>.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-lg sm:text-2xl font-semibold text-slate-200 max-w-2xl mx-auto"
            >
              I build the predictive engines and deploy the cloud pipelines that power modern automation.
            </motion.p>

            {/* Biography */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed"
            >
              Kruthik T R — AI & Data Science Graduate, Co-Founder & Technical Lead at Berukodige Farm. Specializing in bridging the gap between Machine Learning pipelines and Cloud-Native deployments.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="pt-6 flex flex-wrap gap-4 justify-center"
            >
              <a 
                href="#orbit" 
                className="flex items-center gap-2 font-mono text-xs font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 px-6 py-3.5 rounded-xl transition-all duration-300 shadow-[0_4px_15px_rgba(139,92,246,0.3)] hover:shadow-[0_4px_25px_rgba(139,92,246,0.5)] border border-purple-400/20"
              >
                EXPLORE ORBIT <Compass className="w-4 h-4" />
              </a>
              
              <button 
                onClick={downloadDossier}
                className="flex items-center gap-2 font-mono text-xs font-bold text-slate-300 hover:text-white border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3.5 rounded-xl transition-all duration-300 relative group overflow-hidden"
              >
                {/* Subtle Shimmer background on hover */}
                <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000 ease-out" />
                DOWNLOAD DOSSIER <Download className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          {/* Slow drift decorator elements in background */}
          <div className="absolute top-1/4 left-10 w-48 h-48 bg-purple-900/10 rounded-full blur-[80px] pointer-events-none float-slow" />
          <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-blue-900/10 rounded-full blur-[100px] pointer-events-none float-slow-delayed" />
        </section>

        {/* SECTION 2: THE ORBIT (Experience & Timeline) */}
        <Timeline isZeroG={isZeroG} />

        {/* SECTION 3: THE LAB (AI/ML & DevOps Projects) */}
        <Projects isZeroG={isZeroG} />

        {/* SECTION 4: THE SPHERE (Interactive Skills Matrix) */}
        <SkillsMatrix isZeroG={isZeroG} />

        {/* SECTION 5: DOCKING STATION (Contact & Telemetry) */}
        <ContactForm isZeroG={isZeroG} />
      </main>

      {/* Footer copyright */}
      <footer className="relative py-12 px-6 border-t border-white/5 z-10 bg-void/80 text-center text-xs font-mono text-slate-500">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 KRUTHIK T R. All rights and orbital assets reserved.</p>
          <div className="flex gap-6">
            <span className="flex items-center gap-1.5"><Cpu className="w-3.5 h-3.5" /> STACK: REACT + TAILWIND</span>
            <span>PING: ACTIVE</span>
          </div>
        </div>
      </footer>

      {/* GRAVITY CONTROL FLOATING WIDGET */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          onClick={toggleGravity}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center gap-2.5 font-mono text-xs font-bold px-4 py-3 rounded-full border transition-all duration-300 relative group overflow-hidden ${
            isZeroG 
              ? 'bg-[#1F193B]/90 border-cyan-400 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.4)]' 
              : 'bg-[#120F26]/90 border-purple-500/40 text-purple-300 hover:border-purple-400 hover:text-white shadow-[0_4px_12px_rgba(139,92,246,0.15)]'
          }`}
        >
          {/* Internal energy pulse background */}
          <span className={`absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 transition-opacity duration-300 ${isZeroG ? 'opacity-100' : 'opacity-0'}`} />
          
          <Activity className={`w-4 h-4 ${isZeroG ? 'animate-spin text-cyan-400' : 'text-purple-400'}`} style={{ animationDuration: '4s' }} />
          <span>{isZeroG ? 'ZERO-G MODE ACTIVE' : 'GRAVITY CONTROL'}</span>
        </motion.button>
      </div>
    </div>
  );
}
