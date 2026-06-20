import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, Phone, MapPin, HardDrive, Wifi, Globe, ExternalLink, Play, Terminal, AlertCircle } from 'lucide-react';
import TiltCard from './TiltCard';

export default function ContactForm({ isZeroG }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [latency, setLatency] = useState(45);

  // Live telemetry updates
  useEffect(() => {
    const latencyInterval = setInterval(() => {
      setLatency(Math.floor(44 + Math.random() * 5)); // Fluctuates between 44 and 48
    }, 1500);

    return () => clearInterval(latencyInterval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSending(true);
    setIsSubmitted(false);

    // Simulate API request lifecycle
    setTimeout(() => {
      setIsSending(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({ name: '', email: '', message: '' });
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
        
        {/* Left Column: Uptime & Hubs (5 cols) */}
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

        {/* Right Column: Postman / API Builder Form (7 cols) */}
        <div className="lg:col-span-7">
          <TiltCard isZeroG={isZeroG} className="bg-[#080808]/90 border border-white/10 rounded-2xl p-6 h-full flex flex-col justify-between relative overflow-hidden">
            
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              {/* API Header / Method selection bar */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 border-b border-white/5 pb-4">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-mono font-bold bg-[#06b6d4]/10 border border-[#06b6d4]/30 text-[#06b6d4] px-3 py-1.5 rounded-lg">
                    POST
                  </span>
                </div>
                <div className="flex-grow flex items-center bg-black/40 border border-white/5 rounded-lg px-3 py-1.5 text-xs font-mono text-slate-400 select-all overflow-x-auto whitespace-nowrap">
                  https://api.kruthik.dev/v1/contact
                </div>
                
                <button
                  type="submit"
                  disabled={isSending || isSubmitted}
                  className="flex items-center justify-center gap-1.5 bg-[#06b6d4] hover:bg-[#06b6d4]/90 text-white font-mono text-xs font-bold px-4 py-2 rounded-lg transition-all active:scale-[0.98] disabled:opacity-50"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>SEND</span>
                </button>
              </div>

              {/* Postman Style Tabs */}
              <div className="flex gap-4 border-b border-white/5 text-[9px] font-mono text-slate-500 pb-1 select-none">
                <span className="border-b border-[#06b6d4] text-white pb-1 font-semibold cursor-default">Body (JSON) *</span>
                <span className="hover:text-slate-300 cursor-pointer">Headers (3)</span>
                <span className="hover:text-slate-300 cursor-pointer">Authorization</span>
                <span className="hover:text-slate-300 cursor-pointer">Params</span>
              </div>

              {/* JSON Body Editor */}
              <div className="relative font-mono text-xs bg-black/60 border border-white/5 rounded-xl p-5 space-y-4">
                <div className="absolute top-2 right-2 p-1 text-[8px] text-slate-600 font-bold bg-white/[0.02] border border-white/5 rounded">
                  JSON
                </div>

                <div>
                  <span className="text-slate-600">{"{"}</span>
                  
                  {/* Sender Name Input */}
                  <div className="pl-6 flex items-center gap-2 mt-2">
                    <span className="text-amber-400">"sender_name"</span>:
                    <span className="text-emerald-400">"</span>
                    <input 
                      type="text" 
                      required
                      placeholder="Enter your name..."
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      disabled={isSending || isSubmitted}
                      className="bg-transparent border-none text-emerald-400 focus:outline-none focus:ring-0 p-0 text-xs w-full placeholder-slate-700 font-mono"
                    />
                    <span className="text-emerald-400">",</span>
                  </div>

                  {/* Email Coordinate Input */}
                  <div className="pl-6 flex items-center gap-2 mt-2">
                    <span className="text-amber-400">"coordinate"</span>:
                    <span className="text-emerald-400">"</span>
                    <input 
                      type="email" 
                      required
                      placeholder="your.email@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      disabled={isSending || isSubmitted}
                      className="bg-transparent border-none text-emerald-400 focus:outline-none focus:ring-0 p-0 text-xs w-full placeholder-slate-700 font-mono"
                    />
                    <span className="text-emerald-400">",</span>
                  </div>

                  {/* Message Payload Textarea */}
                  <div className="pl-6 flex flex-col items-start gap-1 mt-2">
                    <div className="flex items-center gap-2">
                      <span className="text-amber-400">"payload_message"</span>:
                      <span className="text-emerald-400">"</span>
                    </div>
                    <textarea 
                      required
                      rows="3"
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      disabled={isSending || isSubmitted}
                      className="bg-transparent border-none text-emerald-400 focus:outline-none focus:ring-0 p-0 text-xs w-full placeholder-slate-700 font-mono resize-none pl-6 leading-relaxed"
                    />
                    <span className="text-emerald-400">"</span>
                  </div>

                  <span className="text-slate-600">{"}"}</span>
                </div>
              </div>
            </form>

            {/* Simulated API Response Window */}
            <div className="mt-6 border-t border-white/5 pt-6 text-left">
              <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block font-bold mb-2.5">
                // API_RESPONSE_CONSOLE
              </span>

              <div className="bg-black/60 border border-white/5 rounded-xl p-4 min-h-[100px] flex items-center justify-center relative font-mono text-xs">
                
                <AnimatePresence mode="wait">
                  {/* Default State: Awaiting Send */}
                  {!isSending && !isSubmitted && (
                    <motion.div
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-slate-600 text-[10px] flex items-center gap-1.5 select-none"
                    >
                      <Terminal className="w-4 h-4" />
                      <span>Awaiting payload trigger. Press SEND to transmit coordinate packets.</span>
                    </motion.div>
                  )}

                  {/* Sending Loader State */}
                  {isSending && (
                    <motion.div
                      key="sending"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col gap-2 items-center text-[#06b6d4]"
                    >
                      <span className="animate-pulse text-[10px]">Sending payload...</span>
                      <div className="h-1 w-32 bg-white/[0.03] border border-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ left: "-100%" }}
                          animate={{ left: "100%" }}
                          transition={{ repeat: Infinity, duration: 1.0, ease: "linear" }}
                          className="h-full bg-[#06b6d4] w-2/3 rounded-full relative" 
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Success Response State */}
                  {isSubmitted && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="w-full text-left space-y-2"
                    >
                      <div className="flex justify-between items-center text-[10px] pb-1.5 border-b border-white/5">
                        <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                          Status: 200 OK
                        </span>
                        <button 
                          onClick={handleReset}
                          className="text-[9px] text-[#06b6d4] hover:underline"
                        >
                          // RESET_FORM
                        </button>
                      </div>

                      <div className="text-[10px] text-slate-400 font-mono space-y-1">
                        <div>{"{"}</div>
                        <div className="pl-4"><span className="text-amber-400">"status"</span>: <span className="text-emerald-400">"200_OK"</span>,</div>
                        <div className="pl-4"><span className="text-amber-400">"message"</span>: <span className="text-emerald-400">"Connection established with Kruthik T R successfully."</span></div>
                        <div>{"}"}</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </TiltCard>
        </div>

      </div>
    </section>
  );
}
