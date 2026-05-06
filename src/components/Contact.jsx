"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

const Contact = () => {
  return (
    <section className="py-24 bg-navy-dark relative" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-gray-400">Let's discuss your next project</p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8" 
            data-purpose="contact-info"
          >
            <h3 className="text-2xl font-bold text-white">Get in Touch</h3>
            <p className="text-gray-400 max-w-md">I'm currently available for freelance work and full-time positions. If you have a project that needs some creative injection, please feel free to reach out.</p>
            <div className="space-y-6">
              {[
                { label: "Email me at", value: "hello@alexportfolio.com", color: "neon-blue", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> },
                { label: "Location", value: "San Francisco, CA", color: "neon-pink", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4"
                >
                  <div className={`w-12 h-12 bg-navy-card rounded-xl border border-gray-800 flex items-center justify-center text-${item.color}`}>
                    {item.icon}
                  </div>
                  <div>
                    <span className="block text-gray-500 text-sm">{item.label}</span>
                    <span className="text-white font-medium">{item.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-navy-card p-8 rounded-3xl border border-gray-800" 
            data-purpose="contact-form"
          >
            <form action="#" className="space-y-4" method="POST">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <motion.input 
                    whileFocus={{ scale: 1.02 }}
                    className="w-full bg-gray-900 border-gray-800 rounded-lg focus:ring-neon-blue focus:border-neon-blue text-white p-2 outline-none transition-all" 
                    placeholder="John Doe" 
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <motion.input 
                    whileFocus={{ scale: 1.02 }}
                    className="w-full bg-gray-900 border-gray-800 rounded-lg focus:ring-neon-blue focus:border-neon-blue text-white p-2 outline-none transition-all" 
                    placeholder="john@example.com" 
                    type="email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                <motion.input 
                  whileFocus={{ scale: 1.02 }}
                  className="w-full bg-gray-900 border-gray-800 rounded-lg focus:ring-neon-blue focus:border-neon-blue text-white p-2 outline-none transition-all" 
                  placeholder="Project Inquiry" 
                  type="text"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <motion.textarea 
                  whileFocus={{ scale: 1.02 }}
                  className="w-full bg-gray-900 border-gray-800 rounded-lg focus:ring-neon-blue focus:border-neon-blue text-white p-2 outline-none transition-all" 
                  placeholder="Tell me about your project..." 
                  rows="4"
                ></motion.textarea>
              </div>
              <Magnetic>
                <button className="w-full py-4 bg-gradient-to-r from-neon-blue to-neon-pink rounded-xl font-bold text-white hover:shadow-[0_0_30px_rgba(0,210,255,0.3)] transition-all" type="submit">Send Message</button>
              </Magnetic>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

