import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import GlassCard from './GlassCard';

const certificates = [
  {
    title: "SQL Certification (Advanced)",
    issuer: "HackerRank",
    highlight: "Advanced Queries",
    glow: "pink",
    link: "https://drive.google.com/file/d/1dDH7p7N9zWstUSkkskxGd9YuEYGdlFrr/view?usp=sharing"
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte (Forage)",
    highlight: "Real-world Project",
    glow: "blue",
    link: "https://drive.google.com/file/d/1UhN3vPv3GH7tL9DF98mr-pSJ9YUBBMQ8/view?usp=sharing"
  },
  {
    title: "Data Science Job Simulation",
    issuer: "British Airways (Forage)",
    highlight: "Industry Simulation",
    glow: "blue",
    link: "https://drive.google.com/file/d/1gI_ucrcI8LaxxmyAhnIzeeHIhUDNh7Mf/view?usp=sharing"
  },
  {
    title: "Certificate of Excellence – Time Series Analysis",
    issuer: "IIT Guwahati",
    highlight: "Certificate of Excellence",
    glow: "pink",
    link: "https://drive.google.com/file/d/11OFQ-jh0H3gyFSW3lQ0Bl957PWeOECco/view?usp=drive_link"
  },
  {
    title: "Python for Data Science",
    issuer: "Infosys Springboard",
    highlight: "Foundational ML",
    glow: "purple",
    link: "https://drive.google.com/file/d/17cTnYddaiPQcA4ZhHe8j-b6M_Q5BbaaZ/view?usp=sharing"
  },
  {
    title: "Discover Data Analytics",
    issuer: "Microsoft",
    highlight: "Power BI & Modeling",
    glow: "purple",
    link: "https://drive.google.com/file/d/14ZosM9b3KKJUNTlq_8mfU1tIM6BKI7WN/view?usp=sharing"
  },
  {
    title: "B2 English Certification",
    issuer: "Cambridge Assessment",
    highlight: "Language Proficiency",
    glow: "blue",
    link: "https://drive.google.com/file/d/1JM4FhenSP02nVRq74RdiIFcC3mQMo24z/view?usp=sharing"
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-16 relative text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-white tracking-tight flex items-end justify-center lg:justify-start">
            <span className="text-brand-purple font-mono text-2xl font-normal mr-4 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">05.</span>
            Certifications
          </h2>
          <div className="mt-4 h-[2px] w-48 bg-gradient-to-r from-brand-purple to-transparent shadow-[0_0_10px_rgba(168,85,247,0.8)] mx-auto lg:mx-0"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="block h-full group relative">
                {/* Background Glow */}
                <div className={`absolute -inset-0.5 bg-brand-${cert.glow} rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-500`}></div>
                
                <GlassCard className="p-6 h-full flex flex-col relative z-10 overflow-hidden" hoverGlow={cert.glow}>
                  {/* Decorative corner accent */}
                  <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-brand-${cert.glow}/20 to-transparent rounded-bl-full pointer-events-none`}></div>
                  
                  <div className="flex justify-between items-start mb-4">
                    <Award className={`w-8 h-8 text-brand-${cert.glow} drop-shadow-[0_0_8px_currentColor]`} />
                    <div className={`text-[10px] uppercase font-mono text-brand-${cert.glow} bg-brand-${cert.glow}/10 px-2 py-1 rounded border border-brand-${cert.glow}/20 whitespace-nowrap overflow-hidden text-ellipsis max-w-[100px]`}>
                      {cert.highlight}
                    </div>
                  </div>
                  
                  <h3 className="text-brand-white font-bold text-lg mb-2 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-colors mt-auto">
                    {cert.title}
                  </h3>
                  <p className="text-brand-gray text-sm mb-6">{cert.issuer}</p>

                  <div className="mt-auto border-t border-white/5 pt-4 overflow-hidden">
                    <div className={`flex items-center text-sm font-bold text-brand-${cert.glow} transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300`}>
                      <span>View Credential</span>
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </GlassCard>
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
