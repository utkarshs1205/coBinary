import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { Check } from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

interface PlanItem {
  id: string;
  name: string;
  price: string;
  period?: string;
  tagline: string;
  isPopular?: boolean;
  features: string[];
}

const PRICING_PLANS: PlanItem[] = [
  {
    id: 'launch',
    name: 'Launch',
    price: '₹9,999 – ₹14,999',
    tagline: 'Perfect for businesses starting online with a premium digital presence.',
    isPopular: false,
    features: [
      'Premium landing page website',
      'Mobile responsive design',
      'WhatsApp & contact integration',
      'Google Maps setup',
      'Basic branding setup',
      'Social creatives',
      'SEO + speed optimization',
      'Strategy call',
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '₹19,999 – ₹34,999',
    tagline: 'Best for businesses ready to attract more customers and build trust online.',
    isPopular: true,
    features: [
      'Everything in Launch',
      'Multi-page premium website',
      'Custom UI/UX design',
      'Social media branding kit',
      'Reel / promo video',
      'Content planning',
      'Analytics setup',
      'Lead capture automation',
    ],
  },
  {
    id: 'scale',
    name: 'Scale',
    price: '₹39,999+',
    tagline: 'Complete digital presence with advanced branding and growth systems.',
    isPopular: false,
    features: [
      'Everything in Growth',
      'Custom website / web app',
      'Premium branding upgrades',
      'Professional content shoot',
      'AI automation setup',
      'Conversion strategy',
      'Priority support',
      'Dedicated guidance',
    ],
  },
  {
    id: 'consultancy',
    name: 'Consultancy',
    price: '₹999',
    period: '/ session',
    tagline: 'A focused strategy session for businesses needing expert guidance.',
    isPopular: false,
    features: [
      'Brand audit',
      'Website review',
      'Growth roadmap',
      'Content strategy ideas',
      'Lead generation suggestions',
      'AI & automation ideas',
      '45–60 min session',
      'Action plan after call',
    ],
  },
];

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  return (
    <section
      id="price"
      className="bg-[#0C0C0C] py-20 sm:py-28 px-4 sm:px-6 md:px-8 border-t border-[#1C1F26] relative z-30 select-none"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header from reference screenshot */}
        <FadeIn y={30} className="text-center mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-3">
            Simple &amp; <span className="text-[#00FF87]">transparent pricing</span>
          </h2>
          <p className="text-[#9FAEC0] text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Branding, websites, content creation &amp; digital growth solutions tailored for your business.
          </p>
        </FadeIn>

        {/* 4 Plans Grid matching reference screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PRICING_PLANS.map((plan, index) => (
            <FadeIn key={plan.id} delay={index * 0.08} y={30} className="h-full">
              <div
                className={`h-full rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.isPopular
                    ? 'bg-[#12141A] border-2 border-[#00FF87] shadow-[0_0_35px_rgba(0,255,135,0.18)]'
                    : 'bg-[#111216] border border-[#232630] hover:border-[#383C49]'
                }`}
              >
                {/* Most Popular Badge on highlighted card */}
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-[#00FF87] text-[#0C0C0C] text-[11px] font-bold uppercase tracking-wider shadow-md">
                    MOST POPULAR
                  </div>
                )}

                <div>
                  {/* Plan Name */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>

                  {/* Plan Price in INR (₹) */}
                  <div className="flex items-baseline gap-1.5 mb-2">
                    <span className="text-xl sm:text-2xl md:text-[25px] font-black text-[#00FF87] tracking-tight font-sans">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-xs sm:text-sm text-[#00FF87]/80 font-medium">
                        {plan.period}
                      </span>
                    )}
                  </div>

                  {/* Plan Tagline */}
                  <p className="text-xs sm:text-[13px] text-[#8E9CA8] leading-relaxed mb-6">
                    {plan.tagline}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 pt-5 border-t border-[#232630]/70 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#D7E2EA]/90 leading-snug"
                      >
                        <Check className="w-4 h-4 text-[#00FF87] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-2">
                  {plan.isPopular ? (
                    <motion.button
                      type="button"
                      onClick={() => onSelectPlan(plan.name)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 px-6 rounded-full bg-[#00FF87] hover:bg-[#00e676] text-[#0C0C0C] font-bold text-xs sm:text-sm tracking-wide shadow-[0_4px_20px_rgba(0,255,135,0.35)] transition-all cursor-pointer text-center"
                    >
                      Book a call
                    </motion.button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => onSelectPlan(plan.name)}
                      className="w-full py-2.5 text-xs sm:text-sm font-medium text-[#00FF87] hover:text-white transition-colors cursor-pointer text-center flex items-center justify-center"
                    >
                      <span>Book a call</span>
                    </button>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
