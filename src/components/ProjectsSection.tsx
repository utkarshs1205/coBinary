import React, { useMemo } from 'react';
import { FadeIn } from './FadeIn';
import { InfiniteSpiral, SpiralItem } from './InfiniteSpiral';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

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

interface ProjectsSectionProps {
  onOpenProject: (project: ProjectItem) => void;
  onNavigateProjects?: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onOpenProject,
  onNavigateProjects,
}) => {
  const spiralItems: SpiralItem[] = useMemo(() => {
    return [
      {
        id: 'sec-nextlevel-hero',
        src: PROJECTS_DATA[0].col2Img,
        alt: 'Nextlevel Studio 3D Identity',
        title: PROJECTS_DATA[0].name,
        category: PROJECTS_DATA[0].category,
        type: PROJECTS_DATA[0].type,
        description: PROJECTS_DATA[0].description,
        projectData: PROJECTS_DATA[0],
      },
      {
        id: 'sec-aura-hero',
        src: PROJECTS_DATA[1].col2Img,
        alt: 'Aura Brand Identity Visuals',
        title: PROJECTS_DATA[1].name,
        category: PROJECTS_DATA[1].category,
        type: PROJECTS_DATA[1].type,
        description: PROJECTS_DATA[1].description,
        projectData: PROJECTS_DATA[1],
      },
      {
        id: 'sec-solaris-hero',
        src: PROJECTS_DATA[2].col2Img,
        alt: 'Solaris Digital Platform',
        title: PROJECTS_DATA[2].name,
        category: PROJECTS_DATA[2].category,
        type: PROJECTS_DATA[2].type,
        description: PROJECTS_DATA[2].description,
        projectData: PROJECTS_DATA[2],
      },
      {
        id: 'sec-nextlevel-app',
        src: PROJECTS_DATA[0].col1Img1,
        alt: 'Nextlevel Studio Mockup',
        title: 'Nextlevel Interactive',
        category: 'Client',
        type: 'Digital Showcase & Packaging',
        projectData: PROJECTS_DATA[0],
      },
      {
        id: 'sec-aura-render',
        src: PROJECTS_DATA[1].col1Img1,
        alt: 'Aura Holographic World',
        title: 'Aura Kinetic Motion',
        category: 'Personal',
        type: 'Generative Shaders & Spatial 3D',
        projectData: PROJECTS_DATA[1],
      },
      {
        id: 'sec-solaris-mobile',
        src: PROJECTS_DATA[2].col1Img1,
        alt: 'Solaris Mobile App UI',
        title: 'Solaris Mobile',
        category: 'Client',
        type: 'Native iOS & Android Architecture',
        projectData: PROJECTS_DATA[2],
      },
      {
        id: 'sec-nextlevel-stage',
        src: PROJECTS_DATA[0].col1Img2,
        alt: 'Nextlevel Studio Branding',
        title: 'Nextlevel Brand Kit',
        category: 'Client',
        type: 'Identity Guidelines & Print',
        projectData: PROJECTS_DATA[0],
      },
      {
        id: 'sec-aura-type',
        src: PROJECTS_DATA[1].col1Img2,
        alt: 'Aura Kinetic Typography',
        title: 'Aura Spatial Typo',
        category: 'Personal',
        type: '3D Kinetic Editorial',
        projectData: PROJECTS_DATA[1],
      },
      {
        id: 'sec-solaris-analytics',
        src: PROJECTS_DATA[2].col1Img2,
        alt: 'Solaris Analytics Dashboard',
        title: 'Solaris Analytics',
        category: 'Client',
        type: 'Realtime Data Visualization',
        projectData: PROJECTS_DATA[2],
      },
    ];
  }, []);

  return (
    <section
      id="projects"
      className="w-full relative z-30 py-20 sm:py-28 px-5 sm:px-8 md:px-12 bg-white border-t border-sky-100 text-slate-800"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <FadeIn delay={0.05} y={20}>
            <span className="text-xs font-mono uppercase tracking-widest text-[#0284C7] font-semibold flex items-center justify-center gap-1.5 mb-2.5">
              <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
              Portfolio &amp; Selected Works
            </span>
            <div className="mb-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight inline-block border-b-[3.5px] border-[#EF4444] pb-1">
                Featured Projects
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.12} y={20}>
            <p className="text-sm text-slate-500 leading-relaxed max-w-md mx-auto">
              Hover over the center card to inspect project link.
            </p>
          </FadeIn>
        </div>

        {/* Infinite Spiral Helix Showcase */}
        <div className="w-full h-[580px] sm:h-[640px] relative rounded-3xl bg-gradient-to-b from-sky-50/50 via-white to-sky-50/30 border border-sky-100 shadow-[0_20px_50px_rgba(2,132,199,0.07)] overflow-hidden">
          <InfiniteSpiral
            items={spiralItems}
            animationMode="all"
            speed={0.55}
            radius={265}
            cardWidth={230}
            cardHeight={155}
            verticalSpacing={84}
            perspective={850}
            cardRadius={16}
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

        {/* View All Projects CTA */}
        {onNavigateProjects && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={onNavigateProjects}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white text-sm font-bold tracking-wide transition-all shadow-[0_6px_25px_rgba(2,132,199,0.25)] hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Explore All Projects</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
