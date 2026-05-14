import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', hoverGlow = 'purple' }) => {
  const glowMap = {
    purple: 'hover:shadow-neon-purple hover:border-brand-purple/50',
    pink: 'hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] hover:border-brand-pink/50',
    blue: 'hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:border-brand-blue/50'
  };

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`relative glass-panel rounded-2xl transition-all duration-300 overflow-hidden group ${glowMap[hoverGlow]} ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-0 pointer-events-none"></div>
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
};

export default GlassCard;
