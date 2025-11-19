'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface StoryTransitionProps {
  story: string;
  nextSection: string;
  position?: 'left' | 'right';
}

const StoryTransition = ({ story, nextSection, position = 'right' }: StoryTransitionProps) => {
  return (
    <motion.div
      className={`absolute ${position === 'right' ? 'right-12' : 'left-12'} top-1/2 -translate-y-1/2 max-w-xs hidden xl:block`}
      initial={{ opacity: 0, x: position === 'right' ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <div className="glass p-6 rounded-2xl space-y-4">
        <div className="text-sm text-foreground/80 leading-relaxed italic">
          &quot;{story}&quot;
        </div>

        <div className="flex items-center gap-3 pt-2">
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowRight className="w-5 h-5 text-indigo-400" />
          </motion.div>
          <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
            Next: {nextSection}
          </span>
        </div>

        {/* Doodle decoration */}
        <motion.svg
          width="100"
          height="30"
          viewBox="0 0 100 30"
          className="absolute -bottom-4 -right-4 opacity-30"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
        >
          <path
            d="M5 15 Q25 5, 50 15 T95 15"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            className="text-indigo-400"
          />
        </motion.svg>
      </div>
    </motion.div>
  );
};

export default StoryTransition;
