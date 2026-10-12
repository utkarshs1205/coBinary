import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { Check, Sparkles, Clock, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

const PRICING_PLANS = [
  {
    id: '3d-motion',
    name: '3D & Motion Sprint',
    tagline: 'Ideal for product launches, social ads, and hero visual assets.',
    price: '$2,400',
    duration: '1 - 2 weeks delivery',
    highlight: false,
    deliverables: [
      'Up to 3 high-detail 3D models & product renders',
      'Cinema-grade lighting, textures & 4K exports',
      '1 kinetic 3D motion video (15-30s) for socials/hero',
      'All raw 3D scene files + transparent PNG renders',
      '2 revision rounds with Jack (3D Director)',
    ],
  },
  {
    id: 'full-scale',
    name: 'Brand + Web Experience',
    tagline: 'Our flagship service: full visual identity and responsive web build.',
    price: '$5,800',
    duration: '2 - 3 weeks delivery',
    highlight: true,
    badge: 'Founder Favorite',
    deliverables: [
      'Custom 3D hero assets & interactive web animations',
      'High-converting, responsive website (React/Next.js)',
      'Cohesive visual branding, logo system & typography',
      'SEO optimization, lightning 95+ PageSpeed score',
      'Lead capture form & CRM / email integration',
      'Direct collaboration with both Jack & Ishant',
    ],
  },
  {
    id: 'ai-enterprise',
    name: 'Web, 3D & AI Ecosystem',
    tagline: 'Complete digital transformation with custom automation pipelines.',
    price: '$9,500+',
    duration: '3 - 5 weeks delivery',
    highlight: false,
    deliverables: [
      'End-to-end 3D visual system + interactive 3D WebGL',
      'Full web platform or web application development',
      'Custom AI automations (lead qualifying, chatbots, CRM)',
      'Complete social & shoot editing toolkit',
      'Dedicated Slack channel with both founders',
      '30 days post-launch support & performance tuning',
    ],
  },
];

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  return (
    <section
      id="price"
      className="bg-[#0C0C0C] py-24 px-5 sm:px-8 md:px-10 border-t border-[#1C1F26] relative z-30 select-none"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn y={30} className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B600A8] px-3.5 py-1 rounded-full bg-[#1A1124] border border-[#3E1650] inline-block mb-4">
            Transparent Investment
          </span>
          <h2 className="hero-heading font-black uppercase text-3xl sm:text-5xl md:text-6xl tracking-tight leading-tight">
            Clear Pricing. Zero Agency Bloat.
          </h2>
          <p className="text-[#A2B1BC] text-sm sm:text-base max-w-2xl mx-auto mt-4 font-light">
            You deal straight with the two founders. No sales reps, no endless junior handoffs. Pick a package or request a custom scope.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan, index) => (
            <FadeIn key={plan.id} delay={index * 0.1} y={30} className="h-full">
              <div
                className={`h-full rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.highlight
                    ? 'bg-[#14151B] border-2 border-[#B600A8] shadow-[0_0_40px_rgba(182,0,168,0.25)]'
                    : 'bg-[#111216] border border-[#232630] hover:border-[#383C49]'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white text-xs font-semibold uppercase tracking-wider shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{plan.badge}</span>
                  </div>
                )}

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8E9CA8] font-light leading-snug mb-6">
                    {plan.tagline}
                  </p>

                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs uppercase text-[#8E9CA8] tracking-widest font-mono">
                      / project
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-[#00FF87] font-mono mb-8">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{plan.duration}</span>
                  </div>

                  <div className="space-y-3 pt-6 border-t border-[#232630] mb-8">
                    <span className="text-xs uppercase tracking-wider text-[#BBCCD7] font-mono block mb-2">
                      What&apos;s Included:
                    </span>
                    {plan.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D7E2EA]/90 font-light">
                        <div className="w-4 h-4 rounded-full bg-[#1F222B] flex items-center justify-center shrink-0 mt-0.5 text-[#00FF87]">
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <motion.button
                  type="button"
                  onClick={() => onSelectPlan(plan.name)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3.5 px-6 rounded-full font-semibold uppercase text-xs sm:text-sm tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white hover:shadow-[0_0_20px_rgba(182,0,168,0.5)]'
                      : 'bg-[#1F222B] text-[#D7E2EA] hover:bg-[#2A2E3B]'
                  }`}
                >
                  <span>Select Package</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
