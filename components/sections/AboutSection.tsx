'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Globe, Layers } from 'lucide-react';

const AboutSection = () => {
  const languages = ['C++', 'JavaScript', 'TypeScript', 'Python'];
  const technologies = [
    'ReactJS',
    'NextJS',
    'NodeJS',
    'MongoDB',
    'Subgraph',
    'MySQL',
    'Git',
    'GitHub',
  ];

  const skills = [
    { icon: Code2, title: 'Frontend Development', desc: 'React, Next.js, TypeScript' },
    { icon: Database, title: 'Backend & Database', desc: 'Node.js, MongoDB, MySQL' },
    { icon: Globe, title: 'Web3 Integration', desc: 'Smart Contracts, Subgraphs' },
    { icon: Layers, title: 'Full Stack', desc: 'End-to-end development' },
  ];

  return (
    <section
      id="about"
      className="w-screen h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 relative overflow-hidden grid-bg"
    >
      {/* Subtle floating decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full opacity-40 animate-float delay-100" style={{ backgroundColor: '#8FABD4' }} />
        <div className="absolute bottom-1/3 right-16 w-2.5 h-2.5 rounded-full opacity-40 animate-float delay-300" style={{ backgroundColor: '#4A70A9' }} />
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center py-8 sm:py-12 md:py-16">
        {/* Left side - Photo and visual elements */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative w-full max-w-md mx-auto">
            {/* Decorative elements */}
            <motion.div
              className="absolute -top-4 -left-4 w-48 h-48 sm:w-72 sm:h-72 rounded-3xl blur-2xl"
              style={{ backgroundColor: 'rgba(143, 171, 212, 0.2)' }}
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Photo placeholder */}
            <div className="relative z-10 aspect-square rounded-2xl sm:rounded-3xl glass overflow-hidden border-2" style={{ borderColor: 'rgba(74, 112, 169, 0.2)' }}>
              <div className="w-full h-full bg-gradient-to-br flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(143, 171, 212, 0.2) 0%, rgba(74, 112, 169, 0.2) 100%)' }}>
                <div className="text-center p-4">
                  <div className="w-20 h-20 sm:w-32 sm:h-32 mx-auto mb-3 sm:mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(74, 112, 169, 0.3)' }}>
                    <span className="text-3xl sm:text-5xl font-bold gradient-text">VP</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Add your photo here
                    <br />
                    (400x400px recommended)
                  </p>
                </div>
              </div>
            </div>

            {/* Floating skill badges - hidden on mobile */}
            <motion.div
              className="hidden lg:block absolute -right-8 top-1/4 px-4 py-2 glass rounded-full text-sm font-medium"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Web3 Developer
            </motion.div>
            <motion.div
              className="hidden lg:block absolute -left-8 bottom-1/4 px-4 py-2 glass rounded-full text-sm font-medium"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              Blockchain Expert
            </motion.div>
          </div>
        </motion.div>

        {/* Right side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-h-[75vh] sm:max-h-[80vh] overflow-y-auto scrollbar-hide"
        >
          <div className="mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg italic text-indigo-600 dark:text-indigo-400 opacity-80">
              From code to Web3 — the toolkit behind the innovation
            </p>
          </div>

          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 md:mb-8 leading-relaxed">
            I&apos;m a passionate Full Stack Web3 Developer with expertise in building
            decentralized applications, smart contracts, and blockchain solutions.
            Currently working at Lampros Tech, I&apos;ve contributed to various innovative
            projects in the Web3 ecosystem, focusing on DAOs, DeFi platforms, and
            AI-powered governance tools.
          </p>

          {/* Skills grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="glass rounded-lg sm:rounded-xl p-3 sm:p-4 cursor-hover group hover:bg-white/5 dark:hover:bg-white/5 transition-all glow-effect"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <skill.icon className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-500 dark:text-indigo-400 mb-2 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-1 text-sm sm:text-base">{skill.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{skill.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Languages */}
          <div className="mb-4 sm:mb-6">
            <h3 className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2 sm:mb-3 uppercase tracking-wider">
              Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang, index) => (
                <motion.span
                  key={index}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 glass rounded-full text-xs sm:text-sm cursor-hover hover:bg-indigo-500/20 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {lang}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2 sm:mb-3 uppercase tracking-wider">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 glass rounded-full text-xs sm:text-sm cursor-hover hover:bg-indigo-500/20 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
