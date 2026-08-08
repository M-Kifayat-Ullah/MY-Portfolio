import React from 'react';
import { motion } from 'framer-motion';
import { experiences, education } from '../../data/portfolioData';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Work Experience */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-2">
                Work <span className="text-[#00ff88]">Experience</span>
              </h2>
              <div className="w-12 h-1 bg-[#00ff88] rounded-full" />
            </motion.div>

            <div className="space-y-6 border-l-2 border-slate-800 pl-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <span className="absolute -left-7.75 top-1.5 w-3 h-3 bg-[#00ff88] rounded-full border-4 border-[#0b0f17]" />
                  
                  <span className="text-xs font-mono text-[#00ff88]">{exp.period}</span>
                  <h3 className="text-lg font-bold text-white mt-1">{exp.role}</h3>
                  <p className="text-sm font-semibold text-slate-400 mb-2">{exp.company}</p>
                  <p className="text-sm text-slate-400 leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-2">
                Academic <span className="text-[#00ff88]">Education</span>
              </h2>
              <div className="w-12 h-1 bg-[#00ff88] rounded-full" />
            </motion.div>

            <div className="space-y-6 border-l-2 border-slate-800 pl-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <span className="absolute -left-7.75 top-1.5 w-3 h-3 bg-[#00ff88] rounded-full border-4 border-[#0b0f17]" />
                  
                  <span className="text-xs font-mono text-[#00ff88]">{edu.period}</span>
                  <h3 className="text-lg font-bold text-white mt-1">{edu.degree}</h3>
                  <p className="text-sm font-semibold text-slate-400">{edu.institution}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};