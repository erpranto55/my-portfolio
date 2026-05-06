"use client";
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Magnetic from './Magnetic';

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      className={`group grid md:grid-cols-2 gap-8 items-center bg-navy-card rounded-3xl p-6 border border-gray-800 hover:border-${project.accent}/30 transition-all perspective-1000`}
    >
      <div className={project.reverse ? "order-2" : "order-2 md:order-1"}>
        <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
        <p className="text-gray-400 mb-6 leading-relaxed">{project.desc}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300">{tag}</span>
          ))}
        </div>
        <Magnetic>
          <a className={`inline-flex items-center text-${project.accent} font-bold group-hover:translate-x-2 transition-transform`} href="#">
            Case Study <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
          </a>
        </Magnetic>
      </div>
      <div className={`${project.reverse ? "order-1" : "order-1 md:order-2"} rounded-2xl overflow-hidden aspect-video relative`}>
        <motion.div 
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full"
        >
          <img 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500" 
            src={project.image}
          />
        </motion.div>
        <div className={`absolute inset-0 bg-${project.accent}/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}></div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform Redesign",
      desc: "A complete overhaul of a large-scale e-commerce site, improving load times by 40% and conversion rates by 15% through optimized React components.",
      tags: ["React", "Next.js", "Tailwind"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBX2uaCCtTzZZfx7qGUCnIztxV9D0lSOrAjTemMzLFefsvxVZNJopHkYbRTf93iOXIitE5nRvXrn-RFce_rHtRSUZ75CVn_4xDCsSAcEGhUHIO2X7n4CBIoCun3KPLVoZypBlygW2ylfxdR4t9mrkdAf2IeXQzhwzN8LqCqjXOhgVkK5qo3MF-F_jYY_eiEIbSSv5J2uroGJa0VCOkUkw_eDhn-hKTxfeRheupOHuqwKHrFxc4db4f-dwBWgGzmmT1dDa4iKct23WHy",
      accent: "neon-blue",
      reverse: false
    },
    {
      title: "Financial Analytics Dashboard",
      desc: "Real-time data visualization tool for crypto assets, featuring complex charts and live WebSocket integrations.",
      tags: ["TypeScript", "D3.js", "Node.js"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3YLSD-6GcIfJB661kbjbMvjpxGqW-zBLj7vFKiOoRtuBlb2jI_PvUnT0JvpH8WTsWyvCYLKpEYf0mMk5op7YmlRwEI4GRZyAvZinVvoU4crjw9dygO8IBFeBrK9ZgaZ_ebxz7OkC3ujm59z2K2JDL9u3Emp_xhoLcidZga0AcaCHM8vfnJWloZfKiF1At-9kdJLMtl4L2LS9bsfdcgrYK2PD7fd3rlBO1NGfXky1c_HWPsVVkmB13G4LY2UkVpplNXf90XrorkYpr",
      accent: "neon-pink",
      reverse: true
    }
  ];

  return (
    <section className="py-24 bg-gray-900/30" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Projects Highlights</h2>
            <p className="text-gray-400">A selection of my recent works</p>
          </motion.div>
          <Magnetic>
            <a className="text-neon-blue font-semibold hover:underline hidden sm:block" href="#">View All Projects</a>
          </Magnetic>
        </div>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

