import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection, ProjectItem } from './components/ProjectsSection';
import { PricingSection } from './components/PricingSection';
import { FoundersSection } from './components/FoundersSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { PortfolioGalleryModal } from './components/PortfolioGalleryModal';

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const handleOpenContact = (plan: string = '') => {
    setSelectedPlan(plan);
    setIsContactModalOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactModalOpen(false);
  };

  const handleOpenProject = (project: ProjectItem) => {
    setActiveProject(project);
  };

  const handleCloseProject = () => {
    setActiveProject(null);
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#0C0C0C] text-[#D7E2EA] min-h-screen w-full relative overflow-x-clip font-sans antialiased selection:bg-[#B600A8] selection:text-white">
      {/* 1. Hero Section (with original embedded navbar) */}
      <HeroSection
        onOpenContact={() => handleOpenContact()}
        onNavigate={handleNavigate}
      />

      {/* 2. Marquee Section */}
      <MarqueeSection />

      {/* 3. About Section */}
      <AboutSection onOpenContact={() => handleOpenContact()} />

      {/* 4. Services Section */}
      <ServicesSection />

      {/* 5. Projects Section */}
      <ProjectsSection onOpenProject={handleOpenProject} />

      {/* 6. Pricing Section (Nav link "Price") */}
      <PricingSection onSelectPlan={(plan) => handleOpenContact(plan)} />

      {/* 7. Dual-Founders Team Section */}
      <FoundersSection onOpenContact={() => handleOpenContact()} />

      {/* 8. Reviews & Client Proof Section */}
      <ReviewsSection />

      {/* 9. Contact Form Section */}
      <ContactSection initialService={selectedPlan} />

      {/* 10. Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenContact={() => handleOpenContact()}
      />

      {/* Modals */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={handleCloseContact}
        defaultPlan={selectedPlan}
      />

      <PortfolioGalleryModal
        project={activeProject}
        onClose={handleCloseProject}
        onContactProject={(projectName) => handleOpenContact(projectName)}
      />
    </div>
  );
}
