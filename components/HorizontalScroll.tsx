'use client';

import { useEffect, useRef, ReactNode, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HorizontalScrollProps {
  children: ReactNode;
}

const HorizontalScroll = ({ children }: HorizontalScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const scroll = scrollRef.current;

    if (!container || !scroll) return;

    // Wait for content to be fully rendered
    const timer = setTimeout(() => {
      setIsReady(true);

      const scrollWidth = scroll.scrollWidth;
      const viewportWidth = window.innerWidth;

      const scrollTween = gsap.to(scroll, {
        x: -(scrollWidth - viewportWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: () => `+=${scrollWidth - viewportWidth}`,
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          markers: false,
        },
      });

      // Handle window resize
      const handleResize = () => {
        ScrollTrigger.refresh();
      };

      window.addEventListener('resize', handleResize);

      return () => {
        scrollTween.kill();
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        window.removeEventListener('resize', handleResize);
      };
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={containerRef} className="h-screen overflow-hidden relative">
      <div
        ref={scrollRef}
        className={`flex h-screen w-fit transition-opacity duration-500 ${
          isReady ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default HorizontalScroll;
