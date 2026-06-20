import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HardDrive, Wifi, Globe, ExternalLink, Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import TiltCard from './TiltCard';

export default function ContactForm({ isZeroG }) {
  const [latency, setLatency] = useState(45);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focusedField, setFocusedField] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Live telemetry updates
  useEffect(() => {
    const latencyInterval = setInterval(() => {
      setLatency(Math.floor(44 + Math.random() * 5));
    }, 1500);

    return () => clearInterval(latencyInterval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSending(true);
    setIsSubmitted(false);

    // Simulate signal transmission
    setTimeout(() => {
      setIsSending(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitted(false);
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
          Establish a secure connection. Reach out via email, check social hubs, or submit an inquiry below.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-stretch">
        
        {/* Left Column: Hub & Contact Details (5 cols) */}
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

        {/* Right Column: Minimalist Glowing Outline Form (7 cols) */}
        <div className="lg:col-span-7">
          <TiltCard isZeroG={isZeroG} className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full flex flex-col justify-between relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form-outline"
                  onSubmit={handleSubmit} 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 text-left flex flex-col h-full justify-between"
                >
                  <div className="space-y-6">
                    <h3 className="text-xs uppercase font-mono tracking-widest text-[#06b6d4] font-bold">
                      // SECURE_MESSAGE_API
                    </h3>

                    {/* Name Input */}
                    <div className="relative group">
                      <div className={`absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#06b6d4] to-emerald-500 opacity-0 blur-md transition duration-500 group-hover:opacity-10 ${
                        focusedField === 'name' ? 'opacity-20' : ''
                      }`} />
                      <input 
                        type="text" 
                        required
                        placeholder="Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        disabled={isSending}
                        className="relative w-full bg-black/45 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-0 focus:border-[#06b6d4] transition-all duration-300 font-sans"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="relative group">
                      <div className={`absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#06b6d4] to-emerald-500 opacity-0 blur-md transition duration-500 group-hover:opacity-10 ${
                        focusedField === 'email' ? 'opacity-20' : ''
                      }`} />
                      <input 
                        type="email" 
                        required
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        disabled={isSending}
                        className="relative w-full bg-black/45 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-0 focus:border-[#06b6d4] transition-all duration-300 font-sans"
                      />
                    </div>

                    {/* Message Textarea */}
                    <div className="relative group">
                      <div className={`absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#06b6d4] to-emerald-500 opacity-0 blur-md transition duration-500 group-hover:opacity-10 ${
                        focusedField === 'message' ? 'opacity-20' : ''
                      }`} />
                      <textarea 
                        required
                        rows="5"
                        placeholder="Message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        disabled={isSending}
                        className="relative w-full bg-black/45 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-0 focus:border-[#06b6d4] transition-all duration-300 font-sans resize-none leading-relaxed"
                      />
                    </div>
                  </div>

                  <div className="pt-6">
                    <button 
                      type="submit" 
                      disabled={isSending}
                      className="w-full flex items-center justify-center gap-2 bg-[#06b6d4] hover:bg-[#06b6d4]/90 text-white font-mono text-xs font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] border border-[#06b6d4]/20 active:scale-[0.99] disabled:opacity-50"
                    >
                      {isSending ? (
                        <span className="flex items-center gap-2">
                          TRANSMITTING...
                        </span>
                      ) : (
                        <>
                          SEND MESSAGE <Send className="w-3.5 h-3.5 ml-1" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center h-full text-center space-y-6 py-12"
                >
                  <div className="p-4 bg-[#06b6d4]/10 border border-[#06b6d4]/25 rounded-full text-[#06b6d4] shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white font-mono">// TRANSMISSION_COMPLETE</h3>
                    <p className="text-xs text-slate-400 font-sans max-w-sm leading-relaxed">
                      Handshake complete. Connection established with Kruthik T R. Signal packets routed successfully.
                    </p>
                  </div>

                  <button 
                    onClick={handleReset}
                    className="text-xs font-mono text-[#06b6d4] hover:underline"
                  >
                    // INITIATE_NEW_TRANSMISSION
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </TiltCard>
        </div>

      </div>
    </section>
  );
}
