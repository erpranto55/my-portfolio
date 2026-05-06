"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { SiLeetcode, SiCodeforces, SiCodechef } from "react-icons/si";
import { HiOutlineExternalLink } from "react-icons/hi";

const ProblemSolving = () => {
  const platforms = [
    {
      name: "LeetCode",
      username: "erpranto55",
      stats: "350+ Problems Solved",
      rank: "Top Solver",
      color: "from-yellow-500 to-orange-500",
      icon: <SiLeetcode />,
      link: "https://leetcode.com/u/erpranto55/"
    },
    {
      name: "Codeforces",
      username: "erpranto55",
      stats: "Pupil",
      rank: "Rating: 1200+",
      color: "from-blue-500 to-cyan-500",
      icon: <SiCodeforces />,
      link: "https://codeforces.com/profile/erpranto55"
    },
    {
      name: "CodeChef",
      username: "erpranto55",
      stats: "3 Star (3*)",
      rank: "Competitive Programmer",
      color: "from-emerald-500 to-teal-500",
      icon: <SiCodechef />,
      link: "https://www.codechef.com/users/erpranto55"
    }
  ];

  return (
    <section className="py-24 bg-navy-dark relative overflow-hidden" id="problem-solving">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-blue/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-neon-pink uppercase tracking-[0.3em] text-sm font-bold block mb-4">Competitive Programming</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Problem Solving Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-pink to-neon-orange mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Passionately solving algorithmic challenges and optimizing performance across top competitive platforms.
          </p>
        </motion.div>

        {/* Platforms Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <motion.a
              key={index}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="group relative bg-navy-card/40 p-8 rounded-[2rem] border border-gray-800/50 hover:border-gray-700 transition-all duration-500 block overflow-hidden"
            >
              {/* Glow Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className={`text-5xl transition-transform duration-500 group-hover:scale-110 drop-shadow-lg`}>
                  {platform.icon}
                </div>
                <div className="p-3 bg-gray-900 rounded-xl border border-gray-800 group-hover:border-white/20 transition-all">
                  <HiOutlineExternalLink className="text-xl text-gray-500 group-hover:text-white" />
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-1">{platform.name}</h3>
                <p className="text-neon-blue text-sm font-medium mb-4">@{platform.username}</p>
                
                <div className="space-y-3 pt-4 border-t border-gray-800/50">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${platform.color}`}></div>
                    <span className="text-white font-bold text-lg">{platform.stats}</span>
                  </div>
                  <p className="text-gray-500 text-sm font-medium pl-5">{platform.rank}</p>
                </div>
              </div>

              {/* Decorative Accent */}
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${platform.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}></div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProblemSolving;
