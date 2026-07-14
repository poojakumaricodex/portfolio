import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const contactCards = [
    {
      id: 1,
      icon: <Mail className="w-8 h-8 text-blue-500 mb-4" />,
      title: "Email",
      detail: "poojaa7312@gmail.com",
      href: "mailto:poojaa7312@gmail.com"
    },
    {
      id: 2,
      icon: <Phone className="w-8 h-8 text-blue-500 mb-4" />,
      title: "Phone",
      detail: "+91-9121657200",
      href: "tel:+919121657200"
    },
    {
      id: 3,
      icon: <FaLinkedin className="w-8 h-8 text-blue-500 mb-4" />,
      title: "LinkedIn",
      detail: "pooja-kumari75",
      href: "https://linkedin.com/in/pooja-kumari75/"
    },
    {
      id: 4,
      icon: <FaGithub className="w-8 h-8 text-blue-500 mb-4" />,
      title: "GitHub",
      detail: "poojakumaricodex",
      href: "https://github.com/poojakumaricodex"
    }
  ];

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full flex flex-col items-center justify-center min-h-screen">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full z-10 text-center">
        
        {/* Title and Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 relative text-center flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-white tracking-tight flex items-end justify-center">
            <span className="text-blue-500 font-mono text-2xl font-normal mr-4 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">06.</span>
            Contact Me
          </h2>
          <div className="mt-4 h-[2px] w-48 bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_10px_rgba(59,130,246,0.8)] mx-auto mb-6"></div>
          {/* Floating light */}
          <div className="absolute -top-10 left-1/2 w-32 h-32 bg-blue-500/20 rounded-full mix-blend-screen filter blur-[50px] opacity-50 animate-pulse -translate-x-1/2"></div>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {}
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {contactCards.map((card) => (
            <motion.a
              key={card.id}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="flex flex-col items-center p-8 rounded-[20px] bg-white/[0.05] backdrop-blur-md border border-blue-500/20 group hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-400 text-sm break-all">{card.detail}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="border-t border-white/10 pt-12 flex flex-col items-center"
        >
          <h3 className="text-2xl font-bold text-white mb-2">Pooja Kumari</h3>
          <p className="text-blue-400 font-medium mb-8 text-center text-sm md:text-base">
            Data Analyst | Power BI | SQL | Python | Excel
          </p>
          
          {/* Social Icons */}
          <div className="flex gap-4 mb-8">
            <a href="https://linkedin.com/in/pooja-kumari75/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/[0.05] border border-blue-500/30 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500/20 hover:border-blue-500 hover:rotate-12 transition-all duration-300">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/poojakumaricodex" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/[0.05] border border-blue-500/30 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500/20 hover:border-blue-500 hover:rotate-12 transition-all duration-300">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="mailto:poojaa7312@gmail.com" className="w-12 h-12 rounded-full bg-white/[0.05] border border-blue-500/30 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500/20 hover:border-blue-500 hover:rotate-12 transition-all duration-300">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <p className="text-gray-500 text-xs md:text-sm">
            © 2026 Pooja Kumari. All Rights Reserved.
          </p>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Contact;


