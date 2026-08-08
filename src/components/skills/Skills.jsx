import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/portfolioData';

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Technical <span className="text-[#00ff88]">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-[#00ff88] mx-auto mt-2 rounded-full" />
        </motion.div>

        {/* Skills List with Progress Bars */}
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#111827] p-4 rounded-lg border border-slate-800"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-slate-200">{skill.name}</span>
                <span className="font-mono text-sm text-[#00ff88]">{skill.level}%</span>
              </div>

              {/* Progress Bar Container */}
              <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="h-full bg-linear-to-r from-[#1a5c2a] to-[#00ff88] rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};