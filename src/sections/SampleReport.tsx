import { useEffect, useRef, useState } from 'react';
import { FileText, TrendingDown, TrendingUp, AlertCircle, PieChart, BarChart3, Shield, Activity, Lightbulb } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const reportData = {
  portfolioValue: 'HKD 531,525',
  dailyVaR: 'HKD 5,406',
  annualizedReturn: '11.59%',
  sharpeRatio: '0.064',
  cvar: 'HKD 8,865',
};

const holdings = [
  { asset: 'GOLD', value: 'HKD 161,265', weight: '30.34%', risk: '0.08%', riskHigh: false },
  { asset: '0005.HK', value: 'HKD 139,897', weight: '26.32%', risk: '0.21%', riskHigh: true },
  { asset: '0728.HK', value: 'HKD 70,055', weight: '13.18%', risk: '0.10%', riskHigh: false },
];

const SampleReport = () => {
  const [isVisible, setIsVisible] = useState(false);
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="report"
      ref={sectionRef}
      className="section-padding bg-[#f5f5f5] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #1a1a1a 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }} />
      </div>

      <div className="container-premium relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c9a962]/10 border border-[#c9a962]/30 mb-6 transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <FileText className="w-4 h-4 text-[#c9a962]" />
            <span className="text-sm text-[#c9a962] font-medium">{t('report.sampleReport')}</span>
          </div>
          
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4 transition-all duration-600 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {t('report.title')} <span className="text-gradient-gold">{t('report.titleHighlight')}</span>
          </h2>
          
          <p
            className={`text-lg text-[#666] max-w-2xl mx-auto transition-all duration-600 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {t('report.subtitle')}
          </p>
        </div>

        {/* Report Preview */}
        <div className="relative max-w-4xl mx-auto">
          {/* Report Card */}
          <div
            className={`relative bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#c9a962] to-[#9a7b3d] px-6 py-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl">Portfolio Risk Assessment</h3>
                    <p className="text-white/70 text-sm">VaR Analysis Report</p>
                  </div>
                </div>
                <div className="text-right hidden sm:block">
                  <div className="text-white/70 text-xs">Generated</div>
                  <div className="text-white text-sm">Feb 7, 2026</div>
                </div>
              </div>
            </div>

            {/* Report Content */}
            <div className="p-6">
              {/* Key Metrics Grid - Horizontal Layout */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-[#f8f8f8] border-l-4 border-[#c9a962]">
                  <div className="flex items-center gap-2 mb-2">
                    <PieChart className="w-4 h-4 text-[#c9a962]" />
                    <span className="text-xs text-[#666]">{t('report.portfolioValue')}</span>
                  </div>
                  <div className="text-xl font-bold text-[#1a1a1a]">{reportData.portfolioValue}</div>
                </div>
                
                <div className="p-4 rounded-xl bg-[#f8f8f8] border-l-4 border-red-400">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingDown className="w-4 h-4 text-red-400" />
                    <span className="text-xs text-[#666]">{t('report.dailyVaR')}</span>
                  </div>
                  <div className="text-xl font-bold text-red-500">{reportData.dailyVaR}</div>
                </div>
                
                <div className="p-4 rounded-xl bg-[#f8f8f8] border-l-4 border-green-500">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-xs text-[#666]">{t('report.annualizedReturn')}</span>
                  </div>
                  <div className="text-xl font-bold text-green-600">{reportData.annualizedReturn}</div>
                </div>
                
                <div className="p-4 rounded-xl bg-[#f8f8f8] border-l-4 border-[#c9a962]">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="w-4 h-4 text-[#c9a962]" />
                    <span className="text-xs text-[#666]">{t('report.sharpeRatio')}</span>
                  </div>
                  <div className="text-xl font-bold text-[#1a1a1a]">{reportData.sharpeRatio}</div>
                </div>
              </div>

              {/* CVaR Section */}
              <div className="p-5 rounded-xl bg-red-50 border border-red-100 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <AlertCircle className="w-5 h-5 text-red-500" />
                      <span className="text-base font-semibold text-red-700">{t('report.cvar')}</span>
                    </div>
                    <p className="text-sm text-red-600/70">{t('report.cvarDesc')}</p>
                  </div>
                  <div className="text-3xl font-bold text-red-600">{reportData.cvar}</div>
                </div>
              </div>

              {/* Top Holdings Table */}
              <div>
                <h4 className="text-base font-semibold text-[#1a1a1a] mb-4">{t('report.topHoldings')}</h4>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-[#e0e0e0]">
                        <th className="text-left py-3 text-[#666] font-medium text-sm">{t('report.asset')}</th>
                        <th className="text-right py-3 text-[#666] font-medium text-sm">{t('report.value')}</th>
                        <th className="text-right py-3 text-[#666] font-medium text-sm">{t('report.weight')}</th>
                        <th className="text-right py-3 text-[#666] font-medium text-sm">{t('report.riskContribution')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {holdings.map((row) => (
                        <tr key={row.asset} className="border-b border-[#f0f0f0] hover:bg-[#f9f9f9] transition-colors">
                          <td className="py-3 font-semibold text-[#1a1a1a]">{row.asset}</td>
                          <td className="py-3 text-right text-[#666]">{row.value}</td>
                          <td className="py-3 text-right text-[#666]">{row.weight}</td>
                          <td className="py-3 text-right">
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                              row.riskHigh ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                            }`}>
                              {row.risk}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-[#f9f9f9] border-t border-[#e0e0e0]">
              <div className="flex items-center justify-between">
                <p className="text-xs text-[#999]">
                  {t('report.disclaimer')}
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-[#666]">{t('report.liveData')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Feature Cards */}
          <div className="hidden lg:block">
            {/* Left Side Cards */}
            <div
              className={`absolute top-8 -left-32 p-4 rounded-xl bg-white shadow-lg border border-[#c9a962]/20 max-w-[160px] transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <div className="w-10 h-10 rounded-lg bg-[#c9a962]/10 flex items-center justify-center mb-2">
                <BarChart3 className="w-5 h-5 text-[#c9a962]" />
              </div>
              <div className="text-sm font-semibold text-[#1a1a1a]">{t('report.calcMethods')}</div>
              <div className="text-xs text-[#666] mt-1">{t('report.calcMethodsDesc')}</div>
            </div>

            <div
              className={`absolute bottom-24 -left-28 p-4 rounded-xl bg-white shadow-lg border border-[#c9a962]/20 max-w-[150px] transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              <div className="w-10 h-10 rounded-lg bg-[#c9a962]/10 flex items-center justify-center mb-2">
                <Lightbulb className="w-5 h-5 text-[#c9a962]" />
              </div>
              <div className="text-sm font-semibold text-[#1a1a1a]">{t('report.riskTips')}</div>
              <div className="text-xs text-[#666] mt-1">{t('report.riskTipsDesc')}</div>
            </div>

            {/* Right Side Card */}
            <div
              className={`absolute top-1/2 -right-32 -translate-y-1/2 p-4 rounded-xl bg-white shadow-lg border border-[#c9a962]/20 max-w-[160px] transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
              style={{ transitionDelay: '700ms' }}
            >
              <div className="w-10 h-10 rounded-lg bg-[#c9a962]/10 flex items-center justify-center mb-2">
                <Activity className="w-5 h-5 text-[#c9a962]" />
              </div>
              <div className="text-sm font-semibold text-[#1a1a1a]">{t('report.tailRisk')}</div>
              <div className="text-xs text-[#666] mt-1">{t('report.tailRiskDesc')}</div>
            </div>
          </div>

          {/* Mobile Feature Cards */}
          <div className="lg:hidden mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: t('report.calcMethods'), desc: t('report.calcMethodsDesc'), icon: BarChart3 },
              { title: t('report.tailRisk'), desc: t('report.tailRiskDesc'), icon: Activity },
              { title: t('report.riskTips'), desc: t('report.riskTipsDesc'), icon: Lightbulb },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`flex items-center gap-3 p-4 rounded-xl bg-white shadow-md border border-[#c9a962]/20 transition-all duration-600 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-full bg-[#c9a962]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#c9a962]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#1a1a1a]">{item.title}</div>
                    <div className="text-xs text-[#666]">{item.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SampleReport;
