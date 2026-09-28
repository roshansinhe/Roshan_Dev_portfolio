import React, { useState } from 'react';
import { Smartphone, Layers, ExternalLink } from 'lucide-react';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('all');

  const projects = [
    {
      title: "CCL SEAID & mBark Revamp",
      category: "enterprise",
      description: "Architected enterprise applications with Kotlin, Jetpack Compose, and MLKit (face recognition & barcode scanning). Built offline-first capabilities using RoomDB and robust security protocols .",
      tech: ["Kotlin", "Jetpack Compose", "Room DB", "MLKit", "MVVM"],
      impact: "Reduced offline sync issues & improved user workflow efficiency."
    },
    {
      title: "Navigation SDK (OLA Scooter HMI)",
      category: "sdks",
      description: "Designed navigation SDK for vehicle HMI displays with real-time location tracking, route rendering APIs, and dark/light modes using IPC mechanisms .",
      tech: ["Kotlin", "Hilt", "IPC", "Routing APIs", "MVVM"],
      impact: "Reduced location discrepancies by 25% and improved responsiveness by 30% ."
    },
    {
      title: "Fintech SDK Suite (Mutual Fund & Digi Gold)",
      category: "sdks",
      description: "Built modular, highly secure SDKs adopted by multiple client applications across the financial domain, incorporating MPChart for real-time visualization .",
      tech: ["Android SDK", "Kotlin", "Hilt", "Retrofit", "Security"],
      impact: "Delivered 3+ SDK releases serving millions of end users ."
    },
    {
      title: "Muster Mobile & Service Suite App",
      category: "enterprise",
      description: "Emergency management and crew cabin systems for cruise lines featuring real-time WebSocket communication, BLE data exchange, and offline support .",
      tech: ["BLE", "WebSockets", "MLKit", "Scoped Storage", "Kotlin"],
      impact: "Enabled reliable real-time coordination without active internet connectivity ."
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="pt-24 pb-16 max-w-6xl mx-auto px-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white mb-2">Systems, SDKs & Applications</h1>
          <p className="text-slate-400 text-sm">Key enterprise platforms, navigation engines, and SDKs engineered across my career .</p>
        </div>
        <div className="flex gap-2 bg-slate-900 p-1 rounded-lg border border-slate-800 self-start">
          <button 
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition ${activeTab === 'all' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
          >
            All Work
          </button>
          <button 
            onClick={() => setActiveTab('sdks')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition ${activeTab === 'sdks' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
          >
            SDKs & HMI
          </button>
          <button 
            onClick={() => setActiveTab('enterprise')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition ${activeTab === 'enterprise' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
          >
            Enterprise Apps
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filteredProjects.map((proj, idx) => (
          <div key={idx} className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/40 transition flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded border border-cyan-500/20">
                  {proj.category}
                </span>
                <Smartphone className="w-5 h-5 text-slate-500" />
              </div>
              <h2 className="text-xl font-bold text-white mb-2">{proj.title}</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{proj.description}</p>
            </div>

            <div>
              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80 mb-4 text-xs text-slate-300">
                <strong className="text-cyan-400 font-semibold">Key Impact:</strong> {proj.impact}
              </div>
              <div className="flex flex-wrap gap-2">
                {proj.tech.map((t, tIdx) => (
                  <span key={tIdx} className="text-xs font-mono bg-slate-800 text-slate-300 px-2.5 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}