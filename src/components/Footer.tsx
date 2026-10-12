import React from 'react';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090A0D] border-t border-[#1C1E26] pt-16 pb-12 px-6 md:px-10 text-[#8E9CA8] relative z-30 select-none">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 pb-12 border-b border-[#1A1C24]">
          {/* Brand & Manifesto */}
          <div className="max-w-md space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-black text-2xl tracking-tighter text-white uppercase">
                co<span className="text-[#B600A8]">Binary</span>
              </span>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-[#1A1C24] text-[#A2B1BC] border border-[#2D303E]">
                Studio
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#8E9CA8] font-light leading-relaxed">
              Cobinary — builds and scales brands with web, AI, automation, shoots, and edits. Powered by dual founders Jack &amp; Ishant.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap gap-6 sm:gap-8 text-xs uppercase font-medium tracking-widest text-[#D7E2EA]">
            <button
              type="button"
              onClick={() => onNavigate('about')}
              className="hover:text-[#B600A8] transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => onNavigate('services')}
              className="hover:text-[#B600A8] transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              type="button"
              onClick={() => onNavigate('projects')}
              className="hover:text-[#B600A8] transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button
              type="button"
              onClick={() => onNavigate('price')}
              className="hover:text-[#B600A8] transition-colors cursor-pointer"
            >
              Price
            </button>
            <button
              type="button"
              onClick={onOpenContact}
              className="hover:text-[#B600A8] transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-[#6A7380]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} coBinary. All rights reserved.</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-[#8E9CA8]">
              Crafted by two founders
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#00FF87]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF87] animate-pulse" />
              <span>Available for select projects</span>
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#14151B] hover:bg-[#20222B] text-white transition-colors cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
