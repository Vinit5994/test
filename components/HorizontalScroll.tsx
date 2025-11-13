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

    const scrollWidth = scroll.scrollWidth;
    const viewportWidth = window.innerWidth;

    const scrollTween = gsap.to(scroll, {
      x: -(scrollWidth - viewportWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: () => `+=${scrollWidth - viewportWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      scrollTween.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="h-screen overflow-hidden">
      <div ref={scrollRef} className="flex h-screen w-fit">
        {children}
      </div>
    </div>
  );
};

export default HorizontalScroll;
