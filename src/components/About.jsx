import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Briefcase, BarChart } from 'lucide-react';
import avatarImg from '../assets/avatar.jpeg';

const About = () => {
  const infoChips = [
    { icon: <MapPin className="w-4 h-4 text-brand-pink" />, text: "Hyderabad" },
    { icon: <GraduationCap className="w-4 h-4 text-brand-purple" />, text: "B.Tech Data Science" },
    { icon: <Briefcase className="w-4 h-4 text-brand-blue" />, text: "Open to Internships" },
    { icon: <BarChart className="w-4 h-4 text-brand-purple" />, text: "Data Analyst" },
  ];

  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <div className="mb-16 relative text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-white tracking-tight flex items-end justify-center lg:justify-start">
            <span className="text-brand-purple font-mono text-2xl font-normal mr-4 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">01.</span>
            About Me
          </h2>
          <div className="mt-4 h-[2px] w-48 bg-gradient-to-r from-brand-purple to-transparent shadow-[0_0_10px_rgba(168,85,247,0.8)] mx-auto lg:mx-0"></div>
          {/* Floating light */}
          <div className="absolute -top-10 left-1/2 lg:-left-10 w-32 h-32 bg-brand-purple/20 rounded-full mix-blend-screen filter blur-[50px] opacity-50 animate-pulse -translate-x-1/2 lg:translate-x-0"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-16">
          {/* Text Content (Max 650px) */}
          <div className="relative group w-full max-w-[650px] order-2 lg:order-1">
            {/* Animated glowing border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-purple to-brand-blue rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative h-full glass-panel p-8 md:p-10 rounded-2xl text-brand-gray space-y-6 text-lg leading-relaxed shadow-2xl">
              
              <div className="flex flex-wrap gap-3 mb-6">
                {infoChips.map((chip, index) => (
                  <div key={index} className="flex items-center gap-2 bg-brand-black/50 border border-brand-purple/20 px-3 py-1.5 rounded-full text-sm font-medium text-brand-white">
                    {chip.icon}
                    {chip.text}
                  </div>
                ))}
              </div>

              <p className="text-brand-white">
                Hello! My name is Pooja and I specialize in deciphering patterns within complex data structures. My interest in analytics began in 2022 when I initiated my B.Tech in Computer Science with a core focus on <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-pink to-brand-blue font-bold drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]">Data Science</span>.
              </p>
              
              <div className="h-[1px] w-full bg-gradient-to-r from-brand-purple/30 to-transparent"></div>
              
              <p>
                Currently operating at <span className="text-white font-medium">MRIET, Hyderabad</span> (CGPA: 8.37), scheduled for full system deployment in May 2026. My runtime environment is optimized for <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-purple font-bold drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">Python</span>, <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-purple font-bold drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">SQL</span>, and <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-purple font-bold drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">Machine Learning</span> models.
              </p>
              
              <p>
                I have executed internships at <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-pink to-brand-purple font-bold drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]">Infosys Springboard</span> and <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-pink to-brand-purple font-bold drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]">Viswam.AI</span>. My core directives involve data storytelling, <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-pink font-bold drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">EDA</span>, and deriving predictive insights to solve complex real-world anomalies.
              </p>
            </div>
          </div>
          
          {/* Glowing Profile Card */}
          <div className="relative group flex items-center justify-center order-1 lg:order-2">
            {/* Holographic Image Container */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-purple to-brand-blue rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative w-64 md:w-80 aspect-[4/5] rounded-2xl overflow-hidden glass-panel group-hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all duration-500">
              
              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] z-20 pointer-events-none opacity-50 mix-blend-overlay"></div>
              
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/10 to-brand-blue/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
              
              <div className="w-full h-full flex flex-col items-center justify-center relative z-0 overflow-hidden">
                <img 
                  src={avatarImg} 
                  alt="Pooja's Avatar" 
                  className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 transform group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
