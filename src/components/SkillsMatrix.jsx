import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, HardDrive, ShieldCheck, RefreshCw } from 'lucide-react';
import TiltCard from './TiltCard';

const servicesData = [
  {
    id: "python-ml-core",
    name: "python-ml-core",
    uptime: "95%",
    status: "Critical Resource",
    statusColor: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
    dotColor: "bg-emerald-400 shadow-[0_0_8px_#10b981]",
    cost: "$0.15/hr",
    resource: "8 Core vCPU // 32GB RAM",
    skills: ["Python", "Machine Learning", "Predictive Modeling", "Agentic AI", "Model Evaluation"],
    bootLogs: [
      "INGESTING python-ml-core environment configurations...",
      "LOADING PyTorch, Scikit-Learn libraries...",
      "VERIFYING neural network model coefficients...",
      "SYSTEM RUNNING: Inference API ready."
    ]
  },
  {
    id: "gcp-infrastructure",
    name: "gcp-infrastructure",
    uptime: "85%",
    status: "Fully Configured",
    statusColor: "text-[#06b6d4] border-[#06b6d4]/20 bg-[#06b6d4]/5",
    dotColor: "bg-[#06b6d4] shadow-[0_0_8px_#06b6d4]",
    cost: "$0.22/hr",
    resource: "GCP Ingress VMs // VPC Subnets",
    skills: ["Google Cloud (GCP)", "Oracle Cloud (OCI)", "Git & GitHub"],
    bootLogs: [
      "RESOLVING gcp-infrastructure VPC route tables...",
      "CHECKING ingress ports 80, 443 safety status...",
      "VERIFYING OCI compute instances credentials...",
      "SYSTEM RUNNING: Virtual Cloud Network fully synced."
    ]
  },
  {
    id: "k8s-orchestration",
    name: "k8s-orchestration",
    uptime: "75%",
    status: "Provisioned",
    statusColor: "text-amber-400 border-amber-500/20 bg-amber-500/5",
    dotColor: "bg-amber-400 shadow-[0_0_8px_#f59e0b]",
    cost: "$0.45/hr",
    resource: "4 Active Pods // Auto-scaler",
    skills: ["Kubernetes", "Docker"],
    bootLogs: [
      "AUDITING k8s cluster health status...",
      "VERIFYING deployment replica controllers...",
      "BOOTING container configurations from docker.io...",
      "SYSTEM RUNNING: Pods 4/4 ready to scale."
    ]
  },
  {
    id: "sql-analytics-db",
    name: "sql-analytics-db",
    uptime: "90%",
    status: "Active Pipeline",
    statusColor: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
    dotColor: "bg-emerald-400 shadow-[0_0_8px_#10b981]",
    cost: "$0.12/hr",
    resource: "PostgreSQL Database // 250GB SSD",
    skills: ["SQL", "Data Analysis", "Jupyter Notebook", "Microsoft Excel"],
    bootLogs: [
      "OPENING PostgreSQL server connection...",
      "VERIFYING database schema migrations...",
      "ESTABLISHING data extraction pipelines...",
      "SYSTEM RUNNING: Schema online, query interface ready."
    ]
  },
  {
    id: "cicd-runner",
    name: "cicd-runner",
    uptime: "92%",
    status: "High Priority",
    statusColor: "text-[#06b6d4] border-[#06b6d4]/20 bg-[#06b6d4]/5",
    dotColor: "bg-[#06b6d4] shadow-[0_0_8px_#06b6d4]",
    cost: "$0.08/hr",
    resource: "GitHub Action Node // Webhooks",
    skills: ["CI/CD", "Power BI", "Figma", "Dart / HTML"],
    bootLogs: [
      "CONNECTING to GitHub actions build hook...",
      "CHECKING docker compile target build caches...",
      "SYNCING metrics telemetry to Power BI dashboard...",
      "SYSTEM RUNNING: Webhook listener running successfully."
    ]
  }
];

export default function SkillsMatrix({ isZeroG }) {
  const [selectedId, setSelectedId] = useState("python-ml-core");
  const [isBooting, setIsBooting] = useState(false);
  const [bootProgress, setBootProgress] = useState(0);

  const activeService = servicesData.find(s => s.id === selectedId);

  // Trigger boot sequence animation when selected service changes
  useEffect(() => {
    setIsBooting(true);
    setBootProgress(0);
    
    let current = 0;
    const interval = setInterval(() => {
      current += 10;
      setBootProgress(current);
      if (current >= 100) {
        clearInterval(interval);
        setIsBooting(false);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [selectedId]);

  return (
    <section id="sphere" className="relative py-32 px-6 md:px-12 max-w-6xl mx-auto z-10 border-b border-white/5">
      {/* Section Header */}
      <div className="text-left mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-[#06b6d4] font-semibold">// 04_RESOURCE_ALLOCATION</span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-2 mb-4 font-sans tracking-tight">
          Resource Allocation
        </h2>
        <div className="h-[2px] w-24 bg-[#06b6d4]" />
        <p className="text-slate-400 max-w-2xl mt-4 text-sm font-sans leading-relaxed">
          Cloud Resource Management & FinOps Dashboard. Boot up active technical microservices to inspect deployment specifications and loaded skill packages.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Deployed Services list (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          <h3 className="text-xs uppercase font-mono tracking-widest text-slate-500 font-bold mb-2 text-left">
            Deployed Services Console
          </h3>

          <div className="space-y-3">
            {servicesData.map((service) => {
              const isSelected = selectedId === service.id;
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedId(service.id)}
                  className={`border rounded-xl p-4 transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between gap-4 group text-left ${
                    isSelected 
                      ? 'border-[#06b6d4] bg-[#06b6d4]/5 shadow-[0_0_15px_rgba(6,182,212,0.1)]' 
                      : 'border-white/5 bg-[#080808]/40 hover:border-white/20'
                  }`}
                >
                  {/* Left elements: Service name */}
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg border border-white/5 bg-white/[0.02]">
                      <Cpu className={`w-4 h-4 ${isSelected ? 'text-[#06b6d4]' : 'text-slate-500'}`} />
                    </div>
                    <div>
                      <h4 className={`text-xs font-bold font-mono tracking-wider ${isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                        Service: {service.name}
                      </h4>
                      <p className="text-[10px] text-slate-500 font-mono mt-0.5">Cost: {service.cost}</p>
                    </div>
                  </div>

                  {/* Right elements: Uptime & Status */}
                  <div className="flex items-center justify-between sm:justify-end gap-6">
                    <div className="flex flex-col text-left sm:text-right font-mono text-[9px] text-slate-500">
                      <span>Uptime</span>
                      <span className={`font-bold ${isSelected ? 'text-[#06b6d4]' : 'text-slate-300'}`}>{service.uptime}</span>
                    </div>

                    <div className={`text-[8.5px] font-mono border px-2 py-0.5 rounded uppercase flex items-center gap-1.5 ${service.statusColor}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${service.dotColor}`} />
                      <span>{service.status}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Systems Query / Diagnostics Output (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <TiltCard 
            isZeroG={isZeroG} 
            className="border-white/10 bg-white/5 h-full min-h-[360px] flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-2 text-[8px] font-mono text-slate-700 select-none">
              ALLOC_v2.0
            </div>
            
            <div className="space-y-6 text-left">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-mono font-semibold text-[#06b6d4] uppercase tracking-wider flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" /> SERVICE_RESOURCE_SPECS
                </span>
                <span className="w-2 h-2 rounded-full bg-[#06b6d4] shadow-[0_0_8px_#06b6d4]" />
              </div>

              {/* Console Screen */}
              <div className="border border-white/5 bg-black/60 rounded-xl p-5 min-h-[240px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  {isBooting ? (
                    /* Booting terminal loader */
                    <motion.div
                      key="booting"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-4 font-mono text-[9px] text-slate-400 flex flex-col justify-between h-full"
                    >
                      <div className="space-y-1.5 text-left">
                        <div className="text-slate-500 border-b border-white/5 pb-1 flex justify-between">
                          <span>$ boot --service {activeService.name}</span>
                          <RefreshCw className="w-2.5 h-2.5 animate-spin text-[#06b6d4]" />
                        </div>
                        {activeService.bootLogs.map((log, idx) => (
                          <div key={idx} className="flex gap-2 items-start text-left">
                            <span className="text-[#06b6d4] font-bold select-none">&gt;&gt;</span>
                            <span className="leading-relaxed">{log}</span>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-1">
                        <div className="flex justify-between text-[8px] text-slate-500 uppercase tracking-widest">
                          <span>Allocating Resources</span>
                          <span>{bootProgress}%</span>
                        </div>
                        <div className="h-1 w-full bg-white/[0.03] border border-white/5 rounded-full overflow-hidden">
                          <div style={{ width: `${bootProgress}%` }} className="h-full bg-[#06b6d4] rounded-full" />
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    /* Loaded Service Specifications */
                    <motion.div
                      key="loaded"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4 text-left"
                    >
                      <div className="flex items-center gap-2 text-emerald-400 font-mono text-[9px] font-bold px-2 py-0.5 border border-emerald-500/20 bg-emerald-500/5 rounded self-start">
                        <ShieldCheck className="w-3.5 h-3.5" /> SERVICE STATUS: RUNNING
                      </div>

                      <div className="space-y-2 text-xs">
                        <div>
                          <span className="text-[8px] uppercase font-mono tracking-widest text-slate-500 block mb-0.5">
                            Core Service Name:
                          </span>
                          <h4 className="text-sm font-extrabold text-white font-mono">
                            {activeService.name}
                          </h4>
                        </div>

                        <div>
                          <span className="text-[8px] uppercase font-mono tracking-widest text-slate-500 block mb-0.5">
                            Resource Footprint:
                          </span>
                          <p className="text-xs text-slate-300 font-mono font-medium">
                            {activeService.resource}
                          </p>
                        </div>

                        <div>
                          <span className="text-[8px] uppercase font-mono tracking-widest text-slate-500 block mb-2">
                            Skills & Packages Loaded:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {activeService.skills.map((skill, sIdx) => (
                              <span 
                                key={sIdx} 
                                className="text-[9px] px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-[8px] font-mono text-slate-600">
                  <span>DEPLOY_ID: 0x{selectedId.toUpperCase()}</span>
                  <span>INGRESS: OK</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-between items-center text-[9px] font-mono text-slate-500 text-left">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#06b6d4] rounded-full" />
                Connection: Active
              </span>
              <span>Latency: 45ms</span>
            </div>
          </TiltCard>
        </div>

      </div>
    </section>
  );
}
