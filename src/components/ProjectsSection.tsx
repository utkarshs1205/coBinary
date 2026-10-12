import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { LiveProjectButton } from './LiveProjectButton';
import { FadeIn } from './FadeIn';

export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  type: string;
  col1Img1: string;
  col1Img2: string;
  col2Img: string;
  description: string;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: '01',
    name: 'Nextlevel Studio',
    category: 'Client',
    type: '3D Brand Identity & Interactive Web',
    col1Img1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1Img2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    col2Img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    description:
      'Complete 3D visual system, physical product mockups, and responsive web redesign engineered to elevate brand valuation and engagement.',
  },
  {
    id: '02',
    name: 'Aura Brand Identity',
    category: 'Personal',
    type: '3D Worldbuilding & Motion Direction',
    col1Img1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    col1Img2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2Img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    description:
      'Experimental holographic rendering exploration blending organic geometries, luminescent textures, and kinetic 3D typography.',
  },
  {
    id: '03',
    name: 'Solaris Digital',
    category: 'Client',
    type: '3D Web Experience & Scaled App',
    col1Img1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1Img2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2Img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    description:
      'Fintech product interface paired with spatial 3D animations and customer automation pipelines to drive 3.4x higher demo signups.',
  },
];

interface CardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  onOpenProject: (project: ProjectItem) => void;
}

const ProjectCard: React.FC<CardProps> = ({
  project,
  index,
  progress,
  range,
  targetScale,
  onOpenProject,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[85vh] flex items-start justify-center sticky top-24 md:top-32"
    >
      <motion.div
        style={{
          scale,
          top: `calc(${index * 28}px)`,
        }}
        className="relative w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.9)] will-change-transform"
      >
        {/* Top Row: Number, Category label, Project name, Live Project button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#D7E2EA]/20">
          <div className="flex items-baseline gap-4 sm:gap-6">
            <span className="font-black text-[#D7E2EA] leading-none text-[clamp(2.5rem,7vw,110px)] select-none">
              {project.id}
            </span>
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-widest text-[#B600A8] font-mono">
                {project.category}
              </span>
              <h3 className="font-bold uppercase tracking-tight text-[#D7E2EA] text-xl sm:text-2xl md:text-3xl">
                {project.name}
              </h3>
            </div>
          </div>

          <LiveProjectButton onClick={() => onOpenProject(project)} />
        </div>

        {/* Bottom Row: Two-column image grid (40% left, 60% right) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-6 flex-1 items-stretch">
          {/* Left Column (40% / 5 cols) - 2 stacked images */}
          <div className="md:col-span-5 flex flex-col gap-4 justify-between">
            {/* Left Top Image */}
            <div className="w-full h-[clamp(130px,16vw,230px)] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#16171B] border border-[#23262E] relative group">
              <img
                src={project.col1Img1}
                alt={`${project.name} preview 1`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Left Bottom Image */}
            <div className="w-full h-[clamp(160px,22vw,340px)] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#16171B] border border-[#23262E] relative group">
              <img
                src={project.col1Img2}
                alt={`${project.name} preview 2`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column (60% / 7 cols) - 1 tall image */}
          <div className="md:col-span-7 h-full min-h-[300px] sm:min-h-[380px] md:min-h-[460px] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#16171B] border border-[#23262E] relative group">
            <img
              src={project.col2Img}
              alt={`${project.name} preview main`}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Subtle overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 sm:p-8">
              <p className="text-sm sm:text-base text-white/90 font-light max-w-md">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface ProjectsSectionProps {
  onOpenProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenProject }) => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const totalCards = PROJECTS_DATA.length;

  return (
    <section
      id="projects"
      ref={containerRef}
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-30 pt-20 pb-32 px-5 sm:px-8 md:px-10"
    >
      {/* Heading: Project */}
      <FadeIn delay={0} y={40} className="w-full mb-16 sm:mb-20">
        <h2 className="hero-heading font-black uppercase text-center leading-none tracking-tight text-[clamp(3rem,12vw,160px)]">
          Project
        </h2>
      </FadeIn>

      {/* 3 Stacking Cards */}
      <div className="relative">
        {PROJECTS_DATA.map((project, index) => {
          // targetScale = 1 - (totalCards - 1 - index) * 0.03
          const targetScale = 1 - (totalCards - 1 - index) * 0.03;
          const start = index / totalCards;
          const end = 1;

          return (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalCards={totalCards}
              progress={scrollYProgress}
              range={[start, end]}
              targetScale={targetScale}
              onOpenProject={onOpenProject}
            />
          );
        })}
      </div>
    </section>
  );
};
