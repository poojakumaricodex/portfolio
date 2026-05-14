import React from 'react';

const NeonButton = ({ text, href, onClick, variant = 'primary', className = '' }) => {
  if (variant === 'secondary') {
    return (
      <button 
        onClick={onClick}
        className={`relative inline-flex items-center justify-center px-6 py-2 text-sm font-bold text-brand-white transition-all duration-200 bg-brand-purple-dark/50 border border-brand-purple/30 rounded-full hover:bg-brand-purple/20 hover:border-brand-purple hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] ${className}`}
      >
        {text}
      </button>
    );
  }

  // Primary Gradient Button
  const Element = href ? 'a' : 'button';
  
  return (
    <Element 
      href={href} 
      onClick={onClick} 
      className={`relative inline-flex group ${className}`}
    >
      <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-brand-purple via-brand-pink to-brand-blue rounded-full blur-md group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
      <button className="relative inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-brand-white transition-all duration-200 bg-brand-black border border-white/10 rounded-full w-full h-full">
        {text}
      </button>
    </Element>
  );
};

export default NeonButton;
