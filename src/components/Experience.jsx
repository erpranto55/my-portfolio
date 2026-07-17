"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const experiences = [
  {
    role: "Full Stack Engineer",
    company: "C&T Home Care",
    location: "Dhaka, Bangladesh (On-site - USA Shift)",
    period: "July 15, 2026 - Present",
    current: true,
    description: "Developing and scaling modern full-stack web applications, designing modular APIs, and building interactive, high-performance user interfaces.",
    points: [
      "Working full-time at the Dhaka office on-site, aligned with USA standard time to coordinate and deliver solutions for a USA-based company.",
      "Architecting and building full-stack web features utilizing React, Next.js, Node.js, and MongoDB.",
      "Designing clean, modular database schemas and implementing secure, performant RESTful APIs.",
      "Collaborating on codebase architecture, security protocols, and robust frontend-backend integrations."
    ],
    tech: ["React.js", "Next.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "Better Auth"]
  },
  {
    role: "Next.js Developer Intern",
    company: "Shop Online New York",
    location: "Remote",
    period: "June 2026 - July 15, 2026",
    current: false,
    description: "Integrated admin dashboard modules with backend APIs and debugged critical frontend issues to ensure stability.",
    points: [
      "Integrated the admin dashboard frontend with backend-provided REST APIs, ensuring accurate data flow and reliable rendering across dashboard modules.",
      "Identified and resolved frontend bugs across dashboard views, improving stability and consistency of the admin interface.",
      "Collaborated closely with backend and product teams in a real-world, fast-paced development environment, strengthening team communication and delivery workflow."
    ],
    tech: ["Next.js", "React.js", "Tailwind CSS", "RESTful APIs", "Dashboard UI", "Git"]
  }
];

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="py-16 md:py-20 bg-navy-dark relative overflow-hidden" id="experience">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-neon-blue/5 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-neon-pink/5 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-neon-blue uppercase tracking-[0.3em] text-sm font-semibold block mb-4">
            My Journey
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-pink mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Timeline Content */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical line running down the timeline */}
          <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 top-2 bottom-2 w-[2px] bg-gradient-to-b from-neon-blue via-neon-pink to-gray-800"></div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row items-stretch ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Point/Node */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20">
                    <motion.div 
                      whileHover={{ scale: 1.2 }}
                      className={`w-10 h-10 rounded-full flex items-center justify-center border-2 shadow-lg cursor-pointer ${
                        exp.current 
                          ? 'bg-navy-dark border-neon-blue shadow-[0_0_15px_rgba(0,210,255,0.4)]' 
                          : 'bg-navy-dark border-neon-pink shadow-[0_0_15px_rgba(255,0,122,0.2)]'
                      }`}
                    >
                      <FiBriefcase className={`text-base ${exp.current ? 'text-neon-blue' : 'text-neon-pink'}`} />
                    </motion.div>
                  </div>

                  {/* Spacer / Left or Right Content block alignment */}
                  <div className="w-full md:w-1/2 px-10 md:px-12 flex flex-col justify-center">
                    <motion.div 
                      whileHover={{ y: -8 }}
                      className="group relative bg-navy-card/40 p-8 rounded-3xl border border-gray-800/80 hover:border-gray-700/80 transition-all duration-500 overflow-hidden shadow-xl"
                    >
                      {/* Inner Radial Glow Overlay */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                        style={{
                          background: `radial-gradient(circle at center, ${exp.current ? '#00d2ff' : '#ff007a'}10 0%, transparent 70%)`
                        }}
                      ></div>

                      {/* Header details */}
                      <div className="flex flex-wrap justify-between items-start gap-4 mb-4 relative z-10">
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-neon-blue transition-colors duration-300">
                            {exp.role}
                          </h3>
                          <p className="text-lg font-semibold text-gray-300 mt-1">
                            {exp.company}
                          </p>
                        </div>

                        {/* Pulsing indicator for active jobs */}
                        {exp.current && (
                          <span className="flex items-center gap-2 px-3 py-1 bg-neon-blue/10 border border-neon-blue/30 rounded-full text-neon-blue text-xs font-bold tracking-wider uppercase animate-pulse">
                            <span className="h-2 w-2 rounded-full bg-neon-blue"></span>
                            Current
                          </span>
                        )}
                      </div>

                      {/* Meta Info: Date & Location */}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-6 relative z-10">
                        <span className="flex items-center gap-1.5">
                          <FiCalendar className="text-neon-pink" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <FiMapPin className="text-neon-blue" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Bullets */}
                      <ul className="space-y-3 mb-6 relative z-10 text-gray-400 leading-relaxed text-sm">
                        {exp.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className={`h-1.5 w-1.5 rounded-full mt-2 shrink-0 ${exp.current ? 'bg-neon-blue' : 'bg-neon-pink'}`}></span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-gray-800/80 relative z-10">
                        {exp.tech.map((t, idx) => (
                          <span 
                            key={idx} 
                            className="px-3 py-1 rounded-lg text-xs font-semibold bg-gray-900 border border-gray-850 text-gray-300 group-hover:text-white group-hover:border-gray-700 transition-colors duration-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Bottom Accent Highlight Line */}
                      <div
                        className="absolute bottom-0 left-0 w-full h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"
                        style={{ background: `linear-gradient(to right, transparent, ${exp.current ? '#00d2ff' : '#ff007a'}, transparent)` }}
                      ></div>
                    </motion.div>
                  </div>

                  {/* Empty Spacer on other side for MD screen layout */}
                  <div className="hidden md:block md:w-1/2"></div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
