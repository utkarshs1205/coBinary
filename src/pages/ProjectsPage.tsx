import React, { useState, useMemo } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FadeIn } from '../components/FadeIn';
import Particles from '../components/Particles';
import { InfiniteSpiral, SpiralItem } from '../components/InfiniteSpiral';
import { PROJECTS_DATA, ProjectItem } from '../components/ProjectsSection';
import { ArrowRight, Compass, Layers, Zap, ShieldCheck } from 'lucide-react';

interface ProjectsPageProps {
  onOpenContact: (plan?: string) => void;
  onNavigate: (target: string) => void;
  onOpenProject: (project: ProjectItem) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onOpenContact,
  onNavigate,
  onOpenProject,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'Client' | 'Personal'>('all');

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  // Minimal Spiral Items
  const spiralItems: SpiralItem[] = useMemo(() => {
    return [
      {
        id: 'spiral-1',
        src: PROJECTS_DATA[0].col2Img,
        alt: PROJECTS_DATA[0].name,
        title: PROJECTS_DATA[0].name,
        category: PROJECTS_DATA[0].category,
        type: PROJECTS_DATA[0].type,
        projectData: PROJECTS_DATA[0],
      },
      {
        id: 'spiral-2',
        src: PROJECTS_DATA[1].col2Img,
        alt: PROJECTS_DATA[1].name,
        title: PROJECTS_DATA[1].name,
        category: PROJECTS_DATA[1].category,
        type: PROJECTS_DATA[1].type,
        projectData: PROJECTS_DATA[1],
      },
      {
        id: 'spiral-3',
        src: PROJECTS_DATA[2].col2Img,
        alt: PROJECTS_DATA[2].name,
        title: PROJECTS_DATA[2].name,
        category: PROJECTS_DATA[2].category,
        type: PROJECTS_DATA[2].type,
        projectData: PROJECTS_DATA[2],
      },
      {
        id: 'spiral-4',
        src: PROJECTS_DATA[0].col1Img1,
        alt: 'Nextlevel Interactive',
        title: 'Nextlevel Interactive',
        category: 'Client',
        type: '3D Web Experience',
        projectData: PROJECTS_DATA[0],
      },
      {
        id: 'spiral-5',
        src: PROJECTS_DATA[1].col1Img1,
        alt: 'Aura Generative Art',
        title: 'Aura Generative Art',
        category: 'Personal',
        type: 'Spatial Shaders & Rendering',
        projectData: PROJECTS_DATA[1],
      },
      {
        id: 'spiral-6',
        src: PROJECTS_DATA[2].col1Img1,
        alt: 'Solaris Mobile Platform',
        title: 'Solaris Mobile Platform',
        category: 'Client',
        type: 'Fintech Dashboard',
        projectData: PROJECTS_DATA[2],
      },
      {
        id: 'spiral-7',
        src: PROJECTS_DATA[0].col1Img2,
        alt: 'Nextlevel Brand Kit',
        title: 'Nextlevel Brand Kit',
        category: 'Client',
        type: 'Identity Guidelines',
        projectData: PROJECTS_DATA[0],
      },
      {
        id: 'spiral-8',
        src: PROJECTS_DATA[1].col1Img2,
        alt: 'Aura Spatial Typo',
        title: 'Aura Spatial Typo',
        category: 'Personal',
        type: '3D Kinetic Editorial',
        projectData: PROJECTS_DATA[1],
      },
      {
        id: 'spiral-9',
        src: PROJECTS_DATA[2].col1Img2,
        alt: 'Solaris Realtime Analytics',
        title: 'Solaris Realtime Analytics',
        category: 'Client',
        type: 'Cloud Architecture',
        projectData: PROJECTS_DATA[2],
      },
      {
        id: 'spiral-10',
        src: '/footer-studio-banner.jpg',
        alt: 'coBinary Studio',
        title: 'coBinary Studio Systems',
        category: 'Client',
        type: 'Full Funnel Production',
        projectData: PROJECTS_DATA[0],
      },
    ];
  }, []);

  const strategySteps = [
    {
      num: '01',
      title: 'Discovery & Direction',
      icon: Compass,
      desc: 'We map core commercial goals, technical bottlenecks, and precise competitive positioning before design begins.',
    },
    {
      num: '02',
      title: 'Spatial & Brand Craft',
      icon: Layers,
      desc: 'We engineer bespoke visual identities, photoreal 3D elements, and micro-interactions that elevate brand trust.',
    },
    {
      num: '03',
      title: 'High-Velocity Engineering',
      icon: Zap,
      desc: 'Clean, performant web applications and fluid motion systems built on modern full-stack architectures.',
    },
    {
      num: '04',
      title: 'Conversion Hardening',
      icon: ShieldCheck,
      desc: 'Continuous performance optimization, accessibility standards, and frictionless conversion funnels.',
    },
  ];

  return (
    <div className="bg-white text-slate-800 min-h-screen w-full relative overflow-x-hidden font-sans antialiased selection:bg-sky-500 selection:text-white flex flex-col justify-between">
      {/* 1. Global Navigation Bar */}
      <div className="relative z-40 bg-[#0C0C0C]">
        <Navbar
          onOpenContact={() => onOpenContact()}
          onNavigate={onNavigate}
          activePage="projects"
        />
      </div>

      {/* 2. Hero Header with Sky Blue and White Theme + Floating Particles */}
      <header className="relative w-full min-h-[420px] sm:min-h-[480px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#F0F9FF] via-[#E0F2FE]/40 to-white border-b border-sky-100">
        <div className="absolute inset-0 z-0">
          <Particles
            particleColors={['#0284C7', '#38BDF8', '#EF4444', '#93C5FD']}
            particleCount={120}
            particleSpread={13}
            speed={0.15}
            particleBaseSize={200}
            sizeRandomness={1.1}
            glow={0.7}
            twinkle={0.4}
            moveParticlesOnHover
            hoverEffect="parallax"
            particleHoverFactor={1.2}
            clickBurst
            cameraDistance={18}
            className="w-full h-full opacity-70"
          />
        </div>

        <div className="absolute top-0 right-1/4 w-[450px] h-[280px] bg-sky-200/35 rounded-full blur-3xl pointer-events-none z-1" />
        <div className="absolute top-1/3 left-1/4 w-[320px] h-[200px] bg-rose-200/25 rounded-full blur-3xl pointer-events-none z-1" />

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 py-16 sm:py-20 text-center flex flex-col items-center">
          <FadeIn delay={0.08} y={15}>
            <span className="text-xs font-mono uppercase tracking-widest text-[#0284C7] font-semibold flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
              Selected Portfolio
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Featured <span className="text-[#0284C7]">Projects</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.15} y={15}>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl mx-auto mb-7">
              Interactive 3D applications, brand transformations, and software platforms engineered for high-value outcomes.
            </p>
          </FadeIn>

          <FadeIn delay={0.22} y={15}>
            <button
              type="button"
              onClick={() => onOpenContact('Project Inquiry')}
              className="px-8 sm:px-10 py-3.5 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-sm tracking-wide transition-all duration-200 shadow-[0_6px_25px_rgba(2,132,199,0.3)] hover:scale-105 active:scale-95 cursor-pointer inline-flex items-center gap-2"
            >
              <span>Get Started Now</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </FadeIn>
        </div>
      </header>

      {/* 3. Infinite Spiral Showcase Section */}
      <section className="w-full relative z-10 py-10 sm:py-14 px-4 sm:px-8 bg-gradient-to-b from-white via-sky-50/20 to-white border-b border-sky-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 inline-block border-b-[3.5px] border-[#EF4444] pb-1">
              Project Helix
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-md mx-auto">
              Hover over the center card to inspect project link.
            </p>
          </div>

          <div className="w-full h-[520px] sm:h-[580px] relative rounded-3xl bg-gradient-to-b from-sky-50/40 via-white to-sky-50/20 border border-sky-100 shadow-[0_15px_35px_rgba(2,132,199,0.05)] overflow-hidden">
            <InfiniteSpiral
              items={spiralItems}
              animationMode="all"
              speed={0.5}
              radius={260}
              cardWidth={225}
              cardHeight={150}
              verticalSpacing={80}
              perspective={850}
              cardRadius={14}
              centerScale={1.12}
              edgeBlur={5}
              cardsPerTurn={10}
              pauseOnHover={true}
              edgeFade={0.65}
              grayscale={0}
              onItemClick={(item) => {
                if (item.projectData) onOpenProject(item.projectData);
              }}
            />
          </div>
        </div>
      </section>

      {/* 4. Small Project Cards Showcase */}
      <section className="w-full relative z-10 py-14 sm:py-20 px-5 sm:px-8 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading & Filter */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-5 border-b border-slate-100">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#0284C7] font-semibold flex items-center gap-1.5 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
                Curated Works
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 inline-block border-b-[3.5px] border-[#EF4444] pb-1">
                Recent Projects
              </h2>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5">
              {(['all', 'Client', 'Personal'] as const).map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                    activeFilter === filter
                      ? 'bg-[#0284C7] text-white font-bold shadow-sm'
                      : 'bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200'
                  }`}
                >
                  {filter === 'all' ? 'All' : filter}
                </button>
              ))}
            </div>
          </div>

          {/* Small Project Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {filteredProjects.map((project, index) => (
              <FadeIn
                key={project.id}
                delay={index * 0.08}
                duration={0.4}
                y={20}
              >
                <div
                  onClick={() => onOpenProject(project)}
                  className="group rounded-2xl bg-white border border-slate-200/90 hover:border-red-300 p-3 sm:p-3.5 transition-all duration-300 shadow-[0_4px_18px_rgba(2,132,199,0.04)] hover:shadow-[0_10px_28px_rgba(239,68,68,0.08)] cursor-pointer flex flex-col justify-between h-full"
                >
                  {/* Thumbnail */}
                  <div className="w-full aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 relative mb-3">
                    <img
                      src={project.col2Img}
                      alt={project.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-sm border border-slate-200 text-[10px] font-mono font-bold text-slate-700 shadow-sm">
                      /{project.id}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="px-1 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#0284C7] font-semibold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
                          {project.category}
                        </span>
                        <span className="text-slate-400 group-hover:text-[#EF4444] transition-colors text-xs font-bold">
                          ↗
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0284C7] transition-colors leading-snug">
                        {project.name}
                      </h3>

                      <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Card Footer */}
                    <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-medium text-slate-500">
                      <span className="truncate max-w-[170px]">{project.type}</span>
                      <span className="text-slate-900 font-semibold group-hover:text-[#0284C7] transition-colors">
                        View ↗
                      </span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Strategy Section */}
      <section className="w-full relative z-10 py-16 sm:py-20 px-5 sm:px-8 md:px-12 bg-gradient-to-b from-white via-sky-50/25 to-white border-t border-sky-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0284C7] font-semibold flex items-center justify-center gap-1.5 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
              Execution Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 inline-block border-b-[3.5px] border-[#EF4444] pb-1">
              Our Strategy
            </h2>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              A 4-step framework engineered for speed, high-fidelity execution, and measurable outcomes.
            </p>
          </div>

          {/* Strategy Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {strategySteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <FadeIn key={step.num} delay={idx * 0.08} duration={0.4} y={15}>
                  <div className="rounded-2xl bg-white border border-slate-200/80 hover:border-sky-300 p-5 sm:p-6 transition-all duration-300 shadow-[0_4px_18px_rgba(2,132,199,0.03)] flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-200/60 flex items-center justify-center text-[#0284C7]">
                          <Icon className="w-4 h-4 stroke-[2.2]" />
                        </span>
                        <span className="text-xs font-mono font-bold text-slate-400">
                          {step.num}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-2 tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          {/* 6. Studio Quote */}
          <FadeIn delay={0.2} duration={0.5} y={15}>
            <div className="mt-14 sm:mt-18 py-10 px-6 sm:px-12 rounded-3xl bg-gradient-to-br from-sky-50/60 via-white to-sky-50/40 border border-sky-100 text-center relative overflow-hidden">
              <div className="max-w-2xl mx-auto relative z-10">
                <span className="text-3xl font-serif text-[#0284C7]/30 block mb-1">“</span>
                <blockquote className="text-base sm:text-lg font-medium text-slate-800 leading-relaxed tracking-tight mb-4">
                  Good design is transparent — engineered with precision, intention, and zero unnecessary noise.
                </blockquote>
                <div className="flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
                  <cite className="not-italic text-xs font-mono uppercase tracking-widest text-[#0284C7] font-semibold">
                    coBinary Studio Strategy &amp; Craft
                  </cite>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 7. Footer */}
      <Footer
        onNavigate={onNavigate}
        onOpenContact={() => onOpenContact()}
      />
    </div>
  );
};
