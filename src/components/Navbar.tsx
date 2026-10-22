import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Layers, FileText, Tag, Clock, ArrowRight, Menu, X, Users } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  onNavigate: (sectionId: string) => void;
  activePage?: 'home' | 'services' | 'projects' | 'teams';
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onNavigate, activePage = 'home' }) => {
  const [activeTab, setActiveTab] = useState<string>(activePage === 'home' ? '' : activePage);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Sync activeTab with activePage if provided
  useEffect(() => {
    setActiveTab(activePage === 'home' ? '' : activePage);
  }, [activePage]);

  const navItems = [
    { id: 'services', label: 'Services', icon: Box, target: 'services' },
    { id: 'projects', label: 'Projects', icon: Layers, target: 'projects' },
    { id: 'teams', label: 'Team', icon: Users, target: 'teams' },
    { id: 'about', label: 'About', icon: FileText, target: 'about' },
    { id: 'price', label: 'Pricing', icon: Tag, target: 'price' },
    { id: 'reviews', label: 'Reviews', icon: Clock, target: 'reviews' },
  ];

  const handleItemClick = (id: string, target: string) => {
    setActiveTab(id);
    onNavigate(target);
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-6xl mx-auto px-4 sm:px-8 py-3 sm:py-5 z-40 select-none"
    >
      {/* Seamless merged bar with NO border and NO background pill container */}
      <nav
        className="w-full flex items-center justify-between"
        aria-label="Main Navigation"
      >
        {/* Left: Brand Logo */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-tr from-[#B600A8] via-[#7621B0] to-white/20 p-[1px] shadow-lg group-hover:shadow-[#B600A8]/40 transition-shadow">
            <div className="w-full h-full bg-[#0C0C0C] rounded-[10px] flex items-center justify-center">
              <div className="grid grid-cols-2 gap-[2px] w-3 h-3 group-hover:rotate-45 transition-transform duration-300">
                <div className="bg-[#D7E2EA] rounded-[1px] w-[5px] h-[5px]" />
                <div className="bg-[#B600A8] rounded-[1px] w-[5px] h-[5px]" />
                <div className="bg-[#7621B0] rounded-[1px] w-[5px] h-[5px]" />
                <div className="bg-[#D7E2EA] rounded-[1px] w-[5px] h-[5px]" />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-base sm:text-lg tracking-tight font-sans">
              coBinary
            </span>
          </div>
        </motion.div>

        {/* Center: Pure interactive buttons with animated states (Desktop) */}
        <div className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            const isHovered = hoveredTab === item.id;

            return (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => handleItemClick(item.id, item.target)}
                onMouseEnter={() => setHoveredTab(item.id)}
                onMouseLeave={() => setHoveredTab(null)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-4 py-2 rounded-full text-xs lg:text-[13px] font-medium transition-colors duration-200 flex items-center gap-2 cursor-pointer ${
                  isActive ? 'text-white font-semibold' : 'text-[#9CA3AF] hover:text-white'
                }`}
              >
                {/* Active Pill Spring Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavBackground"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute inset-0 bg-white/10 rounded-full backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.08)]"
                  />
                )}

                {/* Subtle Hover Glow */}
                {!isActive && isHovered && (
                  <motion.div
                    layoutId="hoverNavBackground"
                    transition={{ duration: 0.15 }}
                    className="absolute inset-0 bg-white/5 rounded-full"
                  />
                )}

                <Icon
                  className={`w-3.5 h-3.5 relative z-10 transition-colors ${
                    isActive ? 'text-[#00FF87]' : 'text-[#8E9CA8] group-hover:text-white'
                  }`}
                />
                <span className="relative z-10">{item.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Right: Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <motion.button
            type="button"
            onClick={onOpenContact}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:inline-flex text-[#9CA3AF] hover:text-white text-xs sm:text-[13px] font-medium px-3 py-2 rounded-full transition-colors cursor-pointer"
          >
            Contact
          </motion.button>

          <motion.button
            type="button"
            onClick={onOpenContact}
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.96 }}
            className="group relative flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2.5 rounded-full bg-gradient-to-r from-white to-[#E2E8F0] hover:from-white hover:to-white text-[#0C0C0C] font-semibold text-xs sm:text-[13px] shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_6px_25px_rgba(255,255,255,0.25)] transition-all cursor-pointer shrink-0"
          >
            <span>Start building</span>
            <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
              <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-black" />
            </span>
          </motion.button>

          {/* Mobile Menu Toggle */}
          <motion.button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-1.5 sm:p-2 text-[#9CA3AF] hover:text-white rounded-xl bg-white/5 cursor-pointer ml-0.5"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-3 p-4 bg-[#111216]/95 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl flex flex-col gap-1.5"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleItemClick(item.id, item.target)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-white/15 text-white font-semibold'
                      : 'text-[#9CA3AF] hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 text-[#00FF87]" />
                    <span>{item.label}</span>
                  </div>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#00FF87]" />}
                </button>
              );
            })}
            <div className="pt-2 mt-2 border-t border-white/10">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white font-semibold text-xs text-center cursor-pointer"
              >
                Book a Strategy Call
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
