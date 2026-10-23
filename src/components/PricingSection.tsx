import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

interface CustomScopeItem {
  id: string;
  name: string;
  scopeBadge: string;
  estimateType: string;
  tagline: string;
  isPopular?: boolean;
  features: string[];
}

const CUSTOM_SCOPES: CustomScopeItem[] = [
  {
    id: 'launch-platform',
    name: 'Launch Platform',
    scopeBadge: 'Milestone Delivery',
    estimateType: 'Custom Scope Quote',
    tagline: 'Ideal for emerging brands needing a high-speed, modern web presence that converts visitors into customers.',
    isPopular: false,
    features: [
      'Custom responsive landing page or web app',
      'High-performance tech stack (Next.js / Vite)',
      'WhatsApp & automated lead capture integration',
      'Search engine indexing & speed optimization',
      'Tailored brand typography & design kit',
      'Milestone-based sprint milestones',
      'Full source code handover & deployment',
    ],
  },
  {
    id: 'growth-3d',
    name: 'Growth & Interactive 3D',
    scopeBadge: 'Most Requested',
    estimateType: 'Tailored Scope',
    tagline: 'Engineered for scaling businesses looking to command market leadership with interactive 3D & cinematic visuals.',
    isPopular: true,
    features: [
      'Everything in Launch Platform',
      'Interactive 3D WebGL / Three.js experience',
      'Multi-page fluid web platform architecture',
      'Bespoke 3D product modeling & motion direction',
      'High-converting landing page funnels',
      'CRM & analytics tracking pipeline',
      'Dedicated founder review sprints',
    ],
  },
  {
    id: 'enterprise-ai',
    name: 'Enterprise & AI Systems',
    scopeBadge: 'Full Stack Sprint',
    estimateType: 'Milestone Estimate',
    tagline: 'End-to-end software engineering, autonomous AI workflows, and dedicated architecture support.',
    isPopular: false,
    features: [
      'Full-stack web application development',
      'Custom AI agents & autonomous workflow automation',
      'Database architecture & custom backend APIs',
      'Enterprise security & performance SLAs',
      'Interactive dashboards & real-time telemetry',
      'Continuous milestone sprint cycles',
      'Priority post-launch support & SLA',
    ],
  },
  {
    id: 'strategy-advisory',
    name: 'Architecture & Advisory',
    scopeBadge: 'Direct Session',
    estimateType: 'Sprint Consultation',
    tagline: 'A focused, high-impact strategy and audit session directly with our technical & 3D creative founders.',
    isPopular: false,
    features: [
      'Comprehensive UI/UX & performance audit',
      'Technical architecture & tech stack review',
      'Custom conversion & funnel growth roadmap',
      'AI automation & operational feasibility audit',
      '60-minute deep-dive video session',
      'Actionable blueprint document delivered post-call',
    ],
  },
];

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  return (
    <section
      id="price"
      className="bg-white py-20 sm:py-28 px-4 sm:px-6 md:px-8 border-t border-sky-100 relative z-30 select-none text-slate-800"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <FadeIn y={25} className="text-center mb-14 sm:mb-20">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0284C7] font-semibold flex items-center justify-center gap-1.5 mb-2.5">
            <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
            Transparent &amp; Relatable Investment
          </span>
          <div className="mb-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight inline-block border-b-[3.5px] border-[#EF4444] pb-1">
              Custom Pricing &amp; Tailored Scopes
            </h2>
          </div>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Every business has distinct goals and technical requirements. We build tailored, milestone-based quotes aligned with your exact deliverables and timeline — 0 generic packages, 0 surprise charges.
          </p>
        </FadeIn>

        {/* 4 Scope Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {CUSTOM_SCOPES.map((plan, index) => (
            <FadeIn key={plan.id} delay={index * 0.08} y={30} className="h-full">
              <div
                className={`h-full rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.isPopular
                    ? 'bg-gradient-to-b from-sky-50 via-white to-sky-50/40 border-2 border-[#0284C7] shadow-[0_15px_40px_rgba(2,132,199,0.18)] scale-[1.02]'
                    : 'bg-white border border-sky-100 hover:border-sky-300 shadow-[0_8px_30px_rgba(2,132,199,0.06)]'
                }`}
              >
                {/* Popular Pill Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-[#0284C7] text-white text-[11px] font-bold uppercase tracking-wider shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-white fill-white" />
                    <span>POPULAR CHOICE</span>
                  </div>
                )}

                <div>
                  {/* Scope Badge */}
                  <div className="mb-3">
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-sky-100 text-[#0284C7] font-semibold inline-block">
                      {plan.scopeBadge}
                    </span>
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                    {plan.name}
                  </h3>

                  {/* Relatable Custom Estimate Tag */}
                  <div className="mb-3">
                    <span className="text-xl sm:text-2xl font-black text-[#0284C7] tracking-tight font-sans block">
                      {plan.estimateType}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      Milestone-based deliverables
                    </span>
                  </div>

                  {/* Plan Tagline */}
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-6">
                    {plan.tagline}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 pt-5 border-t border-sky-100 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700 leading-snug"
                      >
                        <Check className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-2">
                  <motion.button
                    type="button"
                    onClick={() => onSelectPlan(plan.name)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-5 rounded-full font-bold text-xs sm:text-sm tracking-wide transition-all cursor-pointer text-center inline-flex items-center justify-center gap-2 ${
                      plan.isPopular
                        ? 'bg-[#0284C7] hover:bg-[#0369A1] text-white shadow-[0_4px_20px_rgba(2,132,199,0.35)]'
                        : 'bg-sky-50 hover:bg-sky-100 text-[#0284C7] border border-sky-200'
                    }`}
                  >
                    <span>Get Custom Pricing</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Reassurance Banner */}
        <FadeIn delay={0.2} y={20} className="mt-14 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 sm:gap-10 py-4 px-6 rounded-2xl bg-sky-50/70 border border-sky-100 text-xs sm:text-sm text-slate-600">
            <span className="flex items-center gap-2 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              100% Free Technical Estimate
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="flex items-center gap-2 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#0284C7]" />
              Structured Milestone Payments
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="flex items-center gap-2 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
              Direct Founder Communication
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
