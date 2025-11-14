'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'poap', label: 'POAP' },
  { id: 'contact', label: 'Contact' },
];

const SectionNav = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Wait for ScrollTrigger to be set up by HorizontalScroll
    const timer = setTimeout(() => {
      // Get the main ScrollTrigger instance
      const triggers = ScrollTrigger.getAll();
      const mainTrigger = triggers.find(t => t.vars.snap);

      if (mainTrigger) {
        // Update active section based on scroll progress
        ScrollTrigger.create({
          trigger: mainTrigger.trigger,
          start: 'top top',
          end: mainTrigger.vars.end,
          onUpdate: (self) => {
            // Calculate which section we're on (7 sections total)
            const progress = self.progress;
            const sectionIndex = Math.round(progress * 6); // 0 to 6
            setActiveSection(sectionIndex);
          },
        });
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [mounted]);

  const scrollToSection = (index: number) => {
    const sectionHeight = window.innerHeight;
    const scrollAmount = sectionHeight * index;
    window.scrollTo({
      top: scrollAmount,
      behavior: 'smooth',
    });
    setActiveSection(index);
  };

  if (!mounted) {
    return null;
  }

  // Calculate half-circle positions for dots
  const getHalfCirclePosition = (index: number, total: number) => {
    const radius = 80; // Radius of the half circle
    const angleStep = Math.PI / (total - 1); // Divide 180 degrees by number of dots
    const angle = index * angleStep - Math.PI / 2; // Start from top (-90 degrees)

    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  };

  return createPortal(
    <div
      className="fixed left-6 md:left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <nav className="relative flex flex-col gap-4">
        {sections.map((section, index) => {
          const position = getHalfCirclePosition(index, sections.length);

          return (
            <motion.button
              key={section.id}
              onClick={() => scrollToSection(index)}
              className="group relative cursor-hover"
              aria-label={`Go to ${section.label}`}
              animate={isHovered ? {
                x: position.x,
                y: position.y,
              } : {
                x: 0,
                y: 0,
              }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 20,
                mass: 0.8,
              }}
            >
              {/* Dot indicator */}
              <div className="relative">
                <motion.div
                  className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                    activeSection === index
                      ? 'border-indigo-400 bg-indigo-400 scale-125'
                      : 'border-gray-400 bg-transparent hover:border-indigo-400 hover:scale-110'
                  }`}
                  whileHover={{ scale: 1.3 }}
                />

                {/* Active indicator ring */}
                {activeSection === index && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 -m-1 border-2 border-indigo-400/50 rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </div>

              {/* Label tooltip - only show on individual dot hover */}
              <div className="absolute left-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                <div className="px-4 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm font-medium rounded-lg shadow-lg">
                  {section.label}
                </div>
              </div>
            </motion.button>
          );
        })}
      </nav>
    </div>,
    document.body
  );
};

export default SectionNav;
