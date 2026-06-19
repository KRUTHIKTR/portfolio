import React from 'react';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';
import TiltCard from './TiltCard';

const articles = [
  {
    id: 1,
    title: "The Truth Behind Ghibli-Style AI Art",
    tags: ["Biometric Privacy", "Cybersecurity"],
    date: "July 2025",
    summary: "An audit explaining how consumer AI filters harvest facial biometrics, highlighting the hidden privacy traps in company policy terms.",
    link: "https://dev.to/kruthiktr"
  },
  {
    id: 2,
    title: "Beyond the Cloud: Why Intelligent Edge is the Future",
    tags: ["Edge AI", "Latency Optimization"],
    date: "October 2025",
    summary: "Discussing why local edge sensors and IoT devices are replacing centralized cloud infrastructure to cut latency and secure sensitive data.",
    link: "https://dev.to/kruthiktr"
  }
];

export default function TechnicalWriting({ isZeroG }) {
  return (
    <section id="blogs" className="relative py-32 px-6 md:px-12 max-w-6xl mx-auto z-10 border-b border-white/5">
      {/* Section Header */}
      <div className="text-left mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-[#06b6d4] font-semibold">// 06_TECHNICAL_WRITING</span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-2 mb-4 font-sans tracking-tight">
          Articles & Publications
        </h2>
        <div className="h-[2px] w-24 bg-[#06b6d4]" />
        <p className="text-slate-400 max-w-2xl mt-4 text-base font-sans leading-relaxed">
          Deep-dives into biometric data compliance, local machine learning models, and security structures in distributed networks.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        {articles.map((article) => (
          <TiltCard 
            key={article.id} 
            isZeroG={isZeroG}
            className="bg-white/5 border border-white/10 rounded-2xl h-full flex flex-col justify-between"
          >
            <div className="flex flex-col h-full justify-between text-left space-y-6">
              
              <div className="space-y-3">
                {/* Meta details */}
                <div className="flex justify-between items-center text-[10px] font-mono text-slate-500">
                  <span className="flex items-center gap-1.5 uppercase font-semibold">
                    <BookOpen className="w-3.5 h-3.5 text-[#06b6d4]" /> DEV.TO ARTICLE
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {article.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-[#06b6d4] transition-colors duration-300">
                  {article.title}
                </h3>

                {/* Summary */}
                <p className="text-xs text-white/60 leading-relaxed font-sans">
                  {article.summary}
                </p>
              </div>

              {/* Footer */}
              <div className="border-t border-white/5 pt-4 flex justify-between items-center">
                {/* Tags */}
                <div className="flex gap-2">
                  {article.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded-full bg-[#06b6d4]/5 border border-[#06b6d4]/10 text-[#06b6d4]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read Button */}
                <a 
                  href={article.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 font-mono text-[10px] font-bold text-slate-400 group-hover:text-[#06b6d4] transition-colors duration-300"
                >
                  READ ARTICLE <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
