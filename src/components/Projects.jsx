"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa6";
import { HiArrowSmallRight } from "react-icons/hi2";
import Link from 'next/link';

export const projectsData = [
  {
    title: "Borrowly",
    desc: "A comprehensive online platform for borrowing and managing books. Features user authentication, book cataloging, and an intuitive borrowing system with a focus on seamless user experience.",
    tags: ["Next.js", "Firebase", "Tailwind CSS", "Framer Motion"],
    image: "/borrowly_actual.png",
    live: "https://borrowly-opal.vercel.app",
    code: "https://github.com/erpranto55/Borrowly-an-Online-Book-Borrowing-Platform",
    category: "Full Stack",
    accent: "neon-blue"
  },
  {
    title: "Dragon News",
    desc: "A dynamic news portal platform featuring categorized news, breaking news alerts, and a modern user interface for a seamless reading experience.",
    tags: ["React.js", "Next.js", "Tailwind CSS", "Firebase"],
    image: "/dragon_news.png",
    live: "https://dragon-news-one-liart.vercel.app",
    code: "https://github.com/erpranto55/Dragon_News",
    category: "Fullstack",
    accent: "neon-pink"
  },
  {
    title: "Book Vibe",
    desc: "A premium book discovery and review platform where users can browse collections, rate their favorite reads, and manage their personal reading lists with an elegant UI.",
    tags: ["React.js", "Vite", "Tailwind CSS", "Local Storage"],
    image: "/book_vibe.png",
    live: "https://book-vibe-omega-nine.vercel.app",
    code: "https://github.com/erpranto55/Book_Vibe",
    category: "Frontend",
    accent: "neon-orange"
  },
  {
    title: "Keen Keeper",
    desc: "A sophisticated personal connection and friend management platform. Features include timeline filters, interaction stats, and a clean interface for nurturing meaningful relationships.",
    tags: ["React.js", "Tailwind CSS", "DaisyUI", "Vercel"],
    image: "/keen_keeper.png",
    live: "https://keen-keeper-gules.vercel.app",
    code: "https://github.com/erpranto55/Keen_Keeper",
    category: "Frontend",
    accent: "neon-blue"
  },
  {
    title: "BPL-Dream",
    desc: "A high-performance cricket fantasy league platform. Users can assemble their ultimate Dream 11 team, manage player selections, and track team performance with a dynamic and responsive UI.",
    tags: ["React.js", "Tailwind CSS", "Vite", "Netlify"],
    image: "/bpl_dream.png",
    live: "https://bpldream11select.netlify.app/",
    code: "https://github.com/erpranto55/BPL-Dream",
    category: "Frontend",
    accent: "neon-pink"
  }
];

export const ProjectCard = ({ project, index }) => {
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
          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-navy-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
              <HiOutlineExternalLink className="text-white text-2xl" />
            </div>
          </div>
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
            <a 
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-gradient-to-r from-neon-blue to-blue-600 rounded-xl text-sm font-bold text-white flex items-center gap-2 hover:shadow-[0_0_20px_rgba(0,210,255,0.3)] transition-all"
            >
              View Details
              <HiArrowSmallRight className="text-lg" />
            </a>
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

const Projects = () => {
  // Only show first 3 projects on the home page
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <section className="py-24 bg-navy-dark relative overflow-hidden" id="projects">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-blue/5 blur-[150px] rounded-full pointer-events-none"></div>

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
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-pink mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
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
            <Link href="/projects" className="group px-10 py-4 bg-navy-card border border-gray-800 rounded-full text-white font-bold flex items-center gap-3 hover:border-neon-blue/50 hover:shadow-[0_0_30px_rgba(0,210,255,0.1)] transition-all duration-300">
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
  );
};

export default Projects;
