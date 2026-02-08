import { useEffect, useRef, useState } from 'react';
import { TrendingUp, PieChart, AlertTriangle, Brain, EyeOff, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Problem = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const mistakes = [
    {
      number: '01',
      title: t('mistake.1.title'),
      description: t('mistake.1.desc'),
      icon: TrendingUp,
      color: 'from-red-500 to-orange-500',
    },
    {
      number: '02',
      title: t('mistake.2.title'),
      description: t('mistake.2.desc'),
      icon: PieChart,
      color: 'from-orange-500 to-amber-500',
    },
    {
      number: '03',
      title: t('mistake.3.title'),
      description: t('mistake.3.desc'),
      icon: AlertTriangle,
      color: 'from-amber-500 to-yellow-500',
    },
    {
      number: '04',
      title: t('mistake.4.title'),
      description: t('mistake.4.desc'),
      icon: Brain,
      color: 'from-yellow-500 to-lime-500',
    },
    {
      number: '05',
      title: t('mistake.5.title'),
      description: t('mistake.5.desc'),
      icon: EyeOff,
      color: 'from-lime-500 to-green-500',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsTitleVisible(true);
            mistakes.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, 400 + index * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '-50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [t]);

  return (
    <section
      id="problem"
      ref={sectionRef}
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #c9a962 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container-premium relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 mb-6 transition-all duration-600 ${
              isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <X className="w-4 h-4 text-red-500" />
            <span className="text-sm text-red-600 font-medium">{t('problem.theProblem')}</span>
          </div>
          
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4 transition-all duration-600 delay-100 ${
              isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {t('problem.title1')} <span className="text-gradient-gold">{t('problem.title2')}</span> {t('problem.title3')}
          </h2>
          
          <p
            className={`text-lg text-[#666] max-w-2xl mx-auto transition-all duration-600 delay-200 ${
              isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {t('problem.subtitle')}
          </p>
        </div>

        {/* Mistake Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {mistakes.map((mistake, index) => {
            const Icon = mistake.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <div
                key={mistake.number}
                className={`group relative transition-all duration-600 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{
                  marginTop: index === 2 ? '2rem' : index === 1 || index === 3 ? '1rem' : '0',
                }}
              >
                <div className="card-premium p-6 sm:p-8 h-full relative overflow-hidden">
                  {/* Number Badge */}
                  <div className="absolute -top-4 -left-2 w-12 h-12 rounded-full bg-gradient-to-br from-[#c9a962] to-[#9a7b3d] flex items-center justify-center text-white font-bold text-sm shadow-lg z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                    {mistake.number}
                  </div>

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${mistake.color} flex items-center justify-center mb-5 mt-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#c9a962] transition-colors duration-300">
                    {mistake.title}
                  </h3>
                  <p className="text-[#666] leading-relaxed">
                    {mistake.description}
                  </p>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#c9a962]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-600 delay-700 ${
            isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-[#666] mb-4">
            {t('problem.soundFamiliar')}
          </p>
          <a
            href="#solution"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#solution')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-[#c9a962] font-semibold hover:underline"
          >
            {t('problem.discoverSolution')}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Problem;
