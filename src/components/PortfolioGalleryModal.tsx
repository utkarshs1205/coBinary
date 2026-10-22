import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { ProjectItem } from './ProjectsSection';

interface PortfolioGalleryModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onContactProject: (projectName: string) => void;
}

export const PortfolioGalleryModal: React.FC<PortfolioGalleryModalProps> = ({
  project,
  onClose,
  onContactProject,
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-lg"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 30 }}
          transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-full max-w-5xl rounded-3xl bg-[#101115] border-2 border-[#2D313D] shadow-2xl z-10 my-auto text-white overflow-hidden max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between p-5 sm:p-6 border-b border-[#232630] bg-[#14151B]">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm px-2.5 py-1 rounded-md bg-[#21242E] text-[#EF4444] font-bold">
                {project.id}
              </span>
              <div>
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wide text-white">
                  {project.name}
                </h3>
                <span className="text-xs text-[#0284C7] uppercase tracking-wider font-mono font-medium flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
                  {project.category} • {project.type}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full bg-[#1B1D23] hover:bg-[#282C37] text-[#A2B1BC] hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto p-5 sm:p-8 space-y-8 flex-1">
            {/* Overview Banner */}
            <div className="p-4 sm:p-6 rounded-2xl bg-[#16171E] border border-[#262832] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#0284C7] font-semibold mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
                  <span>coBinary Production Spotlight</span>
                </div>
                <p className="text-sm sm:text-base text-[#D7E2EA] font-light max-w-2xl leading-relaxed">
                  {project.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onContactProject(`Similar to ${project.name}`);
                }}
                className="shrink-0 px-6 py-3 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs uppercase tracking-wider font-bold transition-all shadow-[0_4px_20px_rgba(2,132,199,0.35)] cursor-pointer flex items-center gap-2 active:scale-95"
              >
                <span>Request Similar Project</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Showcase Visuals */}
            <div className="space-y-4">
              <span className="text-xs uppercase font-mono tracking-widest text-[#8E9CA8] block">
                High-Resolution Asset Gallery
              </span>

              {/* Main feature banner */}
              <div className="w-full rounded-2xl overflow-hidden border border-[#272A36] bg-[#0A0A0D]">
                <img
                  src={project.col2Img}
                  alt={project.name}
                  className="w-full h-[320px] sm:h-[420px] object-cover"
                />
              </div>

              {/* Sub-assets grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden border border-[#272A36] bg-[#0A0A0D]">
                  <img
                    src={project.col1Img1}
                    alt={`${project.name} detail 1`}
                    className="w-full h-[240px] sm:h-[280px] object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-[#272A36] bg-[#0A0A0D]">
                  <img
                    src={project.col1Img2}
                    alt={`${project.name} detail 2`}
                    className="w-full h-[240px] sm:h-[280px] object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Tech Stack & Execution Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#232630]">
              <div className="p-4 rounded-xl bg-[#14151B] border border-[#22252E]">
                <span className="text-xs uppercase font-mono text-[#8E9CA8] block mb-1">
                  Creative Direction
                </span>
                <p className="text-sm font-semibold text-white">Jack (3D Director)</p>
                <p className="text-xs text-[#8E9CA8] mt-1">Blender, C4D, Octane, Photoreal lighting</p>
              </div>

              <div className="p-4 rounded-xl bg-[#14151B] border border-[#22252E]">
                <span className="text-xs uppercase font-mono text-[#8E9CA8] block mb-1">
                  Tech &amp; Systems
                </span>
                <p className="text-sm font-semibold text-white">Ishant (Web &amp; AI Lead)</p>
                <p className="text-xs text-[#8E9CA8] mt-1">React, WebGL, Tailwind, Motion Systems</p>
              </div>

              <div className="p-4 rounded-xl bg-[#14151B] border border-[#22252E]">
                <span className="text-xs uppercase font-mono text-[#8E9CA8] block mb-1">
                  Impact Delivered
                </span>
                <p className="text-sm font-semibold text-[#00FF87] flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> Live in Production
                </p>
                <p className="text-xs text-[#8E9CA8] mt-1">Full IP handoff + optimized CDN media</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
