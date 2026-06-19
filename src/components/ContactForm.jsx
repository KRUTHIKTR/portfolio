import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, HardDrive, Wifi, ShieldCheck, HelpCircle } from 'lucide-react';
import TiltCard from './TiltCard';

export default function ContactForm({ isZeroG }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [latency, setLatency] = useState(45);
  const [uptime, setUptime] = useState(0);

  // Live telemetry updates
  useEffect(() => {
    // Latency fluctuation simulator
    const latencyInterval = setInterval(() => {
      setLatency(Math.floor(44 + Math.random() * 5)); // Fluctuates between 44 and 48
    }, 1500);

    // Uptime counter (seconds since session started)
    const uptimeInterval = setInterval(() => {
      setUptime(prev => prev + 1);
    }, 1000);

    return () => {
      clearInterval(latencyInterval);
      clearInterval(uptimeInterval);
    };
  }, []);

  const formatUptime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}m ${sec}s`;
  };

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
    <section id="contact" className="relative py-24 px-4 md:px-8 max-w-6xl mx-auto z-10">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-widest text-cosmicBlue font-mono">Telemetry Endpoint</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-2 mb-4 font-sans tracking-tight">
            Docking Station
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cosmicBlue to-electricPurple mx-auto rounded-full" />
          <p className="text-slate-400 max-w-xl mx-auto mt-4 text-sm md:text-base">
            Establish a peer-to-peer transmission line. Submit telemetry questions or project inquiries.
          </p>
        </motion.div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-stretch">
        
        {/* Left Column: Telemetry Panel */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <TiltCard isZeroG={isZeroG} className="h-full bg-indigoSpace/60 border-blue-500/20 hover:border-blue-500/40 flex flex-col justify-between p-8 relative overflow-hidden">
            {/* Corner Decorative HUD Grid */}
            <div className="absolute top-0 right-0 p-3 opacity-20 font-mono text-[8px] text-slate-400 select-none">
              SYS_TELEMETRY_LOG
            </div>
            
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white font-mono tracking-wider flex items-center gap-2">
                <HardDrive className="w-5 h-5 text-cosmicBlue animate-pulse" />
                SYSTEM TELEMETRY
              </h3>
              
              {/* Telemetry Metrics */}
              <div className="space-y-4 border border-white/5 bg-black/30 rounded-xl p-5 font-mono text-xs">
                
                {/* Site Status */}
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-slate-400">Site Status:</span>
                  <span className="flex items-center gap-2 text-emerald-400 font-bold">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping absolute" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 relative" />
                    Optimal
                  </span>
                </div>

                {/* Serverless Latency */}
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-slate-400">Serverless Latency:</span>
                  <span className="text-blue-400 font-bold flex items-center gap-1.5">
                    <Wifi className="w-3.5 h-3.5" />
                    {latency}ms (Active)
                  </span>
                </div>

                {/* Node Uptime */}
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-slate-400">Session Uptime:</span>
                  <span className="text-purple-400 font-semibold">{formatUptime(uptime)}</span>
                </div>

                {/* Grid Gravity (Dynamic Reactivity to Zero Gravity Toggle) */}
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-slate-400">Grid Gravity:</span>
                  <span className={`font-bold transition-colors duration-500 ${isZeroG ? 'text-cyan-400 animate-pulse' : 'text-slate-300'}`}>
                    {isZeroG ? '0.00 m/s² (Zero-G)' : '9.81 m/s² (Earth)'}
                  </span>
                </div>

                {/* SSL Gateway */}
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-400">Secure Gateway:</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> TLS v1.3 Secure
                  </span>
                </div>
              </div>
            </div>

            {/* Social Channels / Teleport Nodes */}
            <div className="mt-8 pt-6 border-t border-white/5">
              <h4 className="text-xs uppercase font-mono tracking-widest text-slate-400 mb-4">
                Transmission Endpoints
              </h4>
              <div className="flex flex-col gap-3">
                <a 
                  href="https://github.com/KRUTHIKTR" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:border-purple-500/30 hover:bg-purple-950/20 text-slate-300 hover:text-white transition-all duration-300 group"
                >
                  <span className="flex items-center gap-2.5 text-xs font-mono">
                    <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                    github.com/KRUTHIKTR
                  </span>
                  <span className="text-[10px] font-mono text-purple-400 group-hover:translate-x-1 transition-transform">01_CODE</span>
                </a>
                
                <a 
                  href="https://linkedin.com/in/kruthiktrgowda" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:border-blue-500/30 hover:bg-blue-950/20 text-slate-300 hover:text-white transition-all duration-300 group"
                >
                  <span className="flex items-center gap-2.5 text-xs font-mono">
                    <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                    linkedin.com/in/kruthiktrgowda
                  </span>
                  <span className="text-[10px] font-mono text-blue-400 group-hover:translate-x-1 transition-transform">02_LINK</span>
                </a>

                <a 
                  href="mailto:kruthiktrgowda24@gmail.com"
                  className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:border-emerald-500/30 hover:bg-emerald-950/20 text-slate-300 hover:text-white transition-all duration-300 group"
                >
                  <span className="flex items-center gap-2.5 text-xs font-mono">
                    <Mail className="w-4 h-4 text-emerald-400" />
                    kruthiktrgowda24@gmail.com
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 group-hover:translate-x-1 transition-transform">03_MAIL</span>
                </a>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <TiltCard isZeroG={isZeroG} className="bg-indigoSpace/40 border-purple-500/20 p-8 h-full flex flex-col justify-between">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase font-mono tracking-widest text-slate-400">
                  Transmit Identity (Name)
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="Identify yourself..."
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/40 transition-all duration-300 font-mono"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase font-mono tracking-widest text-slate-400">
                  Return Vector (Email)
                </label>
                <input 
                  type="email" 
                  required
                  placeholder="your.coordinate@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/40 transition-all duration-300 font-mono"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase font-mono tracking-widest text-slate-400">
                  Signal Content (Message)
                </label>
                <textarea 
                  required
                  rows="5"
                  placeholder="Input telemetry questions or project specifications..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/40 transition-all duration-300 font-mono resize-none"
                />
              </div>

              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={isSubmitted}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-mono text-sm font-bold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-[0_4px_12px_rgba(139,92,246,0.2)] hover:shadow-[0_4px_25px_rgba(139,92,246,0.5)] border border-purple-400/20 active:scale-[0.98]"
                >
                  {isSubmitted ? (
                    <span className="flex items-center gap-2 text-emerald-400">
                      SIGNAL TRANSMITTED SUCCESSFULLY
                    </span>
                  ) : (
                    <>
                      TRANSMIT SIGNAL <Send className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Subtext info */}
            <div className="mt-8 text-center text-[10px] font-mono text-slate-500">
              * Secure end-to-end telemetry link established via SSL standard.
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
