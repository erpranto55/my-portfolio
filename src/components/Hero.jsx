"use client";
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import Magnetic from './Magnetic';

const Hero = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-16 overflow-hidden" id="hero">
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
          <span className="hero-reveal text-neon-pink font-semibold tracking-widest uppercase text-sm mb-4 block">Welcome to my world</span>
          <h1 className="hero-reveal text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Hi, I'm <span className="gradient-text">Alex</span><br/>
            Software Developer
          </h1>
          <p className="hero-reveal text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
            Crafting digital experiences with precision and creativity. Specializing in high-performance web applications and sleek user interfaces.
          </p>
          <div className="hero-reveal flex flex-wrap gap-4">
            <Magnetic>
              <a className="px-8 py-3 bg-gradient-to-r from-neon-blue to-blue-600 rounded-lg font-bold text-white hover:shadow-[0_0_25px_rgba(0,210,255,0.4)] transition-all inline-block" href="#contact">Contact Me</a>
            </Magnetic>
            <Magnetic>
              <a className="px-8 py-3 border border-gray-700 rounded-lg font-bold text-white hover:bg-gray-800 transition-colors inline-block" href="#">Download CV</a>
            </Magnetic>
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
              <img 
                alt="Developer Profile" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ8UkLEop8TlrtdQGX42xPzrYPISyvEQ7GOoDPkd5C2MDuR7RUFYE9K0oG-TZUq8G-XwV7gk9DYHbFTtgOpIyTWlQKBOD2Q2VQ_SFzUDyrkkllxBqSXAjFj_XDwiw8-Usw8m7fMMVotsHiRSgbuo53b1T7EBoFxQLwrKqNT4ghPDKJoGvwhy8rFZQc6DWwJNKWIT4dRLuvNkEqHQ62hyelXQHnADlcutygMRyf84N8wgibi1595CBuCeHebGQdI-O2E6ti7bKv7NsW"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

