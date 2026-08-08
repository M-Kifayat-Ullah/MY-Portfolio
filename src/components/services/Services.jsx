import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../../data/portfolioData';

export const Services = () => {
  return (
    <section id="services" className="py-20 px-6 bg-[#0b0f17]/80">
      <div className="max-w-6xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            My <span className="text-[#00ff88]">Services</span>
          </h2>
          <div className="w-16 h-1 bg-[#00ff88] mx-auto mt-2 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-[#111827] border border-slate-800 rounded-xl hover:border-[#00ff88]/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};