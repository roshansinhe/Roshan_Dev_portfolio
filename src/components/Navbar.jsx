import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Terminal, Layers, FolderGit2, FileText, Building2 } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
          <Terminal className="text-cyan-400 w-5 h-5" />
          <span>Roshan Sinhe</span>
        </Link>
        
        <div className="hidden md:flex gap-6 text-sm font-medium text-slate-400">
          <Link 
            to="/" 
            className={`transition hover:text-cyan-400 ${isActive('/') ? 'text-cyan-400 font-semibold' : ''}`}
          >
            Overview
          </Link>
          <Link 
            to="/indus" 
            className={`transition hover:text-cyan-400 flex items-center gap-1.5 ${isActive('/indus') ? 'text-cyan-400 font-semibold' : ''}`}
          >
            <Building2 className="w-4 h-4 text-cyan-400" />
            INDUS Innovation Labs
          </Link>
          <Link 
            to="/projects" 
            className={`transition hover:text-cyan-400 ${isActive('/projects') ? 'text-cyan-400 font-semibold' : ''}`}
          >
            SDKs & Apps
          </Link>
          <Link 
            to="/resume" 
            className={`transition hover:text-cyan-400 ${isActive('/resume') ? 'text-cyan-400 font-semibold' : ''}`}
          >
            Resume
          </Link>
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