import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

const Experience = () => {
  const experiences = [
    {
      company: 'Infosys Springboard',
      role: 'Data Visualization Intern',
      period: 'Sep 2025 – Nov 2025',
      tech: ['Power BI', 'SQL', 'Excel', 'Python'],
      points: [
        'Analyzed 2,000+ transaction records to identify patterns and trends.',
        'Built dynamic Power BI dashboards that cut manual reporting time by 20%.',
        'Performed customer segmentation to assist with targeted marketing strategies.',
      ],
      color: 'pink'
    },
    {
      company: 'Viswam.AI',
      role: 'AI Developer Intern',
      period: 'Jun 2025 – Jul 2025',
      tech: ['Python', 'NLP', 'Data Analysis', 'APIs'],
      points: [
        'Analyzed 470+ user interaction data points to evaluate system performance.',
        'Improved chatbot responses leading to a 4.6/5 user satisfaction score.',
        'Enhanced conversational flow using data-driven insights and pattern recognition.',
      ],
      color: 'purple'
    }
  ];

  return (
    <section id="experience" className="py-24 max-w-4xl mx-auto px-6 lg:px-8 relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-16 relative text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-white tracking-tight flex items-end justify-center lg:justify-start">
            <span className="text-brand-pink font-mono text-2xl font-normal mr-4 drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]">04.</span>
            Professional Logs
          </h2>
          <div className="mt-4 h-[2px] w-48 bg-gradient-to-r from-brand-pink to-transparent shadow-[0_0_10px_rgba(236,72,153,0.8)] mx-auto lg:mx-0"></div>
        </div>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Glowing Timeline Indicator */}
              <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-brand-black border-2 border-brand-${exp.color} shadow-[0_0_10px_currentColor] text-brand-${exp.color}`}></div>
              
              {/* Pulse effect behind indicator */}
              <div className={`absolute -left-[13px] top-0.5 w-6 h-6 rounded-full bg-brand-${exp.color}/30 animate-pulse`}></div>

              <GlassCard className="p-6 md:p-8 relative group" hoverGlow={exp.color}>
                {/* Thin left accent line */}
                <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-brand-${exp.color} to-transparent opacity-50`}></div>
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-brand-white">
                      {exp.role} <span className={`text-brand-${exp.color} drop-shadow-[0_0_5px_currentColor]`}>@ {exp.company}</span>
                    </h3>
                  </div>
                  <div className="text-xs font-mono text-brand-gray bg-white/5 px-3 py-1 rounded-full border border-white/10 whitespace-nowrap">
                    {exp.period}
                  </div>
                </div>

                <div className="mb-6 border-b border-white/5 pb-4">
                  <p className="text-xs font-mono text-brand-gray/80 mb-2 uppercase tracking-wider">Tech Stack:</p>
                  <p className="text-sm font-medium text-brand-white">
                    {exp.tech.join(' • ')}
                  </p>
                </div>
                
                <ul className="space-y-4">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="relative pl-6 text-brand-gray leading-relaxed text-sm md:text-base">
                      <span className={`absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-brand-${exp.color}`}></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
