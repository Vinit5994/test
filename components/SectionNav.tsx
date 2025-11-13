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

  return createPortal(
    <div className="fixed left-6 md:left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <nav className="flex flex-col gap-4">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(index)}
            className="group relative cursor-hover"
            aria-label={`Go to ${section.label}`}
          >
            {/* Dot indicator */}
            <div className="relative">
              <div
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  activeSection === index
                    ? 'border-indigo-400 bg-indigo-400 scale-125'
                    : 'border-gray-400 bg-transparent hover:border-indigo-400 hover:scale-110'
                }`}
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

            {/* Label tooltip */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              <div className="whitespace-nowrap px-3 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm font-medium rounded-lg">
                {section.label}
              </div>
            </div>
          </button>
        ))}
      </nav>
    </div>,
    document.body
  );
};

export default SectionNav;
