import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { Layers, Cpu, Award, Zap, ArrowUpRight } from 'lucide-react';

interface FoundersSectionProps {
  onOpenContact: () => void;
}

export const FoundersSection: React.FC<FoundersSectionProps> = ({ onOpenContact }) => {
  return (
    <section
      id="team"
      className="bg-[#0C0C0C] py-20 px-5 sm:px-8 md:px-10 border-t border-[#1F2228] relative overflow-hidden select-none"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#B600A8]/10 via-[#7621B0]/10 to-[#BE4C00]/10 blur-3xl pointer-events-none -z-10 rounded-full" />

      <div className="max-w-6xl mx-auto">
        <FadeIn y={30} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18191E] border border-[#2D3039] text-[#BBCCD7] text-xs uppercase tracking-widest mb-4">
            <Zap className="w-3.5 h-3.5 text-[#B600A8]" />
            <span>The Power of Two Freelancers United</span>
          </div>
          <h3 className="hero-heading font-black uppercase text-3xl sm:text-5xl md:text-6xl tracking-tight leading-tight">
            Meet The Co-Founders Behind coBinary
          </h3>
          <p className="text-[#A2B1BC] text-sm sm:text-base max-w-2xl mx-auto mt-4 font-light leading-relaxed">
            We combined our freelance practices to give ambitious brands a single dedicated studio: cinematic 3D CGI visuals merged seamlessly with high-speed web apps and AI-powered automation.
          </p>
        </FadeIn>

        {/* 2 Founders Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Founder 1: Jack */}
          <FadeIn delay={0.1} y={30}>
            <div className="h-full rounded-3xl bg-[#131418] border border-[#262830] p-6 sm:p-8 flex flex-col justify-between hover:border-[#B600A8]/60 transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#B600A8]/10 rounded-full blur-2xl group-hover:bg-[#B600A8]/20 transition-colors pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#18011F] to-[#B600A8] p-0.5 shadow-md">
                    <div className="w-full h-full bg-[#131418] rounded-[14px] flex items-center justify-center">
                      <Layers className="w-7 h-7 text-[#D7E2EA]" />
                    </div>
                  </div>
                  <span className="text-xs uppercase tracking-widest font-mono text-[#BBCCD7] px-3 py-1 rounded-full bg-[#1B1D23] border border-[#2D303A]">
                    Co-Founder • 3D & Creative
                  </span>
                </div>

                <h4 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide text-white mb-2">
                  Jack
                </h4>
                <p className="text-sm uppercase tracking-wider text-[#B600A8] font-medium mb-4">
                  Lead 3D Artist, Motion Director & Visual Storyteller
                </p>
                <p className="text-sm text-[#A2B1BC] font-light leading-relaxed mb-6">
                  5+ years sculpting unforgettable 3D worlds, photorealistic renders, character designs, and fluid motion graphics for global clients and high-growth brands.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {['3D Modeling', 'Blender / C4D', 'Photoreal Rendering', 'Motion Shoots', 'Art Direction'].map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-lg bg-[#1B1D23] text-[#D7E2EA]/80 border border-[#2A2E38]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#232630] flex items-center justify-between text-xs text-[#8E9CA8]">
                <span>Focus: Visual Impact & Brand Perception</span>
                <span className="text-[#00FF87] flex items-center gap-1 font-mono">
                  ● Direct Collaboration
                </span>
              </div>
            </div>
          </FadeIn>

          {/* Founder 2: Ishant / Tech Co-Founder */}
          <FadeIn delay={0.2} y={30}>
            <div className="h-full rounded-3xl bg-[#131418] border border-[#262830] p-6 sm:p-8 flex flex-col justify-between hover:border-[#7621B0]/60 transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#7621B0]/10 rounded-full blur-2xl group-hover:bg-[#7621B0]/20 transition-colors pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7621B0] to-[#BE4C00] p-0.5 shadow-md">
                    <div className="w-full h-full bg-[#131418] rounded-[14px] flex items-center justify-center">
                      <Cpu className="w-7 h-7 text-[#D7E2EA]" />
                    </div>
                  </div>
                  <span className="text-xs uppercase tracking-widest font-mono text-[#BBCCD7] px-3 py-1 rounded-full bg-[#1B1D23] border border-[#2D303A]">
                    Co-Founder • Web & AI
                  </span>
                </div>

                <h4 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide text-white mb-2">
                  Ishant
                </h4>
                <p className="text-sm uppercase tracking-wider text-[#00E5FF] font-medium mb-4">
                  Full-Stack Architect, AI Automation & Web Systems Lead
                </p>
                <p className="text-sm text-[#A2B1BC] font-light leading-relaxed mb-6">
                  Expert freelance developer specializing in fast responsive web experiences, conversion architectures, AI automations, and custom interactive digital platforms.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {['Modern Web Dev', 'Interactive UI/UX', 'AI Workflows', 'Automation Bots', 'Conversion Speed'].map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-lg bg-[#1B1D23] text-[#D7E2EA]/80 border border-[#2A2E38]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#232630] flex items-center justify-between text-xs text-[#8E9CA8]">
                <span>Focus: Performance, Scalability & Conversion</span>
                <span className="text-[#00FF87] flex items-center gap-1 font-mono">
                  ● In-House Engineering
                </span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Why 2 Founders Beat Big Bloated Agencies */}
        <FadeIn delay={0.3} y={20}>
          <div className="rounded-2xl bg-[#16171C] border border-[#262832] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#20222A] flex items-center justify-center text-[#B600A8] shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h5 className="text-lg font-bold uppercase tracking-wide text-white">
                  No middle-managers. Speak directly to the builders.
                </h5>
                <p className="text-xs sm:text-sm text-[#A2B1BC] font-light mt-0.5">
                  Both founders work on your project from day one. Rapid prototypes, custom 3D renders, and seamless code deployment.
                </p>
              </div>
            </div>
            <motion.button
              type="button"
              onClick={onOpenContact}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="shrink-0 flex items-center gap-2 px-6 py-3 rounded-full bg-[#D7E2EA] text-[#0C0C0C] font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-white transition-all cursor-pointer"
            >
              <span>Work With The Founders</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
