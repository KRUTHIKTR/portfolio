import React from 'react';
import { GraduationCap, Award, CheckCircle } from 'lucide-react';
import TiltCard from './TiltCard';

export default function EducationCertifications({ isZeroG }) {
  const certifications = [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      meta: "Credential ID: 322304644OCI25AICFA | Issued Sep 2025"
    },
    {
      title: "Google Tech Equity Collective Member",
      meta: "Professional development & cloud infrastructure collective"
    },
    {
      title: "GSSoC Contributor Certificate - 2025",
      meta: "Open source contributions to core repositories | Issued Oct 2025"
    },
    {
      title: "Data Science Job Simulation",
      meta: "BCGX Forage | Issued Aug 2024"
    }
  ];

  return (
    <section id="education" className="relative py-32 px-6 md:px-12 max-w-6xl mx-auto z-10 border-b border-white/5">
      {/* Section Header */}
      <div className="text-left mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-[#06b6d4] font-semibold">// 07_ACADEMICS</span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-2 mb-4 font-sans tracking-tight">
          Education & Credentials
        </h2>
        <div className="h-[2px] w-24 bg-[#06b6d4]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* Left Column: Education */}
        <TiltCard isZeroG={isZeroG} className="bg-white/5 border border-white/10 rounded-2xl h-full flex flex-col justify-between">
          <div className="text-left space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-white/5">
              <span className="p-2.5 bg-[#06b6d4]/10 border border-[#06b6d4]/25 rounded-xl text-[#06b6d4]">
                <GraduationCap className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-white leading-none">Education</h3>
                <span className="text-[10px] font-mono text-slate-500">Academic Background</span>
              </div>
            </div>

            <div className="space-y-6">
              {/* SDMIT BE */}
              <div className="border-b border-white/5 pb-4 last:border-b-0 last:pb-0">
                <span className="text-[9px] font-mono text-[#06b6d4] uppercase tracking-wider block font-semibold">2021 - 2025</span>
                <h4 className="text-sm font-bold text-white mt-1">BE in Artificial Intelligence & Data Science</h4>
                <p className="text-xs text-slate-400 font-mono">SDM Institute of Technology, Ujire</p>
                <ul className="space-y-1.5 text-[11px] text-white/60 list-none mt-2">
                  <li className="flex gap-2 items-start font-sans leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-[#06b6d4] mt-1.5 flex-shrink-0" />
                    <span>Visvesvaraya Technological University (VTU) curriculum.</span>
                  </li>
                  <li className="flex gap-2 items-start font-sans leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-[#06b6d4] mt-1.5 flex-shrink-0" />
                    <span>Represented the varsity football team & National Service Scheme (NSS) volunteer.</span>
                  </li>
                </ul>
              </div>

              {/* SDM PU College */}
              <div className="border-b border-white/5 pb-4 last:border-b-0 last:pb-0">
                <span className="text-[9px] font-mono text-[#06b6d4] uppercase tracking-wider block font-semibold">2019 - 2021</span>
                <h4 className="text-sm font-bold text-white mt-1">Pre-University (Science - PCMB)</h4>
                <p className="text-xs text-slate-400 font-mono">Shree Dharmasthala Manjunateshwara Pre-University College</p>
              </div>

              {/* Morarji Desai School */}
              <div>
                <span className="text-[9px] font-mono text-[#06b6d4] uppercase tracking-wider block font-semibold">Higher Secondary School</span>
                <h4 className="text-sm font-bold text-white mt-1">Secondary School Certification</h4>
                <p className="text-xs text-slate-400 font-mono">Morarji Desai Residential School</p>
                <ul className="space-y-1.5 text-[11px] text-white/60 list-none mt-2">
                  <li className="flex gap-2 items-start font-sans leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-[#06b6d4] mt-1.5 flex-shrink-0" />
                    <span>Represented the school in volleyball, kabaddi, and javelin throw.</span>
                  </li>
                  <li className="flex gap-2 items-start font-sans leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-[#06b6d4] mt-1.5 flex-shrink-0" />
                    <span>Participated in district-level cultural group performance ("Veergase" team).</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </TiltCard>

        {/* Right Column: Certifications */}
        <TiltCard isZeroG={isZeroG} className="bg-white/5 border border-white/10 rounded-2xl h-full flex flex-col justify-between">
          <div className="text-left space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-white/5">
              <span className="p-2.5 bg-[#06b6d4]/10 border border-[#06b6d4]/25 rounded-xl text-[#06b6d4]">
                <Award className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-white leading-none">Featured Certifications</h3>
                <span className="text-[10px] font-mono text-slate-500">Verified Qualifications</span>
              </div>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex gap-3 items-start border-b border-white/5 pb-3.5 last:border-b-0 last:pb-0">
                  <CheckCircle className="w-4 h-4 text-[#06b6d4] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-white font-sans leading-tight">
                      {cert.title}
                    </h4>
                    <span className="text-[9px] font-mono text-slate-400 block mt-1">
                      {cert.meta}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TiltCard>

      </div>
    </section>
  );
}
