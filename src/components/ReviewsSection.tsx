import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { Star, ArrowRight, ChevronLeft, ChevronRight, PenSquare } from 'lucide-react';

interface ReviewsSectionProps {
  onNavigateReviews?: () => void;
  onOpenSubmitReview?: () => void;
}

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 'sabm',
    quote:
      'coBinary developed a premium B2B veterinary catalog platform for us. Their custom WhatsApp pre-filled ordering system has made wholesale order processing incredibly smooth.',
    author: 'Devendra Singh',
    role: 'Director',
    company: 'S.A.B.M Trading Co.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    rating: 5,
  },
  {
    id: 'buddy4plant',
    quote:
      'coBinary engineered our high-speed e-commerce storefront with custom interactive plant care filters. Our cart checkout conversion surged by 42% in the first 30 days post-launch.',
    author: 'Aman Verma',
    role: 'Founder',
    company: 'Buddy4Plant',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    rating: 5,
  },
  {
    id: 'orchidflame',
    quote:
      'From custom 3D web visuals to our luxury brand redesign, coBinary delivered a cinematic aesthetic that immediately elevated our market valuation and brand prestige.',
    author: 'Neha Sharma',
    role: 'Creative Director',
    company: 'Orchid Flame',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    rating: 5,
  },
  {
    id: 'gmi',
    quote:
      'They automated our B2B onboarding funnel and integrated real-time analytics. Turnaround was exceptionally fast, highly professional, and communication was flawless.',
    author: 'Rohan Gupta',
    role: 'VP of Growth',
    company: 'GMI Solutions',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    rating: 5,
  },
];

const TRUSTED_EXPERTS = [
  'Buddy4Plant',
  'Orchid Flame',
  'GMI Solutions',
  'S.A.B.M',
];

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  onNavigateReviews,
  onOpenSubmitReview,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide every 6 seconds if not paused
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = TESTIMONIALS[activeIndex];

  return (
    <section
      id="reviews"
      className="bg-[#090C10] text-white py-20 sm:py-28 px-5 sm:px-8 md:px-12 border-t border-white/5 relative z-30 select-none overflow-hidden"
    >
      {/* Ambient background glows matching reference */}
      <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[380px] h-[380px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Top 2-Column Layout matching Reference Screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 sm:mb-20">
          {/* Left Column: Heading, Badge, Description & Carousel Indicators */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <FadeIn delay={0.05} y={20}>
              {/* Badge: ★ Client Endorsements */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-4">
                <span className="text-emerald-400">★</span>
                <span>Client Endorsements</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.1] mb-5">
                What Our Partners Say
              </h2>

              {/* Supporting Subtext */}
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-md mb-8">
                Read authentic feedback from brand founders, creators, and business leaders who scaled with coBinary.
              </p>

              {/* Carousel Indicator Dots & Arrows matching reference */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  {TESTIMONIALS.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                        activeIndex === idx
                          ? 'w-7 bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]'
                          : 'w-2 bg-slate-700 hover:bg-slate-500'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-1.5 ml-4">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
                    }
                    className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length)}
                    className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
                    aria-label="Next review"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Floating Testimonial Card matching reference screenshot */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.12} y={20}>
              <div className="relative rounded-3xl bg-[#11141B] border border-white/10 p-7 sm:p-9 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden min-h-[300px] flex flex-col justify-between">
                {/* Giant subtle green quote mark in background */}
                <span className="absolute top-4 left-6 text-emerald-500/10 text-8xl font-serif select-none pointer-events-none leading-none">
                  “
                </span>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35 }}
                    className="relative z-10 flex flex-col justify-between h-full"
                  >
                    <div>
                      {/* 5 Green Stars */}
                      <div className="flex items-center gap-1.5 mb-5">
                        {[...Array(current.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-emerald-400 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.4)]"
                          />
                        ))}
                      </div>

                      {/* Testimonial Quote */}
                      <blockquote className="text-base sm:text-lg md:text-xl text-slate-200 font-normal leading-relaxed tracking-normal mb-8">
                        &ldquo;{current.quote}&rdquo;
                      </blockquote>
                    </div>

                    {/* Divider line matching reference */}
                    <div className="border-t border-white/10 pt-5 flex items-center justify-between">
                      <div className="flex items-center gap-3.5">
                        <img
                          src={current.avatar}
                          alt={current.author}
                          className="w-12 h-12 rounded-full object-cover border border-emerald-500/30"
                          loading="lazy"
                        />
                        <div>
                          <h4 className="text-sm sm:text-base font-bold text-white tracking-wide">
                            {current.author}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-400">
                            {current.role}, <span className="text-slate-300 font-medium">{current.company}</span>
                          </p>
                        </div>
                      </div>

                      <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full bg-emerald-950/50 text-emerald-400 border border-emerald-500/20">
                        Verified Partner
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Bottom Section: Trusted by experts from + Action Buttons */}
        <div className="pt-8 border-t border-white/5 flex flex-col items-center text-center">
          <p className="text-xs sm:text-sm text-slate-500 uppercase tracking-widest font-mono mb-6">
            Our work is trusted by experts from
          </p>

          {/* Trusted Brand Names matching Reference */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 md:gap-20 mb-10">
            {TRUSTED_EXPERTS.map((brand, i) => (
              <span
                key={i}
                className="text-base sm:text-xl md:text-2xl font-black tracking-wider text-slate-500/80 hover:text-white transition-colors duration-200 cursor-default uppercase"
              >
                {brand}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={onNavigateReviews}
              className="px-7 sm:px-9 py-3 rounded-full bg-transparent hover:bg-white/10 text-white border border-white/20 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer inline-flex items-center gap-2"
            >
              <span>View All Client Stories</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </button>

            <button
              type="button"
              onClick={onOpenSubmitReview || onNavigateReviews}
              className="px-7 sm:px-9 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-[#090C10] text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer inline-flex items-center gap-2 shadow-[0_4px_20px_rgba(16,185,129,0.35)]"
            >
              <PenSquare className="w-4 h-4" />
              <span>Write a Review</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
