'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Only load client-only components dynamically
const ThemeToggle = dynamic(() => import('@/components/ThemeToggle'), {
  ssr: false,
});

const SectionNav = dynamic(() => import('@/components/SectionNav'), {
  ssr: false,
});

const MobileNav = dynamic(() => import('@/components/MobileNav'), {
  ssr: false,
});

const VisualStoryPath = dynamic(() => import('@/components/VisualStoryPath'), {
  ssr: false,
});

const LoadingScreen = dynamic(() => import('@/components/LoadingScreen'), {
  ssr: false,
  loading: () => null,
});

// Import sections directly since they're already 'use client'
import HorizontalScroll from '@/components/HorizontalScroll';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import EducationSection from '@/components/sections/EducationSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import POAPSection from '@/components/sections/POAPSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <LoadingScreen />
      <ThemeToggle />
      <SectionNav />
      <MobileNav />
      <VisualStoryPath />

      <HorizontalScroll>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <POAPSection />
        <ContactSection />
      </HorizontalScroll>
    </main>
  );
}
