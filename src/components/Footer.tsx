import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full relative select-none">
      {/* 1. Pre-Footer Hero CTA Banner matching Screenshot 1 */}
      <div className="relative w-full h-[380px] xs:h-[420px] sm:h-[480px] md:h-[520px] overflow-hidden flex items-center justify-center">
        {/* Real studio loft creative team background photo */}
        <img
          src="/footer-studio-banner.jpg"
          alt="coBinary Creative Studio Workshop"
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.6] contrast-[1.1]"
        />

        {/* Cinematic dark scrim overlays for high contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060709] via-black/60 to-black/75" />
        <div className="absolute inset-0 bg-black/35" />

        {/* Center Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.08] mb-4 drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
            Ready to Start Your Growth Journey?
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#E4E4E7] font-normal max-w-xl mx-auto mb-8 sm:mb-9 drop-shadow-md">
            Join hundreds of brands scaling with our strategies.
          </p>

          <motion.button
            type="button"
            onClick={onOpenContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 sm:px-11 py-3.5 sm:py-4 rounded-full bg-[#00FF87] hover:bg-[#00e676] text-[#0C0C0C] font-black text-xs sm:text-sm md:text-base tracking-wide transition-all shadow-[0_4px_30px_rgba(0,255,135,0.45)] hover:shadow-[0_8px_40px_rgba(0,255,135,0.65)] cursor-pointer"
          >
            Get Started Now
          </motion.button>
        </div>
      </div>

      {/* 2. Main Footer Content matching Screenshot 2 */}
      <div className="bg-[#060709] text-[#A2B1BC] pt-14 sm:pt-18 pb-6 px-6 sm:px-10 lg:px-16 border-t border-white/[0.08] relative z-20">
        <div className="max-w-7xl mx-auto">
          {/* Top Columns Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 pb-12 sm:pb-16 text-xs font-mono uppercase tracking-widest">
            {/* Column 1: Studio Brand & Connect */}
            <div className="col-span-2 sm:col-span-1 space-y-6">
              <div>
                <h3 className="text-white font-bold text-sm tracking-widest mb-1.5">
                  COBINARY STUDIO
                </h3>
                <p className="text-[#6C7684] text-[11px] leading-relaxed">
                  ©{new Date().getFullYear()} COBINARY • SCALE YOUR BUSINESS
                </p>
              </div>

              <div className="pt-2">
                <span className="text-[10px] text-[#6C7684] block mb-3 font-semibold">
                  CONNECT
                </span>
                <div className="flex items-center gap-3.5 mb-3 text-white/80">
                  {/* Instagram */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  {/* X / Twitter */}
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                    aria-label="X (Twitter)"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
                <a
                  href="mailto:founders@cobinary.studio"
                  className="text-[11px] text-[#8E9CA8] hover:text-white transition-colors lowercase tracking-normal block"
                >
                  founders@cobinary.studio
                </a>
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div>
              <span className="text-[#6C7684] block mb-4 font-semibold">
                NAVIGATION
              </span>
              <ul className="space-y-3">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('home')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    HOME
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('services')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    SERVICES
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('projects')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    WORK
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('teams')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    TEAM
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('reviews')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    REVIEWS
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('price')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    PRICING
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Expertise */}
            <div>
              <span className="text-[#6C7684] block mb-4 font-semibold">
                EXPERTISE
              </span>
              <ul className="space-y-3 text-[#D7E2EA]/85">
                <li>WEBSITES, APPS &amp; SOFTWARE</li>
                <li>CYBERSECURITY &amp; TESTING</li>
                <li>AI/ML &amp; AUTOMATION</li>
                <li>BUSINESS TECH SOLUTIONS</li>
                <li>GROWTH &amp; DIGITAL MARKETING</li>
              </ul>
            </div>

            {/* Column 4: Selected Clients */}
            <div>
              <span className="text-[#6C7684] block mb-4 font-semibold">
                SELECTED CLIENTS
              </span>
              <ul className="space-y-3 text-[#D7E2EA]/85">
                <li>NEXTLEVEL STUDIO</li>
                <li>AURA DIGITAL</li>
                <li>SOLARIS WEALTH</li>
                <li>VITARA DYNAMICS</li>
                <li>AETHERA BIOSCIENCE</li>
              </ul>
            </div>
          </div>

          {/* Divider & Back to Top Row */}
          <div className="pt-6 pb-4 border-t border-white/[0.08] flex justify-end">
            <button
              type="button"
              onClick={scrollToTop}
              className="text-xs font-mono uppercase tracking-widest text-[#8E9CA8] hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>BACK TO TOP</span>
              <span>↑</span>
            </button>
          </div>

          {/* Giant Halftone Dot Matrix Typography: "cobinary" matching Screenshot 2 */}
          <div className="w-full overflow-hidden pt-4 pb-2 select-none">
            <svg
              viewBox="0 0 1200 185"
              className="w-full h-auto overflow-visible"
              preserveAspectRatio="xMidYMid meet"
              aria-label="cobinary"
            >
              <defs>
                <pattern
                  id="cobinary-dot-matrix"
                  x="0"
                  y="0"
                  width="7"
                  height="7"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="3.5" cy="3.5" r="2.2" fill="#FFFFFF" opacity="0.95" />
                </pattern>
              </defs>
              <text
                x="50%"
                y="74%"
                textAnchor="middle"
                fill="url(#cobinary-dot-matrix)"
                fontSize="225"
                fontWeight="900"
                letterSpacing="-7"
                fontFamily="system-ui, -apple-system, sans-serif"
              >
                cobinary
              </text>
            </svg>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Action Button matching Screenshot 2 */}
      <a
        href="https://wa.me/?text=Hi%20coBinary,%20I%20would%20like%20to%20discuss%20a%20project"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-[0_6px_25px_rgba(37,211,102,0.45)] hover:scale-110 active:scale-95 transition-all cursor-pointer"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.97.57 3.805 1.554 5.353L2 22l4.775-1.528A10.01 10.01 0 0 0 12.031 22c5.536 0 10.031-4.495 10.031-10.031S17.567 2 12.031 2zm0 18.272a8.23 8.23 0 0 1-4.2-1.151l-.3-.178-3.125 1 1.02-3.045-.195-.31a8.216 8.216 0 0 1-1.26-4.357c0-4.557 3.708-8.265 8.265-8.265 4.557 0 8.265 3.708 8.265 8.265 0 4.557-3.708 8.265-8.265 8.265zm4.536-6.19c-.248-.124-1.468-.724-1.696-.807-.228-.083-.394-.124-.56.124-.166.248-.642.807-.787.973-.145.166-.29.187-.538.062a6.79 6.79 0 0 1-1.996-1.23 7.484 7.484 0 0 1-1.38-1.72c-.145-.248-.016-.382.108-.506.111-.111.248-.29.373-.435.124-.145.166-.248.248-.415.083-.166.041-.31-.021-.435-.062-.124-.56-1.348-.767-1.846-.201-.485-.405-.42-.56-.427l-.477-.008c-.166 0-.435.062-.663.31-.228.248-.87 0.85-.87 2.073 0 1.223.89 2.405 1.014 2.571.124.166 1.753 2.678 4.248 3.755.594.256 1.058.409 1.42.524.597.19 1.14.163 1.57.099.479-.071 1.468-.6 1.675-1.18.207-.58.207-1.077.145-1.18-.062-.104-.228-.166-.477-.29z" />
        </svg>
      </a>
    </footer>
  );
};
