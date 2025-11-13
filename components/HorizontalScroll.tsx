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
  const [isReady, setIsReady] = useState(true); // Start with true to show content immediately

  useEffect(() => {
    const container = containerRef.current;
    const scroll = scrollRef.current;

    console.log('HorizontalScroll mounted', { container, scroll, children });

    if (!container || !scroll) {
      console.warn('HorizontalScroll: Missing refs');
      return;
    }

    // Small delay to ensure DOM is ready for GSAP
    const timer = setTimeout(() => {
      const scrollWidth = scroll.scrollWidth;
      const viewportWidth = window.innerWidth;

      // Only setup GSAP if there's content to scroll
      if (scrollWidth > viewportWidth) {
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
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={containerRef} className="h-screen overflow-hidden relative">
      <div ref={scrollRef} className="flex h-screen w-fit">
        {children}
      </div>
    </div>
  );
};

export default HorizontalScroll;
