'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed top-8 right-8 z-50 w-11 h-11" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-8 right-8 z-50 p-3 rounded-full glass cursor-hover group hover:scale-110 active:scale-95 transition-all duration-200"
      aria-label="Toggle theme"
    >
      <div
        className="transition-transform duration-300 ease-in-out"
        style={{ transform: theme === 'dark' ? 'rotate(0deg)' : 'rotate(180deg)' }}
      >
        {theme === 'dark' ? (
          <Moon className="w-5 h-5 text-indigo-400 transition-colors" />
        ) : (
          <Sun className="w-5 h-5 text-yellow-500 transition-colors" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
