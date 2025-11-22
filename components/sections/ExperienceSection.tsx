'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, Users, Trophy, Target, Zap, Award } from 'lucide-react';

const ExperienceSection = () => {
  const experience = {
    company: 'Lampros Tech',
    location: 'Ahmedabad, India',
    role: 'Software Development Engineer',
    team: 'Apps for Enterprises',
    period: 'Feb 2024 - Present',
    story: 'At Lampros Tech, I discovered the power of Web3 innovation. Starting as a curious developer, I quickly became the go-to person for complex blockchain integrations. My journey began with learning The Graph protocol, which opened doors to building sophisticated DAO tools. Each project taught me something new - from AI-powered governance to decentralized task management.',
    expertise: [
      'Web3 Development', 'The Graph Protocol', 'Smart Contracts', 'Next.js',
      'React', 'TypeScript', 'AI & Machine Learning', 'RAG Architecture',
      'FastAPI', 'Node.js', 'DAO Tools', 'Blockchain Integration'
    ],
    achievements: [
      '🏆 Received "Hidden Gem Award" for exceptional innovation',
      '⚡ Pioneered AI-powered blockchain governance solutions',
    ]
  };

  return (
    <section
      id="experience"
      className="w-screen h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 relative overflow-hidden grid-bg"
    >
      <div className="max-w-6xl w-full h-full flex flex-col py-4 sm:py-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-4 sm:mb-6"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-500 dark:text-gray-400 mb-1">
            Professional journey and contributions
          </p>
          <p className="text-xs sm:text-sm italic text-indigo-600 dark:text-indigo-400 opacity-80">
            Turning ideas into reality — Web3, AI, and decentralized innovation
          </p>
        </motion.div>

        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 h-full flex flex-col space-y-3 sm:space-y-4"
          >
            {/* Company Header */}
            <div className="flex items-center justify-between border-b border-gray-300 dark:border-gray-700 pb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500">
                  <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{experience.company}</h3>
                  <p className="text-indigo-500 dark:text-indigo-400 font-semibold text-xs sm:text-sm">{experience.role}</p>
                </div>
              </div>
              <div className="text-right text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                <div>{experience.period}</div>
                <div>{experience.location}</div>
              </div>
            </div>

            {/* Journey Section - Full Width Horizontal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-indigo-500/10 via-purple-500/5 to-indigo-500/10 rounded-xl p-4 sm:p-6 border border-indigo-500/20"
            >
              <h4 className="text-base sm:text-lg font-bold mb-3 text-gray-800 dark:text-gray-200 text-center">My Journey at {experience.company}</h4>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed text-center max-w-4xl mx-auto">
                {experience.story}
              </p>
            </motion.div>

            {/* Split Layout: Expertise + Achievements */}
            <div className="flex-1 grid md:grid-cols-2 gap-6">
              {/* Left Side - Expertise Areas */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-base sm:text-lg font-bold mb-4 text-gray-800 dark:text-gray-200 text-center">Core Expertise</h4>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                  {experience.expertise.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-500/30 hover:from-indigo-500/30 hover:to-purple-500/30 hover:border-indigo-500/50 hover:scale-105 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-indigo-500/25"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Right Side - Key Achievements */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="text-base sm:text-lg font-bold mb-4 text-gray-800 dark:text-gray-200 text-center">Key Achievements</h4>
                <div className="space-y-3">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="group p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:from-green-500/20 hover:to-emerald-500/20 hover:border-green-500/40 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🏆</span>
                      <div>
                        <h5 className="text-sm sm:text-base font-bold text-gray-800 dark:text-gray-200">Hidden Gem Award</h5>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Received company recognition for exceptional innovation and outstanding contributions to Web3 projects</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="group p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:from-blue-500/20 hover:to-cyan-500/20 hover:border-blue-500/40 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">⚡</span>
                      <div>
                        <h5 className="text-sm sm:text-base font-bold text-gray-800 dark:text-gray-200">AI-Driven Governance</h5>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Successfully delivered an AI agent to support proposal decision-making for the Optimism DAO.</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
