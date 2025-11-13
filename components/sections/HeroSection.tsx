'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code2, Mail, Phone, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="w-screen h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Simple background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="max-w-5xl z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/30 backdrop-blur-sm">
            <Code2 className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Full Stack Web3 Developer
            </span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight"
        >
          <span className="block text-gray-900 dark:text-white">Vinit</span>
          <span className="block gradient-text">
            Pithadiya
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Building the future of Web3.{' '}
          <span className="text-gray-900 dark:text-white font-semibold">Crafting decentralized solutions</span> for DeFi, DAOs, and blockchain technology.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-16 justify-center">
          <a
            href="#about"
            className="cursor-hover group px-8 py-3.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-all duration-200 flex items-center gap-2"
          >
            <span>Explore My Work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="cursor-hover px-8 py-3.5 border border-gray-300 dark:border-gray-700 hover:border-purple-600 dark:hover:border-purple-500 rounded-lg font-medium transition-all duration-200"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Contact Links */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-6 items-center justify-center text-sm"
        >
          <a
            href="mailto:vinitpithadiya@gmail.com"
            className="cursor-hover flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>vinitpithadiya@gmail.com</span>
          </a>
          <span className="text-gray-300 dark:text-gray-700">•</span>
          <a
            href="tel:+916354669654"
            className="cursor-hover flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>+91-6354669654</span>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{
            x: [0, 10, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <span className="text-xs text-gray-400 font-medium tracking-wider uppercase">Scroll</span>
          <ArrowRight className="w-5 h-5 text-indigo-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
