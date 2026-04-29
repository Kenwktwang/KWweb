import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Lock, CheckCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mdayqbdw', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setFormState('success');
        form.reset();
      } else {
        setFormState('idle');
        alert(t('cta.submitError'));
      }
    } catch {
      setFormState('idle');
      alert(t('cta.submitError'));
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: t('cta.emailTitle'),
      desc: t('cta.emailDesc'),
      link: 'mailto:info@openminai.com',
      linkText: 'info@openminai.com',
    },
    {
      icon: Phone,
      title: t('cta.phoneTitle'),
      desc: t('cta.phoneDesc'),
      link: 'tel:+85265928971',
      linkText: '+852 6592 8971',
    },
    {
      icon: MapPin,
      title: t('cta.regionsTitle'),
      desc: t('cta.regionsDesc'),
      link: null,
      linkText: t('cta.regionsValue'),
    },
  ];

  const serviceOptions = [
    { value: '', label: t('cta.selectService') },
    { value: 'var-analysis', label: t('cta.serviceVar') },
    { value: 'risk-report', label: t('cta.serviceReport') },
    { value: 'stress-testing', label: t('cta.serviceStress') },
    { value: 'consulting', label: t('cta.serviceConsulting') },
    { value: 'enterprise', label: t('cta.serviceEnterprise') },
    { value: 'other', label: t('cta.serviceOther') },
  ];

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden bg-[#1a1a1a]"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #c9a962 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container-premium relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t('cta.ready')} <span className="text-gradient-gold">{t('cta.realRisk')}</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
        </div>

        {/* Contact Grid */}
        <div
          className={`grid lg:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{t('cta.contactMethods')}</h3>
              <p className="text-white/60">{t('cta.contactMethodsSubtitle')}</p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link || undefined}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#c9a962]/40 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-[#c9a962]/10 text-[#c9a962] group-hover:bg-[#c9a962]/20 transition-colors">
                    <method.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-semibold mb-0.5">{method.title}</h4>
                    <p className="text-white/50 text-sm mb-1">{method.desc}</p>
                    <span className="text-[#c9a962] text-sm font-medium">
                      {method.linkText}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Business Hours */}
            <div className="p-5 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-[#c9a962]" />
                <h4 className="text-white font-semibold">{t('cta.businessHoursTitle')}</h4>
              </div>
              <p className="text-white/60 text-sm leading-relaxed whitespace-pre-line">
                {t('cta.businessHoursDetail')}
              </p>
              <p className="text-white/40 text-sm mt-2 italic">
                {t('cta.businessHoursNote')}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
            {formState === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">{t('success.title')}</h3>
                <p className="text-[#666]">{t('success.desc')}</p>
                <button
                  onClick={() => setFormState('idle')}
                  className="mt-6 btn-primary"
                >
                  {t('cta.sendAnother')}
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-6">
                  {t('cta.sendInquiry')}
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="form-group">
                      <label htmlFor="name" className="block text-sm font-medium text-[#333] mb-1.5">
                        {t('cta.name')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder={t('cta.namePlaceholder')}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#c9a962] focus:ring-2 focus:ring-[#c9a962]/20 outline-none transition-all text-[#333] placeholder:text-gray-400"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone" className="block text-sm font-medium text-[#333] mb-1.5">
                        {t('cta.phone')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder={t('cta.phonePlaceholder')}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#c9a962] focus:ring-2 focus:ring-[#c9a962]/20 outline-none transition-all text-[#333] placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="block text-sm font-medium text-[#333] mb-1.5">
                      {t('cta.emailTitle')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder={t('cta.emailPlaceholder')}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#c9a962] focus:ring-2 focus:ring-[#c9a962]/20 outline-none transition-all text-[#333] placeholder:text-gray-400"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service" className="block text-sm font-medium text-[#333] mb-1.5">
                      {t('cta.serviceOfInterest')}
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#c9a962] focus:ring-2 focus:ring-[#c9a962]/20 outline-none transition-all text-[#333] bg-white"
                    >
                      {serviceOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="block text-sm font-medium text-[#333] mb-1.5">
                      {t('cta.message')} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder={t('cta.messagePlaceholder')}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#c9a962] focus:ring-2 focus:ring-[#c9a962]/20 outline-none transition-all text-[#333] placeholder:text-gray-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="btn-primary w-full flex items-center justify-center gap-2 py-3 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {formState === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        {t('cta.sending')}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        {t('cta.send')}
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-400 text-center flex items-center justify-center gap-1">
                    <Lock className="w-3 h-3" />
                    {t('cta.confidential')}
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
