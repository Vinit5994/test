'use client';

import { Suspense, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Only load client-only components dynamically
const ThemeToggle = dynamic(() => import('@/components/ThemeToggle'), {
  ssr: false,
  loading: () => <div className="fixed top-8 right-8 z-50 w-14 h-14" />
});

const SectionNav = dynamic(() => import('@/components/SectionNav'), {
  ssr: false,
});

// Import sections directly since they're already 'use client'
import HorizontalScroll from '@/components/HorizontalScroll';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import EducationSection from '@/components/sections/EducationSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  useEffect(() => {
    console.log('Home component mounted');
  }, []);

  return (
    <main className="relative min-h-screen">
      <ThemeToggle />
      <SectionNav />

      <HorizontalScroll>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </HorizontalScroll>
    </main>
  );
}
