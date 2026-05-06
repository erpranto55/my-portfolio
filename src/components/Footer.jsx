"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-12 bg-navy-dark border-t border-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="mb-8">
          <span className="text-2xl font-bold tracking-tighter text-white uppercase">
            Pranto<span className="text-neon-blue">.</span>
          </span>
        </div>
        
        <div className="flex justify-center gap-8 mb-8">
          {[
            { name: "Home", href: "#hero" },
            { name: "About", href: "#about" },
            { name: "Expertise", href: "#expertise" },
            { name: "Projects", href: "#projects" },
            { name: "Contact", href: "#contact" }
          ].map((item, i) => (
            <a key={i} className="text-gray-500 hover:text-white transition-colors relative group text-sm font-medium" href={item.href}>
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-blue transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="flex justify-center gap-6 mb-8">
          {[
            { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/erpranto55/", color: "neon-blue" },
            { icon: <FaGithub />, href: "https://github.com/erpranto55", color: "white" },
            { icon: <FaXTwitter />, href: "#", color: "gray-400" }
          ].map((social, i) => (
            <Magnetic key={i}>
              <a 
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 bg-navy-card rounded-xl border border-gray-800 flex items-center justify-center text-xl transition-all duration-300 hover:border-neon-blue hover:text-neon-blue`}
              >
                {social.icon}
              </a>
            </Magnetic>
          ))}
        </div>
        
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Md Eyamin Rahman Pranto. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
