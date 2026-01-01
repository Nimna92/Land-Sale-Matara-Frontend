'use client';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLang = (lang: 'en' | 'si') => {
    i18n.changeLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', lang);
      document.documentElement.lang = lang;
    }
  };

  return (
    <div className="ml-3 flex gap-2">
      <button
        onClick={() => changeLang('en')}
        className={`px-3 py-1 rounded text-sm font-bold transition-colors ${
          i18n.language === 'en'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => changeLang('si')}
        className={`px-3 py-1 rounded text-sm font-bold transition-colors ${
          i18n.language === 'si'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }`}
      >
        සිං
      </button>
    </div>
  );
}
