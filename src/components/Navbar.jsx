import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'Education', to: 'education' },
    { name: 'Contact', to: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-purple via-brand-pink to-brand-blue transform origin-left z-50 shadow-[0_0_10px_rgba(236,72,153,0.8)]"
        style={{ scaleX }}
      />
      <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'glass-panel py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
          <div className="font-bold text-2xl tracking-tighter">
            <Link to="hero" smooth={true} duration={500} className="cursor-pointer text-gradient">
              PK.
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="text-brand-pink drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]"
                  className="text-brand-gray hover:text-brand-white transition-all text-sm font-medium cursor-pointer uppercase tracking-wider text-[11px]"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.a
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
              href="https://drive.google.com/file/d/1TNzLY6l5cGi9BDLFUhRZj_UyhbvTZETC/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-brand-white transition-all duration-200 bg-brand-purple/20 border border-brand-purple/50 rounded-full hover:bg-brand-purple ml-4"
            >
              Resume
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-white focus:outline-none drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full glass-panel py-6 px-6 flex flex-col space-y-6 shadow-[0_10px_30px_rgba(0,0,0,0.8)] border-b border-brand-purple/20">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="text-brand-white hover:text-brand-pink text-lg font-medium tracking-wide uppercase"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://drive.google.com/file/d/1TNzLY6l5cGi9BDLFUhRZj_UyhbvTZETC/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 relative inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-brand-white transition-all duration-200 bg-brand-purple/20 border border-brand-purple/50 rounded-full hover:bg-brand-purple w-full"
              onClick={() => setIsOpen(false)}
            >
              Download Resume
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
