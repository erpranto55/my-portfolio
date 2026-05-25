"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';
import profilePic from "@/assets/ER_Pranto.jpg";
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";

const Counter = ({ value, label }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-navy-card p-6 rounded-2xl border border-gray-800 text-center hover:border-neon-blue/30 transition-all duration-300"
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="block text-3xl font-bold text-white mb-1"
      >
        {value}
      </motion.span>

      <span className="text-xs text-gray-500 uppercase tracking-wider">
        {label}
      </span>
    </motion.div>
  );
};

const About = () => {
  return (
    <section className="py-16 md:py-20 bg-navy-dark relative overflow-hidden z-10" id="about">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-neon-blue/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-neon-pink/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-neon-blue uppercase tracking-[0.3em] text-sm font-semibold">
            About Me
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
            From Algorithms
            <span className="block gradient-text">
              to Applications
            </span>
          </h2>

          <div className="w-24 h-1 bg-neon-blue mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-navy-card p-8 rounded-3xl border border-gray-800 flex flex-col items-center text-center relative overflow-hidden"
          >

            <div className="absolute inset-0 bg-linear-to-br from-neon-blue/5 to-neon-pink/5"></div>

            {/* Image */}
            <motion.div
              whileHover={{ rotate: 3, scale: 1.05 }}
              className="relative w-36 h-36 rounded-3xl overflow-hidden mb-6 border-2 border-neon-blue/40 p-1 cursor-pointer z-10 shadow-[0_0_30px_rgba(0,210,255,0.15)]"
            >
              <Image
                alt="Md Eyamin Rahman Pranto"
                src={profilePic}
                fill
                priority
                className="object-cover rounded-2xl"
              />
            </motion.div>

            <h3 className="text-2xl font-bold text-white mb-2 z-10">
              Md Eyamin Rahman Pranto
            </h3>

            <p className="text-neon-blue text-sm mb-6 z-10">
              Full Stack Developer & Competitive Programmer
            </p>

            <p className="text-gray-400 text-sm leading-relaxed mb-8 z-10">
              Algorithmic thinker. Full-stack builder. I approach every system the same way I'd approach a contest problem — with efficiency and clarity as the baseline.
            </p>

            {/* Socials */}
            <div className="flex gap-4 mb-8 z-10">
              {[
                { icon: <FaGithub />, href: "https://github.com/erpranto55", label: "GitHub Profile" },
                { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/erpranto55/", label: "LinkedIn Profile" },
                { icon: <FaXTwitter />, href: "https://x.com/erpranto55", label: "Twitter / X Profile" }
              ].map((social, i) => (
                <Magnetic key={i}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl border border-gray-700 flex items-center justify-center text-xl text-gray-400 hover:text-white hover:border-neon-blue transition-all duration-300"
                    href={social.href}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                </Magnetic>
              ))}
            </div>

            {/* Button */}
            <Magnetic>
              <a href="#projects" className="w-full py-3 bg-neon-blue/10 border border-neon-blue/30 rounded-xl text-neon-blue text-center font-semibold hover:bg-neon-blue hover:text-white transition-all duration-300 z-10">
                View My Work
              </a>
            </Magnetic>
          </motion.div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-2 space-y-8">

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-navy-card p-8 rounded-3xl border border-gray-800"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Professional Bio
              </h3>

              <div className="space-y-5 text-gray-400 leading-relaxed">
                <p>
                  My journey started with competitive programming — debugging C/C++ at 2 AM, optimizing time complexity, and placing in rated contests. That algorithmic foundation now drives how I architect web applications: every system gets the same scrutiny I'd give a runtime constraint.
                </p>

                <p>
                  Today I build full-stack products with React, Next.js, and Node.js — from database schema to deployed UI. I still compete on Codeforces, LeetCode, and CodeChef, and I've collaborated in team contests as part of Infinity Loopers.
                </p>

                <p>
                  If you need someone who can design a clean interface AND reason about the algorithm underneath it — let's talk.
                </p>
              </div>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Counter value="20+" label="Projects" />
              <Counter value="350+" label="Problems Solved" />
              <Counter value="3+" label="Years Building" />
              <Counter value="Top 10%" label="LeetCode" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
