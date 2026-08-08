import React from 'react';
import { Navbar } from './components/navbar/Navbar';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Skills } from './components/skills/Skills';
import { Projects } from './components/projects/Projects';
import { Experience } from './components/experience/Experience';
import { Services } from './components/services/Services';
import { Contact } from './components/contact/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Contact />
      </main>
      
      <footer className="py-6 border-t border-slate-800 text-center text-slate-500 text-xs font-mono">
        © {new Date().getFullYear()} Kifayat Ullah Younis. Built with React, Vite & Tailwind CSS.
      </footer>
    </div>
  );
}

export default App;