"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineDevicePhoneMobile, HiOutlineCpuChip } from "react-icons/hi2";
import { MdOutlineCode } from "react-icons/md";

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const services = [
    {
      title: "Frontend Development",

      desc: "Creating modern, responsive, and interactive user interfaces using React.js, Next.js, Tailwind CSS, and smooth GSAP/Framer Motion animations focused on performance and user experience.",

      icon: <MdOutlineCode className="text-neon-blue" />,
      color: "blue",
      accent: "#00d2ff"
    },

    {
      title: "Backend Development",

      desc: "Building scalable backend systems, REST APIs, authentication workflows, and database integration using Node.js, Express.js, Firebase, and MongoDB.",

      icon: <HiOutlineCpuChip className="text-neon-pink" />,
      color: "pink",
      accent: "#ff007a"
    },

    {
      title: "Full Stack Development",

      desc: "Developing complete full stack web applications by combining clean frontend architecture with efficient backend logic to deliver fast, scalable, and modern digital experiences.",

      icon: <HiOutlineDevicePhoneMobile className="text-neon-orange" />,
      color: "orange",
      accent: "#ff6b00"
    }
  ];

  return (
    <section className="py-24 bg-navy-dark relative overflow-hidden" id="expertise">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-neon-blue/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-neon-pink/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            viewport={{ once: true }}
            className="text-neon-blue uppercase text-sm font-bold block mb-4"
          >
            My Expertise
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Building Modern Web Solutions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-pink mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-8 max-w-2xl mx-auto text-lg">
            Focused on building scalable, high-performance, and visually polished web applications with clean architecture and seamless user experiences.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -15 }}
              className="group relative bg-navy-card/40 p-10 rounded-[2.5rem] border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500 overflow-hidden"
            >
              {/* Inner Glow Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${service.accent}15 0%, transparent 70%)`
                }}
              ></div>

              {/* Icon Container */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`relative z-10 mb-8 w-20 h-20 bg-gray-900/80 rounded-2xl flex items-center justify-center text-4xl border border-gray-800 shadow-xl group-hover:border-${service.color}-500/30 transition-colors duration-500`}
              >
                {service.icon}
              </motion.div>

              {/* Text Content */}
              <h3 className="relative z-10 text-2xl font-bold text-white mb-5 tracking-wide">
                {service.title}
              </h3>
              <p className="relative z-10 text-gray-400 leading-relaxed text-base group-hover:text-gray-300 transition-colors duration-300">
                {service.desc}
              </p>

              {/* Bottom Decorative Line */}
              <div
                className="absolute bottom-0 left-0 w-full h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"
                style={{ background: `linear-gradient(to right, transparent, ${service.accent}, transparent)` }}
              ></div>

              {/* Top Corner Glow */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/5 blur-2xl rounded-full group-hover:bg-white/10 transition-all duration-700"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;