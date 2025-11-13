'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HorizontalScrollProps {
  children: ReactNode;
}

const HorizontalScroll = ({ children }: HorizontalScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const scroll = scrollRef.current;

    if (!container || !scroll) return;

    // Small delay to ensure DOM is ready for GSAP
    const timer = setTimeout(() => {
      const isMobile = window.innerWidth < 768;
      const viewportWidth = window.innerWidth;

      // Count sections (children)
      const sectionCount = scroll.children.length;
      const scrollWidth = viewportWidth * sectionCount;

      // Calculate exact scroll distance
      const scrollDistance = scrollWidth - viewportWidth;

      // Only setup GSAP if there's content to scroll
      if (scrollDistance > 0) {
        const scrollTween = gsap.to(scroll, {
          x: -scrollDistance,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: () => `+=${scrollDistance}`,
            scrub: 1.2,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            markers: false,
            snap: {
              snapTo: 1 / (sectionCount - 1), // 7 sections = 6 intervals
              duration: 0.5,
              delay: 0,
              ease: 'power2.inOut',
            },
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
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={containerRef} className="h-screen overflow-hidden relative">
      <div ref={scrollRef} className="flex h-screen" style={{ width: 'max-content' }}>
        {children}
      </div>
    </div>
  );
};

export default HorizontalScroll;
