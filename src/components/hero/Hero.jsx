import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Download, ArrowRight } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6 relative">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start space-y-6"
        >
          <div className="inline-block px-3 py-1 bg-[#1a5c2a]/30 border border-[#00ff88]/40 rounded-full text-[#00ff88] text-sm font-mono">
            Welcome to my portfolio
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Hi, I'm <span className="text-[#00ff88]">{personalInfo.name}</span>
          </h1>

          <div className="text-2xl sm:text-3xl font-mono text-slate-300 h-12 flex items-center">
            <span className="mr-3">I am a</span>
            <span className="text-[#00ff88] underline font-semibold">
              <Typewriter
                words={personalInfo.roles}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </div>

          <p className="text-slate-400 text-base sm:text-lg max-w-lg leading-relaxed">
            {personalInfo.bio}
          </p>

          {/* Call To Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-[#00ff88] text-[#0b0f17] font-semibold hover:bg-emerald-400 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-[#00ff88]/20"
            >
              Hire Me <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 rounded-lg bg-[#111827] border border-slate-700 hover:border-[#00ff88] text-slate-200 transition-all duration-300 flex items-center gap-2"
            >
              Download CV <Download className="w-4 h-4" />
            </a>
          </div>

          {/* Social Icons (Clean Inline SVGs) */}
          <div className="flex items-center gap-4 pt-4">
            {/* GitHub */}
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noreferrer"
              className="p-3 bg-[#111827] border border-slate-800 rounded-full text-slate-400 hover:text-[#00ff88] hover:border-[#00ff88] transition-all duration-300"
              title="GitHub"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="p-3 bg-[#111827] border border-slate-800 rounded-full text-slate-400 hover:text-[#00ff88] hover:border-[#00ff88] transition-all duration-300"
              title="LinkedIn"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.239-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Profile Image Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center relative"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-2 border-[#00ff88]/50 p-2 bg-linear-to-b from-[#1a5c2a]/20 to-transparent">
            <div className="w-full h-full rounded-xl overflow-hidden bg-slate-800">
              <img 
                src="/profile-new.png" 
                alt={personalInfo.name} 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#00ff88]/10 rounded-full blur-xl -z-10" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};