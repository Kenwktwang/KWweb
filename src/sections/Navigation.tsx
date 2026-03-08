import { useState, useEffect } from 'react';
import { Menu, X, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.howItWorks'), href: '#solution' },
    { name: t('nav.sampleReport'), href: '#report' },
    { name: t('nav.blog'), href: '#blog' },
    { name: t('nav.pricing'), href: '#pricing' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-premium">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className={`p-2 rounded-lg transition-all duration-300 ${
              isScrolled ? 'bg-[#1a1a1a]' : 'bg-white/10'
            }`}>
              <TrendingUp className={`w-6 h-6 transition-colors duration-300 ${
                isScrolled ? 'text-[#c9a962]' : 'text-[#c9a962]'
              }`} />
            </div>
            <span className={`text-xl font-semibold font-['Playfair_Display'] transition-colors duration-300 ${
              isScrolled ? 'text-[#1a1a1a]' : 'text-white'
            }`}>
              KW<span className="text-[#c9a962]">-Consultancy</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium underline-animation transition-colors duration-300 ${
                  isScrolled
                    ? 'text-[#333] hover:text-[#c9a962]'
                    : 'text-white/90 hover:text-[#c9a962]'
                }`}
              >
                {link.name}
              </button>
            ))}
            
            {/* Language Switcher */}
            <div className={`px-3 py-1 rounded-lg ${isScrolled ? 'bg-[#f5f5f5]' : 'bg-white/10'}`}>
              <LanguageSwitcher />
            </div>
            
            <button
              onClick={() => scrollToSection('#cta')}
              className="btn-primary text-sm py-3 px-6"
            >
              {t('nav.getFreeAnalysis')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-[#1a1a1a]' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-[#1a1a1a]' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-[500px] mt-4' : 'max-h-0'
          }`}
        >
          <div className={`rounded-lg p-4 space-y-3 ${
            isScrolled ? 'bg-white shadow-lg' : 'glass-dark'
          }`}>
            {navLinks.map((link, index) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`block w-full text-left py-2 px-3 rounded-lg transition-all duration-300 ${
                  isScrolled
                    ? 'text-[#333] hover:bg-[#f5f5f5] hover:text-[#c9a962]'
                    : 'text-white hover:bg-white/10 hover:text-[#c9a962]'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.name}
              </button>
            ))}
            
            {/* Mobile Language Switcher */}
            <div className={`py-2 px-3 rounded-lg ${isScrolled ? 'bg-[#f5f5f5]' : 'bg-white/10'}`}>
              <LanguageSwitcher />
            </div>
            
            <button
              onClick={() => scrollToSection('#cta')}
              className="btn-primary w-full text-center mt-4"
            >
              {t('nav.getFreeAnalysis')}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
