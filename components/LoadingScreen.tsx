'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    // Hide loading screen after progress completes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{
        backgroundColor: '#EFECE3',
        pointerEvents: isLoading ? 'auto' : 'none'
      }}
    >
      {/* Main content container */}
      <div className="flex flex-col items-center justify-center space-y-12">

        {/* Animated logo/initials */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.43, 0.13, 0.23, 0.96],
            delay: 0.2
          }}
          className="relative"
        >
          {/* Main initials */}
          <div className="relative">
            <motion.h1
              className="text-7xl sm:text-8xl md:text-9xl font-bold tracking-tight"
              style={{
                fontFamily: 'Syne, sans-serif',
                color: '#000000',
                letterSpacing: '-0.05em'
              }}
              initial={{ letterSpacing: '0.2em', opacity: 0 }}
              animate={{ letterSpacing: '-0.05em', opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            >
              VP
            </motion.h1>

            {/* Decorative dot */}
            <motion.div
              className="absolute -right-4 -top-2 w-3 h-3 rounded-full"
              style={{ backgroundColor: '#4A70A9' }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.4,
                delay: 0.8,
                type: 'spring',
                stiffness: 200
              }}
            />
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-sm tracking-[0.3em] mt-4 text-center uppercase"
            style={{ color: '#4A70A9' }}
          >
            Portfolio
          </motion.p>
        </motion.div>

        {/* Progress bar */}
        <div className="w-48 sm:w-64">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="relative h-0.5 overflow-hidden rounded-full"
            style={{ backgroundColor: 'rgba(74, 112, 169, 0.2)' }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{
                backgroundColor: '#4A70A9',
                transformOrigin: 'left'
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: progress / 100 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          </motion.div>

          {/* Progress percentage */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-xs text-center mt-3 tracking-wider"
            style={{ color: '#8FABD4' }}
          >
            {progress}%
          </motion.p>
        </div>
      </div>

      {/* Bottom text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-12 text-center"
      >
        <p
          className="text-xs tracking-[0.2em] uppercase"
          style={{ color: '#8FABD4' }}
        >
          Web3 Developer
        </p>
      </motion.div>

      {/* Decorative corner elements */}
      <motion.div
        className="absolute top-8 left-8 w-16 h-16 rounded-full opacity-10"
        style={{ backgroundColor: '#8FABD4' }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
      <motion.div
        className="absolute bottom-8 right-8 w-24 h-24 rounded-full opacity-10"
        style={{ backgroundColor: '#4A70A9' }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      />
    </motion.div>
  );
};

export default LoadingScreen;
