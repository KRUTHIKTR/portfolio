import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HardDrive, Wifi, Globe, ExternalLink, Phone, Mail, MapPin, Terminal, ShieldAlert, CheckCircle, TerminalSquare } from 'lucide-react';
import TiltCard from './TiltCard';

export default function ContactForm({ isZeroG }) {
  const [latency, setLatency] = useState(45);
  const [terminalHistory, setTerminalHistory] = useState([
    "Welcome to Kruthik T R's Secure SSH Shell (v1.4.5-LTS)",
    "Connection: Established under SSL/TLS standards.",
    "Select an interactive script option below to execute command.",
    ""
  ]);
  const [activeStep, setActiveStep] = useState(null); // 'name', 'email', 'message', 'submitting'
  const [inputs, setInputs] = useState({ name: '', email: '', message: '' });
  const [currentInputValue, setCurrentInputValue] = useState('');
  
  const terminalEndRef = useRef(null);

  // Auto scroll terminal to bottom
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [terminalHistory, activeStep]);

  // Telemetry fluctuation simulator
  useEffect(() => {
    const latencyInterval = setInterval(() => {
      setLatency(Math.floor(44 + Math.random() * 5));
    }, 1500);

    return () => clearInterval(latencyInterval);
  }, []);

  const appendToHistory = (lines) => {
    setTerminalHistory(prev => [...prev, ...(Array.isArray(lines) ? lines : [lines])]);
  };

  const handleConnect = () => {
    if (activeStep) return;
    setActiveStep('name');
    setCurrentInputValue('');
    appendToHistory([
      "kruthik@portfolio:~$ ./connect_pipeline.sh",
      "[SYSTEM]: Initializing Secure Connection Handshake...",
      "[SYSTEM]: Verification key generated: SSL_RSA_SHA256",
      "[SYSTEM]: Please enter your Name:"
    ]);
  };

  const handleUtilities = () => {
    if (activeStep) return;
    appendToHistory([
      "kruthik@portfolio:~$ ./list_utilities.sh",
      "Resolving digital link registries...",
      "---------------------------------------------------",
      "  [1] LINKTREE -> https://linktr.ee/kruthik_tr",
      "  [2] BENTO    -> https://bento.me/kruthiktr",
      "  [3] GITHUB   -> https://github.com/KRUTHIKTR",
      "---------------------------------------------------",
      "All service status reports operational.",
      ""
    ]);
  };

  const handleDownloadCV = () => {
    if (activeStep) return;
    appendToHistory([
      "kruthik@portfolio:~$ curl -O https://bento.me/kruthiktr/cv/resume.pdf",
      "  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current",
      "                                 Dload  Upload   Total   Spent    Left  Speed",
      "100  342k  100  342k    0     0   856k      0 --:--:-- --:--:-- --:--:--  858k",
      "Download complete: resume.pdf saved to guest_workspace.",
      ""
    ]);
    // Trigger real download to linktree or resume page
    window.open("https://linktr.ee/kruthik_tr", "_blank");
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    if (!currentInputValue.trim()) return;

    const val = currentInputValue.trim();
    setCurrentInputValue('');

    if (activeStep === 'name') {
      setInputs(prev => ({ ...prev, name: val }));
      appendToHistory(`Name: ${val}`);
      setActiveStep('email');
      appendToHistory("[SYSTEM]: Please enter your Email Coordinate:");
    } else if (activeStep === 'email') {
      setInputs(prev => ({ ...prev, email: val }));
      appendToHistory(`Email: ${val}`);
      setActiveStep('message');
      appendToHistory("[SYSTEM]: Enter your Inquiry Message:");
    } else if (activeStep === 'message') {
      setInputs(prev => ({ ...prev, message: val }));
      appendToHistory(`Message: ${val}`);
      setActiveStep('submitting');
      appendToHistory("[SYSTEM]: Bundling payload packets & initiating handshake...");
      
      // Simulate API submit latency
      setTimeout(() => {
        appendToHistory([
          "[SYSTEM]: Response Code: 200 OK",
          "[SYSTEM]: SECURE CONNECTION ESTABLISHED SUCCESSFULLY.",
          "[SYSTEM]: Kruthik T R has been alerted of your inquiry.",
          ""
        ]);
        setActiveStep(null);
        setInputs({ name: '', email: '', message: '' });
      }, 1500);
    }
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
          Establish a secure connection. Reach out via email, check social hubs, or spin up the terminal connection below.
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

        {/* Right Column: SSH Command-Line Window (7 cols) */}
        <div className="lg:col-span-7">
          <TiltCard isZeroG={isZeroG} className="bg-[#050505]/95 border border-white/10 rounded-2xl h-full flex flex-col justify-between relative overflow-hidden font-mono">
            
            {/* Terminal Window Header Bar */}
            <div className="flex items-center justify-between bg-white/[0.03] border-b border-white/5 px-4 py-3 select-none">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="text-[10px] text-slate-500 font-bold flex items-center gap-1">
                <TerminalSquare className="w-3.5 h-3.5 text-[#06b6d4]" /> kruthik@portfolio: ~ (ssh)
              </span>
              <div className="w-10" />
            </div>

            {/* Terminal Logs & Output Panel */}
            <div className="flex-grow p-5 space-y-2 text-left overflow-y-auto text-xs max-h-[300px] font-mono text-slate-300 leading-relaxed bg-black/40">
              {terminalHistory.map((line, idx) => (
                <div key={idx} className="whitespace-pre-wrap break-all">
                  {line.startsWith("kruthik@portfolio:~$") ? (
                    <span className="text-[#06b6d4] font-bold">{line}</span>
                  ) : line.startsWith("[SYSTEM]") ? (
                    <span className="text-emerald-400">{line}</span>
                  ) : (
                    <span>{line}</span>
                  )}
                </div>
              ))}

              {/* Dynamic inline input prompts based on active connection steps */}
              {activeStep && activeStep !== 'submitting' && (
                <form onSubmit={handleInputSubmit} className="flex items-center gap-1 text-[#06b6d4] font-bold mt-1">
                  <span>
                    {activeStep === 'name' && "Name: "}
                    {activeStep === 'email' && "Email: "}
                    {activeStep === 'message' && "Message: "}
                  </span>
                  <input
                    type={activeStep === 'email' ? 'email' : 'text'}
                    autoFocus
                    required
                    value={currentInputValue}
                    onChange={(e) => setCurrentInputValue(e.target.value)}
                    className="bg-transparent border-none text-white focus:outline-none focus:ring-0 p-0 text-xs flex-grow font-mono"
                  />
                </form>
              )}

              <div ref={terminalEndRef} />
            </div>

            {/* Command Trigger Buttons */}
            <div className="p-4 border-t border-white/5 bg-white/[0.01] space-y-4">
              <div className="text-[8px] text-slate-500 uppercase tracking-widest text-left font-bold">
                // SELECT COMMAND EXECUTABLE
              </div>

              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={handleConnect}
                  disabled={!!activeStep}
                  className="flex items-center justify-center gap-1 py-2 px-1 rounded-lg border border-white/10 hover:border-[#06b6d4] bg-white/5 hover:bg-[#06b6d4]/10 text-[9px] font-mono font-bold text-slate-300 hover:text-white transition-all disabled:opacity-30 disabled:pointer-events-none"
                >
                  [ 1. CONNECT ]
                </button>
                <button
                  onClick={handleUtilities}
                  disabled={!!activeStep}
                  className="flex items-center justify-center gap-1 py-2 px-1 rounded-lg border border-white/10 hover:border-[#06b6d4] bg-white/5 hover:bg-[#06b6d4]/10 text-[9px] font-mono font-bold text-slate-300 hover:text-white transition-all disabled:opacity-30 disabled:pointer-events-none"
                >
                  [ 2. UTILITIES ]
                </button>
                <button
                  onClick={handleDownloadCV}
                  disabled={!!activeStep}
                  className="flex items-center justify-center gap-1 py-2 px-1 rounded-lg border border-white/10 hover:border-emerald-400 bg-white/5 hover:bg-emerald-500/10 text-[9px] font-mono font-bold text-slate-300 hover:text-white transition-all disabled:opacity-30 disabled:pointer-events-none"
                >
                  [ 3. DOWNLOAD_CV ]
                </button>
              </div>
            </div>

          </TiltCard>
        </div>

      </div>
    </section>
  );
}
