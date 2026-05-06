"use client";
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Magnetic from './Magnetic';

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <motion.nav 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-navy-dark/80 backdrop-blur-md border-b border-gray-800 py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold tracking-tighter text-white">
              PORTFOLIO<span className="text-neon-blue">.</span>
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a className="hover:text-neon-blue px-3 py-2 text-sm font-medium transition-colors relative group" href="#hero">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-blue transition-all group-hover:w-full"></span>
              </a>
              <a className="hover:text-neon-blue px-3 py-2 text-sm font-medium transition-colors relative group" href="#about">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-blue transition-all group-hover:w-full"></span>
              </a>
              <a className="hover:text-neon-blue px-3 py-2 text-sm font-medium transition-colors relative group" href="#skills">
                Skills
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-blue transition-all group-hover:w-full"></span>
              </a>
              <a className="hover:text-neon-blue px-3 py-2 text-sm font-medium transition-colors relative group" href="#projects">
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-blue transition-all group-hover:w-full"></span>
              </a>
              <Magnetic>
                <a className="px-4 py-2 rounded-full bg-gradient-to-r from-neon-blue to-blue-600 text-sm font-bold text-white hover:shadow-[0_0_20px_rgba(0,210,255,0.5)] transition-all inline-block" href="#contact">
                  Let's Talk
                </a>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

