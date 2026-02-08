import { useLanguage } from '@/context/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-white/90 rounded-lg p-1 shadow-sm">
      <Globe className="w-4 h-4 text-[#c9a962] ml-1" />
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1.5 rounded-md text-sm font-semibold transition-all duration-300 ${
          language === 'en'
            ? 'bg-[#c9a962] text-black'
            : 'text-[#333] hover:bg-[#f0f0f0]'
        }`}
      >
        EN
      </button>
      <span className="text-[#ccc]">|</span>
      <button
        onClick={() => setLanguage('zh')}
        className={`px-3 py-1.5 rounded-md text-sm font-semibold transition-all duration-300 ${
          language === 'zh'
            ? 'bg-[#c9a962] text-black'
            : 'text-[#333] hover:bg-[#f0f0f0]'
        }`}
      >
        繁
      </button>
    </div>
  );
};

export default LanguageSwitcher;
