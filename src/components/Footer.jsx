"use client";

import React from "react";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";
import {
  FaLinkedin,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/erpranto55/",
    },

    {
      icon: <FaGithub />,
      href: "https://github.com/erpranto55",
    },

    {
      icon: <FaXTwitter />,
      href: "https://x.com/erpranto55",
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative overflow-hidden border-t border-gray-800 bg-navy-dark pt-20 pb-10"
    >

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-neon-blue/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-neon-pink/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Section */}
        <div className="flex flex-col items-center text-center">

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="mb-6"
          >
            <h2 className="text-4xl font-black text-white tracking-tight">
              E.R.
              <span className="text-neon-blue">Pranto</span>
            </h2>

            <p className="text-gray-500 text-sm mt-2 tracking-[0.2em] uppercase">
              Full Stack Developer
            </p>
          </motion.div>

          {/* Description */}
          <p className="max-w-2xl text-gray-400 leading-relaxed mb-10">
            Passionate about building modern, scalable, and high-performance
            web applications with clean design, smooth animations, and seamless
            user experiences.
          </p>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">

            {navLinks.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="relative text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium group"
              >
                {item.name}

                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-neon-blue transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-5 mb-12">

            {socialLinks.map((social, i) => (
              <Magnetic key={i}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-2xl bg-navy-card border border-gray-800 flex items-center justify-center text-gray-400 text-xl hover:text-neon-blue hover:border-neon-blue/40 hover:shadow-[0_0_20px_rgba(0,210,255,0.2)] transition-all duration-300"
                >
                  {social.icon}
                </a>
              </Magnetic>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-center gap-4">

          <p className="text-gray-500 text-sm text-center items-center justify-center ">
            © {new Date().getFullYear()} Md Eyamin Rahman Pranto. All rights reserved.
          </p>


        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;