"use client";
import React from 'react';
import { motion } from 'framer-motion';

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
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-navy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Core Services</h2>
          <p className="text-gray-400">Delivering excellence in every line of code</p>
        </motion.div>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Web Development",
              desc: "End-to-end development of custom websites and web applications with modern tech.",
              icon: <svg className="w-8 h-8 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>,
              bgIcon: <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M4 6h16v12H4z"></path></svg>,
              accent: "neon-blue"
            },
            {
              title: "Product Design",
              desc: "Designing intuitive and engaging products that focus on user needs and goals.",
              icon: <svg className="w-8 h-8 text-neon-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>,
              bgIcon: null,
              accent: "neon-pink"
            },
            {
              title: "Dashboard UI",
              desc: "Creating data-driven, interactive dashboards for complex enterprise systems.",
              icon: <svg className="w-8 h-8 text-neon-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>,
              bgIcon: null,
              accent: "neon-orange"
            }
          ].map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-navy-card to-gray-900 p-10 rounded-3xl border border-gray-800 text-center relative overflow-hidden group"
            >
              {service.bgIcon && (
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  {service.bgIcon}
                </div>
              )}
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`mb-6 mx-auto w-16 h-16 bg-${service.accent}/10 rounded-full flex items-center justify-center`}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${service.accent} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

