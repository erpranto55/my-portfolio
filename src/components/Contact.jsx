"use client";
import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlineCheckCircle } from "react-icons/hi";
import { FaPaperPlane } from "react-icons/fa6";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // These should ideally be in .env.local
    // For now, I'm using placeholders. The user needs to create an account at emailjs.com
    const SERVICE_ID = "service_2tewtto"; 
    const TEMPLATE_ID = "template_roqvuwm";
    const PUBLIC_KEY = "igrBxTpmLaWpvHkVT";

    emailjs.sendForm(
      SERVICE_ID, 
      TEMPLATE_ID, 
      form.current, 
      PUBLIC_KEY
    )
      .then((result) => {
          console.log(result.text);
          setStatus('success');
          form.current.reset();
          setTimeout(() => setStatus('idle'), 5000);
      }, (error) => {
          console.log(error.text);
          setStatus('error');
          setTimeout(() => setStatus('idle'), 5000);
      });
  };

  return (
    <section className="py-24 bg-navy-dark relative overflow-hidden" id="contact">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-blue/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-neon-blue uppercase tracking-[0.3em] text-sm font-bold block mb-4">Get In Touch</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Let's Work Together</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project idea or collaboration in mind? Feel free to reach out and let's create something extraordinary.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">Contact Information</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                I’m passionate about building modern web applications and solving real-world problems. 
                Whether you have a project idea or just want to connect — my inbox is always open.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { 
                  label: "Email me at", 
                  value: "erpranto55@gmail.com", 
                  color: "blue", 
                  icon: <HiOutlineMail />,
                  link: "mailto:erpranto55@gmail.com"
                },
                { 
                  label: "Location", 
                  value: "Mirpur 1, Dhaka, Bangladesh", 
                  color: "pink", 
                  icon: <HiOutlineLocationMarker />,
                  link: "https://maps.google.com/?q=Mirpur+1,+Dhaka"
                }
              ].map((item, i) => (
                <motion.a 
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-5 group"
                >
                  <div className={`w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center text-2xl text-neon-${item.color} border border-gray-800 group-hover:border-neon-${item.color}/50 transition-all duration-300`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">{item.label}</p>
                    <p className="text-white text-lg font-semibold group-hover:text-neon-blue transition-colors">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <form 
              ref={form} 
              onSubmit={sendEmail}
              className="bg-navy-card/50 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-gray-800/50 shadow-2xl space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Name</label>
                  <input 
                    name="name"
                    required
                    className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue/50 focus:border-neon-blue transition-all" 
                    placeholder="Your Name" 
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Email</label>
                  <input 
                    name="email"
                    required
                    className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue/50 focus:border-neon-blue transition-all" 
                    placeholder="Your Email" 
                    type="email"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Subject</label>
                <input 
                  name="subject"
                  required
                  className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue/50 focus:border-neon-blue transition-all" 
                  placeholder="Project Inquiry" 
                  type="text"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
                <textarea 
                  name="message"
                  required
                  rows="5"
                  className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue/50 focus:border-neon-blue transition-all resize-none" 
                  placeholder="Tell me about your project..." 
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={status === 'sending'}
                className={`w-full group relative overflow-hidden py-5 rounded-xl font-bold text-white transition-all duration-300 ${
                  status === 'success' ? 'bg-green-500' : 
                  status === 'error' ? 'bg-red-500' : 
                  'bg-gradient-to-r from-neon-blue to-blue-600'
                }`}
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {status === 'idle' && (
                    <>
                      Send Message
                      <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                  {status === 'sending' && "Sending..."}
                  {status === 'success' && (
                    <>
                      Message Sent!
                      <HiOutlineCheckCircle className="text-2xl" />
                    </>
                  )}
                  {status === 'error' && "Failed to Send"}
                </span>
                
                {/* Button Glow Effect */}
                <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              </button>

              {/* Feedback Messages */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-green-400 text-center text-sm font-medium"
                  >
                    Thank you! I'll get back to you shortly.
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-red-400 text-center text-sm font-medium"
                  >
                    Something went wrong. Please try again later.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
