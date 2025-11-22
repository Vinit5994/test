'use client';

import { useState, useEffect, useRef } from 'react';
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
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    // Add longer delay before collapsing for effortless navigation
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 1000); // 1000ms (1 second) delay - plenty of time to decide
  };

  useEffect(() => {
    if (!mounted) return;

    // Track scroll position to update active section
    const updateActiveSection = () => {
      const sectionCount = sections.length; // 7
      const viewportWidth = window.innerWidth;
      const totalScrollDistance = viewportWidth * (sectionCount - 1);
      const scrollY = window.scrollY;

      // Handle edge cases first
      if (scrollY <= 10) {
        // Near top - definitely section 0 (home)
        setActiveSection(0);
        return;
      }

      if (totalScrollDistance > 0 && scrollY >= totalScrollDistance - 10) {
        // Near bottom - definitely last section
        setActiveSection(sectionCount - 1);
        return;
      }

      // Calculate section based on scroll position
      if (totalScrollDistance > 0) {
        const sectionWidth = totalScrollDistance / (sectionCount - 1);
        let sectionIndex = Math.round(scrollY / sectionWidth);

        // Ensure bounds
        sectionIndex = Math.max(0, Math.min(sectionIndex, sectionCount - 1));

        setActiveSection(sectionIndex);
      } else {
        setActiveSection(0);
      }
    };

    // Initial update
    updateActiveSection();

    // Listen to scroll events
    window.addEventListener('scroll', updateActiveSection);
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [mounted]);

  const scrollToSection = (index: number) => {
    // Calculate correct scroll position for horizontal scroll
    const sectionCount = sections.length; // 7 sections
    const viewportWidth = window.innerWidth;

    // This matches the calculation in HorizontalScroll component
    const totalScrollDistance = viewportWidth * (sectionCount - 1);

    // Calculate target scroll position for this section
    let targetScroll = 0;

    if (index === 0) {
      targetScroll = 0; // Home - top of page
    } else if (index === sectionCount - 1) {
      targetScroll = totalScrollDistance; // Last section - bottom
    } else {
      // Middle sections
      targetScroll = totalScrollDistance * (index / (sectionCount - 1));
    }

    // Ensure we don't exceed bounds
    targetScroll = Math.max(0, Math.min(targetScroll, totalScrollDistance));

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth',
    });

    // Update active section immediately for better UX
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
      className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        width: '280px', // Large hover area to include dots and labels
        height: '500px',
        pointerEvents: 'none',
      }}
    >
      <div className="absolute left-6 md:left-8 top-1/2 -translate-y-1/2">
        <nav className="relative flex flex-col gap-4" style={{ pointerEvents: 'auto' }}>
          {sections.map((section, index) => {
            const position = getHalfCirclePosition(index, sections.length);

            return (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(index)}
                className="group relative cursor-hover cursor-pointer z-50"
                aria-label={`Go to ${section.label}`}
                style={{ pointerEvents: 'auto' }}
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
                <div className="relative" style={{ pointerEvents: 'auto' }}>
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

                {/* Label - show when navigation area is hovered */}
                <motion.div
                  className="absolute left-8 top-1/2 -translate-y-1/2 whitespace-nowrap z-10"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.3,
                    ease: 'easeOut'
                  }}
                  style={{ pointerEvents: 'auto' }}
                >
                  <div className={`px-2 py-1 text-base font-semibold transition-all duration-300 hover:scale-105 ${
                    activeSection === index
                      ? 'text-indigo-400'
                      : 'text-foreground hover:text-indigo-400'
                  }`}>
                    {section.label}
                  </div>
                </motion.div>
              </motion.button>
            );
          })}
        </nav>
      </div>
    </div>,
    document.body
  );
};

export default SectionNav;
