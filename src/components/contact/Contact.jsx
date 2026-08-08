import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../../data/portfolioData';

export const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'service_z1t1s67',   // Apni Service ID paste karein
      'template_c5bbf7r',  // Apni Template ID paste karein
      formRef.current, 
      'HSxCO74TMraXkUrR0'    // Apni Public Key paste karein
    )
    .then(() => {
        setLoading(false);
        setStatus('Message sent successfully! I will get back to you soon.');
        formRef.current.reset();
    }, (error) => {
        setLoading(false);
        setStatus('Failed to send message. Please try again.');
        console.error(error);
    });
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Get In <span className="text-[#00ff88]">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-[#00ff88] mx-auto mt-2 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Let's work together</h3>
            <p className="text-slate-400 leading-relaxed">
              Have a project in mind or looking for a backend / AI engineer? Send a message directly.
            </p>

            <div className="space-y-4 pt-4">
              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#111827] border border-slate-800 rounded-lg text-[#00ff88]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs text-slate-400 uppercase font-mono">Location</h4>
                  <p className="text-slate-200 font-semibold">{personalInfo.location}</p>
                </div>
              </div>

              {/* Email Direct */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#111827] border border-slate-800 rounded-lg text-[#00ff88]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs text-slate-400 uppercase font-mono">Email Direct</h4>
                  <p className="text-slate-200 font-semibold">{personalInfo.email}</p>
                </div>
              </div>

              {/* WhatsApp Direct (Email ke neechy) */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#111827] border border-slate-800 rounded-lg text-[#00ff88]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs text-slate-400 uppercase font-mono">WhatsApp Direct</h4>
                  <a 
                    href={`https://wa.me/${personalInfo.whatsapp ? personalInfo.whatsapp.replace(/[^0-9]/g, '') : ''}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-200 font-semibold hover:text-[#00ff88] transition-colors"
                  >
                    {personalInfo.whatsapp}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form ref={formRef} onSubmit={sendEmail} className="space-y-4 bg-[#111827] p-6 border border-slate-800 rounded-xl">
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">Your Name</label>
              <input 
                type="text" 
                name="user_name"
                required
                className="w-full bg-[#0b0f17] border border-slate-800 rounded-lg p-3 text-slate-100 focus:outline-none focus:border-[#00ff88]" 
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">Your Email</label>
              <input 
                type="email" 
                name="user_email"
                required
                className="w-full bg-[#0b0f17] border border-slate-800 rounded-lg p-3 text-slate-100 focus:outline-none focus:border-[#00ff88]" 
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">Subject</label>
              <input 
                type="text" 
                name="subject"
                required
                className="w-full bg-[#0b0f17] border border-slate-800 rounded-lg p-3 text-slate-100 focus:outline-none focus:border-[#00ff88]" 
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">Message</label>
              <textarea 
                name="message"
                rows="4" 
                required
                className="w-full bg-[#0b0f17] border border-slate-800 rounded-lg p-3 text-slate-100 focus:outline-none focus:border-[#00ff88]" 
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#00ff88] text-[#0b0f17] font-semibold rounded-lg hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send Message'} <Send className="w-4 h-4" />
            </button>
            {status && <p className="text-xs text-center font-mono text-[#00ff88] mt-2">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};