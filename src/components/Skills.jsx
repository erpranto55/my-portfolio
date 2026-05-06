"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      title: "Frontend Developer",
      desc: "Building responsive, modern, and interactive user interfaces using React.js, Next.js, Tailwind CSS, and modern animation libraries.",
      color: "from-cyan-500/20 to-blue-500/10",
      border: "hover:border-cyan-500/40",
      icon: (
        <svg
          className="w-6 h-6 text-neon-blue"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          ></path>
        </svg>
      ),
    },

    {
      title: "Backend Developer",
      desc: "Developing scalable server-side applications, REST APIs, authentication systems, and database integration using Node.js and MongoDB.",
      color: "from-purple-500/20 to-pink-500/10",
      border: "hover:border-purple-500/40",
      icon: (
        <svg
          className="w-6 h-6 text-purple-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          ></path>
        </svg>
      ),
    },

    {
      title: "Full Stack Developer",
      desc: "Creating complete web applications by combining frontend and backend technologies with clean architecture and optimized performance.",
      color: "from-pink-500/20 to-orange-500/10",
      border: "hover:border-pink-500/40",
      icon: (
        <svg
          className="w-6 h-6 text-neon-pink"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M13 10V3L4 14h7v7l9-11h-7z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          ></path>
        </svg>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-gray-900/50" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
            My Expertise
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Building modern, scalable, and high-performance web applications with clean design and smooth user experiences.
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                y: -5,
                borderColor: `var(--color-${skill.color})`
              }}
              className="bg-navy-card p-8 rounded-2xl border border-gray-800 card-hover group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className={`w-12 h-12 ${skill.bgColor} rounded-lg flex items-center justify-center mb-6`}
              >
                {skill.icon}
              </motion.div>
              <h3 className="text-lg font-bold text-white mb-2">{skill.title}</h3>
              <p className="text-gray-400 text-sm">{skill.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

