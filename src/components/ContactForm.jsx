import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, HardDrive, Wifi, Globe, ExternalLink } from 'lucide-react';
import TiltCard from './TiltCard';

export default function ContactForm({ isZeroG }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [latency, setLatency] = useState(45);

  // Live telemetry updates
  useEffect(() => {
    // Latency fluctuation simulator
    const latencyInterval = setInterval(() => {
      setLatency(Math.floor(44 + Math.random() * 5)); // Fluctuates between 44 and 48
    }, 1500);

    return () => {
      clearInterval(latencyInterval);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-32 px-6 md:px-12 max-w-6xl mx-auto z-10 border-b border-white/5">
      {/* Section Header */}
      <div className="text-left mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-[#06b6d4] font-semibold">// 08_GET_IN_TOUCH</span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-2 mb-4 font-sans tracking-tight">
          Contact & Social Hub
        </h2>
        <div className="h-[2px] w-24 bg-[#06b6d4]" />
        <p className="text-slate-400 max-w-xl mt-4 text-base font-sans leading-relaxed">
          Establish a secure connection. Reach out via email, check social hubs, or send an inquiry.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-stretch">
        
        {/* Left Column: Uptime & Hubs */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          
          {/* Uptime & Telemetry */}
          <TiltCard isZeroG={isZeroG} className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden text-left">
            <h3 className="text-sm font-bold text-white font-mono tracking-wider flex items-center gap-2 mb-4">
              <HardDrive className="w-4 h-4 text-[#06b6d4]" />
              Uptime & Telemetry
            </h3>
            
            <div className="space-y-4 border border-white/5 bg-black/40 rounded-xl p-5 font-mono text-xs">
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-slate-400">Site Status:</span>
                <span className="flex items-center gap-2 text-emerald-400 font-bold">
                  <span className="w-1.5 h-1.5 bg-[#06b6d4] shadow-[0_0_8px_#06b6d4] animate-pulse" />
                  Active & Secure
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-slate-400">Response Speed:</span>
                <span className="text-white font-bold flex items-center gap-1">
                  <Wifi className="w-3.5 h-3.5 text-[#06b6d4]" />
                  {latency}ms (Optimal)
                </span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-slate-400">Hosting:</span>
                <span className="text-[#06b6d4] font-semibold flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5" />
                  Vercel Edge Servers
                </span>
              </div>
            </div>
          </TiltCard>

          {/* Social Hub & Contact Details */}
          <TiltCard isZeroG={isZeroG} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left flex-grow flex flex-col justify-between">
            <div className="space-y-5">
              <h3 className="text-xs uppercase font-mono tracking-widest text-slate-500 font-bold">
                Contact Details
              </h3>
              
              <div className="space-y-3 font-mono text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#06b6d4] flex-shrink-0" />
                  <span>+91-7676174246</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#06b6d4] flex-shrink-0" />
                  <a href="mailto:kruthiktrgowda24@gmail.com" className="hover:underline">kruthiktrgowda24@gmail.com</a>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#06b6d4] flex-shrink-0" />
                  <span>Tumakuru, Karnataka, India</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 space-y-4">
              <h4 className="text-xs uppercase font-mono tracking-widest text-slate-500 font-bold">
                Digital Hubs
              </h4>
              
              <div className="flex flex-col gap-3">
                <a 
                  href="https://linktr.ee/kruthik_tr" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-[#06b6d4]/40 hover:bg-[#06b6d4]/5 text-slate-300 hover:text-white transition-all duration-300 group"
                >
                  <span className="flex items-center gap-2.5 text-xs font-mono">
                    <ExternalLink className="w-4 h-4 text-[#06b6d4]" />
                    linktr.ee/kruthik_tr
                  </span>
                  <span className="text-[9px] font-mono text-[#06b6d4] group-hover:translate-x-1 transition-transform">// LINKTREE</span>
                </a>
                
                <a 
                  href="https://bento.me/kruthiktr" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-[#06b6d4]/40 hover:bg-[#06b6d4]/5 text-slate-300 hover:text-white transition-all duration-300 group"
                >
                  <span className="flex items-center gap-2.5 text-xs font-mono">
                    <ExternalLink className="w-4 h-4 text-[#06b6d4]" />
                    bento.me/kruthiktr
                  </span>
                  <span className="text-[9px] font-mono text-[#06b6d4] group-hover:translate-x-1 transition-transform">// BENTO</span>
                </a>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* Right Column: Contact Message Form */}
        <div className="lg:col-span-7">
          <TiltCard isZeroG={isZeroG} className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full flex flex-col justify-between">
            <form onSubmit={handleSubmit} className="space-y-8 text-left">
              <h3 className="text-xs uppercase font-mono tracking-widest text-slate-500 font-bold">
                Inquiry Form
              </h3>

              <div className="flex flex-col gap-1">
                <label className="text-[10px] uppercase font-mono tracking-widest text-slate-500 font-semibold">
                  Name
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="Enter your name..."
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-black/60 border-t-0 border-x-0 border-b border-white/10 focus:border-[#06b6d4] px-0 py-3 text-sm text-white placeholder-slate-700 focus:outline-none focus:ring-0 transition-all duration-300 font-mono rounded-none"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[10px] uppercase font-mono tracking-widest text-slate-500 font-semibold">
                  Email
                </label>
                <input 
                  type="email" 
                  required
                  placeholder="your.email@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-black/60 border-t-0 border-x-0 border-b border-white/10 focus:border-[#06b6d4] px-0 py-3 text-sm text-white placeholder-slate-700 focus:outline-none focus:ring-0 transition-all duration-300 font-mono rounded-none"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[10px] uppercase font-mono tracking-widest text-slate-500 font-semibold">
                  Message
                </label>
                <textarea 
                  required
                  rows="4"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-black/60 border-t-0 border-x-0 border-b border-white/10 focus:border-[#06b6d4] px-0 py-3 text-sm text-white placeholder-slate-700 focus:outline-none focus:ring-0 transition-all duration-300 font-mono resize-none rounded-none"
                />
              </div>

              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={isSubmitted}
                  className="w-full flex items-center justify-center gap-2 bg-[#06b6d4] hover:bg-[#06b6d4]/90 text-white font-mono text-sm font-bold py-3.5 px-6 rounded-full transition-all duration-300 shadow-[0_4px_12px_rgba(29,185,84,0.25)] hover:shadow-[0_0_20px_rgba(29,185,84,0.5)] border border-[#06b6d4]/20 active:scale-[0.99]"
                >
                  {isSubmitted ? (
                    <span className="flex items-center gap-2 font-mono">
                      SIGNAL TRANSMITTED
                    </span>
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>
              </div>
            </form>

            <div className="mt-8 text-center text-[9px] font-mono text-slate-600">
              * Secure end-to-end telemetry link established via SSL standard.
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
