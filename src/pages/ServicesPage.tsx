import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FadeIn } from '../components/FadeIn';
import Particles from '../components/Particles';
import TiltedCard, { TiltedCardLayer } from '../components/TiltedCard';
import {
  Code2,
  ShieldCheck,
  BrainCircuit,
  Briefcase,
  Megaphone,
  Check,
  ArrowRight,
} from 'lucide-react';

interface ServiceDetail {
  id: string;
  number: string;
  name: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  image: string;
  imageAlt: string;
  deliverables: string[];
}

const SERVICES_CATALOG: ServiceDetail[] = [
  {
    id: 'web-dev',
    number: '01',
    name: 'Website & Development',
    category: 'Digital Engineering',
    icon: Code2,
    image: '/service-web-dev.jpg',
    imageAlt: 'Laptop with modern code editor on clean desk',
    description:
      'Websites, ecommerce platforms, mobile apps, and custom web software engineered for lightning speed, responsive fluidity, and high conversion.',
    deliverables: [
      'Corporate & Business Websites',
      'Ecommerce (Shopify/WooCommerce)',
      'Mobile Apps (Android/iOS)',
      'Landing Pages & Funnels',
      'Custom Web Apps (React/Next.js)',
      'CRM Integration & APIs',
    ],
  },
  {
    id: 'cybersecurity',
    number: '02',
    name: 'Cybersecurity & Security Testing',
    category: 'Cyber Defense',
    icon: ShieldCheck,
    image: '/service-cyber-security.jpg',
    imageAlt: 'Laptop displaying cybersecurity audit telemetry',
    description:
      'Enterprise grade vulnerability assessments, penetration testing, source code audits, and cloud hardening to safeguard your critical infrastructure.',
    deliverables: [
      'Web & API Penetration Testing',
      'Cloud Security Architecture (AWS/GCP)',
      'Source Code Security Auditing',
      'Security Compliance & Hardening',
      'Vulnerability Assessment & Fixes',
      'Incident Response Protocols',
    ],
  },
  {
    id: 'ai-automation',
    number: '03',
    name: 'AI/ML & Automation',
    category: 'Intelligent Systems',
    icon: BrainCircuit,
    image: '/service-ai-automation.jpg',
    imageAlt: 'Laptop showing neural network visualization and AI model dashboard',
    description:
      'Autonomous AI agents, fine tuned LLM pipelines, and intelligent process automations designed to eliminate repetitive bottlenecks and multiply efficiency.',
    deliverables: [
      'Custom AI Agents & Copilots',
      'LLM Fine-Tuning & RAG Pipelines',
      'Automated Data Extraction & OCR',
      'Intelligent Support Chatbots',
      'Predictive Analytics & ML Models',
      'Multi-App Workflow Automation',
    ],
  },
  {
    id: 'consulting',
    number: '04',
    name: 'Business Technology Solutions',
    category: 'Strategic Advisory',
    icon: Briefcase,
    image: '/service-consulting.jpg',
    imageAlt: 'Cloud architecture flowcharts and executive KPI dashboard',
    description:
      'Strategic technology roadmaps, cloud architecture migration, legacy modernization, and fractional CTO leadership for high growth enterprises.',
    deliverables: [
      'Digital Transformation Strategy',
      'Cloud Architecture (AWS, Azure, GCP)',
      'Legacy System Modernization',
      'Fractional CTO & Advisory',
      'DevOps & CI/CD Automation',
      'Cost Optimization Audits',
    ],
  },
  {
    id: 'growth-marketing',
    number: '05',
    name: 'Digital Marketing',
    category: 'Performance Marketing',
    icon: Megaphone,
    image: '/service-marketing.jpg',
    imageAlt: 'Growth marketing desk with strategy book and analytics tablet',
    description:
      'Search visibility, performance marketing, multi channel funnels, and conversational automation calibrated to generate consistent qualified acquisition.',
    deliverables: [
      'Technical & Local SEO Strategy',
      'Paid Ads (Google, Meta, LinkedIn)',
      'High-Converting Funnel Systems',
      'WhatsApp & Email Automation',
      'Conversion Rate Optimization',
      'Full Attribution & ROI Analytics',
    ],
  },
];

interface ServicesPageProps {
  onOpenContact: (plan?: string) => void;
  onNavigate: (target: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onOpenContact,
  onNavigate,
}) => {
  return (
    <div className="bg-white text-slate-800 min-h-screen w-full relative overflow-x-hidden font-sans antialiased selection:bg-sky-500 selection:text-white">
      {/* 1. Global Navigation Bar */}
      <div className="relative z-40 bg-[#0C0C0C]">
        <Navbar
          onOpenContact={() => onOpenContact()}
          onNavigate={onNavigate}
          activePage="services"
        />
      </div>

      {/* 2. Hero Header with Sky Blue and White Theme + Floating Particles */}
      <header className="relative w-full min-h-[440px] sm:min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#F0F9FF] via-[#E0F2FE]/40 to-white border-b border-sky-100">
        {/* Soft, visible Sky Blue and Light Red Particles */}
        <div className="absolute inset-0 z-0">
          <Particles
            particleColors={['#0284C7', '#38BDF8', '#EF4444', '#93C5FD']}
            particleCount={130}
            particleSpread={13}
            speed={0.15}
            particleBaseSize={220}
            sizeRandomness={1.1}
            glow={0.7}
            twinkle={0.4}
            moveParticlesOnHover
            hoverEffect="parallax"
            particleHoverFactor={1.2}
            clickBurst
            cameraDistance={18}
            className="w-full h-full opacity-70"
          />
        </div>

        {/* Ambient Sky Blue and Soft Rose Glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-sky-200/40 rounded-full blur-3xl pointer-events-none z-1" />
        <div className="absolute top-1/3 left-1/4 w-[350px] h-[220px] bg-rose-200/30 rounded-full blur-3xl pointer-events-none z-1" />

        {/* Center Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 py-16 sm:py-24 text-center flex flex-col items-center">
          <FadeIn delay={0.08} y={20}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.08] max-w-4xl mb-5">
              Full Funnel Services <span className="text-[#0284C7]">Under One Roof</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.15} y={20}>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto mb-8">
              Connected capabilities and one accountable team for your brand growth, with no fragmented vendor friction.
            </p>
          </FadeIn>

          <FadeIn delay={0.22} y={15}>
            {/* Hero CTA Button: "Get Started Now" matching Screenshot 1 */}
            <button
              type="button"
              onClick={() => onOpenContact('General Services Inquiry')}
              className="px-9 sm:px-11 py-4 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-sm sm:text-base tracking-wide transition-all duration-200 shadow-[0_6px_25px_rgba(2,132,199,0.3)] hover:shadow-[0_8px_30px_rgba(2,132,199,0.45)] hover:scale-105 active:scale-95 cursor-pointer inline-flex items-center gap-2.5"
            >
              <span>Get Started Now</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </FadeIn>
        </div>
      </header>

      {/* 3. Main Services Showcase Section */}
      <main className="w-full relative z-10 py-20 sm:py-28 md:py-36 px-5 sm:px-8 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto space-y-24 sm:space-y-32 md:space-y-36">
          {SERVICES_CATALOG.map((service, index) => {
            const IconComponent = service.icon;
            const isReversed = index % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-28"
              >
                <div
                  className={`flex flex-col ${
                    isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
                  } items-center justify-between gap-10 sm:gap-14 lg:gap-16`}
                >
                  {/* Image Column with TiltedCard (3D red boundary and red shadow move dynamically with card) */}
                  <div className="w-full lg:w-1/2">
                    <FadeIn delay={0.1} y={20}>
                      <div className="w-full relative flex items-center justify-center">
                        <TiltedCard
                          imageSrc={service.image}
                          altText={service.imageAlt}
                          captionText={`${service.name} • Tap to Flip`}
                          showTooltip={false}
                          containerWidth="100%"
                          containerHeight="360px"
                          imageWidth="100%"
                          imageHeight="360px"
                          rotateAmplitude={18}
                          scaleOnHover={1.05}
                          glare={0.35}
                          shadow={0.5}
                          radius={22}
                          parallax={1.2}
                          flipOnClick={true}
                          className="w-full"
                          backContent={
                            <div className="w-full h-full bg-gradient-to-br from-[#FFF5F5] via-[#F0F9FF] to-[#E0F2FE] text-slate-800 p-6 sm:p-8 flex flex-col justify-between rounded-[22px] shadow-2xl select-none">
                              <div>
                                <div className="flex items-center justify-between mb-3">
                                  <span className="text-xs font-mono uppercase tracking-wider text-[#0284C7] font-bold flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
                                    {service.category}
                                  </span>
                                  <span className="text-[10px] font-mono text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-full font-bold">
                                    Tap to flip back ↺
                                  </span>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
                                  {service.name}
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                                  {service.description}
                                </p>
                                <div className="space-y-1.5">
                                  {service.deliverables.slice(0, 4).map((item) => (
                                    <div
                                      key={item}
                                      className="flex items-center gap-2 text-xs font-medium text-slate-700"
                                    >
                                      <span className="w-3.5 h-3.5 rounded-full bg-red-100 flex items-center justify-center text-[#EF4444] text-[10px] font-bold shrink-0">
                                        ✓
                                      </span>
                                      <span>{item}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div className="pt-3 border-t border-red-200 flex items-center justify-between">
                                <span className="text-[11px] font-mono text-slate-500 font-medium">
                                  coBinary Studio
                                </span>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    onOpenContact(service.name);
                                  }}
                                  className="px-4 py-2 rounded-full bg-[#EF4444] hover:bg-[#dc2626] text-white text-xs font-bold transition-all shadow-md shadow-red-500/30 cursor-pointer"
                                >
                                  Explore {service.name} ↗
                                </button>
                              </div>
                            </div>
                          }
                        >
                          <TiltedCardLayer depth={24}>
                            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                              <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-red-300 text-[11px] font-mono text-slate-900 font-semibold flex items-center gap-1.5 shadow-md">
                                <span className="w-2 h-2 rounded-full bg-[#EF4444] animate-pulse" />
                                {service.name}
                              </span>
                              <span className="px-2.5 py-1 rounded-full bg-red-50 border border-red-200 text-[10px] font-mono text-red-600 font-medium shadow-sm">
                                Tap to Flip ↺
                              </span>
                            </div>
                          </TiltedCardLayer>
                        </TiltedCard>
                      </div>
                    </FadeIn>
                  </div>

                  {/* Content Column with Subheading Underlined in Red */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <FadeIn delay={0.2} y={20}>
                      {/* Category and Number Header */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="w-9 h-9 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-[#EF4444] shadow-sm">
                          <IconComponent className="w-4 h-4 stroke-[2.2]" />
                        </span>
                        <span className="text-xs font-mono uppercase tracking-widest text-[#0284C7] font-semibold flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
                          {service.category}
                        </span>
                        <span className="text-xs font-mono text-slate-400 ml-auto font-medium">
                          {service.number} / 05
                        </span>
                      </div>

                      {/* Service Subheading: Solid Red Underline under text */}
                      <div className="mb-4">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight inline-block border-b-[3.5px] border-[#EF4444] pb-1">
                          {service.name}
                        </h2>
                      </div>

                      {/* Description Paragraph */}
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 max-w-xl font-normal">
                        {service.description}
                      </p>

                      {/* Deliverables Checklist with Light Red checkmark accents */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6 mb-8 pt-6 border-t border-slate-100">
                        {service.deliverables.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-700"
                          >
                            <span className="w-4 h-4 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-[#EF4444] mt-0.5 shrink-0">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Action Link: Exactly "Explore [Service Name] ↗" matching Screenshot 2 */}
                      <div>
                        <button
                          type="button"
                          onClick={() => onOpenContact(service.name)}
                          className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-slate-900 hover:text-[#0284C7] transition-colors cursor-pointer group/btn"
                        >
                          <span>Explore {service.name}</span>
                          <ArrowRight className="w-4 h-4 text-[#EF4444] group-hover/btn:translate-x-1.5 transition-transform" />
                        </button>
                      </div>
                    </FadeIn>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Conversion Section (NO red underline here, as requested) */}
        <div className="max-w-5xl mx-auto mt-24 sm:mt-36">
          <FadeIn delay={0.1} y={20}>
            <div className="rounded-3xl bg-gradient-to-r from-[#F0F9FF] via-[#E0F2FE]/70 to-[#F0F9FF] border border-sky-200/90 p-8 sm:p-14 md:p-16 relative overflow-hidden shadow-xl shadow-sky-900/5 text-center">
              {/* Soft Rose Glow Accents */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-200/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-2xl mx-auto">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.2em] text-[#EF4444] font-semibold mb-3 bg-white/80 px-3.5 py-1 rounded-full border border-red-200 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
                  Tailored Project Roadmaps
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                  Need a custom combination of these capabilities?
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed mb-8">
                  From complete web platform builds with autonomous AI agents to security audits and growth funnels, we construct end to end roadmaps calibrated to your launch timeline.
                </p>
                <div className="flex items-center justify-center">
                  <button
                    type="button"
                    onClick={() => onOpenContact('Custom Multi-Service Scope')}
                    className="px-9 sm:px-11 py-4 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-sm sm:text-base tracking-wide transition-all duration-200 shadow-[0_6px_25px_rgba(2,132,199,0.3)] hover:shadow-[0_8px_30px_rgba(2,132,199,0.45)] hover:scale-105 active:scale-95 cursor-pointer inline-flex items-center gap-2.5"
                  >
                    <span>Get Started Now</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </main>

      {/* 4. Global Footer with Reference Studio Banner and Dot Matrix Typography */}
      <Footer onNavigate={onNavigate} onOpenContact={() => onOpenContact()} />
    </div>
  );
};
