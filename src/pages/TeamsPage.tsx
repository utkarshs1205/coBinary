import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FadeIn } from '../components/FadeIn';
import Particles from '../components/Particles';
import ReflectiveCard from '../components/ReflectiveCard';
import { ArrowRight, Code2, Sparkles, Check, Terminal, Palette, ShieldCheck, Zap } from 'lucide-react';

interface TeamsPageProps {
  onOpenContact: (plan?: string) => void;
  onNavigate: (target: string) => void;
}

export const TeamsPage: React.FC<TeamsPageProps> = ({ onOpenContact, onNavigate }) => {
  return (
    <div className="bg-white text-slate-800 min-h-screen w-full relative overflow-x-hidden font-sans antialiased selection:bg-sky-500 selection:text-white flex flex-col justify-between">
      {/* 1. Global Navigation Bar matching Services and Projects */}
      <div className="relative z-40 bg-[#0C0C0C]">
        <Navbar
          onOpenContact={() => onOpenContact()}
          onNavigate={onNavigate}
          activePage="teams"
        />
      </div>

      {/* 2. Hero Header with Sky Blue and White Theme + Floating Particles */}
      <header className="relative w-full min-h-[420px] sm:min-h-[480px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#F0F9FF] via-[#E0F2FE]/40 to-white border-b border-sky-100">
        <div className="absolute inset-0 z-0">
          <Particles
            particleColors={['#0284C7', '#38BDF8', '#EF4444', '#93C5FD']}
            particleCount={120}
            particleSpread={13}
            speed={0.15}
            particleBaseSize={200}
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

        <div className="absolute top-0 right-1/4 w-[450px] h-[280px] bg-sky-200/35 rounded-full blur-3xl pointer-events-none z-1" />
        <div className="absolute top-1/3 left-1/4 w-[320px] h-[200px] bg-rose-200/25 rounded-full blur-3xl pointer-events-none z-1" />

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 py-16 sm:py-20 text-center flex flex-col items-center">
          <FadeIn delay={0.08} y={15}>
            <span className="text-xs font-mono uppercase tracking-widest text-[#0284C7] font-semibold flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
              Leadership &amp; Studio Partners
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Meet The <span className="text-[#0284C7]">Founders</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.15} y={15}>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl mx-auto mb-7">
              The founding partners behind coBinary — combining full-stack software engineering, AI automation, and spatial 3D creative direction.
            </p>
          </FadeIn>

          <FadeIn delay={0.22} y={15}>
            <button
              type="button"
              onClick={() => onOpenContact('Founders Direct Inquiry')}
              className="px-8 sm:px-10 py-3.5 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-sm tracking-wide transition-all duration-200 shadow-[0_6px_25px_rgba(2,132,199,0.3)] hover:scale-105 active:scale-95 cursor-pointer inline-flex items-center gap-2"
            >
              <span>Get Started Now</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </FadeIn>
        </div>
      </header>

      {/* 3. Main Reflective Cards Showcase Section */}
      <section className="w-full relative z-10 py-16 sm:py-24 px-5 sm:px-8 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-14 sm:mb-18">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0284C7] font-semibold flex items-center justify-center gap-1.5 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
              Co-Founders ID Badges
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 inline-block border-b-[3.5px] border-[#EF4444] pb-1">
              Founding Partners
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2.5 max-w-md mx-auto">
              Interactive metallic cards with realtime 3D reflection. Tilt your cursor to catch the surface sheen.
            </p>
          </div>

          {/* Two Reflective Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 justify-items-center mb-16">
            {/* Founder 1: Adarsh Maurya */}
            <FadeIn delay={0.1} y={25} className="flex flex-col items-center w-full max-w-[340px]">
              <ReflectiveCard
                name="Adarsh Maurya"
                role="Co-Founder & Technology Lead"
                imageSrc="/adarsh-maurya.png"
                badge="Verified Co-Founder"
                status="Active"
                statusColor="#0284C7"
                idLabel="coBinary Studio"
                idValue="CB-AM-01"
                theme="light"
                tint="#ffffff"
                metalness={0.9}
                roughness={0.22}
                blurStrength={6}
                glare={0.4}
                shine={1}
                width={330}
                height={530}
                radius={22}
                enableTilt={true}
                tiltStrength={14}
              />

              {/* Minimalist Founder Credentials Card */}
              <div className="w-full mt-6 p-5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm text-left">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-7 h-7 rounded-lg bg-sky-50 border border-sky-200/60 flex items-center justify-center text-[#0284C7]">
                    <Terminal className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#0284C7] font-bold">
                    Engineering &amp; AI Systems
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Architecting high-concurrency web systems, AI pipelines, and performance platforms built for scalable enterprise conversion.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {['React & Next.js', 'AI Agents', 'Full-Stack Systems', 'Cloud Security'].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Founder 2: Utkarsh Srivastava */}
            <FadeIn delay={0.2} y={25} className="flex flex-col items-center w-full max-w-[340px]">
              <ReflectiveCard
                name="Utkarsh Srivastava"
                role="Co-Founder & Creative Director"
                imageSrc="/utkarsh-srivastava.png"
                badge="Verified Co-Founder"
                status="Active"
                statusColor="#EF4444"
                idLabel="coBinary Studio"
                idValue="CB-US-02"
                theme="light"
                tint="#ffffff"
                metalness={0.9}
                roughness={0.22}
                blurStrength={6}
                glare={0.4}
                shine={1}
                width={330}
                height={530}
                radius={22}
                enableTilt={true}
                tiltStrength={14}
              />

              {/* Minimalist Founder Credentials Card */}
              <div className="w-full mt-6 p-5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm text-left">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-7 h-7 rounded-lg bg-red-50 border border-red-200/60 flex items-center justify-center text-[#EF4444]">
                    <Palette className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#0284C7] font-bold">
                    3D Art &amp; Visual Direction
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Directing 3D spatial worldbuilding, photorealistic product renders, and kinetic typography that command audience attention.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {['Blender / C4D', 'Photoreal CGI', 'Spatial Motion', 'Brand Identity'].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. Studio Principles Section */}
      <section className="w-full relative z-10 py-16 sm:py-20 px-5 sm:px-8 md:px-12 bg-gradient-to-b from-white via-sky-50/25 to-white border-t border-sky-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0284C7] font-semibold flex items-center justify-center gap-1.5 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
              Operating Model
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 inline-block border-b-[3.5px] border-[#EF4444] pb-1">
              Direct Founder Accountability
            </h2>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              No account managers. No junior hand-offs. You partner directly with the founding architects executing your product.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeIn delay={0.08} duration={0.4} y={15}>
              <div className="rounded-2xl bg-white border border-slate-200/80 p-6 shadow-sm flex flex-col justify-between h-full">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-200/60 flex items-center justify-center text-[#0284C7] mb-4">
                    <Zap className="w-4 h-4 stroke-[2.2]" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    Zero Bureaucracy
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Decisions happen in real-time. Direct collaboration eliminates translation friction between strategy and code.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.16} duration={0.4} y={15}>
              <div className="rounded-2xl bg-white border border-slate-200/80 p-6 shadow-sm flex flex-col justify-between h-full">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-red-50 border border-red-200/60 flex items-center justify-center text-[#EF4444] mb-4">
                    <ShieldCheck className="w-4 h-4 stroke-[2.2]" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    Commercial Precision
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    We only design and engineer elements that tangibly advance valuation, user engagement, or operational throughput.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.24} duration={0.4} y={15}>
              <div className="rounded-2xl bg-white border border-slate-200/80 p-6 shadow-sm flex flex-col justify-between h-full">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-200/60 flex items-center justify-center text-[#0284C7] mb-4">
                    <Sparkles className="w-4 h-4 stroke-[2.2]" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    End-to-End Craft
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    From 3D motion shaders to production database pipelines, all assets are harmonized under one coherent vision.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* 5. Founders Quote */}
          <FadeIn delay={0.2} duration={0.5} y={15}>
            <div className="mt-14 sm:mt-18 py-10 px-6 sm:px-12 rounded-3xl bg-gradient-to-br from-sky-50/60 via-white to-sky-50/40 border border-sky-100 text-center relative overflow-hidden">
              <div className="max-w-2xl mx-auto relative z-10">
                <span className="text-3xl font-serif text-[#0284C7]/30 block mb-1">“</span>
                <blockquote className="text-base sm:text-lg font-medium text-slate-800 leading-relaxed tracking-tight mb-4">
                  The best digital platforms are engineered by compact, committed teams who obsess over every interaction and execution detail.
                </blockquote>
                <div className="flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
                  <cite className="not-italic text-xs font-mono uppercase tracking-widest text-[#0284C7] font-semibold">
                    Adarsh Maurya &amp; Utkarsh Srivastava — coBinary
                  </cite>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 6. Footer */}
      <Footer
        onNavigate={onNavigate}
        onOpenContact={() => onOpenContact()}
      />
    </div>
  );
};
