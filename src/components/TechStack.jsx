"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import {
  SiC, SiCplusplus, SiHtml5, SiCss, SiJavascript,
  SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs,
  SiMongodb, SiGit, SiFigma
} from "react-icons/si";

const TechStack = () => {
  const technologies = [
    { name: "C", color: "from-blue-500 to-slate-400", icon: <SiC /> },
    { name: "C++", color: "from-blue-600 to-blue-400", icon: <SiCplusplus /> },
    { name: "HTML5", color: "from-orange-600 to-orange-400", icon: <SiHtml5 /> },
    { name: "CSS3", color: "from-blue-500 to-sky-400", icon: <SiCss /> },
    { name: "JavaScript", color: "from-yellow-500 to-yellow-300", icon: <SiJavascript className="bg-black p-0.5 rounded-sm" /> },
    { name: "React", color: "from-cyan-500 to-blue-500", icon: <SiReact /> },
    { name: "Next.js", color: "from-gray-800 to-black", icon: <SiNextdotjs /> },
    { name: "Tailwind", color: "from-cyan-400 to-sky-500", icon: <SiTailwindcss /> },
    { name: "Node.js", color: "from-green-600 to-green-400", icon: <SiNodedotjs /> },
    { name: "MongoDB", color: "from-green-700 to-emerald-500", icon: <SiMongodb /> },
    { name: "Git", color: "from-red-600 to-orange-500", icon: <SiGit /> },
    { name: "Figma", color: "from-purple-500 via-pink-500 to-orange-500", icon: <SiFigma /> },
  ];

  return (
    <section className="py-20 bg-navy-dark text-center relative overflow-hidden" id="tech-stack">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(0,210,255,0.08),transparent_50%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Languages and Tools:
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-pink mx-auto rounded-full"></div>
        </motion.div>


        {/* Technology Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{
                y: -10,
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                borderColor: "rgba(255, 255, 255, 0.1)"
              }}
              className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-navy-card/40 border border-gray-800/60 transition-all duration-500 overflow-hidden"
            >
              {/* Hover Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

              <div className={`text-4xl mb-4 transition-transform duration-500 group-hover:scale-125 drop-shadow-[0_0_8px_rgba(0,210,255,0.25)]`}>
                {tech.icon}
              </div>

              <span className="text-gray-400 font-semibold text-sm group-hover:text-white transition-colors duration-300">
                {tech.name}
              </span>

              {/* Bottom Gradient Line */}
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${tech.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Decorative Transition */}
      <div className="mt-24 w-full h-px bg-gradient-to-r from-transparent via-gray-800/50 to-transparent"></div>
    </section>
  );
};

export default TechStack;
