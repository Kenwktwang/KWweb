import { TrendingUp, Mail, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const footerLinks = {
    services: [
      { name: t('service.1.title'), href: '#services' },
      { name: t('service.2.title'), href: '#services' },
      { name: t('service.3.title'), href: '#services' },
      { name: t('service.6.title'), href: '#report' },
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: t('nav.howItWorks'), href: '#solution' },
      { name: t('nav.pricing'), href: '#pricing' },
      { name: 'Blog', href: '#' },
    ],
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#1a1a1a] border-t border-white/10">
      <div className="container-premium py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a
              href="#"
              className="flex items-center gap-2 mb-4"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="p-2 rounded-lg bg-[#c9a962]/20">
                <TrendingUp className="w-5 h-5 text-[#c9a962]" />
              </div>
              <span className="text-lg font-semibold font-['Playfair_Display'] text-white">
                KW<span className="text-[#c9a962]">-Consultancy</span>
              </span>
            </a>
            <p className="text-white/60 text-sm mb-6 leading-relaxed">
              {t('footer.tagline')}
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-[#c9a962] hover:text-[#1a1a1a] transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/60 hover:text-[#c9a962] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/60 hover:text-[#c9a962] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#c9a962] mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:kenktwang@gmail.com"
                  className="text-white/60 hover:text-[#c9a962] transition-colors duration-300 text-sm"
                >
                  kenktwang@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#c9a962] mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm">
                  Hong Kong
                </span>
              </li>
            </ul>

            {/* Certification Badge */}
            <div className="mt-6 p-3 rounded-lg bg-white/5 border border-white/10">
              <div className="text-xs text-white/40 mb-1">{t('footer.certified')}</div>
              <div className="text-sm text-white font-medium">{t('footer.frm')}</div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            {t('footer.copyright').replace('{year}', currentYear.toString())}
          </p>
          <div className="flex items-center gap-6">
            <button className="text-white/40 hover:text-[#c9a962] transition-colors duration-300 text-sm">
              {t('footer.privacy')}
            </button>
            <button className="text-white/40 hover:text-[#c9a962] transition-colors duration-300 text-sm">
              {t('footer.terms')}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
