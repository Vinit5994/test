'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Moon, Sun, Sparkles } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return createPortal(
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 md:top-8 md:right-8 z-50 w-16 h-16 md:w-14 md:h-14 rounded-full glass cursor-hover group overflow-hidden"
      aria-label="Toggle theme"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Sparkle effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Sparkles className="absolute top-1 right-1 w-3 h-3 text-indigo-300 animate-pulse" />
        <Sparkles className="absolute bottom-2 left-2 w-2 h-2 text-purple-300 animate-pulse delay-75" />
      </div>

      {/* Icon container */}
      <div className="relative w-full h-full flex items-center justify-center group-hover:scale-110 group-active:scale-95 transition-transform duration-200">
        <div
          className="transition-all duration-500 ease-out"
          style={{
            transform: theme === 'dark' ? 'rotate(0deg) scale(1)' : 'rotate(180deg) scale(1)',
            opacity: 1
          }}
        >
          {theme === 'dark' ? (
            <Moon className="w-7 h-7 md:w-6 md:h-6 text-indigo-400 drop-shadow-lg" />
          ) : (
            <Sun className="w-7 h-7 md:w-6 md:h-6 text-yellow-500 drop-shadow-lg" />
          )}
        </div>
      </div>

      {/* Ripple effect on click */}
      <div className="absolute inset-0 rounded-full bg-indigo-400/30 scale-0 group-active:scale-100 group-active:opacity-0 transition-all duration-500" />
    </button>,
    document.body
  );
};

export default ThemeToggle;
