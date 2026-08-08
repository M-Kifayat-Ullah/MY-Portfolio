import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import { projects } from '../../data/portfolioData';

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-[#0b0f17]/80">
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
            Featured <span className="text-[#00ff88]">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-[#00ff88] mx-auto mt-2 rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#111827] border border-slate-800 rounded-xl overflow-hidden hover:border-[#00ff88]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00ff88]">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 bg-[#1a5c2a]/40 border border-[#00ff88]/40 text-[#00ff88] text-xs font-mono rounded-full">
                    {project.badge}
                  </span>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2.5 py-1 bg-slate-800 text-slate-300 text-xs font-mono rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 py-4 bg-slate-900/50 border-t border-slate-800/80 flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-[#00ff88] transition-colors"
                >
                  <Code2 className="w-4 h-4" /> Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-[#00ff88] transition-colors"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};