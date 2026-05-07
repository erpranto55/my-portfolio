"use client";
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Magnetic from './Magnetic';

import Link from 'next/link';

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

  const navLinks = [
    { name: "Home", href: "/#hero" },
    { name: "About", href: "/#about" },
    { name: "Expertise", href: "/#expertise" },
    { name: "Problem Solving", href: "/#problem-solving" },
    { name: "Projects", href: "/#projects" },
    { name: "All Projects", href: "/projects" },
  ];

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
          <Link href="/" className="flex-shrink-0 flex items-center">
            <span className="text-5xl font-bold tracking-tighter text-white">
              E.R. <span className='text-neon-blue'>Pranto</span>
            </span> 
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  className="hover:text-neon-blue px-3 py-2 text-sm font-medium transition-colors relative group text-gray-300" 
                  href={link.href}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-blue transition-all group-hover:w-full"></span>
                </Link>
              ))}
              <Magnetic>
                <Link className="px-4 py-2 rounded-full bg-gradient-to-r from-neon-blue to-blue-600 text-sm font-bold text-white hover:shadow-[0_0_20px_rgba(0,210,255,0.5)] transition-all inline-block" href="/#contact">
                  Let's Talk
                </Link>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

