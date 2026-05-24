"use client";
import React from 'react';
import { motion } from 'framer-motion';
import {
  SiC,
  SiCplusplus,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiMongoose,
  SiJsonwebtokens,
  SiHeroui,
  SiLeetcode,
  SiCodeforces,
  SiCodechef,
  SiBookstack,
  SiGit,
  SiGithub,
  SiFigma,
} from "react-icons/si";
import { FiLayout } from "react-icons/fi";
import { KeyRound } from "lucide-react";

const TechStack = () => {
  const skillGroups = [
    {
      title: "Competitive Programming",
      summary: "Strong C/C++ foundation with 350+ solved problems and ranked contest experience.",
      accent: "from-neon-blue to-blue-600",
      technologies: [
        { name: "C", color: "from-blue-500 to-slate-400", icon: <SiC /> },
        { name: "C++", color: "from-blue-600 to-blue-400", icon: <SiCplusplus /> },
        { name: "DSA", color: "from-emerald-500 to-teal-400", icon: <SiBookstack /> },
        { name: "STL", color: "from-sky-500 to-indigo-400", icon: <SiCplusplus /> },
        { name: "LeetCode", color: "from-yellow-600 to-orange-400", icon: <SiLeetcode /> },
        { name: "Codeforces", color: "from-blue-600 to-red-500", icon: <SiCodeforces /> },
        { name: "CodeChef", color: "from-amber-700 to-yellow-500", icon: <SiCodechef /> },
      ],
    },
    {
      title: "Frontend Development",
      summary: "Modern, responsive interfaces with React, Next.js, TypeScript, Tailwind CSS, and smooth animations via Framer Motion and GSAP.",
      accent: "from-neon-pink to-fuchsia-600",
      technologies: [
        { name: "HTML5", color: "from-orange-600 to-orange-400", icon: <SiHtml5 /> },
        { name: "CSS3", color: "from-blue-500 to-sky-400", icon: <SiCss /> },
        { name: "JavaScript", color: "from-yellow-500 to-yellow-300", icon: <SiJavascript className="bg-black p-0.5 rounded-sm" /> },
        { name: "TypeScript", color: "from-blue-600 to-sky-400", icon: <SiTypescript /> },
        { name: "React", color: "from-cyan-500 to-blue-500", icon: <SiReact /> },
        { name: "Next.js", color: "from-gray-800 to-black", icon: <SiNextdotjs /> },
        { name: "Tailwind", color: "from-cyan-400 to-sky-500", icon: <SiTailwindcss /> },
        { name: "HeroUI", color: "from-violet-500 to-fuchsia-500", icon: <SiHeroui /> },
        { name: "Figma", color: "from-purple-500 via-pink-500 to-orange-500", icon: <SiFigma /> },
        { name: "Daily UI", color: "from-pink-500 to-orange-400", icon: <FiLayout /> },
      ],
    },
    {
      title: "Backend & Tools",
      summary: "Full-stack JavaScript experience with REST APIs, authentication, and database integration.",
      accent: "from-neon-orange to-amber-500",
      technologies: [
        { name: "Node.js", color: "from-green-600 to-green-400", icon: <SiNodedotjs /> },
        { name: "Express.js", color: "from-gray-700 to-gray-400", icon: <SiExpress /> },
        { name: "Firebase", color: "from-amber-500 to-orange-500", icon: <SiFirebase /> },
        { name: "MongoDB", color: "from-green-700 to-emerald-500", icon: <SiMongodb /> },
        { name: "Mongoose", color: "from-red-700 to-red-500", icon: <SiMongoose /> },
        { name: "JWT", color: "from-pink-500 to-purple-500", icon: <SiJsonwebtokens /> },
        { name: "Better Auth", color: "from-indigo-500 to-cyan-400", icon: <KeyRound /> },
        { name: "Git", color: "from-red-600 to-orange-500", icon: <SiGit /> },
        { name: "GitHub", color: "from-gray-700 to-gray-300", icon: <SiGithub /> },
      ],
    },
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
            My Tech Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-pink mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-14 text-left">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: groupIndex * 0.12 }}
              className="border-t border-gray-800/70 pt-8"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    {group.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm md:text-base text-gray-400 leading-relaxed">
                    {group.summary}
                  </p>
                </div>
                <div className={`h-1 w-24 rounded-full bg-gradient-to-r ${group.accent}`}></div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {group.technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.88 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.04 }}
                    whileHover={{
                      y: -8,
                      backgroundColor: "rgba(255, 255, 255, 0.03)",
                      borderColor: "rgba(255, 255, 255, 0.1)"
                    }}
                    className="group relative flex items-center gap-3 p-4 rounded-2xl bg-navy-card/40 border border-gray-800/60 transition-all duration-500 overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                    <div className="relative text-2xl shrink-0 transition-transform duration-500 group-hover:scale-115 drop-shadow-[0_0_8px_rgba(0,210,255,0.25)]">
                      {tech.icon}
                    </div>

                    <span className="relative text-gray-300 font-semibold text-sm group-hover:text-white transition-colors duration-300">
                      {tech.name}
                    </span>

                    <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${tech.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                  </motion.div>
                ))}
              </div>
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
