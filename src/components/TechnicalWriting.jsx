import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Calendar, ArrowUpRight, FolderOpen, FileText, ShieldAlert } from 'lucide-react';
import TiltCard from './TiltCard';

const articles = [
  {
    id: 1,
    fileNum: "FILE_01",
    shortTitle: "Bharat's Multilingual AI",
    title: "India Speaks, Sarvam Listens: The Rise of Bharat’s Multilingual AI",
    tags: ["Multilingual AI", "Indic LLMs", "Sarvam AI"],
    date: "June 10, 2025",
    summary: "India doesn’t need another English-speaking chatbot. It needs an assistant that understands Bharat, focusing on localized vernacular translation and multilingual architectures.",
    findings: "Optimizing tokenizers for Indic regional languages reduces memory foot-print and improves training efficiency across diverse local dialects.",
    securityRisk: "Ensures linguistic data sovereignty by developing localized foundation models tailored to regional Indian demographics.",
    links: [
      { platform: "Medium", url: "https://medium.com/@kruthiktrgowda/india-speaks-sarvam-listens-the-rise-of-bharats-multilingual-ai-20a496ab8376" }
    ]
  },
  {
    id: 2,
    fileNum: "FILE_02",
    shortTitle: "Biometric AI Art Risks",
    title: "The Dark Side of Ghibli-Style AI Art: Privacy Concerns You Need to Know",
    tags: ["Biometric Privacy", "Cybersecurity"],
    date: "April 1, 2025",
    summary: "The Viral Ghibli-Style AI Art Trend: A Privacy Nightmare? An audit explaining how consumer AI filters harvest facial biometrics, highlighting the hidden privacy traps in company policy terms.",
    findings: "Analysis of telemetry packets reveals that consumer filters transmit vector maps of facial landmarks to overseas servers under the guise of style transfer parameters.",
    securityRisk: "Permanent facial mapping profile generation without user-explicit data deletion or revocation rights.",
    links: [
      { platform: "Medium", url: "https://medium.com/@kruthiktrgowda/the-dark-side-of-ghibli-style-ai-art-privacy-concerns-you-need-to-know-58331086930e" },
      { platform: "Blogger", url: "https://kruthiktr.blogspot.com/2025/03/the-hidden-cost-of-ai-generated-ghibli.html" },
      { platform: "Dev.to", url: "https://dev.to/kruthiktr/the-hidden-cost-of-ai-generated-art-is-your-personal-data-at-risk-34bk" }
    ]
  },
  {
    id: 3,
    fileNum: "FILE_03",
    shortTitle: "Decentralized Edge AI",
    title: "Beyond the Cloud: Why Intelligent Edge is the Future of AI and Computing",
    tags: ["Edge AI", "Latency Optimization"],
    date: "March 31, 2025",
    summary: "The future of AI isn’t just in the cloud—it’s at the edge, where intelligence meets real-time action. Discussing why local edge sensors and IoT devices are replacing centralized cloud infrastructure to cut latency.",
    findings: "Inference pipelines on local gateway hardware (e.g. Raspberry Pi / Jetson Nano) reduced network response times (RTT) from 180ms to 22ms compared to centralized cloud VMs.",
    securityRisk: "Local data minimization reduces broad ingress vulnerabilities, completely mitigating typical man-in-the-middle telemetry intercepts.",
    links: [
      { platform: "Medium", url: "https://medium.com/@kruthiktrgowda/beyond-the-cloud-why-intelligent-edge-is-the-future-of-ai-and-computing-503497f19777" },
      { platform: "Blogger", url: "https://kruthiktr.blogspot.com/2025/03/Beyond%20the%20Cloud%20Why%20Intelligent%20Edge%20is%20the%20Future%20of%20AI%20and%20Computing.html" },
      { platform: "Dev.to", url: "https://dev.to/kruthiktr/beyond-the-cloud-why-intelligent-edge-is-the-future-of-ai-and-computing-1h84" }
    ]
  }
];

export default function TechnicalWriting({ isZeroG }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeArticle = articles[activeIndex];

  return (
    <section id="blogs" className="relative py-32 px-6 md:px-12 max-w-6xl mx-auto z-10 border-b border-white/5">
      {/* Section Header */}
      <div className="text-left mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-[#06b6d4] font-semibold">// 06_TECHNICAL_WRITING</span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-2 mb-4 font-sans tracking-tight">
          Articles & Publications
        </h2>
        <div className="h-[2px] w-24 bg-[#06b6d4]" />
        <p className="text-slate-400 max-w-2xl mt-4 text-sm font-sans leading-relaxed">
          Access secure briefings on Indic multilingual LLMs, biometrics privacy leaks, and local edge model execution from my Medium publication channel.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: Directory File Index (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-3 text-left">
          <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block font-bold mb-2">
            // DOCUMENT_DIRECTORY
          </span>

          <div className="space-y-3">
            {articles.map((article, idx) => {
              const isSelected = activeIndex === idx;
              return (
                <div
                  key={article.id}
                  onClick={() => setActiveIndex(idx)}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`border rounded-xl p-4 transition-all duration-300 cursor-pointer relative overflow-hidden flex items-center justify-between group ${
                    isSelected 
                      ? 'border-[#06b6d4] bg-[#06b6d4]/5 shadow-[0_0_15px_rgba(6,182,212,0.1)]' 
                      : 'border-white/5 bg-[#080808]/40 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <FolderOpen className={`w-4 h-4 ${isSelected ? 'text-[#06b6d4]' : 'text-slate-500'}`} />
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 block">
                        {article.fileNum}
                      </span>
                      <h4 className={`text-sm font-bold font-mono tracking-wider ${isSelected ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>
                        {article.shortTitle}
                      </h4>
                    </div>
                  </div>

                  <span className={`text-[10px] font-mono border px-1.5 py-0.5 rounded ${
                    isSelected ? 'border-[#06b6d4]/30 text-[#06b6d4] bg-[#06b6d4]/5' : 'border-white/5 text-slate-600'
                  }`}>
                    OPEN
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Holographic Document Viewer (8 cols) */}
        <div className="lg:col-span-8">
          <TiltCard 
            isZeroG={isZeroG} 
            className="border-white/10 bg-white/5 h-full relative overflow-hidden flex flex-col justify-between"
          >
            {/* Holographic Laser Scanner Sweep Line */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeArticle.id}
                initial={{ y: "-10%" }}
                animate={{ y: "110%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute left-0 right-0 h-[2px] bg-[#06b6d4] shadow-[0_0_12px_#06b6d4,0_0_24px_#06b6d4] z-20 pointer-events-none"
              />
            </AnimatePresence>

            <div className="absolute top-0 right-0 p-2.5 text-[10px] font-mono text-slate-700 select-none">
              DEC_FILE_v1.0
            </div>

            <div className="space-y-6 text-left p-3">
              
              {/* Console Header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-3.5 mb-2 font-mono text-[10px]">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#06b6d4]" />
                  <span className="font-bold text-white uppercase tracking-wider">
                    READER // DEC_CLASSIFIED_BREIFING
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 border border-emerald-500/20 bg-emerald-500/5 px-2 py-0.5 rounded">
                  ACCESS: GRANTED
                </span>
              </div>

              {/* Holographic Text Output */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeArticle.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5"
                >
                  {/* Article Title & Date */}
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between items-center text-[10px] font-mono text-slate-500">
                      <span className="uppercase font-semibold text-[#06b6d4]">
                        {activeArticle.fileNum} // PUBLICATION_SUMMARY
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" /> {activeArticle.date}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight leading-snug">
                      {activeArticle.title}
                    </h3>
                  </div>

                  {/* Summary / Abstract */}
                  <div className="bg-black/40 border border-white/5 rounded-xl p-4 font-sans text-sm text-slate-300 leading-relaxed">
                    <span className="text-[10px] uppercase font-mono text-slate-500 block mb-1.5">// ABSTRACT</span>
                    {activeArticle.summary}
                  </div>

                  {/* Telemetry points */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-[10px] text-slate-400 bg-white/[0.01] border border-white/5 rounded-xl p-4">
                    <div className="flex flex-col gap-1.5">
                      <span className="text-slate-500 flex items-center gap-1.5 uppercase font-bold"><BookOpen className="w-3.5 h-3.5 text-[#06b6d4]" /> Technical Audit Findings</span>
                      <span className="font-sans text-xs text-slate-300 leading-relaxed">{activeArticle.findings}</span>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <span className="text-[#06b6d4] flex items-center gap-1.5 uppercase font-bold"><ShieldAlert className="w-3.5 h-3.5" /> Security Footprint</span>
                      <span className="font-sans text-xs text-slate-300 leading-relaxed">{activeArticle.securityRisk}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>

            {/* Read publication wide button */}
            <div className="mt-8 pt-4 border-t border-white/5 p-3 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex gap-2">
                {activeArticle.tags.map((tag, idx) => (
                  <span 
                    key={idx}
                    className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-[#06b6d4]/5 border border-[#06b6d4]/10 text-[#06b6d4]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                {activeArticle.links.map((linkObj, idx) => (
                  <a 
                    key={idx}
                    href={linkObj.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 py-2.5 px-4 rounded-xl border border-white/10 hover:border-[#06b6d4] bg-white/5 hover:bg-[#06b6d4]/10 text-[10px] font-mono font-bold tracking-wider text-slate-300 hover:text-white transition-all duration-300"
                  >
                    <span>READ ON {linkObj.platform.toUpperCase()}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#06b6d4]" />
                  </a>
                ))}
              </div>
            </div>

          </TiltCard>
        </div>

      </div>
    </section>
  );
}
