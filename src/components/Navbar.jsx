"use client";
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    
    // Do not hide the navbar if the mobile menu is currently open
    if (isOpen) {
      setHidden(false);
      return;
    }

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

  // Close mobile menu on screen resize to desktop sizes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "https://erpranto.vercel.app/" },
    { name: "About", href: "/#about" },
    { name: "Experience", href: "/#experience" },
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
        scrolled || isOpen ? "bg-navy-dark/90 backdrop-blur-md border-b border-gray-800 py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex-shrink-0 flex items-center">
            <span className="text-4xl sm:text-5xl font-bold tracking-tighter text-white">
              E.R. <span className='text-neon-blue'>Pranto</span>
            </span> 
          </Link>

          {/* Desktop Menu (hidden on screens < lg to prevent wrapping) */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  className="whitespace-nowrap hover:text-neon-blue px-2 xl:px-3 py-2 text-sm font-medium transition-colors relative group text-gray-300" 
                  href={link.href}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-blue transition-all group-hover:w-full"></span>
                </Link>
              ))}
              <Magnetic>
                <Link className="whitespace-nowrap ml-2 px-4 py-2 rounded-full bg-gradient-to-r from-neon-blue to-blue-600 text-sm font-bold text-white hover:shadow-[0_0_20px_rgba(0,210,255,0.5)] transition-all inline-block" href="/#contact">
                  Let&apos;s Talk
                </Link>
              </Magnetic>
            </div>
          </div>

          {/* Mobile Menu Button (visible on screens < lg) */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-gray-400 hover:text-white hover:bg-gray-800/50 focus:outline-hidden transition-all text-2xl border border-transparent hover:border-gray-700"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden absolute top-full left-0 w-full bg-navy-dark/95 backdrop-blur-xl border-b border-gray-800 shadow-2xl overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-2xl text-base font-semibold text-gray-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-gray-800/50 transition-all duration-300"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-4">
                <Link
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3 rounded-2xl bg-gradient-to-r from-neon-blue to-blue-600 font-bold text-white hover:shadow-[0_0_20px_rgba(0,210,255,0.5)] transition-all flex items-center justify-center"
                  href="/#contact"
                >
                  Let&apos;s Talk
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
