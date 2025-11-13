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
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Check if screen is large (1024px+)
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const scroll = scrollRef.current;

    if (!container || !scroll || !isLargeScreen) return;

    // Small delay to ensure DOM is ready for GSAP
    const timer = setTimeout(() => {
      const scrollWidth = scroll.scrollWidth;
      const viewportWidth = window.innerWidth;

      // Only setup GSAP if there's content to scroll and on large screens
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
            snap: {
              snapTo: 1 / 5, // 6 sections = 5 intervals (0, 0.2, 0.4, 0.6, 0.8, 1)
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
  }, [isLargeScreen]);

  // Mobile/Tablet: Vertical scroll layout
  if (!isLargeScreen) {
    return (
      <div className="w-full">
        <div className="flex flex-col">
          {children}
        </div>
      </div>
    );
  }

  // Desktop: Horizontal scroll layout
  return (
    <div ref={containerRef} className="h-screen overflow-hidden relative">
      <div ref={scrollRef} className="flex h-screen w-fit">
        {children}
      </div>
    </div>
  );
};

export default HorizontalScroll;
