
"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import Magnetic from './Magnetic';
import profilePic from "@/assets/ER_Pranto.jpg";
import Image from 'next/image';
import { FiDownload, FiChevronDown, FiEye, FiExternalLink } from 'react-icons/fi';
import { toast } from 'react-hot-toast';

const Hero = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const dropdownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-reveal", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        delay: 0.5
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-16 z-20" id="hero">
      {/* Background Accents */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-0 w-64 h-64 bg-neon-blue/10 rounded-full blur-[120px]"
      ></motion.div>
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon-pink/10 rounded-full blur-[150px]"
      ></motion.div>

      <motion.div style={{ y, opacity }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center z-10">
        <div data-purpose="hero-content">
          <span className="hero-reveal text-neon-pink font-semibold tracking-widest uppercase text-sm mb-4 block"><span className="text-green-400 mr-2">●</span>Available for Freelance & Collaboration</span>
          <h1 className="hero-reveal text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: 120, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Hi, I&apos;m <span className="gradient-text"> Pranto</span>
              </motion.span>
            </span>

            <div className="mt-4 h-[90px] md:h-[110px] overflow-hidden">
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: ["0%", "-33.33%", "-66.66%", "0%"] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex flex-col"
              >
                <span className="block">Web Developer</span>
                <span className="block">Problem Solver</span>
                <span className="block">Competitive Programmer</span>
              </motion.div>
            </div>
          </h1>
          <p className="hero-reveal text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
            I build fast, scalable web apps and love cracking hard algorithmic problems. From pixel-perfect UIs to robust backends — I ship things that work.
          </p>
          <div className="hero-reveal flex flex-wrap gap-4 items-center">
            <Magnetic>
              <a className="px-8 py-3 bg-gradient-to-r from-neon-blue to-blue-600 rounded-lg font-bold text-white hover:shadow-[0_0_25px_rgba(0,210,255,0.4)] transition-all inline-block cursor-pointer" href="#contact">Hire Me</a>
            </Magnetic>
            
            <div className="relative inline-flex items-center" ref={dropdownRef}>
              <Magnetic>
                <div className="flex items-center">
                  <a 
                    href="/ER_Pranto_Resume.pdf" 
                    download="ER_Pranto_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      toast.success("Resume downloaded successfully! 🚀", {
                        duration: 3000,
                        icon: '⬇️',
                      });
                    }}
                    className="px-6 py-3 border border-gray-700 border-r-0 rounded-l-lg font-bold text-white hover:bg-gray-800 hover:text-neon-blue hover:border-neon-blue/50 transition-all inline-flex items-center gap-2 cursor-pointer"
                  >
                    <FiDownload className="text-lg animate-bounce" />
                    Download CV
                  </a>
                  <button 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="px-3 py-[15px] border border-gray-700 rounded-r-lg font-bold text-white hover:bg-gray-800 hover:text-neon-blue hover:border-neon-blue/50 transition-all cursor-pointer inline-flex items-center"
                    aria-label="View more download options"
                  >
                    <FiChevronDown className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-neon-blue' : ''}`} />
                  </button>
                </div>
              </Magnetic>

              {/* Sleek Floating Menu */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 top-full mt-3 w-72 bg-navy-dark/95 backdrop-blur-xl border border-gray-800 hover:border-neon-blue/30 rounded-xl p-2 shadow-[0_15px_40px_rgba(0,0,0,0.7)] z-50 overflow-hidden"
                  >
                    {/* Subtle background glow indicator */}
                    <div className="absolute -top-10 -left-10 w-28 h-28 bg-neon-blue/10 rounded-full blur-2xl pointer-events-none"></div>
                    
                    <div className="space-y-1">
                      {/* Option 1: Direct Download */}
                      <a
                        href="/ER_Pranto_Resume.pdf"
                        download="ER_Pranto_Resume.pdf"
                        onClick={() => {
                          setIsDropdownOpen(false);
                          toast.success("Resume downloaded successfully! 🚀", {
                            duration: 3000,
                            icon: '⬇️',
                          });
                        }}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-all group text-left cursor-pointer"
                      >
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-neon-blue/10 text-neon-blue group-hover:scale-110 transition-transform">
                          <FiDownload className="text-base" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white group-hover:text-neon-blue transition-colors">Direct PDF Download</div>
                          <div className="text-[11px] text-gray-500">Download instantly (Fast Server)</div>
                        </div>
                      </a>

                      {/* Option 2: Open in browser */}
                      <a
                        href="/ER_Pranto_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-all group text-left cursor-pointer"
                      >
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-neon-pink/10 text-neon-pink group-hover:scale-110 transition-transform">
                          <FiEye className="text-base" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white group-hover:text-neon-pink transition-colors">Open in Browser</div>
                          <div className="text-[11px] text-gray-500">Read PDF in a new browser tab</div>
                        </div>
                      </a>

                      {/* Option 3: Google Drive View */}
                      <a
                        href="https://drive.google.com/file/d/1iPLwmepfv1GdrQxj7lcsOZZAvIlRDBpl/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-all group text-left cursor-pointer"
                      >
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-neon-orange/10 text-neon-orange group-hover:scale-110 transition-transform">
                          <FiExternalLink className="text-base" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white group-hover:text-neon-orange transition-colors">Google Drive Link</div>
                          <div className="text-[11px] text-gray-500">View or save to Google Drive</div>
                        </div>
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center" data-purpose="hero-image">
          {/* The glowing ring container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            className="relative w-80 h-80 md:w-96 md:h-96"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-4 border-dashed border-neon-orange rounded-full opacity-20"
            ></motion.div>
            <div className="absolute inset-0 border-4 border-neon-orange rounded-full glow-orange animate-pulse opacity-50"></div>
            <div className="absolute inset-4 border-2 border-neon-orange/30 rounded-full"></div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative rounded-full overflow-hidden w-full h-full border-8 border-navy-dark shadow-2xl cursor-pointer"
            >
              <Image
                alt="Developer Profile"
                className="w-full h-full object-cover"
                src={profilePic}
                width={384}   // 96 * 4
                height={384}  // 96 * 4
                priority={true}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
