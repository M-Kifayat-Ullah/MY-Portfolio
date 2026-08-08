import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-darkBg/80 backdrop-blur-md border-b border-slate-800/80 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
       <a href="#hero" className="flex items-center gap-2 group">
       <div className="w-9 h-9 rounded-lg bg-[#111827] border border-slate-800 group-hover:border-[#00ff88] flex items-center justify-center transition-all duration-300">
    <span className="font-mono text-base font-bold text-[#00ff88]">MKY</span>
  </div>
  <div className="flex flex-col">
    <span className="font-bold text-[#00ff88] text-base leading-none tracking-wide">
      Kifayat <span className="text-white">Younis</span>
    </span>
    <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase mt-1">
      Backend Engineer
    </span>
  </div>
  </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-accent transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-2 text-sm font-semibold text-darkBg bg-accent hover:bg-emerald-400 rounded-md transition-all duration-200"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-accent focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden bg-cardBg border-b border-slate-800 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base text-slate-300 hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};