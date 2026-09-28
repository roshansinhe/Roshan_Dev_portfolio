import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Building2, Menu, X } from 'lucide-react';
import logoImg from '../../public/logo.png'; // <--- DIRECT IMPORT

export default function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo & Brand Name */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl overflow-hidden border border-cyan-500/30 flex-shrink-0 bg-slate-900">
            <img 
              src={logoImg} 
              alt="Logo" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors leading-none">
              Roshan Sinhe
            </span>
            <span className="text-[11px] font-mono text-slate-400 leading-tight mt-1">
              Chief Architect
            </span>
          </div>
        </Link>

        {/* Links & Buttons */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
          <Link to="/" className={`transition hover:text-cyan-400 ${isActive('/') ? 'text-cyan-400 font-semibold' : ''}`}>Overview</Link>
          <Link to="/indus" className={`transition hover:text-cyan-400 flex items-center gap-1.5 ${isActive('/indus') ? 'text-cyan-400 font-semibold' : ''}`}>
            <Building2 className="w-4 h-4 text-cyan-400" />
            INDUS Innovation Labs
          </Link>
          <Link to="/projects" className={`transition hover:text-cyan-400 ${isActive('/projects') ? 'text-cyan-400 font-semibold' : ''}`}>SDKs & Apps</Link>
          <Link to="/resume" className={`transition hover:text-cyan-400 ${isActive('/resume') ? 'text-cyan-400 font-semibold' : ''}`}>Resume</Link>
        </div>

        <a 
          href="mailto:roshan.sinhe04@gmail.com" 
          className="px-4 py-2 text-xs font-semibold rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 transition"
        >
          Contact Me
        </a>
      </div>
    </nav>
  );
}