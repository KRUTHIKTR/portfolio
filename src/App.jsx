import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Download, Activity, ShieldAlert, Cpu, Menu, X } from 'lucide-react';

// Subcomponents
import AboutServices from './components/AboutServices';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import SkillsMatrix from './components/SkillsMatrix';
import TechnicalWriting from './components/TechnicalWriting';
import EducationCertifications from './components/EducationCertifications';
import ContactForm from './components/ContactForm';

export default function App() {
  const [isZeroG, setIsZeroG] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Typing animation text state
  const textToType = "I am Kruthik T R. Co-Founder & CTO.";
  const [typedText, setTypedText] = useState("");

  // WordRotate text state
  const rotationWords = ["Intelligent", "Automated", "Scalable"];
  const [wordIndex, setWordIndex] = useState(0);

  // Track scroll progress for custom top progress bar
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

  // Run typing animation
  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      setTypedText(textToType.slice(0, idx + 1));
      idx++;
      if (idx >= textToType.length) {
        clearInterval(interval);
      }
    }, 60);
    return () => clearInterval(interval);
  }, []);

  // Run word rotation animation
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotationWords.length);
    }, 2500);
    return () => clearInterval(wordInterval);
  }, []);

  const toggleGravity = () => {
    setIsZeroG(!isZeroG);
    setShowWarning(true);
    setTimeout(() => {
      setShowWarning(false);
    }, 3500);
  };

  // Dossier exporter logic
  const downloadDossier = () => {
    const dossierText = `==================================================================
KRUTHIK T R | MLOPS ENGINEER RESUME DOSSIER
==================================================================

[PROFILE SUMMARY]
A graduate in Artificial Intelligence & Data Science, Co-Founder & CTO 
of Berukodige Farm. Specializes in building accurate Machine Learning
models and automating their deployment to secure, production-ready
cloud environments.

[CONTACT DETAILS]
- Phone: +91-7676174246
- Email: kruthiktrgowda24@gmail.com
- Github: https://github.com/KRUTHIKTR
- LinkedIn: https://www.linkedin.com/in/kruthiktr/

[JOURNEY & EXPERIENCE]
1. Co-Founder & Technical Lead (CTO) | Berukodige Farm (Jan 2025 - Present)
   * Directing startup technology infrastructure and automating nursery workflows using Python and data-driven cultivation systems.
2. Operations Automation Intern | Sanjivini Eco Solutions Pvt Ltd (Feb 2025 - June 2025)
   * Developed AI-driven CRM workflows and automated content generation pipelines using Python and Large Language Model (LLM) interfaces. Built, optimized, and deployed automated data workflows on GCP.
3. Google Product Expert | Google Community Support (July 2025 - March 2026)
   * Supported users by analyzing and resolving technical system queries across key products like Google Photos, Gmail, and Google Drive.
4. Google Cloud Innovator | Google (Nov 2024 - March 2026)
   * Explored real-world deployments involving cloud infrastructure, AI/ML pipelines, and GCP services.
5. Open Source Contributor | GirlScript Summer of Code (July 2025 - October 2025)
   * Collaborated with project maintainers to audit, document, and submit pull requests across complex codebases.
6. Market Research Intern | CodeNimbus Solutions (Nov 2023 - Dec 2023)
   * Evaluated market datasets to detect emerging user trends.

[AI & DEVOPS PROJECTS]
1. Crop Recommendation Engine (92.53% Accuracy)
   * Machine learning system using a Gaussian Naive Bayes algorithm to recommend crops based on soil and meteorology metrics.
2. Customer Churn Prediction Pipeline (90.76% Accuracy)
   * Automated data pipeline deploying a Random Forest Classifier to detect customer retention risks.
3. Titanic Survival Predictor (82.68% Accuracy)
   * Baseline ML classification engine utilizing data imputation and Random Forest models.

[CORE SKILLS & TECH STACK]
- Languages: Python, SQL, Dart
- ML & Data: Machine Learning, Predictive Modeling, Agentic AI, Data Visualization
- DevOps & Cloud: Google Cloud (GCP), Oracle Cloud (OCI), Kubernetes, Docker, Git, CI/CD

==================================================================
Generated from Antigravity Systems HUD Terminal.
==================================================================`;

    const blob = new Blob([dossierText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Kruthik_TR_Resume_Dossier.txt');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-screen text-slate-100 overflow-x-hidden bg-[#080808] cyber-grid">
      {/* Top scroll progress indicator */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-[#06b6d4] z-50 transition-all duration-300 shadow-[0_0_10px_#06b6d4]"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 w-full bg-[#080808]/85 backdrop-blur-md border-b border-white/5 py-4 md:py-5 px-6 md:px-16 flex justify-between items-center z-40">
        <a href="#hero" className="flex items-center gap-2.5 font-mono text-sm md:text-lg font-extrabold text-white tracking-widest group">
          <span className="w-1.5 h-1.5 bg-[#06b6d4] shadow-[0_0_8px_#06b6d4] transition-all" />
          KRUTHIK T R <span className="text-[10px] text-[#06b6d4] font-bold bg-[#06b6d4]/10 border border-[#06b6d4]/25 px-2 py-0.5 ml-2 tracking-wider rounded hidden sm:inline-block">[ MLOPS_ENG ]</span>
        </a>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex gap-4 text-sm font-sans font-bold tracking-widest text-slate-400">
          <a href="#about" className="hover:text-[#06b6d4] hover:bg-white/[0.04] px-4 py-2 rounded-full transition-all duration-300">ABOUT</a>
          <a href="#lab" className="hover:text-[#06b6d4] hover:bg-white/[0.04] px-4 py-2 rounded-full transition-all duration-300">PROJECTS</a>
          <a href="#sphere" className="hover:text-[#06b6d4] hover:bg-white/[0.04] px-4 py-2 rounded-full transition-all duration-300">SKILLS</a>
          <a href="#contact" className="hover:text-white hover:bg-white/[0.04] px-4 py-2 rounded-full transition-all duration-300">CONTACT</a>
        </div>

        {/* Mobile menu trigger */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white transition-colors focus:outline-none"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-[#080808]/95 backdrop-blur-xl border-b border-white/5 py-6 px-8 flex flex-col gap-4 font-sans font-bold tracking-widest text-slate-400 md:hidden shadow-2xl"
            >
              <a 
                href="#about" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-[#06b6d4] hover:bg-white/[0.04] px-4 py-3 rounded-xl transition-all duration-300 text-sm"
              >
                ABOUT
              </a>
              <a 
                href="#lab" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-[#06b6d4] hover:bg-white/[0.04] px-4 py-3 rounded-xl transition-all duration-300 text-sm"
              >
                PROJECTS
              </a>
              <a 
                href="#sphere" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-[#06b6d4] hover:bg-white/[0.04] px-4 py-3 rounded-xl transition-all duration-300 text-sm"
              >
                SKILLS
              </a>
              <a 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-white hover:bg-white/[0.04] px-4 py-3 rounded-xl transition-all duration-300 text-sm"
              >
                CONTACT
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Zero-G Warning Banner */}
      <AnimatePresence>
        {showWarning && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#080808]/95 border border-[#06b6d4]/50 rounded-full px-6 py-2.5 backdrop-blur-md flex items-center gap-3 shadow-[0_0_20px_rgba(29,185,84,0.3)]"
          >
            <ShieldAlert className="w-4 h-4 text-[#06b6d4] animate-bounce" />
            <span className="text-xs font-mono text-white tracking-wide">
              {isZeroG ? 'WARNING: ZERO-G PHYSICS ACTIVATED. LAYOUT FLOATING ENGAGED.' : 'GRAVITY RESTORED. SYSTEM ENFORCING STANDARD LAYOUT.'}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating zero-g structural overlays */}
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
              className="absolute w-2 h-2 rounded-full border border-[#06b6d4]/20 bg-[#06b6d4]/5"
              style={{
                top: `${20 + i * 10}%`,
                left: `${10 + i * 12}%`,
              }}
            />
          ))}
        </div>
      )}

      {/* Main Page Layout */}
      <main className="relative z-10">
        
        {/* Section 1: Hero ("Introduction") */}
        <section id="hero" className="relative min-h-fit sm:min-h-screen flex items-start sm:items-center justify-center pt-24 sm:pt-20 pb-16 px-6 md:px-12 overflow-hidden border-b border-white/5">
          
          {/* Neon Light Backing Orbs */}
          <div className="absolute top-1/4 left-1/10 w-[550px] h-[550px] rounded-full bg-cyan-500/[0.04] blur-[130px] pointer-events-none mix-blend-screen animate-pulse-glow z-0" />
          <div className="absolute bottom-1/4 right-1/10 w-[550px] h-[550px] rounded-full bg-[#06b6d4]/[0.05] blur-[150px] pointer-events-none mix-blend-screen animate-pulse-glow z-0" style={{ animationDelay: '1.2s' }} />

          <div className="max-w-5xl mx-auto w-full text-center space-y-6 relative z-10">
            
            {/* System Status Tag instead of duplicate Name */}
            <div className="pb-2">
              <div className="inline-flex items-center gap-2 border border-[#06b6d4]/20 bg-[#06b6d4]/5 rounded-full px-5 py-2 font-mono text-xs text-[#06b6d4] font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 bg-[#06b6d4] rounded-full shadow-[0_0_8px_#06b6d4] animate-pulse" />
                [ SYSTEM: MLOPS_ACTIVE ]
              </div>
            </div>

            {/* Large Main Name Heading (H1 centerpiece with Plus Jakarta Sans) */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl min-[360px]:text-5xl sm:text-8xl md:text-9xl lg:text-[7.5rem] font-extrabold tracking-tighter text-white font-sans uppercase whitespace-nowrap block hover:text-[#06b6d4] transition-colors duration-500 cursor-default select-none leading-none"
              >
                KRUTHIK T R
              </motion.h1>

              {/* Subheading (H2) with WordRotate */}
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="text-sm md:text-2xl font-bold tracking-tight text-slate-300 font-sans flex items-center justify-center gap-1.5 flex-wrap"
              >
                <span>Deploying</span>
                <span className="text-[#06b6d4] font-extrabold min-w-[90px] md:min-w-[120px] text-center inline-block">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={rotationWords[wordIndex]}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="inline-block"
                    >
                      {rotationWords[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
                <span>AI & DevOps Systems</span>
              </motion.h2>
            </div>

            {/* Description */}
            <p className="text-sm md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed font-sans px-2">
              I am an AI & Data Science graduate and Co-Founder at Berukodige Farm. I specialize in training accurate machine learning models and hosting them securely on cloud-native infrastructure.
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 flex justify-center gap-3 sm:gap-4 flex-wrap">
              <a 
                href="#lab" 
                className="flex items-center gap-2 font-mono text-xs sm:text-sm font-bold text-black bg-[#06b6d4] hover:bg-[#06b6d4]/90 px-6 py-3.5 sm:px-10 sm:py-4.5 rounded-full transition-all duration-300 shadow-[0_4px_15px_rgba(6,182,212,0.3)] hover:shadow-[0_4px_25px_rgba(6,182,212,0.5)] hover:scale-[1.02]"
              >
                View Projects <ArrowUpRight className="w-4 h-4" />
              </a>
              
              <a 
                href="/Resume - Kruthik T R.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 font-mono text-[10px] sm:text-xs font-bold text-white border border-white/10 hover:border-[#06b6d4] bg-white/5 hover:bg-white/10 px-5 py-3 sm:px-8 sm:py-3.5 rounded-full transition-all duration-300 hover:scale-[1.02]"
              >
                View Resume <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </section>

        {/* Section 2 & 3: About Me, Milestones, and Expertise Services */}
        <AboutServices isZeroG={isZeroG} />

        {/* Section 7: Professional Experience Timeline */}
        <Timeline isZeroG={isZeroG} />

        {/* Section 5: Featured Work (Projects) */}
        <Projects isZeroG={isZeroG} />

        {/* Section 4: Skills Matrix (Rounded Badges & Console) */}
        <SkillsMatrix isZeroG={isZeroG} />

        {/* Section 6: Technical Writing & Blogs */}
        <TechnicalWriting isZeroG={isZeroG} />

        {/* Section 8: Education & Credentials */}
        <EducationCertifications isZeroG={isZeroG} />

        {/* Section 9: Contact Form & Social Hub */}
        <ContactForm isZeroG={isZeroG} />
      </main>

      {/* Footer copyright */}
      <footer className="relative py-12 px-6 border-t border-white/5 z-10 bg-[#080808]/95 text-center text-xs font-mono text-slate-500">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 KRUTHIK T R. All rights and systems reserved.</p>
          <div className="flex gap-6">
            <span className="flex items-center gap-1.5"><Cpu className="w-3.5 h-3.5" /> STACK: REACT + TAILWIND</span>
            <span>STATUS: ACTIVE</span>
          </div>
        </div>
      </footer>

      {/* GRAVITY WIDGET */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <motion.button
          onClick={toggleGravity}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center gap-1.5 sm:gap-2.5 font-mono text-[10px] sm:text-xs font-bold px-3.5 py-2.5 sm:px-5 sm:py-3 rounded-full border transition-all duration-300 relative group overflow-hidden ${
            isZeroG 
              ? 'bg-[#080808]/90 border-[#06b6d4] text-[#06b6d4] shadow-[0_0_20px_rgba(29,185,84,0.4)]' 
              : 'bg-[#080808]/90 border-white/10 text-slate-400 hover:border-[#06b6d4]/50 hover:text-white shadow-[0_4px_12px_rgba(0,0,0,0.3)]'
          }`}
        >
          <span className={`absolute inset-0 w-full h-full bg-gradient-to-r from-[#06b6d4]/10 to-emerald-500/10 transition-opacity duration-300 ${isZeroG ? 'opacity-100' : 'opacity-0'}`} />
          <Activity className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isZeroG ? 'animate-spin text-[#06b6d4]' : 'text-slate-500'}`} style={{ animationDuration: '4s' }} />
          <span>{isZeroG ? 'Gravity Active' : 'Gravity Control'}</span>
        </motion.button>
      </div>
    </div>
  );
}
