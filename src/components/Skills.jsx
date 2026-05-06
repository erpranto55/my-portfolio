"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      title: "Web Design",
      desc: "Clean, modern, and aesthetic web interfaces that convert visitors into customers.",
      icon: <svg className="w-6 h-6 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>,
      bgColor: "bg-blue-500/20",
      color: "neon-blue"
    },
    {
      title: "UI/UX Design",
      desc: "Focusing on user-centric design principles to ensure ease of use and satisfaction.",
      icon: <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09a13.916 13.916 0 002.522-7.441c0-4.707-2.313-8.511-5.166-8.511l.06-.18c.633-1.914 2.227-3.918 4.415-3.918 2.188 0 3.969 1.437 4.498 3.391a13.113 13.113 0 01.76 4.974c0 2.608-.533 5.092-1.492 7.348m-3.44-2.04L14.75 20.43c2.083-1.127 3.921-2.704 5.37-4.605m-5.37 4.605l.054-.09a13.916 13.916 0 002.522-7.441c0-4.707-2.313-8.511-5.166-8.511" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>,
      bgColor: "bg-purple-500/20",
      color: "purple-400"
    },
    {
      title: "Web App",
      desc: "Building robust, scalable, and secure web applications tailored to your business.",
      icon: <svg className="w-6 h-6 text-neon-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>,
      bgColor: "bg-pink-500/20",
      color: "neon-pink"
    },
    {
      title: "SEO Optimization",
      desc: "Improving search engine rankings to drive more organic traffic to your platform.",
      icon: <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>,
      bgColor: "bg-green-500/20",
      color: "green-400"
    },
    {
      title: "App Dev",
      desc: "Cross-platform mobile application development for Android and iOS users.",
      icon: <svg className="w-6 h-6 text-neon-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>,
      bgColor: "bg-orange-500/20",
      color: "neon-orange"
    },
    {
      title: "DB Design",
      desc: "Efficient and secure database architecture to handle your application's data.",
      icon: <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>,
      bgColor: "bg-indigo-500/20",
      color: "indigo-400"
    }
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <p className="text-gray-400">Transforming ideas into reality through code</p>
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

