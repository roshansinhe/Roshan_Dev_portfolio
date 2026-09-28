import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Globe, 
  MapPin, 
  Award, 
  Smartphone, 
  Layers, 
  Code, 
  Building2,
  ExternalLink 
} from 'lucide-react';

export default function Home() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Chief Architect @ Indus Innovation Labs
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Architecting High-Scale <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Mobile Systems</span> & SDKs
            </h1>
            
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Mobile Systems Engineer with 5.5+ years of experience leading mobile architecture, SDK engineering, and fintech/enterprise app development[cite: 1]. Currently co-founding and directing engineering at <Link to="/indus" className="text-cyan-400 underline underline-offset-4 hover:text-cyan-300">Indus Innovation Labs</Link>[cite: 1].
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Link 
                to="/projects" 
                className="px-6 py-3 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/20 flex items-center gap-2 text-sm"
              >
                View Systems & Apps
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/indus" 
                className="px-6 py-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-semibold hover:bg-slate-800 transition flex items-center gap-2 text-sm"
              >
                <Building2 className="w-4 h-4 text-cyan-400" />
                INDUS Innovation Labs
              </Link>
            </div>

            <div className="flex items-center gap-6 text-xs text-slate-400 pt-4 border-t border-slate-800/80">
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-cyan-400"/> Nagpur / Pune, India[cite: 1]</span>
              <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-cyan-400"/> USA B1/B2 Valid Visa[cite: 1]</span>
            </div>
          </div>

          {/* Terminal / Code Box */}
          <div className="md:col-span-5">
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 shadow-2xl backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs text-slate-500 font-mono">
                <span className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                </span>
                <span>IndusArchitect.kt</span>
              </div>
              <pre className="mt-4 text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed">
                <code>{`object IndusArchitect {
    val name = "Roshan Sinhe"
    val role = "Chief Architect"
    val company = "Indus Innovation Labs"
    val experience = "5.5+ Years"

    val coreStack = listOf(
        "Android SDK", "Kotlin", "Java",
        "Jetpack Compose", "MVVM/Clean",
        "RoomDB", "Hilt", "MLKit", "BLE"
    )

    fun status() = "Building Next-Gen Mobile Solutions"
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-slate-900">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-xl">
            <Smartphone className="w-8 h-8 text-cyan-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Native Mobile Systems</h3>
            <p className="text-slate-400 text-sm">Deep expertise in Kotlin, Jetpack Compose, MVVM/Clean Architecture, and offline-first RoomDB engines[cite: 1].</p>
          </div>
          <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-xl">
            <Layers className="w-8 h-8 text-cyan-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Modular SDKs & HMI</h3>
            <p className="text-slate-400 text-sm">Architected Navigation SDKs for vehicle HMI displays and reusable Fintech SDK suites adopted by millions[cite: 1].</p>
          </div>
          <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-xl">
            <Building2 className="w-8 h-8 text-cyan-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Technical Leadership</h3>
            <p className="text-slate-400 text-sm">Co-founder and Chief Architect at INDUS Innovation Labs, leading mobile product design and client deployments[cite: 1].</p>
          </div>
        </div>
      </section>
    </div>
  );
}