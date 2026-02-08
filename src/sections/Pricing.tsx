import { useEffect, useRef, useState } from 'react';
import { Check, Sparkles, PieChart, Video, HeadphonesIcon } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Pricing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const plans = [
    {
      name: t('plan.starter.name'),
      price: 'HKD 250',
      stockRange: t('plan.starter.stockRange'),
      description: t('plan.starter.desc'),
      icon: PieChart,
      features: [
        t('plan.feature.var'),
        t('plan.feature.cvar'),
        t('plan.feature.metrics'),
        t('plan.feature.pdf'),
      ],
      cta: t('plan.starter.cta'),
      highlighted: false,
      hasWalkthrough: false,
    },
    {
      name: t('plan.professional.name'),
      price: 'HKD 590',
      stockRange: t('plan.professional.stockRange'),
      description: t('plan.professional.desc'),
      icon: Video,
      features: [
        t('plan.feature.var'),
        t('plan.feature.cvar'),
        t('plan.feature.metrics'),
        t('plan.feature.pdf'),
        t('plan.feature.stress'),
        t('plan.feature.tips'),
        t('plan.feature.walkthrough'),
      ],
      cta: t('plan.professional.cta'),
      highlighted: true,
      hasWalkthrough: true,
    },
    {
      name: t('plan.enterprise.name'),
      price: 'HKD 1,000',
      stockRange: t('plan.enterprise.stockRange'),
      description: t('plan.enterprise.desc'),
      icon: HeadphonesIcon,
      features: [
        t('plan.feature.var'),
        t('plan.feature.cvar'),
        t('plan.feature.metrics'),
        t('plan.feature.pdf'),
        t('plan.feature.advanced'),
        t('plan.feature.plan'),
        t('plan.feature.multi'),
        t('plan.feature.walkthrough'),
        t('plan.feature.support'),
      ],
      cta: t('plan.enterprise.cta'),
      highlighted: false,
      hasWalkthrough: true,
    },
  ];

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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [t]);

  const scrollToCTA = () => {
    document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="section-padding bg-[#1a1a1a] relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c9a962]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#c9a962]/5 rounded-full blur-2xl" />
      </div>

      <div className="container-premium relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c9a962]/10 border border-[#c9a962]/30 mb-6 transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#c9a962]" />
            <span className="text-sm text-[#c9a962] font-medium">{t('pricing.pricing')}</span>
          </div>
          
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-600 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {t('pricing.title')} <span className="text-gradient-gold">{t('pricing.titleHighlight')}</span> {t('pricing.title2')}
          </h2>
          
          <p
            className={`text-lg text-white/60 max-w-2xl mx-auto transition-all duration-600 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {t('pricing.subtitle')}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            
            return (
              <div
                key={plan.name}
                className={`relative transition-all duration-600 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ 
                  transitionDelay: `${300 + index * 150}ms`,
                }}
              >
                {/* Popular Badge */}
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#c9a962] text-[#1a1a1a] text-sm font-bold z-10 animate-pulse-glow">
                    {t('plan.professional.mostPopular')}
                  </div>
                )}

                <div className={`h-full rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-gradient-to-b from-[#c9a962]/20 to-[#c9a962]/5 border-2 border-[#c9a962] shadow-xl shadow-[#c9a962]/10'
                    : 'bg-white/5 border border-white/10 hover:border-[#c9a962]/30 hover:bg-white/10'
                }`}>
                  {/* Plan Header */}
                  <div className="text-center mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                      plan.highlighted ? 'bg-[#c9a962]' : 'bg-white/10'
                    }`}>
                      <Icon className={`w-6 h-6 ${plan.highlighted ? 'text-[#1a1a1a]' : 'text-[#c9a962]'}`} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 mb-2">
                      <span className="text-[#c9a962] text-sm font-medium">{plan.stockRange}</span>
                    </div>
                    <p className="text-white/50 text-sm">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className={`text-3xl font-bold ${plan.highlighted ? 'text-[#c9a962]' : 'text-white'}`}>
                        {plan.price}
                      </span>
                    </div>
                    <p className="text-white/40 text-xs mt-1">{t('pricing.oneTimeFee')}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          plan.highlighted ? 'bg-[#c9a962]/20' : 'bg-white/10'
                        }`}>
                          <Check className={`w-3 h-3 ${plan.highlighted ? 'text-[#c9a962]' : 'text-white/70'}`} />
                        </div>
                        <span className="text-white/70 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Walkthrough Badge - Only for Professional and Enterprise */}
                  {plan.hasWalkthrough && (
                    <div className="mb-6 p-3 rounded-lg bg-[#c9a962]/10 border border-[#c9a962]/30">
                      <div className="flex items-center gap-2">
                        <Video className="w-4 h-4 text-[#c9a962]" />
                        <span className="text-[#c9a962] text-sm font-medium">{t('pricing.included')}</span>
                      </div>
                    </div>
                  )}

                  {/* CTA Button */}
                  <button
                    onClick={scrollToCTA}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.highlighted
                        ? 'bg-[#c9a962] text-[#1a1a1a] hover:bg-[#e8d5a3] hover:shadow-lg hover:shadow-[#c9a962]/30'
                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-[#c9a962]/50'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div
          className={`text-center mt-12 transition-all duration-600 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-white/40 text-sm">
            {t('pricing.bottomNote')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
