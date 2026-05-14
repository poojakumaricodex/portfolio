import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { FaGithub, FaLinkedin, FaHackerrank } from 'react-icons/fa';
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setIsSending(false);
          setIsSubmitted(true);
          e.target.reset();
          setTimeout(() => setIsSubmitted(false), 4000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsSending(false);
          setIsError(true);
          setTimeout(() => setIsError(false), 4000);
        }
      );
  };

  const floatingTransition = {
    repeat: Infinity,
    repeatType: "reverse",
    duration: 3,
    ease: "easeInOut"
  };

  return (
    <section id="contact" className="py-24 max-w-6xl mx-auto px-6 lg:px-8 text-center relative z-10 font-sans">

      {/* Blurred Neon Orbs Background Effects */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-blue-600/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full shadow-[0_0_8px_#a855f7]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] tracking-tight">
          Contact Me
        </h2>
        <div className="h-[1px] w-24 mx-auto bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-6 shadow-[0_0_8px_#a855f7]"></div>

        <p className="text-gray-400 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
          Available for internships, freelance projects, and data analyst opportunities.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 text-left mb-16 max-w-5xl mx-auto">

          {/* Contact Form - 3 columns on large screens */}
          <div className="lg:col-span-3">
            <motion.div
              className="bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.15)] relative overflow-hidden h-full"
              whileHover={{ boxShadow: "0 0 40px rgba(168,85,247,0.25)" }}
              transition={{ duration: 0.3 }}
            >
              {/* Thin glowing divider line inside card */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

              <form ref={form} onSubmit={sendEmail} className="space-y-6 relative z-10 flex flex-col h-full justify-between">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-purple-400 mb-2 drop-shadow-[0_0_5px_rgba(168,85,247,0.5)]">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="user_name"
                      required
                      className="w-full bg-gray-900/50 border border-purple-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-gray-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-purple-400 mb-2 drop-shadow-[0_0_5px_rgba(168,85,247,0.5)]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="user_email"
                      required
                      className="w-full bg-gray-900/50 border border-purple-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-gray-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-purple-400 mb-2 drop-shadow-[0_0_5px_rgba(168,85,247,0.5)]">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="4"
                      className="w-full bg-gray-900/50 border border-purple-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none placeholder:text-gray-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSending}
                    className={`w-full py-4 rounded-full bg-black text-white font-bold tracking-wide border border-purple-500/50 relative overflow-hidden group mt-auto transition-transform hover:scale-[1.02] active:scale-[0.98] ${isSending ? 'opacity-80 cursor-not-allowed hover:scale-100 active:scale-100' : ''}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 group-hover:from-purple-600/40 group-hover:to-blue-600/40 transition-all duration-300"></div>
                    <span className="relative z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] flex items-center justify-center gap-2">
                      {isSending ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Transmitting...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </span>
                    {/* Cinematic lighting effect on button hover */}
                    <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(168,85,247,0.5)] group-hover:shadow-[inset_0_0_30px_rgba(59,130,246,0.6)] transition-all duration-300"></div>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>

          {/* Floating Contact Icons - 2 columns on large screens */}
          <div className="lg:col-span-2 flex flex-col justify-center space-y-8 px-4 sm:px-10 lg:px-4 py-8 lg:py-0">

            <motion.a
              href="mailto:poojaa7312@gmail.com"
              className="flex items-center text-gray-300 hover:text-white transition-colors group"
              animate={{ y: [0, -5, 0] }}
              transition={{ ...floatingTransition, delay: 0 }}
            >
              <div className="w-14 h-14 shrink-0 rounded-full bg-black/60 border border-purple-500/50 flex items-center justify-center mr-6 group-hover:border-purple-400 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all duration-300 relative">
                <div className="absolute inset-0 rounded-full shadow-[inset_0_0_10px_rgba(168,85,247,0.3)]"></div>
                <Mail className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-purple-400/80 mb-1">Email</div>
                <span className="text-sm sm:text-base font-medium break-all">poojaa7312@gmail.com</span>
              </div>
            </motion.a>

            <motion.a
              href="tel:+919121657200"
              className="flex items-center text-gray-300 hover:text-white transition-colors group"
              animate={{ y: [0, -5, 0] }}
              transition={{ ...floatingTransition, delay: 0.5 }}
            >
              <div className="w-14 h-14 shrink-0 rounded-full bg-black/60 border border-blue-500/50 flex items-center justify-center mr-6 group-hover:border-blue-400 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] transition-all duration-300 relative">
                <div className="absolute inset-0 rounded-full shadow-[inset_0_0_10px_rgba(59,130,246,0.3)]"></div>
                <Phone className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-blue-400/80 mb-1">Phone</div>
                <span className="text-sm sm:text-base font-medium">+91 9121657200</span>
              </div>
            </motion.a>

            <motion.div
              className="flex items-center text-gray-300 group"
              animate={{ y: [0, -5, 0] }}
              transition={{ ...floatingTransition, delay: 1 }}
            >
              <div className="w-14 h-14 shrink-0 rounded-full bg-black/60 border border-purple-500/50 flex items-center justify-center mr-6 group-hover:border-purple-400 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all duration-300 relative">
                <div className="absolute inset-0 rounded-full shadow-[inset_0_0_10px_rgba(168,85,247,0.3)]"></div>
                <MapPin className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-purple-400/80 mb-1">Location</div>
                <span className="text-sm sm:text-base font-medium">Chintal, Telangana</span>
              </div>
            </motion.div>

            <motion.div
              className="flex space-x-6 mt-8 pt-8 border-t border-purple-500/20"
              animate={{ y: [0, -5, 0] }}
              transition={{ ...floatingTransition, delay: 1.5 }}
            >
              <a href="https://github.com/poojakumaricodex" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-black/60 border border-purple-500/30 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:-translate-y-1 transition-all">
                <FaGithub size={22} />
              </a>
              <a href="https://www.linkedin.com/in/pooja-data-analyst/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-black/60 border border-purple-500/30 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:-translate-y-1 transition-all">
                <FaLinkedin size={22} />
              </a>
              <a href="https://www.hackerrank.com/profile/poojaa7312" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-black/60 border border-purple-500/30 flex items-center justify-center text-gray-400 hover:text-white hover:border-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] hover:-translate-y-1 transition-all">
                <FaHackerrank size={22} />
              </a>
            </motion.div>

          </div>
        </div>

        <div className="text-center font-mono text-xs text-gray-500 mt-20 relative flex items-center justify-center">
          <div className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent -z-10"></div>
          <span className="bg-[#0a0a0a] px-4 py-1 rounded-full border border-gray-800">System Designed & Engineered by Pooja Kumari</span>
        </div>
      </motion.div>

      {/* Toast Notifications */}
      <div className="fixed bottom-10 right-10 z-50 flex flex-col gap-4">
        {/* Success Toast Notification */}
        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.9 }}
              className="bg-gray-900/90 backdrop-blur-md border border-purple-500/50 rounded-xl p-4 shadow-[0_0_30px_rgba(168,85,247,0.3)] flex items-center gap-3"
            >
              <CheckCircle2 className="w-6 h-6 text-purple-400" />
              <div className="text-left">
                <h4 className="text-white font-medium text-sm">Message Transmitted</h4>
                <p className="text-gray-400 text-xs">Email delivered successfully.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Error Toast Notification */}
        <AnimatePresence>
          {isError && (
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.9 }}
              className="bg-gray-900/90 backdrop-blur-md border border-red-500/50 rounded-xl p-4 shadow-[0_0_30px_rgba(239,68,68,0.3)] flex items-center gap-3"
            >
              <AlertCircle className="w-6 h-6 text-red-400" />
              <div className="text-left">
                <h4 className="text-white font-medium text-sm">Transmission Failed</h4>
                <p className="text-gray-400 text-xs">Could not connect to EmailJS servers.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Contact;

