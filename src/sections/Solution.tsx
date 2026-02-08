import { useEffect, useRef, useState } from 'react';
import { Check, Lightbulb, BarChart3, Clock } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Solution = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const keyPoints = t('solution.keyPoints').split(',');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="solution"
      ref={sectionRef}
      className="section-padding bg-[#1a1a1a] relative overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #c9a962 1px, transparent 1px),
            linear-gradient(to bottom, #c9a962 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-[#c9a962]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-[#c9a962]/5 rounded-full blur-2xl" />

      <div className="container-premium relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Eyebrow */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c9a962]/10 border border-[#c9a962]/30 mb-6 transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <Lightbulb className="w-4 h-4 text-[#c9a962]" />
              <span className="text-sm text-[#c9a962] font-medium uppercase tracking-wider">{t('solution.theSolution')}</span>
            </div>

            {/* Headline */}
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-600 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {t('solution.whatIsVaR')} <span className="text-gradient-gold">VaR?</span>
            </h2>

            <h3
              className={`text-xl text-white/80 mb-6 transition-all duration-600 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {t('solution.subtitle')}
            </h3>

            {/* Body Text */}
            <div
              className={`space-y-4 mb-8 transition-all duration-600 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <p className="text-white/70 leading-relaxed">
                {t('solution.desc1')}
              </p>
              <p className="text-white/70 leading-relaxed">
                {t('solution.desc2')} <span className="text-[#c9a962] font-semibold">¥5,000</span> {t('solution.desc3')} 
                <span className="text-[#c9a962] font-semibold"> 95% {t('solution.confidenceLevel')}</span> {t('solution.desc4')}
              </p>
            </div>

            {/* Stats */}
            <div
              className={`grid grid-cols-3 gap-4 transition-all duration-600 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {[
                { value: '95%', label: t('solution.confidenceLevel'), icon: Check },
                { value: '¥5,406', label: t('solution.sampleVaR'), icon: BarChart3 },
                { value: '24h', label: t('solution.timeHorizon'), icon: Clock },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="text-center p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#c9a962]/30 transition-all duration-300 group"
                    style={{ animationDelay: `${500 + index * 100}ms` }}
                  >
                    <div className="flex justify-center mb-2">
                      <div className="w-10 h-10 rounded-lg bg-[#c9a962]/20 flex items-center justify-center group-hover:bg-[#c9a962]/30 transition-colors duration-300">
                        <Icon className="w-5 h-5 text-[#c9a962]" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-white/50">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Bell Curve Image */}
          <div
            className={`relative transition-all duration-800 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-12 scale-95'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/bell-curve.jpg"
                alt="VaR Bell Curve Visualization"
                className="w-full h-auto"
              />
              
              {/* Overlay Info */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#1a1a1a]/90 backdrop-blur-sm border border-[#c9a962]/30">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-white/50 mb-1">95% {t('solution.confidenceLevel')}</div>
                    <div className="text-lg font-bold text-[#c9a962]">VaR = ¥5,406</div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-[#c9a962]/20 flex items-center justify-center animate-pulse-glow">
                    <BarChart3 className="w-6 h-6 text-[#c9a962]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-[#c9a962] text-[#1a1a1a] font-semibold text-sm shadow-lg animate-float">
              Institutional Grade
            </div>
          </div>
        </div>

        {/* Key Points */}
        <div
          className={`mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-600 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {keyPoints.map((point, index) => (
            <div
              key={point}
              className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-[#c9a962]/30 transition-all duration-300"
              style={{ animationDelay: `${600 + index * 100}ms` }}
            >
              <div className="w-6 h-6 rounded-full bg-[#c9a962]/20 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-[#c9a962]" />
              </div>
              <span className="text-white/80 text-sm">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
