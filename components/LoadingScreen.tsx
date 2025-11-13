'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const LoadingScreen = () => {
  const [opacity, setOpacity] = useState(1);
  const [display, setDisplay] = useState<'flex' | 'none'>('flex');

  useEffect(() => {
    // Start fading out after 2 seconds
    const fadeTimer = setTimeout(() => {
      setOpacity(0);
    }, 2000);

    // Hide from layout after fade out completes
    const hideTimer = setTimeout(() => {
      setDisplay('none');
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] items-center justify-center bg-white dark:bg-black"
      style={{ pointerEvents: opacity === 0 ? 'none' : 'auto', display }}
    >
          {/* Animated background gradient */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.5, 1],
                x: [-50, 50, -50],
                y: [-50, 50, -50],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1.5, 1, 1.5],
                x: [50, -50, 50],
                y: [50, -50, 50],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>

          {/* Logo/Initials */}
          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Outer circle */}
              <motion.div
                className="w-32 h-32 rounded-full border-4 border-purple-500/30 flex items-center justify-center relative"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                {/* Inner spinning border */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      'linear-gradient(to right, transparent 50%, rgba(139, 92, 246, 0.6) 50%)',
                  }}
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />

                {/* Initials */}
                <motion.div
                  className="relative z-10 text-5xl font-bold gradient-text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  VP
                </motion.div>
              </motion.div>

              {/* Pulsing glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-purple-500/20 blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>

            {/* Loading text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400 tracking-wider uppercase"
            >
              Loading
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ...
              </motion.span>
            </motion.p>
          </div>
        </motion.div>
);}
  //     )}
  //   </AnimatePresence>
  // );
// };

export default LoadingScreen;
