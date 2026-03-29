import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown, Shield, Users, Award } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a1a1a]"
    >
      {/* Background Video with Overlay */}
      <div className="absolute inset-0">
        <video
          src="/images/Hero-bg-moving.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/50 via-transparent to-[#1a1a1a]/80" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#c9a962] rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
              opacity: 0.3 + Math.random() * 0.4,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container-premium pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Award className="w-4 h-4 text-[#c9a962]" />
            <span className="text-sm text-white/90">{t('hero.trustedBy')}</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span
              className={`block transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {t('hero.headline1')}
            </span>
            <span
              className={`block transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="text-gradient-gold">{t('hero.headline2')}</span>
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className={`text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {t('hero.subheadline')}
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <button
              onClick={() => scrollToSection('#cta')}
              className="btn-primary flex items-center gap-2 text-lg group"
            >
              {t('hero.ctaPrimary')}
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollToSection('#solution')}
              className="btn-secondary flex items-center gap-2 text-lg"
            >
              {t('hero.ctaSecondary')}
            </button>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-3 gap-8 max-w-lg mx-auto transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Shield className="w-6 h-6 text-[#c9a962]" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white">95%</div>
              <div className="text-xs sm:text-sm text-white/60">{t('hero.confidence')}</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="w-6 h-6 text-[#c9a962]" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white">2K+</div>
              <div className="text-xs sm:text-sm text-white/60">{t('hero.users')}</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Award className="w-6 h-6 text-[#c9a962]" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white">FRM</div>
              <div className="text-xs sm:text-sm text-white/60">{t('hero.certified')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <button
          onClick={() => scrollToSection('#problem')}
          className="flex flex-col items-center gap-2 text-white/60 hover:text-[#c9a962] transition-colors duration-300"
        >
          <span className="text-sm">{t('hero.scrollToExplore')}</span>
          <ChevronDown className="w-5 h-5 animate-bounce-subtle" />
        </button>
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-[#c9a962]/50 to-transparent" />
      <div className="absolute bottom-1/4 right-0 w-32 h-px bg-gradient-to-l from-transparent via-[#c9a962]/50 to-transparent" />
    </section>
  );
};

export default Hero;
