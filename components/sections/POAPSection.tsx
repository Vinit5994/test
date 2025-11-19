'use client';

import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const POAPSection = () => {
  const poapAddress = '0x256139dbd80836aa14ff0481f3883cfa3379da00';
  const poapUrl = `https://collectors.poap.xyz/scan/${poapAddress}`;

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
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="poap"
      className="w-screen h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 relative overflow-hidden grid-bg"
    >
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full blur-3xl animate-float-slow" style={{ backgroundColor: 'rgba(74, 112, 169, 0.15)' }} />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full blur-3xl animate-float-slow delay-500" style={{ backgroundColor: 'rgba(143, 171, 212, 0.15)' }} />
      </div>

      <motion.div
        className="max-w-7xl w-full z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 mb-4 md:mb-6">
            <Award className="w-6 h-6 md:w-8 md:h-8 text-indigo-400" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text">
              POAP Collection
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 mb-2 max-w-2xl mx-auto px-4">
            Proof of Attendance Protocol - My journey in Web3 events and communities
          </p>
          <p className="text-xs sm:text-sm md:text-base italic text-indigo-600 dark:text-indigo-400 opacity-80 max-w-2xl mx-auto px-4">
            Digital badges of community — every event, every connection, every moment
          </p>
        </motion.div>

        {/* POAP Display */}
        <motion.div variants={itemVariants} className="w-full">
          <div className="relative w-full max-w-5xl mx-auto">
            {/* POAP Frame */}
            <div className="glass rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 glow-effect">
              <div className="relative w-full bg-white dark:bg-gray-900 rounded-lg md:rounded-xl overflow-hidden border-2 border-indigo-400/20" style={{ height: '400px', maxHeight: '60vh' }}>
                <iframe
                  src={poapUrl}
                  className="w-full h-full"
                  title="POAP Collection"
                  style={{ border: 'none' }}
                  loading="lazy"
                />
              </div>

              {/* View Full Collection Button */}
              <div className="mt-4 md:mt-6 flex justify-center">
                <a
                  href={poapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-indigo-400 hover:bg-indigo-500 text-white rounded-lg md:rounded-xl font-medium text-sm md:text-base transition-all duration-300 hover:scale-105 cursor-hover group"
                >
                  <span>View Full Collection</span>
                  <ExternalLink className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 md:w-24 md:h-24 rounded-full bg-indigo-400/10 blur-xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 md:w-24 md:h-24 rounded-full bg-purple-400/10 blur-xl animate-pulse delay-300" />
          </div>
        </motion.div>

        {/* Info Text */}
        <motion.div variants={itemVariants} className="mt-6 md:mt-8 text-center">
          <p className="text-xs sm:text-sm md:text-base text-gray-500 dark:text-gray-500">
            POAPs are digital collectibles that prove attendance at special events
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default POAPSection;
