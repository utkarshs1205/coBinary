import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './Navbar';
import { ShapeBlur } from './ShapeBlur';
import { BlurText } from './BlurText';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenContact: () => void;
  onNavigate: (sectionId: string) => void;
}

const rotatingPhrases = [
  "Let's build together",
  "Grow your online presence",
  "Scale your business revenue",
  "Turn visitors into paying clients",
  "High-converting web & AI systems",
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenContact,
  onNavigate,
}) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // Rotate phrases automatically
  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  // Smooth 3D Cursor tracking for whole picture following cursor with depth
  useEffect(() => {
    let animId: number;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Only track cursor on mouse devices to prevent erratic jumps on smartphone tap/scroll
      if (window.matchMedia('(pointer: coarse)').matches) {
        targetX = 0;
        targetY = 0;
        return;
      }
      // Direct normalized cursor offset: -1 (left/top) to +1 (right/bottom)
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleMouseLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const update = () => {
      // Responsive lerp for fluid 60/120fps tracking without lag
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;
      setMouseOffset({ x: currentX, y: currentY });
      animId = requestAnimationFrame(update);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    animId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] h-[100dvh] w-full flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#F0F9FF] via-[#E0F2FE]/40 to-white select-none border-b border-sky-100"
    >
      {/* 1. Global Navigation Bar container */}
      <div className="relative z-40 bg-[#0C0C0C]">
        <Navbar onOpenContact={onOpenContact} onNavigate={onNavigate} />
      </div>

      {/* Atmospheric Agency Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[350px] bg-sky-200/40 blur-[140px] pointer-events-none -z-20" />
      <div className="absolute top-1/3 left-1/4 w-[350px] sm:w-[450px] h-[250px] bg-rose-200/25 blur-[120px] pointer-events-none -z-20" />

      {/* 2. Top Content: BlurText Autorotating Ticker & Dynamic Headline */}
      <div className="w-full text-center z-30 flex flex-col items-center pointer-events-none px-4 pt-1 sm:pt-2 max-w-4xl mx-auto shrink-0">
        {/* Animated Rotating Ticker using <BlurText /> */}
        <div className="h-6 sm:h-7 flex items-center justify-center min-w-[220px] sm:min-w-[280px] mb-1 sm:mb-2">
          <AnimatePresence mode="wait">
            <BlurText
              key={phraseIndex}
              text={rotatingPhrases[phraseIndex]}
              delay={40}
              animateBy="words"
              direction="top"
              stepDuration={0.25}
              className="text-xs sm:text-sm md:text-base uppercase tracking-[0.22em] sm:tracking-[0.25em] text-[#0284C7] font-semibold justify-center drop-shadow-sm"
            />
          </AnimatePresence>
        </div>

        {/* Welcoming Text & Clear Company Name */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full flex flex-col items-center mt-1"
        >
          <h1 className="font-black uppercase tracking-tight text-center leading-[0.92]">
            <span className="block text-lg xs:text-2xl sm:text-4xl md:text-5xl font-bold tracking-[0.25em] sm:tracking-[0.35em] text-slate-500 mb-0.5 sm:mb-1">
              WELCOME TO
            </span>
            <span className="block text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-[6.2rem] font-black tracking-tight text-slate-900 drop-shadow-[0_4px_20px_rgba(2,132,199,0.14)]">
              COBINARY
            </span>
          </h1>
        </motion.div>
      </div>

      {/* 3. Center Visual: Skin-Tone Matching Rotating Square & 3D Interactive Tracking Character */}
      <div
        className="relative flex-1 w-full flex items-end justify-center z-20 pointer-events-auto pb-0 overflow-visible"
        style={{ perspective: '1200px' }}
      >
        {/* ShapeBlur WebGL Component: Thick Rotating Square with multi-plane depth parallax */}
        <div
          className="absolute -z-10 w-[270px] xs:w-[320px] sm:w-[520px] md:w-[620px] lg:w-[680px] h-[270px] xs:h-[320px] sm:h-[520px] md:h-[620px] lg:h-[680px] flex items-center justify-center pointer-events-none will-change-transform"
          style={{
            left: '50%',
            top: '50%',
            transform: `translate3d(calc(-50% + ${mouseOffset.x * 20}px), calc(-50% + ${mouseOffset.y * 12}px), 0)`,
          }}
        >
          <ShapeBlur
            shape="rect"
            fill={false}
            thickness={10}
            roundness={0.16}
            color="#0284C7"
            blur={4}
            size={0.56}
            lensSize={0.4}
            lensSoftness={0.65}
            chroma={0.2}
            echoes={1}
            idle={true}
            spin={5.0}
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* 3D Character: Interactive Picture that moves directly with cursor direction with premium depth */}
        <div
          className="relative select-none flex justify-center will-change-transform"
          style={{
            transform: `translate3d(${mouseOffset.x * 55}px, ${mouseOffset.y * 28}px, 0) rotateY(${mouseOffset.x * 12}deg) rotateX(${-mouseOffset.y * 9}deg) rotateZ(${mouseOffset.x * 2.5}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Character Image with responsive height constraints and dynamic directional drop-shadow */}
          <img
            src="/hero-character.png"
            alt="coBinary Agency 3D Character"
            className="w-[160px] xs:w-[190px] sm:w-[280px] md:w-[340px] lg:w-[370px] max-h-[42vh] sm:max-h-[52vh] object-contain pointer-events-auto select-none"
            style={{
              filter: `drop-shadow(${-mouseOffset.x * 18}px ${18 - mouseOffset.y * 12}px 28px rgba(2,132,199,0.22)) contrast(1.02)`,
            }}
            draggable={false}
          />
        </div>
      </div>

      {/* 4. Bottom Conversion Action: Clean Sky Blue & Light Red Accent Button */}
      <div className="w-full px-4 sm:px-12 flex justify-center sm:justify-end pb-5 sm:pb-8 pt-1 z-30 pointer-events-auto shrink-0">
        <motion.button
          type="button"
          onClick={onOpenContact}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex items-center gap-2.5 sm:gap-3 px-7 sm:px-9 py-3 sm:py-3.5 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[0_6px_25px_rgba(2,132,199,0.35)] hover:shadow-[0_10px_35px_rgba(2,132,199,0.5)] transition-all cursor-pointer"
        >
          <span>Grow Your Business</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
          <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
          </span>
        </motion.button>
      </div>
    </section>
  );
};
