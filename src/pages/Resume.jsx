import React from 'react';
import { Mail, MapPin, Download, ExternalLink, Briefcase, GraduationCap, Code } from 'lucide-react';

export default function Resume() {
  // Direct download & preview links for Google Drive file
  const resumeDownloadUrl = "https://drive.google.com/uc?export=download&id=1_y6k0LcEO_F-nLgarl5B0Dci8gEFsTxX";
  const resumeViewUrl = "https://drive.google.com/file/d/1_y6k0LcEO_F-nLgarl5B0Dci8gEFsTxX/view?usp=sharing";

  const experiences = [
    {
      role: "Chief Architect & Co-Founder",
      company: "INDUS Innovation Labs",
      period: "Present",
      location: "Miami, FL, USA (Remote)",
      points: [
        "Directing technical architecture and mobile application strategies across cross-functional engineering teams.",
        "Overseeing full lifecycle client deployments, SDK designs, and mobile platform innovations."
      ]
    },
    {
      role: "Android Developer",
      company: "SKO Systems PVT Ltd",
      period: "Jul 2023 - Present",
      location: "Pune, India (Remote)",
      points: [
        "Enhanced app stability by analyzing crash patterns, achieving a 40% reduction in crashes.",
        "Engineered scalable MVVM architecture, enhancing maintainability and reducing dev time by 25%.",
        "Engaged in 1-month onsite client deployment in Miami, USA to refine app functionalities."
      ]
    },
    {
      role: "SDE-1 (Android Developer)",
      company: "GeoSpoc Geospatial Services (An OLA Company)",
      period: "Sep 2022 - Jun 2023",
      location: "Pune, India",
      points: [
        "Built Android HMI solutions for navigation projects, improving system responsiveness by 30%.",
        "Integrated GPS, map engines, and sensors to reduce location discrepancies by 25%."
      ]
    },
    {
      role: "Software Engineer - II",
      company: "Bajaj Finserv Direct Limited",
      period: "Mar 2020 - Sep 2022",
      location: "Pune, India",
      points: [
        "Contributed to 5+ high-volume fintech applications used by millions.",
        "Delivered 3+ SDK releases adopted by client applications.",
        "Improved offline data retrieval speeds by 40% using Room DB."
      ]
    }
  ];

  return (
    <div className="pt-24 pb-16 max-w-4xl mx-auto px-6">
      {/* Resume Header */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-8 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-white">Roshan Sinhe</h1>
          <p className="text-cyan-400 font-medium text-sm mt-1">Chief Architect & Mobile Systems Engineer</p>
          <div className="flex flex-wrap gap-4 text-xs text-slate-400 mt-3">
            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-cyan-400" /> Nagpur, Maharashtra, India</span>
            <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-cyan-400" /> roshan.sinhe04@gmail.com</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <a 
            href={resumeDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none px-4 py-2.5 rounded-lg bg-cyan-500 text-slate-950 font-semibold text-xs hover:bg-cyan-400 transition flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </a>

          <a 
            href={resumeViewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-xs hover:bg-slate-700 hover:text-white transition flex items-center justify-center gap-2"
          >
            <ExternalLink className="w-4 h-4 text-cyan-400" />
            Preview
          </a>
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-cyan-400" />
          Professional Experience
        </h2>
        
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-slate-900/30 border border-slate-800/80 rounded-xl p-6">
              <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                <div>
                  <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                  <p className="text-cyan-400 text-sm">{exp.company}</p>
                </div>
                <span className="text-xs font-mono text-slate-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700/50">
                  {exp.period} | {exp.location}
                </span>
              </div>
              <ul className="mt-3 space-y-2 text-slate-400 text-sm">
                {exp.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Education & Personal */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-900/30 border border-slate-800/80 rounded-xl p-6">
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-cyan-400" />
            Education
          </h2>
          <div className="space-y-4 text-sm text-slate-300">
            <div>
              <strong className="block text-white">PG-Diploma in Mobile Computing</strong>
              <span className="text-xs text-slate-400">CDAC-Sunbeam Institute of Technology (2019-2020)</span>
            </div>
            <div>
              <strong className="block text-white">B.E. in Computer Technology</strong>
              <span className="text-xs text-slate-400">RTMNU Nagpur (2015-2019)</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/30 border border-slate-800/80 rounded-xl p-6">
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Code className="w-5 h-5 text-cyan-400" />
            Core Technologies
          </h2>
          <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300">
            {["Android SDK", "Kotlin", "Java", "Jetpack Compose", "MVVM", "Clean", "RoomDB", "Retrofit", "Hilt", "MLKit", "BLE", "WebSockets", "CI/CD", "Git"].map((sk, sIdx) => (
              <span key={sIdx} className="bg-slate-800 border border-slate-700/50 px-2.5 py-1 rounded">
                {sk}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}