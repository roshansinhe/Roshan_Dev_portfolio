import React from 'react';
import { ExternalLink, Building2, Smartphone, ShieldCheck, Zap, Globe } from 'lucide-react';

export default function IndusLabs() {
  const companyServices = [
    {
      title: "Native & Cross-Platform App Development",
      description: "Custom iOS and Android solutions engineered for maximum performance, offline reliability, and intuitive UI."
    },
    {
      title: "Custom SDK & Systems Development",
      description: "Modular SDKs for fintech, navigation, and hardware integration, built to plug seamlessly into third-party apps."
    },
    {
      title: "Enterprise Architecture & Consulting",
      description: "Designing scalable MVVM / Clean architecture blueprints, CI/CD pipelines, and security implementations."
    }
  ];

  return (
    <div className="pt-24 pb-16 max-w-6xl mx-auto px-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-cyan-950/30 to-slate-900 border border-cyan-500/20 rounded-2xl p-8 sm:p-12 mb-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold mb-4">
              <Building2 className="w-4 h-4" /> Co-Founded Studio
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              INDUS Innovation Labs
            </h1>
            <p className="text-slate-300 text-base sm:text-lg mt-2 max-w-2xl">
              Engineering high-performance mobile applications, enterprise software architectures, and custom SDK solutions.
            </p>
          </div>
          <a 
            href="https://indusinnovationlabs.com/" 
            target="_blank" 
            rel="noreferrer"
            className="px-6 py-3 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition flex items-center gap-2 text-sm shrink-0"
          >
            Visit Website
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Chief Architect Role Overview */}
      <div className="grid md:grid-cols-12 gap-8 mb-16">
        <div className="md:col-span-8 bg-slate-900/40 border border-slate-800 rounded-xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white mb-4">My Role as Chief Architect</h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-4">
            At INDUS Innovation Labs, I lead technology strategies, define system architecture blueprints, and oversee mobile development cycles across iOS and Android platforms .
          </p>
          <ul className="space-y-3 text-slate-300 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Directing core engineering decisions across client and internal product lines .</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Designing scalable SDKs, backend integrations, and offline-first mobile apps .</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Managing full lifecycle app store launches, CI/CD automation, and technical governance .</span>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4 bg-slate-900/40 border border-slate-800 rounded-xl p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Company Quick Facts</h3>
            <div className="space-y-4 text-xs text-slate-400 mt-4">
              <div>
                <span className="block font-semibold text-slate-200">Domain</span>
                <span>Mobile Software Development & Architecture</span>
              </div>
              <div>
                <span className="block font-semibold text-slate-200">Core Tech</span>
                <span>Kotlin, Swift, Flutter, React, Firebase, REST APIs</span>
              </div>
              <div>
                <span className="block font-semibold text-slate-200">Location</span>
                <span>Nagpur, India </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Showcase */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Our Engineering Capabilities</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {companyServices.map((svc, idx) => (
            <div key={idx} className="bg-slate-900/30 border border-slate-800/80 rounded-xl p-6 hover:border-slate-700 transition">
              <h3 className="text-lg font-bold text-cyan-400 mb-2">{svc.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{svc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}