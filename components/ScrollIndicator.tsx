'use client';

import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';

interface ScrollIndicatorProps {
  message?: string;
  position?: 'right' | 'bottom';
}

const ScrollIndicator = ({ message = "Scroll to explore", position = 'right' }: ScrollIndicatorProps) => {
  if (position === 'bottom') {
    return (
      <motion.div
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 hidden lg:flex items-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="glass px-6 py-3 rounded-full text-sm font-medium text-foreground flex items-center gap-3">
          <span>{message}</span>
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronRight className="w-5 h-5 text-indigo-400" />
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
    >
      <div className="glass px-4 py-3 rounded-full text-sm font-medium text-foreground writing-mode-vertical">
        {message}
      </div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="glass p-3 rounded-full"
      >
        <ArrowRight className="w-6 h-6 text-indigo-400 rotate-90" />
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;
