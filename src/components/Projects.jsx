import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
const Projects = () => {
  const projects = [
    {
      title: 'Zomato Data Analysis Dashboard',
      description: 'Processed and analyzed complex restaurant data to uncover pricing strategies and location-based demand trends across major cities.',
      metric: 'Analyzed 50K+ restaurant records to drive pricing insights.',
      tags: ['PostgreSQL', 'Excel', 'Data Visualization', 'Pivot Tables'],
      links: { github: 'https://github.com/poojakumaricodex/zomato-restaurant-insights-dashboard', external: '#' },
      color: 'from-brand-purple to-brand-pink'
    },
    {
      title: 'Food Trend Analysis Dashboard',
      description: 'A comprehensive interactive customer analysis dashboard engineered to visualize and analyze shifting regional food consumption trends.',
      metric: 'Reduced reporting time by 20% with automated ETL pipelines.',
      tags: ['Power BI', 'Excel', 'ETL', 'DAX', 'Power Query'],
      links: { github: 'https://github.com/poojakumaricodex/Android-Malware-Detection-Using-ML-and-Static-analysis', external: '#' },
      color: 'from-brand-blue to-brand-purple'
    },
    {
      title: 'Android Malware Detection',
      description: 'An advanced machine learning pipeline leveraging deep static analysis to accurately identify and classify high-risk mobile applications.',
      metric: 'Built predictive ML pipeline achieving high accuracy classification.',
      tags: ['Python', 'Machine Learning', 'Random Forest', 'Anomaly Detection'],
      links: { github: 'https://github.com/poojakumaricodex/Android-Malware-Detection-Using-ML-and-Static-analysis', external: '#' },
      color: 'from-brand-pink to-brand-blue'
    },
    {
      title: 'AI Medical Diagnostic Chatbot',
      description: 'An AI-powered diagnostic assistant designed to assist in preliminary medical triage using advanced natural language processing models.',
      metric: 'Integrated Hugging Face LLMs for real-time symptom analysis.',
      tags: ['Python', 'JSON', 'Hugging Face', 'NLP'],
      links: { github: 'https://github.com/poojakumaricodex/ai-medical-diagnosis-assistant', external: '#' },
      color: 'from-brand-purple to-brand-blue'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="projects" className="py-24 max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-16 relative text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-white tracking-tight flex items-end justify-center lg:justify-start">
            <span className="text-brand-blue font-mono text-2xl font-normal mr-4 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">03.</span>
            Executed Protocols
          </h2>
          <div className="mt-4 h-[2px] w-48 bg-gradient-to-r from-brand-blue to-transparent shadow-[0_0_10px_rgba(59,130,246,0.8)] mx-auto lg:mx-0"></div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item} className="h-full group relative">
              {/* Neon Hover Glow Background */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-500`}></div>
              
              <div className="relative h-full glass-panel p-8 rounded-2xl flex flex-col hover:-translate-y-2 transition-transform duration-500 overflow-hidden">
                {/* Thin top highlight border */}
                <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${project.color} opacity-50`}></div>
                
                <h3 className="text-2xl font-bold mb-3 text-brand-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-white group-hover:to-brand-gray transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-brand-gray text-sm md:text-base mb-4 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                <div className="bg-brand-black/40 border border-brand-purple/20 rounded-lg p-3 mb-6">
                  <p className="text-brand-pink text-xs font-mono flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-pink mr-2 animate-pulse"></span>
                    {project.metric}
                  </p>
                </div>
                
                <ul className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tags.map((tag, idx) => (
                    <li key={idx} className="font-mono text-[10px] sm:text-xs text-brand-blue bg-brand-blue/10 border border-brand-blue/20 px-2 py-1 rounded">
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4 pt-4 border-t border-white/5">
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-brand-gray hover:text-brand-white transition-colors group/btn">
                    <FaGithub size={18} className="group-hover/btn:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all" />
                    <span>Source Code</span>
                  </a>
                  <a href={project.links.external} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-brand-gray hover:text-brand-blue transition-colors group/btn">
                    <ExternalLink size={18} className="group-hover/btn:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all" />
                    <span></span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
