'use client';

import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const POAPSection = () => {
  const poaps = [
    {
      id: 7484275,
      name: "ETHOnline 2025 Hacker",
      imageUrl: "https://assets.poap.xyz/0780260b-b4e2-4823-bbc9-06d99255bb56.png",
      date: "Oct 2025",
      totalMinted: 585,
      mintOrder: 353,
      event: "ETHOnline 2025",
      link: "https://app.poap.xyz/token/7484275",
      isWinner: false
    },
    {
      id: 7462388,
      name: "ETHGlobal Delhi 2025 Hacker",
      imageUrl: "https://assets.poap.xyz/ethglobal-delhi-2025-hacker-2025-logo-1759139096830.png",
      date: "Sep 2025",
      totalMinted: 666,
      mintOrder: 343,
      event: "ETHGlobal Delhi",
      link: "https://app.poap.xyz/token/7462388",
      isWinner: false
    },
    {
      id: 7427075,
      name: "ETHGlobal Unite DeFi 2025 Hacker",
      imageUrl: "https://assets.poap.xyz/583029c3-013b-49bd-b4bf-8c251dc2d141.png",
      date: "Aug 2025",
      totalMinted: 240,
      mintOrder: 220,
      event: "Unite DeFi 2025",
      link: "https://app.poap.xyz/token/7427075",
      isWinner: false
    },
    {
      id: 7322761,
      name: "Agentic Ethereum Hackathon Hacker",
      imageUrl: "https://assets.poap.xyz/5761df34-64f4-4228-abc9-56787efd82c7.png",
      date: "Feb 2025",
      totalMinted: 610,
      mintOrder: 399,
      event: "Agentic Ethereum",
      link: "https://app.poap.xyz/token/7322761",
      isWinner: false
    },
    {
      id: 7230563,
      name: "ETHOnline 2024 Hacker",
      imageUrl: "https://assets.poap.xyz/8064b38b-096b-484e-8a98-31f052208732.png",
      date: "Sep 2024",
      totalMinted: 349,
      mintOrder: 338,
      event: "ETHOnline 2024",
      link: "https://app.poap.xyz/token/7230563",
      isWinner: false
    },
    {
      id: 7186975,
      name: "Superhack 2024 Hacker",
      imageUrl: "https://assets.poap.xyz/a1aed95e-3455-435f-8e8e-a13c1c4e7d29.png",
      date: "Aug 2024",
      totalMinted: 230,
      mintOrder: 57,
      event: "Superhack 2024",
      link: "https://app.poap.xyz/token/7186975",
      isWinner: true
    }
  ];

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
        className="max-w-4xl w-full h-full flex flex-col py-2 sm:py-3 z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-3">
          <div className="inline-flex items-center gap-1.5 mb-1.5">
            <Award className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" />
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold gradient-text">
              POAP Collection
            </h2>
          </div>
          <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-0.5">
            My Web3 Hackathon Journey
          </p>
          <p className="text-[10px] italic text-indigo-600 dark:text-indigo-400 opacity-80">
            ETHGlobal events and major hackathons
          </p>
        </motion.div>

        {/* POAP Grid */}
        <motion.div variants={itemVariants} className="flex-1 flex items-center justify-center px-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 w-full max-w-3xl">
            {poaps.map((poap, index) => (
              <motion.a
                key={poap.id}
                href={poap.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative glass rounded-lg p-1.5 sm:p-2 glow-effect hover:scale-105 transition-all duration-300 cursor-hover cursor-pointer block"
              >
                {/* Winner Badge */}
                {poap.isWinner && (
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 z-20 px-1.5 py-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-[8px] font-bold rounded-full shadow-lg">
                    🏆 WINNER
                  </div>
                )}

                {/* POAP Image */}
                <div className="relative aspect-square rounded-md overflow-hidden mb-1.5 bg-white/10 backdrop-blur-sm">
                  <img
                    src={poap.imageUrl}
                    alt={poap.name}
                    className="w-full h-full object-cover rounded-md group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Mint Order Badge */}
                  <div className="absolute top-1 right-1 px-1.5 py-0.5 bg-indigo-500/90 backdrop-blur-sm rounded-full text-white text-[10px] font-bold">
                    #{poap.mintOrder}
                  </div>

                </div>

                {/* POAP Info */}
                <div>
                  <h3 className="text-[10px] sm:text-xs font-bold text-gray-800 dark:text-gray-200 line-clamp-2 group-hover:text-indigo-400 transition-colors leading-tight">
                    {poap.event}
                  </h3>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-[9px] sm:text-[10px] font-medium text-gray-600 dark:text-gray-400">{poap.date}</span>
                    <ExternalLink className="w-2.5 h-2.5 text-gray-400 group-hover:text-indigo-400 transition-colors" />
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Decorative corner */}
                <div className="absolute top-1 left-1 w-4 h-4 bg-gradient-to-br from-indigo-400/20 to-transparent rounded-full blur-sm group-hover:scale-150 transition-transform duration-500" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* <motion.div variants={itemVariants} className="text-center mt-2">
          <div className="inline-flex items-center gap-3 px-2.5 py-1 glass rounded-full">
            <div className="text-center">
              <div className="text-sm sm:text-base font-bold text-indigo-400">{poaps.length}</div>
              <div className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400">Events</div>
            </div>
            <div className="w-px h-3 bg-gray-300 dark:bg-gray-700" />
            <div className="text-center">
              <div className="text-sm sm:text-base font-bold text-purple-400">2024-25</div>
              <div className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400">Period</div>
            </div>
            <div className="w-px h-3 bg-gray-300 dark:bg-gray-700" />
            <div className="text-center">
              <div className="text-sm sm:text-base font-bold text-emerald-400">ETH</div>
              <div className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400">Focus</div>
            </div>
          </div>
        </motion.div> */}
      </motion.div>
    </section>
  );
};

export default POAPSection;
