'use client';

import { motion } from 'framer-motion';

export const ArrowDoodle = () => (
  <motion.svg
    width="120"
    height="80"
    viewBox="0 0 120 80"
    fill="none"
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ pathLength: 1, opacity: 1 }}
    transition={{ duration: 2, ease: "easeInOut" }}
    className="absolute"
  >
    <motion.path
      d="M10 40 Q40 20, 70 40 T110 35"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
      className="text-indigo-400"
    />
    <motion.path
      d="M105 30 L110 35 L105 40"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      className="text-indigo-400"
    />
  </motion.svg>
);

export const StarDoodle = ({ className = "" }: { className?: string }) => (
  <motion.svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    className={className}
    initial={{ rotate: 0, scale: 0 }}
    animate={{ rotate: 360, scale: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    <motion.path
      d="M30 5 L35 25 L55 25 L40 38 L45 55 L30 43 L15 55 L20 38 L5 25 L25 25 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-yellow-400"
      animate={{ rotate: [0, 10, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
    />
  </motion.svg>
);

export const HeartDoodle = ({ className = "" }: { className?: string }) => (
  <motion.svg
    width="50"
    height="50"
    viewBox="0 0 50 50"
    className={className}
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.5, type: "spring" }}
  >
    <motion.path
      d="M25 40 C10 30, 5 20, 5 15 C5 7, 12 5, 17 10 C20 13, 23 17, 25 20 C27 17, 30 13, 33 10 C38 5, 45 7, 45 15 C45 20, 40 30, 25 40 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      className="text-pink-400"
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </motion.svg>
);

export const LightbulbDoodle = ({ className = "" }: { className?: string }) => (
  <motion.svg
    width="60"
    height="80"
    viewBox="0 0 60 80"
    className={className}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <motion.circle
      cx="30"
      cy="25"
      r="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      className="text-yellow-400"
    />
    <motion.path
      d="M20 38 L20 50 C20 55, 25 58, 30 58 C35 58, 40 55, 40 50 L40 38"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      className="text-yellow-400"
    />
    <motion.line
      x1="30"
      y1="58"
      x2="30"
      y2="65"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      className="text-yellow-400"
    />
    <motion.line
      x1="25"
      y1="65"
      x2="35"
      y2="65"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      className="text-yellow-400"
    />
    {/* Light rays */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
      <motion.line
        key={i}
        x1="30"
        y1="25"
        x2={30 + Math.cos((angle * Math.PI) / 180) * 28}
        y2={25 + Math.sin((angle * Math.PI) / 180) * 28}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="text-yellow-400 opacity-70"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
      />
    ))}
  </motion.svg>
);

export const RocketDoodle = ({ className = "" }: { className?: string }) => (
  <motion.svg
    width="70"
    height="90"
    viewBox="0 0 70 90"
    className={className}
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <motion.path
      d="M35 10 L45 40 L40 40 L40 60 L30 60 L30 40 L25 40 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-indigo-400"
      animate={{ y: [-2, 2, -2] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.path
      d="M25 60 L20 75 L30 60"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-orange-400"
    />
    <motion.path
      d="M45 60 L50 75 L40 60"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-orange-400"
    />
    <motion.circle
      cx="35"
      cy="30"
      r="5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="text-indigo-400"
    />
  </motion.svg>
);

export const CodeDoodle = ({ className = "" }: { className?: string }) => (
  <motion.svg
    width="80"
    height="60"
    viewBox="0 0 80 60"
    className={className}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <motion.path
      d="M20 20 L10 30 L20 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-indigo-400"
      animate={{ x: [-2, 2, -2] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.path
      d="M60 20 L70 30 L60 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-indigo-400"
      animate={{ x: [2, -2, 2] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.line
      x1="45"
      y1="15"
      x2="35"
      y2="45"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      className="text-indigo-400"
    />
  </motion.svg>
);
