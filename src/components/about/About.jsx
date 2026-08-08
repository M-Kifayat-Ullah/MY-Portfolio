import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';

export const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-[#0b0f17]/60">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            About <span className="text-[#00ff88]">Me</span>
          </h2>
          <div className="w-16 h-1 bg-[#00ff88] mx-auto mt-2 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4 text-slate-300 text-lg leading-relaxed"
          >
            <p>
              I am a passionate <span className="text-white font-semibold">Backend & AI Engineer</span> based in Rawalpindi, specializing in building scalable web architectures with Python and Django.
            </p>
            <p className="text-slate-400 text-base">
              From designing hyper-local e-commerce backend schemas to implementing custom computer vision algorithms for disease detection, I focus on writing clean, efficient, and production-ready code.
            </p>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-4"
          >
            <div className="p-6 bg-[#111827] border border-slate-800 rounded-xl text-center hover:border-[#00ff88]/50 transition-all">
              <h3 className="text-3xl font-bold text-[#00ff88] font-mono">{personalInfo.stats.experienceYears}+</h3>
              <p className="text-xs text-slate-400 mt-2 font-medium">Years Experience</p>
            </div>

            <div className="p-6 bg-[#111827] border border-slate-800 rounded-xl text-center hover:border-[#00ff88]/50 transition-all">
              <h3 className="text-3xl font-bold text-[#00ff88] font-mono">{personalInfo.stats.projectsCompleted}+</h3>
              <p className="text-xs text-slate-400 mt-2 font-medium">Projects Done</p>
            </div>

            <div className="p-6 bg-[#111827] border border-slate-800 rounded-xl text-center hover:border-[#00ff88]/50 transition-all">
              <h3 className="text-3xl font-bold text-[#00ff88] font-mono">{personalInfo.stats.happyClients}+</h3>
              <p className="text-xs text-slate-400 mt-2 font-medium">Happy Clients</p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};