'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact Us' },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Prevent scrolling when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const scrollToSection = (index: number) => {
    const sectionHeight = window.innerHeight;
    const scrollAmount = sectionHeight * index;
    window.scrollTo({
      top: scrollAmount,
      behavior: 'smooth',
    });
    setIsOpen(false);
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-[60] w-16 h-16 rounded-full glass cursor-hover lg:hidden flex items-center justify-center group"
        aria-label="Toggle menu"
      >
        <div className="relative w-7 h-7">
          {isOpen ? (
            <X className="w-7 h-7 text-indigo-400 transition-transform group-hover:rotate-90 duration-300" />
          ) : (
            <Menu className="w-7 h-7 text-indigo-400 transition-transform group-hover:scale-110 duration-300" />
          )}
        </div>
      </button>

      {/* Full-Screen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ backdropFilter: 'blur(0px)' }}
              animate={{ backdropFilter: 'blur(10px)' }}
              exit={{ backdropFilter: 'blur(0px)' }}
              className="absolute inset-0 bg-background/95"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Content */}
            <div className="relative h-full flex items-center justify-center">
              <nav className="flex flex-col items-center gap-8">
                {sections.map((section, index) => (
                  <motion.button
                    key={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    onClick={() => scrollToSection(index)}
                    className="text-4xl font-bold text-foreground hover:text-indigo-400 transition-colors duration-300 cursor-hover group"
                  >
                    <span className="relative inline-block">
                      {section.label}
                      <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                    </span>
                  </motion.button>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
