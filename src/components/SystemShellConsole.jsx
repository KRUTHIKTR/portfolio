import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, X, Play, Shield, CheckCircle, RefreshCw, Server, Send } from 'lucide-react';

export default function SystemShellConsole({ isOpen, onClose, onStatusChange, onTriggerScan, onShowNotification }) {
  const [activeTab, setActiveTab] = useState('terminal'); // 'terminal' | 'monitor'
  const [logs, setLogs] = useState([
    'SYSTEM INITIALIZATION COMPLETED.',
    'SECURITY MODULE: ACTIVE [AES_256_VPC]',
    'ML ENGINE: STABLE (REGISTRY RELEASE: v2.0.4)',
    'K8S REPLICAS: 9/9 PODS RUNNING',
    '---',
    'Type a command or click quick-run options below:'
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isRunningAction, setIsRunningAction] = useState(false);
  
  // Simulated vitals
  const [vitals, setVitals] = useState({
    cpu: 18,
    gpu: 45,
    memory: 6.2,
    latency: 45
  });

  const logsEndRef = useRef(null);

  // Auto-scroll logs
  useEffect(() => {
    if (logsEndRef.current) {
      logsEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  // Vitals simulation
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setVitals(prev => ({
        cpu: Math.min(99, Math.max(5, prev.cpu + Math.floor(Math.random() * 9) - 4)),
        gpu: Math.min(99, Math.max(10, prev.gpu + Math.floor(Math.random() * 11) - 5)),
        memory: parseFloat(Math.min(16, Math.max(2, prev.memory + (Math.random() * 0.4 - 0.2))).toFixed(1)),
        latency: Math.floor(40 + Math.random() * 10)
      }));
    }, 1500);
    return () => clearInterval(interval);
  }, [isOpen]);

  const executeCommand = async (cmd) => {
    if (isRunningAction) return;
    const cleanCmd = cmd.trim().toLowerCase();
    if (!cleanCmd) return;

    setLogs(prev => [...prev, `$ ${cmd}`]);
    setInputVal('');

    if (cleanCmd === 'clear') {
      setLogs([]);
      return;
    }

    if (cleanCmd === 'help') {
      setLogs(prev => [
        ...prev,
        'Available commands:',
        '  help       Display list of operations',
        '  train      Trigger Indic-LLM hyperparameter tuning simulation',
        '  deploy     Execute Docker build & GKE deployment pipeline',
        '  audit      Run cybersecurity & biometric leakage audits',
        '  clear      Clear console logs'
      ]);
      return;
    }

    if (cleanCmd === 'train') {
      setIsRunningAction(true);
      if (onStatusChange) onStatusChange('[ TRAINING... ]');
      setLogs(prev => [...prev, '>>> Initializing model training session...']);
      
      const steps = [
        'Fetching training datasets from secure GCP bucket...',
        'Hyperparameters loaded: learning_rate=3e-5, epochs=3',
        'Epoch 1/3: Loss: 0.84 - Accuracy: 84.5%',
        'Epoch 2/3: Loss: 0.42 - Accuracy: 92.1%',
        'Epoch 3/3: Loss: 0.18 - Accuracy: 98.4%',
        'Tuning complete. Registering model in MLflow model registry...',
        'SUCCESS: Model INDIC_LLM_INDICATOR v2.1.0 registered!'
      ];

      for (let i = 0; i < steps.length; i++) {
        await new Promise(res => setTimeout(res, 800));
        setLogs(prev => [...prev, `[TRAIN] ${steps[i]}`]);
        
        if (onStatusChange) {
          if (i === 2) onStatusChange('[ EPOCH_1/3 ]');
          else if (i === 3) onStatusChange('[ EPOCH_2/3 ]');
          else if (i === 4) onStatusChange('[ EPOCH_3/3 ]');
        }
      }
      if (onStatusChange) onStatusChange('[ MODEL_v2.1.0 ]');
      if (onShowNotification) onShowNotification('Model training complete: INDIC_LLM v2.1.0 registered.');
      setIsRunningAction(false);
      return;
    }

    if (cleanCmd === 'deploy') {
      setIsRunningAction(true);
      if (onStatusChange) onStatusChange('[ DEPLOYING... ]');
      setLogs(prev => [...prev, '>>> Triggering MLOps CD deploy pipeline...']);

      const steps = [
        'Running syntax linting & unit tests... Passed',
        'Building Docker image: portfolio-app:latest...',
        'Scanning container layer details for vulnerabilities... 0 critical found',
        'Pushing image layers to Google Artifact Registry...',
        'Updating Kubernetes Deployment manifests...',
        'Rolling update in progress (GKE cluster: us-central1)...',
        'Active routing swapped to new deployments. Uptime: 100%'
      ];

      for (let i = 0; i < steps.length; i++) {
        await new Promise(res => setTimeout(res, 800));
        setLogs(prev => [...prev, `[DEPLOY] ${steps[i]}`]);
      }
      if (onStatusChange) onStatusChange('[ GKE_ONLINE ]');
      if (onShowNotification) onShowNotification('Deployment complete: Production pods updated successfully.');
      setIsRunningAction(false);
      return;
    }

    if (cleanCmd === 'audit') {
      setIsRunningAction(true);
      if (onStatusChange) onStatusChange('[ AUDITING... ]');
      if (onTriggerScan) onTriggerScan();
      setLogs(prev => [...prev, '>>> Initiating security scan...']);

      const steps = [
        'Scanning port configs & API gateways... All secure',
        'Auditing telemetry mapping vectors... Passed',
        'Checking SSL cert validity: 248 days remaining',
        'Security posture check completed. Zero vulnerabilities identified.'
      ];

      for (let i = 0; i < steps.length; i++) {
        await new Promise(res => setTimeout(res, 700));
        setLogs(prev => [...prev, `[AUDIT] ${steps[i]}`]);
      }
      if (onStatusChange) onStatusChange('[ SYS_SECURE ]');
      if (onShowNotification) onShowNotification('Security scan complete: System secure.');
      setIsRunningAction(false);
      return;
    }

    // Default error
    setLogs(prev => [
      ...prev,
      `Command not found: '${cmd}'. Type 'help' to see list of valid MLOps actions.`
    ]);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 50 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-20 right-4 left-4 md:left-auto md:right-6 md:w-96 h-[480px] bg-[#080808]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_10px_50px_rgba(6,182,212,0.15)] z-50 overflow-hidden flex flex-col font-mono"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.02] p-4">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#06b6d4] animate-pulse" />
              <span className="text-xs font-bold text-white tracking-widest">
                SYSTEM_SHELL_v1.0
              </span>
            </div>
            
            <button 
              onClick={onClose}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-white/5 text-xs text-slate-400">
            <button
              onClick={() => setActiveTab('terminal')}
              className={`flex-1 py-3 text-center transition-colors border-b-2 flex items-center justify-center gap-1.5 ${
                activeTab === 'terminal' 
                  ? 'border-[#06b6d4] text-white bg-white/[0.01]' 
                  : 'border-transparent hover:text-white hover:bg-white/[0.01]'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              Interactive Shell
            </button>
            <button
              onClick={() => setActiveTab('monitor')}
              className={`flex-1 py-3 text-center transition-colors border-b-2 flex items-center justify-center gap-1.5 ${
                activeTab === 'monitor' 
                  ? 'border-[#06b6d4] text-white bg-white/[0.01]' 
                  : 'border-transparent hover:text-white hover:bg-white/[0.01]'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              Metrics Monitor
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-grow p-4 overflow-y-auto flex flex-col min-h-0 text-left">
            {activeTab === 'terminal' ? (
              <>
                {/* Logs Screen */}
                <div className="flex-grow overflow-y-auto space-y-1.5 text-xs text-slate-300 pr-1.5 scrollbar-thin select-text">
                  {logs.map((log, index) => {
                    let logColor = 'text-slate-300';
                    if (log.startsWith('$')) logColor = 'text-cyan-400 font-bold';
                    else if (log.startsWith('>>>')) logColor = 'text-yellow-400';
                    else if (log.includes('SUCCESS') || log.includes('MODULE: ACTIVE')) logColor = 'text-emerald-400';
                    else if (log.includes('TRAIN') || log.includes('DEPLOY') || log.includes('AUDIT')) logColor = 'text-slate-400';
                    
                    return (
                      <div key={index} className={`${logColor} leading-relaxed break-words`}>
                        {log}
                      </div>
                    );
                  })}
                  {isRunningAction && (
                    <div className="text-cyan-400 flex items-center gap-1.5 animate-pulse">
                      <RefreshCw className="w-3 h-3 animate-spin" />
                      Executing model operation...
                    </div>
                  )}
                  <div ref={logsEndRef} />
                </div>

                {/* Quick Actions (only visible when not busy) */}
                <div className="mt-3 pt-3 border-t border-white/5 space-y-2">
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Quick Operations:</span>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => executeCommand('train')}
                      disabled={isRunningAction}
                      className="text-[10px] bg-white/5 border border-white/10 hover:border-[#06b6d4]/40 hover:bg-[#06b6d4]/5 px-2.5 py-1.5 rounded-lg text-slate-300 hover:text-white transition-all disabled:opacity-40 flex items-center gap-1"
                    >
                      <Play className="w-3 h-3 text-[#06b6d4]" /> train_model
                    </button>
                    <button
                      onClick={() => executeCommand('deploy')}
                      disabled={isRunningAction}
                      className="text-[10px] bg-white/5 border border-white/10 hover:border-[#06b6d4]/40 hover:bg-[#06b6d4]/5 px-2.5 py-1.5 rounded-lg text-slate-300 hover:text-white transition-all disabled:opacity-40 flex items-center gap-1"
                    >
                      <Server className="w-3 h-3 text-cyan-400" /> deploy_pipeline
                    </button>
                    <button
                      onClick={() => executeCommand('audit')}
                      disabled={isRunningAction}
                      className="text-[10px] bg-white/5 border border-white/10 hover:border-[#06b6d4]/40 hover:bg-[#06b6d4]/5 px-2.5 py-1.5 rounded-lg text-slate-300 hover:text-white transition-all disabled:opacity-40 flex items-center gap-1"
                    >
                      <Shield className="w-3 h-3 text-emerald-400" /> sys_audit
                    </button>
                  </div>
                </div>

                {/* Shell Input */}
                <div className="mt-3 flex items-center gap-2 border-t border-white/5 pt-3">
                  <span className="text-cyan-400 text-xs font-bold">$</span>
                  <input
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    onKeyDown={handleKeyPress}
                    disabled={isRunningAction}
                    placeholder="Type cmd (e.g. 'help')..."
                    className="flex-grow bg-transparent text-xs text-white placeholder-slate-600 focus:outline-none disabled:opacity-50"
                  />
                  <button
                    onClick={() => executeCommand(inputVal)}
                    disabled={isRunningAction}
                    className="text-slate-500 hover:text-[#06b6d4] transition-colors p-1"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </>
            ) : (
              /* Metrics Monitoring tab */
              <div className="space-y-5 text-xs text-slate-300 w-full">
                <div className="space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-slate-400">GPU WORKLOAD (NVIDIA T4)</span>
                    <span className="font-bold text-[#06b6d4]">{vitals.gpu}%</span>
                  </div>
                  <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-[#06b6d4] h-full transition-all duration-1000 shadow-[0_0_8px_#06b6d4]" 
                      style={{ width: `${vitals.gpu}%` }} 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-slate-400">CLUSTER CPU LOAD</span>
                    <span className="font-bold text-indigo-400">{vitals.cpu}%</span>
                  </div>
                  <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-indigo-500 h-full transition-all duration-1000" 
                      style={{ width: `${vitals.cpu}%` }} 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-slate-400">VRAM DATA LOAD</span>
                    <span className="font-bold text-emerald-400">{vitals.memory} GB / 16.0 GB</span>
                  </div>
                  <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-emerald-500 h-full transition-all duration-1000" 
                      style={{ width: `${(vitals.memory / 16.0) * 100}%` }} 
                    />
                  </div>
                </div>

                {/* Server Telemetry Cards */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="border border-white/5 bg-white/[0.01] rounded-xl p-3">
                    <span className="text-[10px] text-slate-500 block">K8S CLUSTER</span>
                    <span className="text-emerald-400 font-bold block mt-1 flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" /> 9/9 ONLINE
                    </span>
                  </div>
                  <div className="border border-white/5 bg-white/[0.01] rounded-xl p-3">
                    <span className="text-[10px] text-slate-500 block">GATEWAY RTT</span>
                    <span className="text-white font-bold block mt-1">
                      {vitals.latency} ms
                    </span>
                  </div>
                </div>

                <div className="border border-white/5 bg-[#080808]/50 rounded-xl p-3 flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase font-bold">Deployment Version:</span>
                    <span className="text-slate-300 font-mono text-[10px]">release-v2.0.4-production</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
