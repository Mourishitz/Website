"use client";

import {
  Background,
  CertificationsSection,
  ContactSection,
  ExperienceSection,
  Footer,
  HeroSection,
  Navigation,
  OverviewSection,
  ProjectsSection,
  TechStackSection,
  TestimonialsSection,
} from "@/components/portfolio";

export default function Portfolio() {
  return (
    <div className="min-h-screen text-gray-900 dark:text-white relative">
      <Background />

      <Navigation />

      <div className="max-w-6xl mx-auto px-6 pt-24">
        <HeroSection />

        <OverviewSection />

        <TechStackSection />

        <ExperienceSection />

        <ProjectsSection />

        <TestimonialsSection />

        <CertificationsSection />

        <ContactSection />

        <Footer />
      </div>
    </div>
  );
}
