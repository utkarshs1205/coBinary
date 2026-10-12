import React from 'react';
import { FadeIn } from './FadeIn';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

interface Review {
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  metric: string;
  rating: number;
}

const REVIEWS: Review[] = [
  {
    name: 'Marcus Vance',
    role: 'Founder & CEO',
    company: 'Nextlevel Studios',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    content:
      'Working directly with Jack and Ishant was night and day compared to our previous agency. Jack’s 3D product renders looked like Apple-grade CGI, while Ishant built our web app to load in under 600ms. We raised our Series A off this brand presence.',
    metric: '4.2x conversion surge',
    rating: 5,
  },
  {
    name: 'Elena Rostova',
    role: 'Creative Director',
    company: 'Aura Lifestyle',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    content:
      'Their dual-founder synergy is unmatched. Having one mind dedicated to 3D artistic direction and the other to interactive web implementation meant our vision was executed with zero compromises. Best investment we made this year.',
    metric: '180k+ organic views',
    rating: 5,
  },
  {
    name: 'David Chen',
    role: 'VP of Product',
    company: 'Solaris Digital',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    content:
      'coBinary delivered a complete overhaul in just 3 weeks. They handled 3D motion clips, custom WebGL animations, and automated our onboarding funnel. Incredible craft, instant communication.',
    metric: '3.4x demo requests',
    rating: 5,
  },
  {
    name: 'Sarah Lindqvist',
    role: 'Head of Growth',
    company: 'Vex Ventures',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    content:
      'We needed striking 3D visual assets for our tech fund launch. Jack nailed the lighting and futuristic textures on the first draft, and the site Ishant coded went live ahead of schedule without a single bug.',
    metric: '100% on-time delivery',
    rating: 5,
  },
];

const CLIENT_NAMES = [
  'NEXTLEVEL',
  'SOLARIS',
  'AURA STUDIO',
  'KINETIC LABS',
  'VEX VENTURES',
  'ORBIT WEB3',
];

export const ReviewsSection: React.FC = () => {
  return (
    <section
      id="reviews"
      className="bg-[#0C0C0C] py-24 px-5 sm:px-8 md:px-10 border-t border-[#1C1F26] relative z-30 select-none"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <FadeIn y={30} className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#00E5FF] px-3.5 py-1 rounded-full bg-[#082229] border border-[#0D4B5C] inline-block mb-4">
            Client Success & Proof
          </span>
          <h2 className="hero-heading font-black uppercase text-3xl sm:text-5xl md:text-6xl tracking-tight leading-tight">
            Trusted by Ambitious Brands
          </h2>
          <p className="text-[#A2B1BC] text-sm sm:text-base max-w-xl mx-auto mt-4 font-light">
            Real feedback from founders and creative leads who built and scaled their digital presence with coBinary.
          </p>
        </FadeIn>

        {/* Client Logos Strip */}
        <FadeIn delay={0.1} y={20} className="mb-16">
          <div className="py-6 px-4 rounded-2xl bg-[#121317] border border-[#232630] flex flex-wrap items-center justify-around gap-6 sm:gap-10">
            {CLIENT_NAMES.map((name, i) => (
              <span
                key={i}
                className="text-base sm:text-lg font-black uppercase tracking-widest text-[#6C7682] hover:text-[#D7E2EA] transition-colors"
              >
                {name}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {REVIEWS.map((review, index) => (
            <FadeIn key={index} delay={index * 0.1} y={30}>
              <div className="h-full rounded-3xl bg-[#131418] border border-[#232630] p-6 sm:p-8 flex flex-col justify-between hover:border-[#3A3F4D] transition-colors relative group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-[#FFB800] text-[#FFB800]"
                        />
                      ))}
                    </div>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#1A2E20] text-[#00FF87] border border-[#00FF87]/30 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      {review.metric}
                    </span>
                  </div>

                  <Quote className="w-8 h-8 text-[#323642] mb-3" />

                  <p className="text-sm sm:text-base text-[#D7E2EA]/90 font-light leading-relaxed mb-6">
                    &ldquo;{review.content}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-[#232630]">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-11 h-11 rounded-full object-cover border border-[#3A3F4D]"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="text-sm font-semibold uppercase text-white tracking-wide">
                      {review.name}
                    </h4>
                    <p className="text-xs text-[#8E9CA8]">
                      {review.role} • <span className="text-[#BBCCD7]">{review.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Agency Highlights Banner */}
        <FadeIn delay={0.3} y={20}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 sm:p-8 rounded-2xl bg-[#14151B] border border-[#262832] text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono">50+</div>
              <div className="text-xs text-[#8E9CA8] uppercase tracking-wider mt-1">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#00FF87] font-mono">100%</div>
              <div className="text-xs text-[#8E9CA8] uppercase tracking-wider mt-1">5-Star Feedback</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#B600A8] font-mono">2</div>
              <div className="text-xs text-[#8E9CA8] uppercase tracking-wider mt-1">Senior Co-Founders</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono">&lt; 4h</div>
              <div className="text-xs text-[#8E9CA8] uppercase tracking-wider mt-1">Average Reply Time</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
