import React, { useState, useEffect } from 'react';
import { Cpu, Cloud, GitBranch, Database, Server, Trophy, Zap, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

// Kubernetes Cluster Monitor Panel representing real DevOps / systems architecture
function K8sClusterMonitor() {
  const [cpu, setCpu] = useState(42);
  const [memory, setMemory] = useState(64);
  const [logs, setLogs] = useState([
    "kubelet: mounting volume 'dataset-s3'...",
    "ingress: routing active on port 443...",
    "hpa: target cpu average scaled ok."
  ]);
  const [podsStatus, setPodsStatus] = useState([
    "active", "active", "active",
    "active", "deploying", "active",
    "active", "active", "active"
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate slight utilization changes
      setCpu((prev) => Math.min(95, Math.max(20, prev + Math.floor(Math.random() * 7) - 3)));
      setMemory((prev) => Math.min(95, Math.max(40, prev + Math.floor(Math.random() * 5) - 2)));
      
      // Randomly cycle pod states to simulate a real rolling deployment
      setPodsStatus((prev) => {
        const next = [...prev];
        const randIndex = Math.floor(Math.random() * 9);
        next[randIndex] = Math.random() > 0.85 ? "deploying" : "active";
        return next;
      });

      // Add a realistic DevOps logging event
      const events = [
        "kubelet: container 'ml-api' healthy.",
        "ingress: loadbalancer serving 240 req/sec.",
        "hpa: auto-scaled deployment/predict-api to 4 replicas.",
        "prometheus: pulled metric batch successfully.",
        "gke-agent: connection established with region us-central1.",
        "registry: fetched image 'kruthik/ml-classifier:v2.1'."
      ];
      const randomEvent = events[Math.floor(Math.random() * events.length)];
      setLogs((prevLogs) => [...prevLogs.slice(-2), randomEvent]);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border border-white/10 bg-black/60 rounded-2xl p-5 font-mono text-left relative overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.03)] h-full flex flex-col justify-between min-h-[310px]">
      {/* HUD Accent Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:16px_16px] opacity-20 pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/5 pb-2.5 mb-4 relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs font-bold text-slate-300">K8S_CLUSTER_MONITOR // DEPLOYMENT_ACTIVE</span>
        </div>
        <span className="text-[10px] text-emerald-400 font-bold">[ HEALTHY ]</span>
      </div>

      {/* Cluster Node Specs */}
      <div className="flex justify-between text-[10px] text-slate-500 mb-3 relative z-10 px-0.5">
        <span>NAMESPACE: production</span>
        <span>HOST: gke-prod-01</span>
      </div>

      {/* System stats */}
      <div className="grid grid-cols-2 gap-3 mb-4 relative z-10">
        <div className="bg-white/[0.02] border border-white/5 rounded-xl p-2.5">
          <div className="flex justify-between text-[10px] text-slate-500 mb-1">
            <span>CPU UTIL</span>
            <span>{cpu}%</span>
          </div>
          <div className="h-1.5 bg-slate-950 rounded-full overflow-hidden border border-white/5">
            <div 
              className="h-full bg-cyan-400 transition-all duration-500" 
              style={{ width: `${cpu}%` }}
            />
          </div>
        </div>

        <div className="bg-white/[0.02] border border-white/5 rounded-xl p-2.5">
          <div className="flex justify-between text-[10px] text-slate-500 mb-1">
            <span>MEM UTIL</span>
            <span>{memory}%</span>
          </div>
          <div className="h-1.5 bg-slate-950 rounded-full overflow-hidden border border-white/5">
            <div 
              className="h-full bg-indigo-500 transition-all duration-500" 
              style={{ width: `${memory}%` }}
            />
          </div>
        </div>
      </div>

      {/* Pod grid visualization */}
      <div className="bg-slate-950/60 border border-white/5 rounded-xl p-3 mb-4 relative z-10 flex items-center justify-between">
        <div className="space-y-1">
          <span className="text-[10px] text-slate-500 block">REPLICAS STATUS</span>
          <span className="text-xs text-white font-bold">9/9 RUNNING</span>
        </div>
        
        {/* 3x3 Grid representing Kubernetes Pods */}
        <div className="grid grid-cols-3 gap-1.5">
          {podsStatus.map((status, idx) => (
            <motion.div
              key={idx}
              animate={status === "deploying" ? { scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] } : { scale: 1, opacity: 1 }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-3.5 h-3.5 rounded-sm border transition-colors duration-500 bg-emerald-500/20 border-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.2)]"
            />
          ))}
        </div>
      </div>

      {/* Live System Logs Feed */}
      <div className="bg-slate-950 border border-white/5 rounded-xl p-3 text-xs text-slate-400 space-y-1.5 h-20 overflow-hidden relative z-10 flex flex-col justify-end">
        {logs.map((log, idx) => (
          <div key={idx} className="flex gap-1.5 items-start">
            <span className="text-[#06b6d4] font-bold select-none">&gt;</span>
            <span className="font-mono text-slate-300 leading-none">{log}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Single Service Card containing custom hover simulations
function ServiceCard({ service, idx, phase, isLocked, onCardClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 100, y: 100 });
  const [ciProgress, setCiProgress] = useState(0);

  // Staging build pipeline simulation for Card 3
  useEffect(() => {
    let interval;
    if (isHovered && idx === 2) {
      setCiProgress(0);
      interval = setInterval(() => {
        setCiProgress((prev) => {
          if (prev >= 100) return 100;
          return prev + 5;
        });
      }, 50);
    } else {
      setCiProgress(0);
    }
    return () => clearInterval(interval);
  }, [isHovered, idx]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const ServiceIcon = service.icon;
  
  // Pipeline cycle active state
  const isActive = (idx === 0 && phase === 0) || 
                   (idx === 1 && phase === 2) || 
                   (idx === 2 && phase === 4);

  // Border & Glow configuration
  let cardBorderClass = "border-white/10";
  let cardGlowStyle = {};
  let iconThemeClass = "bg-white/5 border-white/10 text-slate-400";
  
  if (isActive || isLocked) {
    if (idx === 0) {
      cardBorderClass = "border-[#06b6d4]/50";
      cardGlowStyle = { boxShadow: "0 0 25px rgba(6, 182, 212, 0.12)" };
      iconThemeClass = "bg-[#06b6d4]/20 border-[#06b6d4]/40 text-[#06b6d4]";
    } else if (idx === 1) {
      cardBorderClass = "border-indigo-500/50";
      cardGlowStyle = { boxShadow: "0 0 25px rgba(99, 102, 241, 0.12)" };
      iconThemeClass = "bg-indigo-500/20 border-indigo-500/40 text-indigo-400";
    } else if (idx === 2) {
      cardBorderClass = "border-emerald-500/50";
      cardGlowStyle = { boxShadow: "0 0 25px rgba(16, 185, 129, 0.12)" };
      iconThemeClass = "bg-emerald-500/20 border-emerald-500/40 text-emerald-400";
    }
  }

  // Hover state styles overrides
  if (isHovered) {
    if (idx === 0) {
      cardBorderClass = "border-[#06b6d4]";
      cardGlowStyle = { boxShadow: "0 0 30px rgba(6, 182, 212, 0.2)" };
    } else if (idx === 1) {
      cardBorderClass = "border-indigo-500";
      cardGlowStyle = { boxShadow: "0 0 30px rgba(99, 102, 241, 0.2)" };
    } else if (idx === 2) {
      cardBorderClass = "border-emerald-400";
      cardGlowStyle = { boxShadow: "0 0 30px rgba(16, 185, 129, 0.2)" };
    }
  }

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      onClick={() => onCardClick(idx)}
      style={cardGlowStyle}
      className={`bg-[#080808]/90 border ${cardBorderClass} rounded-2xl backdrop-blur-xl p-6 transition-all duration-500 h-full flex flex-col justify-between relative overflow-hidden group cursor-pointer`}
    >
      {/* Background Interactive Simulations */}
      <div className="absolute inset-0 pointer-events-none opacity-20 transition-opacity duration-500 group-hover:opacity-30 z-0">
        
        {/* Card 1: Rotating Neural Network reacting to cursor coords */}
        {idx === 0 && isHovered && (
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <motion.svg 
              width="100%" 
              height="100%" 
              viewBox="0 0 200 200" 
              className="w-full h-full text-[#06b6d4]/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              style={{
                transform: `rotateX(${(mousePos.y - 120) / 10}deg) rotateY(${(mousePos.x - 120) / 10}deg)`
              }}
            >
              <circle cx="40" cy="100" r="4" fill="currentColor" />
              <circle cx="100" cy="50" r="4" fill="currentColor" />
              <circle cx="100" cy="100" r="4" fill="currentColor" />
              <circle cx="100" cy="150" r="4" fill="currentColor" />
              <circle cx="160" cy="100" r="4" fill="currentColor" />
              
              <line x1="40" y1="100" x2="100" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="40" y1="100" x2="100" y2="100" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="40" y1="100" x2="100" y2="150" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="100" y1="50" x2="160" y2="100" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="100" y1="100" x2="160" y2="100" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="100" y1="150" x2="160" y2="100" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
              <circle cx="40" cy="100" r="2.5" fill="#06b6d4" className="animate-ping" />
            </motion.svg>
          </div>
        )}

        {/* Card 2: Virtual K8s Cluster Server nodes */}
        {idx === 1 && isHovered && (
          <div className="absolute inset-0 p-4 flex flex-col justify-end">
            <div className="flex gap-4 justify-around items-center border border-indigo-500/10 rounded-lg p-2.5 bg-indigo-500/5 backdrop-blur-sm">
              {["node-1", "node-2", "node-3"].map((nodeName, nIdx) => (
                <div key={nIdx} className="flex flex-col items-center gap-1 font-mono text-[9px] text-slate-400">
                  <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500/20 border border-emerald-500 animate-pulse" />
                  <span>{nodeName}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Card 3: CI/CD progress bar build simulation */}
        {idx === 2 && isHovered && (
          <div className="absolute inset-0 p-4 flex flex-col justify-end font-mono">
            <div className="border border-emerald-500/10 rounded-lg p-2.5 bg-emerald-500/5 backdrop-blur-sm space-y-1.5">
              <div className="flex justify-between text-[9px] text-slate-400">
                <span>STAGING BUILD</span>
                <span>{ciProgress}%</span>
              </div>
              <div className="h-1 bg-slate-950 rounded-full overflow-hidden border border-white/5">
                <div className="h-full bg-emerald-400 transition-all duration-75" style={{ width: `${ciProgress}%` }} />
              </div>
              {ciProgress === 100 && (
                <span className="text-[9px] text-emerald-400 border border-emerald-500/30 px-1 py-0.5 rounded bg-emerald-500/10 animate-bounce block text-center">
                  [ SUCCESS: DEPLOYED ]
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="space-y-4 flex flex-col h-full justify-between relative z-10">
        <div className="space-y-4">
          {/* Card Header */}
          <div className="flex items-center justify-between">
            <span className={`p-3 rounded-xl border flex items-center justify-center transition-colors duration-500 ${iconThemeClass}`}>
              <ServiceIcon className="w-5 h-5" />
            </span>
            <span className="text-xs font-mono text-[#06b6d4] font-bold border border-[#06b6d4]/20 px-1.5 py-0.5 rounded bg-[#06b6d4]/5 tracking-widest">// {service.status}</span>
          </div>

          {/* Title & Body */}
          <div className="pt-2 text-left">
            <h3 className="text-xl font-bold text-white mb-2 transition-colors">
              {service.title}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed font-sans">
              {service.description}
            </p>
          </div>
        </div>

        {/* Interactive Telemetry Footer */}
        <div className="border-t border-white/5 pt-4 flex justify-between items-center text-xs font-mono text-slate-500">
          <span className="flex items-center gap-1.5">
            <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              isActive 
                ? (idx === 0 ? "bg-[#06b6d4] animate-pulse shadow-[0_0_8px_#06b6d4]" : idx === 1 ? "bg-indigo-400 animate-pulse shadow-[0_0_8px_#6366f1]" : "bg-emerald-400 animate-pulse shadow-[0_0_8px_#10b981]") 
                : "bg-slate-700"
            }`} />
            <span className={`transition-colors duration-300 ${isActive ? "text-white font-bold" : ""}`}>
              {service.metric}
            </span>
          </span>
          <span className="text-xs font-bold tracking-widest text-[#06b6d4]/80 group-hover:text-[#06b6d4] transition-colors">[ SELECT ]</span>
        </div>
      </div>
    </div>
  );
}

// Wide Infrastructure Console Hologram Panel
function InfrastructureConsole({ activeIndex }) {
  return (
    <div className="border border-white/10 bg-[#080808]/90 rounded-2xl p-5 font-mono text-left relative overflow-hidden backdrop-blur-xl shadow-[0_0_30px_rgba(6,182,212,0.03)] h-44 flex flex-col md:flex-row gap-6 mt-8 z-10">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:16px_16px] opacity-15 pointer-events-none" />

      {/* Left Metadata Panel (1/3 width) */}
      <div className="md:w-1/3 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/5 pb-4 md:pb-0 md:pr-6 relative z-10 text-xs text-slate-400 space-y-2">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className={`w-1.5 h-1.5 rounded-full ${activeIndex === null ? 'bg-slate-500 animate-pulse' : activeIndex === 0 ? 'bg-cyan-400 animate-ping' : activeIndex === 1 ? 'bg-indigo-400 animate-ping' : 'bg-emerald-400 animate-ping'}`} />
            <span className="text-xs font-bold text-white uppercase">
              {activeIndex === null ? 'SYS_MONITOR // STANDBY' : activeIndex === 0 ? 'SYS_HOLOGRAM // MODEL_REGISTRY' : activeIndex === 1 ? 'SYS_HOLOGRAM // VPC_TOPOLOGY' : 'SYS_HOLOGRAM // PIPELINE_DEPLOY'}
            </span>
          </div>
          <p className="text-[10px] text-slate-500 tracking-wide">// NETWORK_ACCELERATED_MODE</p>
        </div>

        <div className="space-y-1 text-[10px]">
          {activeIndex === null && (
            <>
              <div>SYS_LOAD: 0.14</div>
              <div>FREQUENCY: 2.40 GHz</div>
              <div>STATUS: WAITING_SELECT</div>
            </>
          )}
          {activeIndex === 0 && (
            <>
              <div className="text-cyan-400 font-bold">REGISTRY: MLFLOW_SERVER</div>
              <div>MODELS_ACTIVE: 12</div>
              <div>STORAGE_USED: 142.6 GB</div>
            </>
          )}
          {activeIndex === 1 && (
            <>
              <div className="text-indigo-400 font-bold">VPC: GKE_INTERNAL_VPC</div>
              <div>REGION: us-central1</div>
              <div>SUBNETS: 3 ACTIVE</div>
            </>
          )}
          {activeIndex === 2 && (
            <>
              <div className="text-emerald-400 font-bold">WORKFLOW: deployment.yml</div>
              <div>RUNS_TOTAL: #1480</div>
              <div>SUCCESS_RATE: 99.8%</div>
            </>
          )}
        </div>
      </div>

      {/* Right Diagram Blueprint Panel (2/3 width) */}
      <div className="md:w-2/3 flex items-center justify-center relative z-10 h-full">
        {activeIndex === null && (
          <div className="w-full h-full flex flex-col justify-center items-center opacity-60">
            <svg className="w-full h-24 text-slate-800" viewBox="0 0 500 100" preserveAspectRatio="none">
              <line x1="0" y1="50" x2="500" y2="50" stroke="rgba(255,255,255,0.05)" strokeDasharray="5 5" />
              <motion.path
                d="M0 50 Q 125 10, 250 50 T 500 50"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="1.5"
                opacity="0.3"
                animate={{ d: [
                  "M0 50 Q 125 20, 250 50 T 500 50",
                  "M0 50 Q 125 80, 250 50 T 500 50",
                  "M0 50 Q 125 20, 250 50 T 500 50"
                ]}}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              />
              <motion.path
                d="M0 50 Q 100 70, 220 50 T 500 50"
                fill="none"
                stroke="#10b981"
                strokeWidth="1"
                opacity="0.2"
                animate={{ d: [
                  "M0 50 Q 100 30, 220 50 T 500 50",
                  "M0 50 Q 100 70, 220 50 T 500 50",
                  "M0 50 Q 100 30, 220 50 T 500 50"
                ]}}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              />
            </svg>
            <span className="text-[8px] text-slate-600 uppercase font-mono tracking-widest mt-1">// CLICK A CARD ABOVE TO ROTATE CONSOLE BLUEPRINTS</span>
          </div>
        )}

        {/* AI Model Registry Schematic */}
        {activeIndex === 0 && (
          <svg viewBox="0 0 500 100" className="w-full h-full text-cyan-400">
            {/* Box 1: DVC / Dataset */}
            <rect x="10" y="25" width="100" height="50" rx="8" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-60" />
            <text x="60" y="48" textAnchor="middle" fill="currentColor" className="text-[8px] font-bold">DVC Metadata</text>
            <text x="60" y="60" textAnchor="middle" fill="#64748b" className="text-[7px]">dataset.dvc</text>

            {/* Connector line 1 */}
            <path d="M110 50 H 180" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
            <motion.circle cx="110" cy="50" r="2.5" fill="#06b6d4" animate={{ cx: [110, 180] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} />

            {/* Box 2: MLflow Registry */}
            <rect x="180" y="25" width="120" height="50" rx="8" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <text x="240" y="48" textAnchor="middle" fill="currentColor" className="text-[9px] font-bold">MLflow Registry</text>
            <text x="240" y="60" textAnchor="middle" fill="#64748b" className="text-[7px]">resnet50:prod</text>

            {/* Connector line 2 */}
            <path d="M300 50 H 370" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
            <motion.circle cx="300" cy="50" r="2.5" fill="#06b6d4" animate={{ cx: [300, 370] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} />

            {/* Box 3: Storage Bucket */}
            <rect x="370" y="25" width="110" height="50" rx="8" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-60" />
            <text x="425" y="48" textAnchor="middle" fill="currentColor" className="text-[8px] font-bold">Artifact Store</text>
            <text x="425" y="60" textAnchor="middle" fill="#64748b" className="text-[7px]">S3 Bucket (Prod)</text>
          </svg>
        )}

        {/* VPC Network Topology Diagram */}
        {activeIndex === 1 && (
          <svg viewBox="0 0 500 100" className="w-full h-full text-indigo-400">
            {/* Client traffic */}
            <circle cx="20" cy="50" r="3.5" fill="currentColor" />
            <text x="20" y="65" textAnchor="middle" fill="#64748b" className="text-[7px]">Client</text>

            {/* Connector 1 */}
            <path d="M24 50 H 90" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
            <motion.circle cx="24" cy="50" r="2" fill="#6366f1" animate={{ cx: [24, 90] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }} />

            {/* Load Balancer */}
            <rect x="90" y="25" width="95" height="50" rx="8" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <text x="137" y="48" textAnchor="middle" fill="currentColor" className="text-[8px] font-bold">ALB / Ingress</text>
            <text x="137" y="60" textAnchor="middle" fill="#64748b" className="text-[7px]">SSL HTTPS</text>

            {/* Connector 2 split paths to private subnet */}
            <path d="M185 50 L 255 35 M 185 50 L 255 65" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
            <motion.circle cx="185" cy="50" r="2" fill="#6366f1" animate={{ cx: [185, 255], cy: [50, 35] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }} />
            <motion.circle cx="185" cy="50" r="2" fill="#6366f1" animate={{ cx: [185, 255], cy: [50, 65] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }} />

            {/* Private Subnet K8s Nodes */}
            <rect x="255" y="15" width="110" height="30" rx="5" fill="none" stroke="currentColor" strokeWidth="1" />
            <text x="310" y="33" textAnchor="middle" fill="currentColor" className="text-[8px] font-bold">Pod: Predict-01</text>
            
            <rect x="255" y="55" width="110" height="30" rx="5" fill="none" stroke="currentColor" strokeWidth="1" />
            <text x="310" y="73" textAnchor="middle" fill="currentColor" className="text-[8px] font-bold">Pod: Predict-02</text>

            {/* DB connection */}
            <path d="M365 30 L 405 50 M 365 70 L 405 50" fill="none" stroke="currentColor" strokeWidth="0.8" />
            <rect x="405" y="25" width="85" height="50" rx="8" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-60" />
            <text x="447" y="48" textAnchor="middle" fill="currentColor" className="text-[8px] font-bold">Database</text>
            <text x="447" y="60" textAnchor="middle" fill="#64748b" className="text-[7px]">Managed DB</text>
          </svg>
        )}

        {/* GitHub Actions Deployment Workflow */}
        {activeIndex === 2 && (
          <svg viewBox="0 0 500 100" className="w-full h-full text-emerald-400">
            {/* Step 1: Push */}
            <rect x="10" y="25" width="90" height="50" rx="8" fill="none" stroke="currentColor" strokeWidth="1" />
            <text x="55" y="48" textAnchor="middle" fill="currentColor" className="text-[8px] font-bold">git push</text>
            <text x="55" y="60" textAnchor="middle" fill="#10b981" className="text-[7px] font-bold">[ COMMIT ]</text>

            {/* Connector 1 */}
            <path d="M100 50 H 160" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
            <motion.circle cx="100" cy="50" r="2" fill="#10b981" animate={{ cx: [100, 160] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }} />

            {/* Step 2: Test */}
            <rect x="160" y="25" width="90" height="50" rx="8" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <text x="205" y="48" textAnchor="middle" fill="currentColor" className="text-[8px] font-bold">Lint & Test</text>
            <text x="205" y="60" textAnchor="middle" fill="emerald" className="text-[7px] font-bold">[ PASSED ]</text>

            {/* Connector 2 */}
            <path d="M250 50 H 310" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
            <motion.circle cx="250" cy="50" r="2" fill="#10b981" animate={{ cx: [250, 310] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }} />

            {/* Step 3: Containerize */}
            <rect x="310" y="25" width="90" height="50" rx="8" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <text x="355" y="48" textAnchor="middle" fill="currentColor" className="text-[8px] font-bold">Docker Build</text>
            <text x="355" y="60" textAnchor="middle" fill="emerald" className="text-[7px] font-bold">[ PUSHED ]</text>

            {/* Connector 3 */}
            <path d="M400 50 H 440" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
            <motion.circle cx="400" cy="50" r="2" fill="#10b981" animate={{ cx: [400, 440] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }} />

            {/* Step 4: Deploy */}
            <rect x="440" y="25" width="50" height="50" rx="8" fill="none" stroke="currentColor" strokeWidth="1" />
            <text x="465" y="48" textAnchor="middle" fill="currentColor" className="text-[8px] font-bold">Deploy</text>
            <text x="465" y="60" textAnchor="middle" fill="emerald" className="text-[7px] font-bold">[ OK ]</text>
          </svg>
        )}
      </div>
    </div>
  );
}

export default function AboutServices({ isZeroG }) {
  const [phase, setPhase] = useState(0);
  const [lockedConsole, setLockedConsole] = useState(null);

  // Auto-running cycle for the Core Expertise MLOps deployment pipeline
  useEffect(() => {
    const timings = [2500, 1800, 2500, 1800, 2500]; // Cycle duration for stages + travel times
    const timer = setTimeout(() => {
      setPhase((prev) => (prev + 1) % 5);
    }, timings[phase]);
    return () => clearTimeout(timer);
  }, [phase]);

  // Determine active view: manual lock overrides the automatic phase
  const activeConsoleIndex = lockedConsole !== null 
    ? lockedConsole 
    : (phase === 0 ? 0 : phase === 2 ? 1 : phase === 4 ? 2 : null);

  const handleCardClick = (idx) => {
    setLockedConsole((prev) => (prev === idx ? null : idx));
  };

  const milestones = [
    {
      title: "RVITM Hackathon 3rd Place",
      subtitle: "National 24-hr Hackathon",
      detail: "Developed a predictive Machine Learning model and automated its cloud serving pipeline under tight time constraints.",
      icon: Trophy,
      hoverClass: "hover:border-[#06b6d4] hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]",
      iconColor: "text-[#06b6d4]",
      iconBg: "bg-[#06b6d4]/10 border-[#06b6d4]/20"
    },
    {
      title: "SDMIT Innovate-A-Thon 2nd Place",
      subtitle: "Prototyping Sprint",
      detail: "Designed and deployed a containerized IoT and cloud infrastructure stack to automate remote farm metrics.",
      icon: Zap,
      hoverClass: "hover:border-emerald-500 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]",
      iconColor: "text-emerald-400",
      iconBg: "bg-emerald-500/10 border-emerald-500/20"
    },
    {
      title: "Google TEC Member",
      subtitle: "Tech Equity Collective",
      detail: "Engaged in open-source AI/ML toolchains, MLOps integrations, and modern cloud-native system architectures.",
      icon: Users,
      hoverClass: "hover:border-indigo-500 hover:shadow-[0_0_25px_rgba(99,102,241,0.15)]",
      iconColor: "text-indigo-400",
      iconBg: "bg-indigo-500/10 border-indigo-500/20"
    }
  ];

  const services = [
    {
      title: "AI & Machine Learning (MLOps)",
      description: "Training high-accuracy predictive models, classifier pipelines, and setting up automated model registries using MLflow and DVC.",
      icon: Cpu,
      status: "MODEL_SYS",
      metric: "ACCURACY: 99.6%"
    },
    {
      title: "Cloud & DevOps Infrastructure",
      description: "Deploying highly available systems using Docker containerization, Kubernetes orchestration, and automated infrastructure as code.",
      icon: Cloud,
      status: "DEV_OPS_SYS",
      metric: "PODS: 12/12 ONLINE"
    },
    {
      title: "Continuous MLOps Pipelines",
      description: "Building automated CI/CD deployment pipelines, serverless model inference APIs, and real-time model telemetry monitoring.",
      icon: GitBranch,
      status: "PIPELINE_SYS",
      metric: "LATENCY: 45ms"
    }
  ];

  return (
    <>
      {/* Section 2: About Me */}
      <section id="about" className="relative min-h-screen flex flex-col justify-center py-20 px-6 md:px-12 max-w-6xl mx-auto z-10 border-b border-white/5">
        {/* Main Grid: Heading + Bio + Telemetry */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-12">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-4 text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-[#06b6d4] font-semibold">// 01_ABOUT_ME</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-2 font-sans tracking-tight">
              About Me
            </h2>
            <div className="h-[2px] w-16 bg-[#06b6d4] mt-4" />
          </div>

          {/* Right Column: Bio & Live Telemetry side-by-side */}
          <div className="lg:col-span-8 text-left">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
              {/* Bio Text */}
              <div className="md:col-span-7 flex flex-col justify-center">
                <p className="text-lg md:text-xl text-white/80 leading-relaxed font-sans">
                  As an MLOps Engineer, I bridge the gap between complex Artificial Intelligence models and scalable, production-grade cloud infrastructure. I specialize in training robust Machine Learning classifiers and automating their continuous delivery using CI/CD pipelines, containerization, and cloud-native serverless systems.
                </p>
              </div>

              {/* MLOps Live Telemetry Dashboard */}
              <div className="md:col-span-5">
                <K8sClusterMonitor />
              </div>
            </div>
          </div>
        </div>

        {/* Milestones Row - Glassmorphic Trophy Cards */}
        <div className="pt-12 border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {milestones.map((item, idx) => {
              const MilestoneIcon = item.icon;
              return (
                <div 
                  key={idx} 
                  className={`bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group text-left flex flex-col justify-between ${item.hoverClass}`}
                >
                  <div className="space-y-4">
                    {/* Top Row: Icon and category */}
                    <div className="flex items-center justify-between">
                      <span className={`p-2.5 rounded-xl border flex items-center justify-center ${item.iconBg} ${item.iconColor}`}>
                        <MilestoneIcon className="w-4.5 h-4.5" />
                      </span>
                      <span className="text-xs font-mono text-slate-500 font-bold tracking-widest uppercase">
                        // {item.subtitle}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="space-y-1">
                      <h4 className="text-sm font-extrabold text-white group-hover:text-white transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 font-sans leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Core Expertise Services */}
      <section id="services" className="relative min-h-screen flex flex-col justify-center py-20 px-6 md:px-12 max-w-6xl mx-auto z-10 border-b border-white/5">
        <div className="text-left mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#06b6d4] font-semibold">// 02_SERVICES</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-2 font-sans tracking-tight">
            Core Expertise
          </h2>
          <p className="text-base text-slate-400 mt-2">Production-ready solutions engineering across machine learning models, cloud systems, and deployment automation.</p>
        </div>

        {/* 3-Column Services Grid with Dynamic Data Flow */}
        <div className="relative">
          
          {/* Desktop Pipeline Connector Lines */}
          <div className="absolute left-[16%] right-[16%] top-[50px] -translate-y-1/2 h-[2px] bg-white/5 pointer-events-none hidden md:block z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#06b6d4]/10 via-indigo-500/10 to-emerald-500/10" />
            
            {/* Animated Pulse 1 (Card 1 to Card 2) */}
            {phase === 1 && (
              <motion.div 
                className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#06b6d4] shadow-[0_0_12px_#06b6d4]"
                initial={{ left: "0%", x: "-50%" }}
                animate={{ left: "50%", x: "-50%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
            )}

            {/* Animated Pulse 2 (Card 2 to Card 3) */}
            {phase === 3 && (
              <motion.div 
                className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-emerald-400 shadow-[0_0_12px_#10b981]"
                initial={{ left: "50%", x: "-50%" }}
                animate={{ left: "100%", x: "-50%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {services.map((service, idx) => (
              <ServiceCard 
                key={idx}
                service={service}
                idx={idx}
                phase={phase}
                isLocked={lockedConsole === idx}
                onCardClick={handleCardClick}
              />
            ))}
          </div>

          {/* Infrastructure Console Hologram Panel */}
          <InfrastructureConsole activeIndex={activeConsoleIndex} />
        </div>
      </section>
    </>
  );
}
