'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const VisualStoryPath = () => {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    setMounted(true);

    const updateActiveSection = () => {
      const viewportWidth = window.innerWidth;
      const scrollDistance = viewportWidth * 6; // 7 sections - 1
      const scrollY = window.scrollY;
      const progress = Math.min(Math.max(scrollY / scrollDistance, 0), 1);
      const sectionIndex = Math.round(progress * 6);
      setActiveSection(sectionIndex);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection);
    return () => window.removeEventListener('scroll', updateActiveSection);
  }, []);

  if (!mounted) return null;

  // Story icons for each section - tells the journey visually
  const storyIcons = [
    {
      icon: '🚀', // Hero - Launch/Start
      label: 'Start',
      color: '#8FABD4',
    },
    {
      icon: '💡', // About - Ideas/Skills
      label: 'Skills',
      color: '#F59E0B',
    },
    {
      icon: '📚', // Education - Learning
      label: 'Learn',
      color: '#8B5CF6',
    },
    {
      icon: '⚡', // Experience - Action/Power
      label: 'Build',
      color: '#3B82F6',
    },
    {
      icon: '✨', // Projects - Creation/Magic
      label: 'Create',
      color: '#EC4899',
    },
    {
      icon: '🏆', // POAP - Achievement
      label: 'Achieve',
      color: '#10B981',
    },
    {
      icon: '❤️', // Contact - Connection
      label: 'Connect',
      color: '#EF4444',
    },
  ];

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-3">
      {/* Vertical connecting line - the journey path */}
      <svg className="absolute top-0 left-1/2 -translate-x-1/2 h-full" width="2" style={{ height: '400px' }}>
        <motion.line
          x1="1"
          y1="0"
          x2="1"
          y2="400"
          stroke="url(#journeyGradient)"
          strokeWidth="2"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="journeyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8FABD4" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#4A70A9" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8FABD4" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>

      {/* Story icons */}
      {storyIcons.map((item, index) => (
        <motion.div
          key={index}
          className="relative z-10"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          {/* Icon container */}
          <motion.div
            className="relative flex items-center justify-center w-12 h-12 rounded-full backdrop-blur-sm border-2 transition-all duration-300"
            style={{
              backgroundColor: activeSection === index ? `${item.color}20` : 'rgba(255, 255, 255, 0.05)',
              borderColor: activeSection === index ? item.color : 'rgba(255, 255, 255, 0.1)',
              boxShadow: activeSection === index ? `0 0 20px ${item.color}40` : 'none',
            }}
            animate={{
              scale: activeSection === index ? 1.2 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-2xl" style={{ filter: activeSection === index ? 'none' : 'grayscale(80%) opacity(0.5)' }}>
              {item.icon}
            </span>
          </motion.div>

          {/* Label - appears on hover */}
          <motion.div
            className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              opacity: activeSection === index ? 1 : 0,
            }}
          >
            <div
              className="px-3 py-1 rounded-lg text-sm font-semibold backdrop-blur-sm"
              style={{
                backgroundColor: `${item.color}20`,
                color: item.color,
                border: `1px solid ${item.color}40`,
              }}
            >
              {item.label}
            </div>
          </motion.div>

          {/* Connecting dot animation when active */}
          {activeSection === index && (
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                border: `2px solid ${item.color}`,
              }}
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default VisualStoryPath;
