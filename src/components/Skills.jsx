import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

const Skills = () => {
  const skills = [
    { name: 'SQL', level: 'Advanced', value: 95, details: 'Joins, CTEs, Window Functions, Subqueries', color: 'from-brand-purple to-brand-blue' },
    { name: 'Python', level: 'Intermediate', value: 80, details: 'Pandas, NumPy, Data Cleaning, Automation', color: 'from-brand-blue to-brand-purple' },
    { name: 'Power BI', level: 'Advanced', value: 90, details: 'DAX, Data Modeling, KPI Dashboards, Power Query', color: 'from-brand-pink to-brand-purple' },
    { name: 'Excel', level: 'Advanced', value: 95, details: 'Pivot Tables, XLOOKUP, Power Query, Data Analysis', color: 'from-brand-purple to-brand-pink' },
    
    { name: 'Pandas', level: 'Intermediate', value: 90, details: 'Data Cleaning, Transformation, EDA', color: 'from-brand-purple to-brand-blue' },
    { name: 'Machine Learning', level: 'Intermediate', value: 70, details: 'Classification, Scikit-Learn, Model Evaluation', color: 'from-brand-blue to-brand-purple' },
    { name: 'Statistics', level: 'Proficient', value: 80, details: 'Descriptive Statistics, Probability, Hypothesis Testing', color: 'from-brand-purple to-brand-pink' },
    { name: 'EDA', level: 'Advanced', value: 95, details: 'Data Profiling, Visualization, Business Insights', color: 'from-brand-pink to-brand-purple' },
  ];

  return (
    <section id="skills" className="py-24 max-w-6xl mx-auto px-6 lg:px-8 relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-16 relative text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-white tracking-tight flex items-end justify-center lg:justify-start">
            <span className="text-brand-purple font-mono text-2xl font-normal mr-4 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">04.</span>
            Technical Skills
          </h2>
          <div className="mt-4 h-[2px] w-48 bg-gradient-to-r from-brand-purple to-transparent shadow-[0_0_10px_rgba(168,85,247,0.8)] mx-auto lg:mx-0"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <GlassCard key={index} className="p-6" hoverGlow="purple">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-brand-white font-bold text-lg tracking-wide">{skill.name}</h3>
                  <p className="text-brand-gray text-xs font-mono mt-1 opacity-70 leading-relaxed">{skill.details}</p>
                </div>
                <span className={`text-xs font-mono px-2 py-1 rounded border border-white/10 bg-black/40 shadow-inner ${
                  skill.level === 'Advanced' ? 'text-brand-purple' : 
                  skill.level === 'Proficient' ? 'text-brand-blue' : 'text-brand-pink'
                }`}>
                  {skill.level}
                </span>
              </div>
              
              {/* Progress Bar Background */}
              <div className="w-full bg-brand-black/80 h-1.5 rounded-full overflow-hidden border border-white/5">
                {/* Animated Progress */}
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative shadow-[0_0_10px_currentColor]`}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </motion.div>
              </div>
            </GlassCard>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
