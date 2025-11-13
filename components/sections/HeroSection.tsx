'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Phone } from 'lucide-react';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section className="w-screen h-screen flex items-center justify-center px-8 md:px-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <motion.div
        className="max-w-4xl z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="text-indigo-400 font-medium tracking-wider uppercase text-sm">
            Full Stack Web3 Developer
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
        >
          Vinit{' '}
          <span className="gradient-text font-['Space_Grotesk']">
            Pithadiya
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl leading-relaxed"
        >
          Building decentralized futures with blockchain technology. Specializing
          in DeFi, DAOs, and scalable Web3 applications.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
          <a
            href="#about"
            className="cursor-hover group px-8 py-4 bg-indigo-500 hover:bg-indigo-600 rounded-full font-medium transition-all duration-300 flex items-center gap-2"
          >
            Explore My Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="cursor-hover px-8 py-4 glass rounded-full font-medium hover:bg-white/10 transition-all duration-300"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-6 items-center"
        >
          <a
            href="mailto:vinitpithadiya@gmail.com"
            className="cursor-hover flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span className="text-sm">vinitpithadiya@gmail.com</span>
          </a>
          <a
            href="tel:+916354669654"
            className="cursor-hover flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span className="text-sm">+91-6354669654</span>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{
            x: [0, 10, 0],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <ArrowRight className="w-6 h-6 text-indigo-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
