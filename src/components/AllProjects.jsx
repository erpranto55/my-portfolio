"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData, ProjectCard } from './Projects';

const AllProjects = () => {
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", "Frontend", "Backend", "Fullstack"];

  // Adding more data to fill the categories
  const extendedProjectsData = [
    ...projectsData,

  ];

  // Map "Fullstack" to "Full Stack" if needed, but I'll standardize on "Fullstack"
  const filteredProjects = activeTab === "All" 
    ? extendedProjectsData 
    : extendedProjectsData.filter(p => {
        const cat = p.category.replace(' ', ''); // Normalize "Full Stack" to "Fullstack"
        return cat.toLowerCase() === activeTab.toLowerCase();
      });

  return (
    <section className="py-32 bg-navy-dark min-h-screen relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon-blue/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-neon-pink/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-12 tracking-tight">All Projects</h1>
          
          {/* Category Tabs - Matching the Screenshot Style */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 border ${
                  activeTab === cat 
                    ? "bg-neon-blue border-neon-blue text-white shadow-[0_0_20px_rgba(0,210,255,0.4)]" 
                    : "bg-navy-card border-gray-800 text-gray-500 hover:border-gray-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default AllProjects;
