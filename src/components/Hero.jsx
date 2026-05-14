import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Download } from 'lucide-react';
import avatarImg from '../assets/avatar.jpeg';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Decorative background blurs specifically for hero */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-blue/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 relative z-10">
        
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left mt-10 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-brand-pink font-mono mb-4 tracking-wider uppercase text-sm drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]"
          >
            Accessing Neural Link...
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl sm:text-7xl font-extrabold text-brand-white mb-2 tracking-tight"
          >
            Pooja Kumari.
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl sm:text-5xl font-bold mb-2 text-gradient pb-2"
          >
            Data Analyst
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mb-8"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-blue font-semibold text-sm shadow-[0_0_10px_rgba(59,130,246,0.2)]">
              🚀 Open to Data Analyst Internships & Entry-Level Roles
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-xl mx-auto lg:mx-0 text-lg text-brand-gray mb-10 leading-relaxed"
          >
            Final-year Computer Science (Data Science) student specializing in predictive modeling, EDA, dashboards, and data storytelling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6"
          >
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="relative inline-flex group cursor-pointer"
            >
              <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-brand-purple via-brand-pink to-brand-blue rounded-full blur-md group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
              <button 
                className="relative inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-brand-white transition-all duration-200 bg-brand-black border border-white/10 rounded-full hover:bg-brand-purple-dark/50"
              >
                View Projects
              </button>
            </Link>
            
            <a
              href="#contact"
              className="relative inline-flex group cursor-pointer"
            >
              <button 
                className="relative inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-brand-white transition-all duration-200 bg-transparent border border-white/20 rounded-full hover:bg-white/5"
              >
                Contact Me
              </button>
            </a>

            <a
              href="https://drive.google.com/file/d/1TNzLY6l5cGi9BDLFUhRZj_UyhbvTZETC/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex group cursor-pointer w-full sm:w-auto mt-2 sm:mt-0"
            >
              <button 
                className="w-full relative inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-brand-white transition-all duration-200 bg-brand-purple/20 border border-brand-purple/50 rounded-full hover:bg-brand-purple"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </button>
            </a>
          </motion.div>
        </div>

        {/* Profile Visualization */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple to-brand-blue rounded-full blur-3xl opacity-20"></div>
          <div className="relative w-full h-full rounded-full border border-white/10 glass-panel flex items-center justify-center overflow-hidden">
            <img 
              src={avatarImg} 
              alt="Pooja Kumari" 
              className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
