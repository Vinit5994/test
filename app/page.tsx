'use client';

import dynamic from 'next/dynamic';

const ThemeToggle = dynamic(() => import('@/components/ThemeToggle'), {
  ssr: false,
});

const SectionNav = dynamic(() => import('@/components/SectionNav'), {
  ssr: false,
});

const HorizontalScroll = dynamic(() => import('@/components/HorizontalScroll'), {
  ssr: false,
});

const HeroSection = dynamic(() => import('@/components/sections/HeroSection'), {
  ssr: false,
});

const AboutSection = dynamic(() => import('@/components/sections/AboutSection'), {
  ssr: false,
});

const EducationSection = dynamic(() => import('@/components/sections/EducationSection'), {
  ssr: false,
});

const ExperienceSection = dynamic(() => import('@/components/sections/ExperienceSection'), {
  ssr: false,
});

const ProjectsSection = dynamic(() => import('@/components/sections/ProjectsSection'), {
  ssr: false,
});

const ContactSection = dynamic(() => import('@/components/sections/ContactSection'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative grid-bg">
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
