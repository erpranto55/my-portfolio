"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';
import { HiOutlineExternalLink, HiX } from "react-icons/hi";
import { FaGithub } from "react-icons/fa6";
import { HiArrowSmallRight } from "react-icons/hi2";
import { FiExternalLink } from "react-icons/fi";
import Link from 'next/link';

export const projectsData = [
  {
    title: "Medique",
    desc: "MediQueue is a full-stack tutor booking web application where students can register, log in, browse available tutors, and book online learning sessions by subject and availability. Features JWT authentication, digital session tokens, and a complete booking management system.",
    longDesc: "MediQueue is a comprehensive full-stack tutor booking platform built with Next.js on the frontend and Node.js/Express on the backend. Students can create accounts, browse a curated list of available tutors filtered by subject and time availability, and book online learning sessions with ease. The system generates unique digital session tokens for each confirmed booking, allowing both students and tutors to manage their scheduled classes efficiently. The backend features robust JWT-based authentication, secure API endpoints, MongoDB data persistence, and a clean RESTful architecture.",
    tags: ["Next.js", "Node.js", "MongoDB", "JWT Auth"],
    features: ["Student & tutor registration/login", "Browse tutors by subject & availability", "Session token generation per booking", "Booking management dashboard", "JWT authentication & authorization", "RESTful API backend"],
    image: "/medique.png",
    live: "https://medique-ashy.vercel.app",
    code: "https://github.com/erpranto55/Medique",
    category: "Full Stack",
    accent: "neon-orange"
  },
  {
    title: "Borrowly",
    desc: "A comprehensive online platform for borrowing and managing books. Features user authentication, book cataloging, and an intuitive borrowing system with a focus on seamless user experience.",
    longDesc: "Borrowly is a modern online book borrowing platform that reimagines the traditional library experience. Built with Next.js and Firebase, the platform allows users to register, browse an extensive book catalog, and borrow books with just a few clicks. The app features a fully functional authentication system, real-time data sync via Firebase Firestore, smooth page transitions powered by Framer Motion, and a polished, responsive UI built with Tailwind CSS.",
    tags: ["Next.js", "Firebase", "Tailwind CSS", "Framer Motion"],
    features: ["User authentication with Firebase", "Real-time book catalog", "Borrow & return management", "Smooth page transitions", "Responsive mobile design", "Firestore real-time database"],
    image: "/borrowly_actual.png",
    live: "https://borrowly-opal.vercel.app",
    code: "https://github.com/erpranto55/Borrowly-an-Online-Book-Borrowing-Platform",
    category: "Full Stack",
    accent: "neon-blue"
  },
  {
    title: "Dragon News",
    desc: "A dynamic news portal platform featuring categorized news, breaking news alerts, right sidebar trending stories, user registration & authentication, and a modern responsive UI for a seamless reading experience.",
    longDesc: "Dragon News is a full-featured news portal application built with Next.js and Firebase. The platform offers categorized news browsing, a live breaking news ticker, a right sidebar showcasing trending stories, and a robust user authentication system supporting registration and login. The UI is fully responsive, mobile-first, and designed for fast, intuitive content consumption. Recent updates include a polished right sidebar section and improved news card loading spinners.",
    tags: ["Next.js", "Firebase", "Tailwind CSS", "React.js"],
    features: ["Categorized news browsing", "Breaking news alerts ticker", "Trending right sidebar", "User registration & login", "Responsive mobile-first UI", "Loading spinners & smooth UX"],
    image: "/dragon_news.png",
    live: "https://dragon-news-one-liart.vercel.app",
    code: "https://github.com/erpranto55/Dragon_News",
    category: "Fullstack",
    accent: "neon-pink"
  },
  {
    title: "Book Vibe",
    desc: "A premium book discovery and review platform where users can browse collections, rate their favorite reads, and manage their personal reading lists with an elegant UI.",
    longDesc: "Book Vibe is an elegant book discovery and personal reading management platform built with React.js and Vite. Users can explore a curated collection of books, read detailed descriptions, leave ratings and reviews, and track their reading progress via wishlists and read lists stored in localStorage. The app features a clean, premium UI built entirely with Tailwind CSS, smooth navigation, and a fast development experience powered by the Vite build tool.",
    tags: ["React.js", "Vite", "Tailwind CSS", "Local Storage"],
    features: ["Book discovery & browsing", "Personal wishlist & read list", "Book ratings & reviews", "LocalStorage data persistence", "Fast Vite build & HMR", "Clean responsive layout"],
    image: "/book_vibe.png",
    live: "https://book-vibe-omega-nine.vercel.app",
    code: "https://github.com/erpranto55/Book_Vibe",
    category: "Frontend",
    accent: "neon-orange"
  },
  {
    title: "Keen Keeper",
    desc: "A sophisticated personal connection and friend management platform. Features include timeline filters, interaction stats, and a clean interface for nurturing meaningful relationships.",
    longDesc: "Keen Keeper is a beautifully designed personal relationship management app that helps users track and nurture their meaningful connections. The platform features a smart timeline that filters interactions by date ranges, detailed interaction statistics, and a clean card-based UI that makes managing relationships feel effortless. Built with React.js, Tailwind CSS, and DaisyUI components, the app is fully responsive and deployed on Vercel for instant global access.",
    tags: ["React.js", "Tailwind CSS", "DaisyUI", "Vercel"],
    features: ["Personal connection tracking", "Timeline filters by date range", "Interaction statistics", "Card-based relationship UI", "DaisyUI component library", "Vercel instant deployment"],
    image: "/keen_keeper.png",
    live: "https://keen-keeper-gules.vercel.app",
    code: "https://github.com/erpranto55/Keen_Keeper",
    category: "Frontend",
    accent: "neon-blue"
  },
  {
    title: "BPL-Dream",
    desc: "A high-performance cricket fantasy league platform. Users can assemble their ultimate Dream 11 team, manage player selections, and track team performance with a dynamic and responsive UI.",
    longDesc: "BPL-Dream is an exciting cricket fantasy league platform that lets fans build their ultimate Dream 11 team from the Bangladesh Premier League. Users get a virtual coin budget, browse detailed player profiles and stats, and strategically select up to 11 players for their squad. The app validates selection constraints (max 6 per team, unique players) and provides real-time team composition feedback. Built with React.js and Tailwind CSS, powered by Vite for blazing-fast performance, and deployed on Netlify.",
    tags: ["React.js", "Tailwind CSS", "Vite", "Netlify"],
    features: ["Virtual coin-based player selection", "Player stats & profile cards", "Dream 11 team builder", "Selection constraint validation", "Real-time team feedback", "Netlify CDN deployment"],
    image: "/bpl_dream.png",
    live: "https://bpldream11select.netlify.app/",
    code: "https://github.com/erpranto55/BPL-Dream",
    category: "Frontend",
    accent: "neon-pink"
  }
];

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
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0d1117] border border-gray-800 rounded-[2.5rem] shadow-2xl pointer-events-auto"
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

      <section className="py-24 bg-navy-dark relative overflow-hidden" id="projects">
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
