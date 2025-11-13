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
    <section className="w-screen h-screen flex items-center justify-center px-8 md:px-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/4 -left-24 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.6, 0.4],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-24 w-[500px] h-[500px] bg-gradient-to-br from-pink-500/20 to-indigo-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.6, 0.4, 0.6],
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-indigo-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        className="max-w-5xl z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full backdrop-blur-xl group hover-glow">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-semibold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Full Stack Web3 Developer
            </span>
            <Code2 className="w-4 h-4 text-purple-400" />
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-[0.9] tracking-tight"
        >
          <span className="block">Vinit</span>
          <span className="block gradient-text font-[' Space_Grotesk'] animate-float">
            Pithadiya
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl lg:text-2xl text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Crafting the future of decentralized technology.{' '}
          <span className="text-foreground font-medium">Building innovative solutions</span> in DeFi, DAOs, and Web3.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-16 justify-center">
          <a
            href="#about"
            className="cursor-hover group relative px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 hover:shadow-2xl hover:shadow-indigo-500/50 hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10">Explore My Work</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#contact"
            className="cursor-hover group px-8 py-4 glass rounded-full font-semibold hover:bg-white/15 transition-all duration-300 hover:scale-105 hover-glow"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Contact Links */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-6 items-center justify-center"
        >
          <a
            href="mailto:vinitpithadiya@gmail.com"
            className="cursor-hover flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors group"
          >
            <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/30 transition-colors">
              <Mail className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium">vinitpithadiya@gmail.com</span>
          </a>
          <a
            href="tel:+916354669654"
            className="cursor-hover flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors group"
          >
            <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/30 transition-colors">
              <Phone className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium">+91-6354669654</span>
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
