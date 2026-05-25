"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';
import { HiOutlineExternalLink, HiX } from "react-icons/hi";
import { FaGithub } from "react-icons/fa6";
import { HiArrowSmallRight } from "react-icons/hi2";
import { FiExternalLink } from "react-icons/fi";
import Link from 'next/link';
import { projectsData } from '@/data/projects';

// ─── Project Detail Modal ─────────────────────────────────────────────────────
const accentColors = {
  "neon-blue":   { text: "text-neon-blue",   border: "border-neon-blue/40",   bg: "bg-neon-blue/10",   glow: "shadow-[0_0_30px_rgba(0,210,255,0.25)]",   btn: "from-neon-blue to-blue-600",   dot: "#00d2ff" },
  "neon-pink":   { text: "text-neon-pink",   border: "border-neon-pink/40",   bg: "bg-neon-pink/10",   glow: "shadow-[0_0_30px_rgba(255,0,122,0.25)]",   btn: "from-neon-pink to-pink-600",   dot: "#ff007a" },
  "neon-orange": { text: "text-neon-orange", border: "border-neon-orange/40", bg: "bg-neon-orange/10", glow: "shadow-[0_0_30px_rgba(255,107,0,0.25)]",   btn: "from-neon-orange to-orange-600", dot: "#ff6b00" },
};

export const ProjectModal = ({ project, onClose }) => {
  const ac = accentColors[project.accent] || accentColors["neon-blue"];

  // ESC key to close
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    // Lock body scroll
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md z-[9000]"
      />

      {/* Modal Panel */}
      <motion.div
        key="modal-panel"
        initial={{ opacity: 0, scale: 0.92, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 40 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-[9001] flex items-center justify-center p-4 sm:p-8 pointer-events-none"
      >
        <div
          data-lenis-prevent
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto overscroll-contain bg-[#0d1117] border border-gray-800 rounded-[2.5rem] shadow-2xl pointer-events-auto touch-pan-y"
          style={{ scrollbarWidth: "thin", scrollbarColor: "#374151 transparent" }}
        >
          {/* Glow accent top bar */}
          <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${ac.btn} rounded-t-[2.5rem]`} />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-10 w-10 h-10 bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-gray-500 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 group"
            aria-label="Close modal"
          >
            <HiX className="text-xl group-hover:rotate-90 transition-transform duration-300" />
          </button>

          {/* Project Image */}
          <div className="relative w-full aspect-[16/8] overflow-hidden rounded-t-[2.5rem]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            {/* Image gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-[#0d1117]/30 to-transparent" />

            {/* Category badge */}
            <span className={`absolute top-5 left-5 px-4 py-1.5 ${ac.bg} ${ac.border} border rounded-full text-xs font-bold uppercase tracking-widest ${ac.text}`}>
              {project.category}
            </span>
          </div>

          {/* Content */}
          <div className="p-8 md:p-10">

            {/* Title */}
            <h2 className={`text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight`}>
              {project.title}
            </h2>

            {/* Full Description */}
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              {project.longDesc || project.desc}
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">

              {/* Key Features */}
              {project.features && (
                <div>
                  <h3 className={`text-sm font-bold uppercase tracking-widest ${ac.text} mb-4`}>
                    Key Features
                  </h3>
                  <ul className="space-y-2.5">
                    {project.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: ac.dot }}
                        />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              <div>
                <h3 className={`text-sm font-bold uppercase tracking-widest ${ac.text} mb-4`}>
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`px-4 py-2 ${ac.bg} ${ac.border} border rounded-xl text-xs font-bold uppercase tracking-wider ${ac.text}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-800/70">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r ${ac.btn} rounded-xl font-bold text-white text-sm hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-200 ${ac.glow}`}
              >
                <FiExternalLink className="text-lg" />
                Live Preview
              </a>
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-8 py-3.5 bg-gray-900 border border-gray-700 hover:border-gray-500 rounded-xl font-bold text-white text-sm hover:bg-gray-800 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <FaGithub className="text-lg" />
                View Code
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

// ─── Project Card ─────────────────────────────────────────────────────────────
export const ProjectCard = ({ project, index, onOpenModal }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ y: -12 }}
      className="group relative bg-navy-card/40 rounded-[2.5rem] border border-gray-800/50 hover:border-gray-700 transition-all duration-500 flex flex-col overflow-hidden"
    >
      {/* Project Image */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] p-3">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full overflow-hidden rounded-[2rem] border border-gray-800/50"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500"
          />
          {/* Overlay on Hover — click opens modal */}
          <button
            onClick={() => onOpenModal(project)}
            className="absolute inset-0 bg-navy-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center w-full cursor-pointer"
            aria-label={`Open ${project.title} details`}
          >
            <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
              <HiOutlineExternalLink className="text-white text-2xl" />
            </div>
          </button>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-neon-blue transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
          {project.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-4 py-1.5 bg-gray-900/50 border border-gray-800 rounded-full text-[10px] font-bold uppercase tracking-wider text-neon-blue/80"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between pt-6 border-t border-gray-800/50">
          <Magnetic>
            <button
              onClick={() => onOpenModal(project)}
              className="px-6 py-2.5 bg-gradient-to-r from-neon-blue to-blue-600 rounded-xl text-sm font-bold text-white flex items-center gap-2 hover:shadow-[0_0_20px_rgba(0,210,255,0.3)] transition-all cursor-pointer"
            >
              View Details
              <HiArrowSmallRight className="text-lg" />
            </button>
          </Magnetic>

          <div className="flex items-center gap-5">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-gray-500 hover:text-white text-sm font-medium transition-colors group/link"
            >
              <span>Live</span>
              <HiOutlineExternalLink className="text-lg group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-gray-500 hover:text-white text-sm font-medium transition-colors group/link"
            >
              <span>Code</span>
              <FaGithub className="text-lg group-hover/link:rotate-12 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Featured Projects Section ────────────────────────────────────────────────
const Projects = () => {
  const featuredProjects = projectsData.slice(0, 3);
  const [activeModal, setActiveModal] = useState(null);

  const openModal  = useCallback((project) => setActiveModal(project), []);
  const closeModal = useCallback(() => setActiveModal(null), []);

  return (
    <>
      {/* Modal portal */}
      <AnimatePresence>
        {activeModal && (
          <ProjectModal project={activeModal} onClose={closeModal} />
        )}
      </AnimatePresence>

      <section className="py-16 md:py-20 bg-navy-dark relative overflow-hidden" id="projects">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-blue/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-neon-blue uppercase tracking-[0.3em] text-sm font-bold block mb-4">Portfolio</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-pink mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} onOpenModal={openModal} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center mt-20"
          >
            <Magnetic>
              <Link
                href="/projects"
                className="group px-10 py-4 bg-navy-card border border-gray-800 rounded-full text-white font-bold flex items-center gap-3 hover:border-neon-blue/50 hover:shadow-[0_0_30px_rgba(0,210,255,0.1)] transition-all duration-300"
              >
                View All Projects
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <HiArrowSmallRight className="text-xl text-neon-blue" />
                </motion.span>
              </Link>
            </Magnetic>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projects;
