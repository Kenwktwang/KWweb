import { useEffect, useRef, useState } from 'react';
import { 
  Calculator, 
  AlertTriangle, 
  Activity, 
  Lightbulb, 
  BarChart3, 
  FileText,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const services = [
    {
      title: t('service.1.title'),
      description: t('service.1.desc'),
      icon: Calculator,
      highlight: false,
    },
    {
      title: t('service.2.title'),
      description: t('service.2.desc'),
      icon: AlertTriangle,
      highlight: false,
    },
    {
      title: t('service.3.title'),
      description: t('service.3.desc'),
      icon: Activity,
      highlight: false,
    },
    {
      title: t('service.4.title'),
      description: t('service.4.desc'),
      icon: Lightbulb,
      highlight: true,
    },
    {
      title: t('service.5.title'),
      description: t('service.5.desc'),
      icon: BarChart3,
      highlight: false,
    },
    {
      title: t('service.6.title'),
      description: t('service.6.desc'),
      icon: FileText,
      highlight: false,
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
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a962]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#c9a962]/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-premium relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c9a962]/10 border border-[#c9a962]/30 mb-6 transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#c9a962]" />
            <span className="text-sm text-[#c9a962] font-medium">{t('services.ourServices')}</span>
          </div>
          
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4 transition-all duration-600 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {t('services.title')} <span className="text-gradient-gold">{t('services.titleHighlight')}</span>
          </h2>
          
          <p
            className={`text-lg text-[#666] max-w-2xl mx-auto transition-all duration-600 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={service.title}
                className={`group relative transition-all duration-600 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`relative h-full p-6 sm:p-8 rounded-2xl border-2 transition-all duration-300 ${
                  service.highlight
                    ? 'bg-gradient-to-br from-[#c9a962]/10 to-[#c9a962]/5 border-[#c9a962]'
                    : 'bg-white border-[#e0e0e0] hover:border-[#c9a962]/50'
                } ${isHovered ? 'shadow-xl -translate-y-2' : 'shadow-md'}`}>
                  
                  {/* Highlight Badge */}
                  {service.highlight && (
                    <div className="absolute -top-3 right-4 px-3 py-1 rounded-full bg-[#c9a962] text-white text-xs font-semibold">
                      {t('service.mostPopular')}
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${
                    service.highlight
                      ? 'bg-[#c9a962]'
                      : 'bg-[#c9a962]/10 group-hover:bg-[#c9a962]'
                  }`}>
                    <Icon className={`w-7 h-7 transition-colors duration-300 ${
                      service.highlight
                        ? 'text-white'
                        : 'text-[#c9a962] group-hover:text-white'
                    }`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#c9a962] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[#666] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-[#c9a962]/10 to-transparent transition-opacity duration-300 pointer-events-none ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-600 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-[#666] mb-6">
            {t('services.readyToStart')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://var-calculator-production.up.railway.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              {t('services.tryCalculator')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a
              href="#pricing"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-secondary inline-flex items-center gap-2"
            >
              {t('services.viewPricing')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
