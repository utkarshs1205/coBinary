import React, { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { PricingSection } from './components/PricingSection';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { PortfolioGalleryModal } from './components/PortfolioGalleryModal';
import { ProjectsSection, ProjectItem } from './components/ProjectsSection';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { TeamsPage } from './pages/TeamsPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { StartBuildingPage } from './pages/StartBuildingPage';

type PageRoute = 'home' | 'services' | 'projects' | 'teams' | 'reviews' | 'start-building';

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  // Determine initial page based on browser path
  const getInitialPage = (): PageRoute => {
    if (typeof window === 'undefined') return 'home';
    const path = window.location.pathname.toLowerCase();
    if (path.includes('start-building') || path.includes('contact') || path.includes('build')) return 'start-building';
    if (path.includes('services')) return 'services';
    if (path.includes('projects') || path.includes('portfolio')) return 'projects';
    if (path.includes('team')) return 'teams';
    if (path.includes('reviews') || path.includes('testimonial')) return 'reviews';
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageRoute>(getInitialPage);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getInitialPage());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // When clicking any "Start building", "Grow your business", "Contact", or "Book a call" button
  const handleOpenContact = (plan: string = '') => {
    if (plan) setSelectedPlan(plan);
    setCurrentPage('start-building');
    window.history.pushState({}, '', '/start-building');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProject = (project: ProjectItem) => {
    setActiveProject(project);
  };

  const handleCloseProject = () => {
    setActiveProject(null);
  };

  // Cross-page and in-page navigation router
  const handleNavigate = (target: string) => {
    if (target === 'start-building' || target === 'contact') {
      handleOpenContact();
      return;
    }

    if (target === 'services') {
      setCurrentPage('services');
      window.history.pushState({}, '', '/services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (target === 'projects') {
      setCurrentPage('projects');
      window.history.pushState({}, '', '/projects');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (target === 'teams' || target === 'team') {
      setCurrentPage('teams');
      window.history.pushState({}, '', '/teams');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (target === 'reviews' || target === 'review') {
      setCurrentPage('reviews');
      window.history.pushState({}, '', '/reviews');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (target === 'home' || target === 'hero') {
      if (currentPage !== 'home') {
        setCurrentPage('home');
        window.history.pushState({}, '', '/');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // In-page section targets on the home page (about, price, reviews)
    if (currentPage !== 'home') {
      setCurrentPage('home');
      window.history.pushState({}, '', '/');
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 120);
    } else {
      const el = document.getElementById(target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // 1. Render Dedicated Start Building (Contact) Page
  if (currentPage === 'start-building') {
    return (
      <>
        <StartBuildingPage
          initialService={selectedPlan}
          onNavigate={handleNavigate}
        />

        <PortfolioGalleryModal
          project={activeProject}
          onClose={handleCloseProject}
          onContactProject={(projectName) => handleOpenContact(projectName)}
        />
      </>
    );
  }

  // 2. Render Dedicated Services Page
  if (currentPage === 'services') {
    return (
      <>
        <ServicesPage
          onOpenContact={(plan) => handleOpenContact(plan || '')}
          onNavigate={handleNavigate}
        />

        <PortfolioGalleryModal
          project={activeProject}
          onClose={handleCloseProject}
          onContactProject={(projectName) => handleOpenContact(projectName)}
        />
      </>
    );
  }

  // 3. Render Dedicated Projects Page
  if (currentPage === 'projects') {
    return (
      <>
        <ProjectsPage
          onOpenContact={(plan) => handleOpenContact(plan || '')}
          onNavigate={handleNavigate}
          onOpenProject={handleOpenProject}
        />

        <PortfolioGalleryModal
          project={activeProject}
          onClose={handleCloseProject}
          onContactProject={(projectName) => handleOpenContact(projectName)}
        />
      </>
    );
  }

  // 4. Render Dedicated Teams Page
  if (currentPage === 'teams') {
    return (
      <>
        <TeamsPage
          onOpenContact={(plan) => handleOpenContact(plan || '')}
          onNavigate={handleNavigate}
        />

        <PortfolioGalleryModal
          project={activeProject}
          onClose={handleCloseProject}
          onContactProject={(projectName) => handleOpenContact(projectName)}
        />
      </>
    );
  }

  // 5. Render Dedicated Reviews Page
  if (currentPage === 'reviews') {
    return (
      <>
        <ReviewsPage
          onOpenContact={(plan) => handleOpenContact(plan || '')}
          onNavigate={handleNavigate}
        />

        <PortfolioGalleryModal
          project={activeProject}
          onClose={handleCloseProject}
          onContactProject={(projectName) => handleOpenContact(projectName)}
        />
      </>
    );
  }

  // 6. Render Home Page
  return (
    <div className="bg-white text-slate-800 min-h-screen w-full relative overflow-x-clip font-sans antialiased selection:bg-sky-500 selection:text-white">
      {/* 1. Hero Section (with embedded navbar) */}
      <HeroSection
        onOpenContact={() => handleOpenContact()}
        onNavigate={handleNavigate}
      />

      {/* 2. Marquee Section: Ideas For Your Next Site */}
      <MarqueeSection />

      {/* 3. About Section: "About us" */}
      <AboutSection onOpenContact={() => handleOpenContact()} />

      {/* Projects Section: 3D Infinite Spiral Showcase */}
      <ProjectsSection
        onOpenProject={handleOpenProject}
        onNavigateProjects={() => handleNavigate('projects')}
      />

      {/* 4. Pricing Section (Nav link "Price") with custom milestone pricing */}
      <PricingSection onSelectPlan={(plan) => handleOpenContact(plan)} />

      {/* 5. Reviews & Client Proof Section matching reference */}
      <ReviewsSection
        onNavigateReviews={() => handleNavigate('reviews')}
        onOpenSubmitReview={() => handleNavigate('reviews')}
      />

      {/* 6. Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenContact={() => handleOpenContact()}
      />

      {/* Modals */}
      <PortfolioGalleryModal
        project={activeProject}
        onClose={handleCloseProject}
        onContactProject={(projectName) => handleOpenContact(projectName)}
      />
    </div>
  );
}
