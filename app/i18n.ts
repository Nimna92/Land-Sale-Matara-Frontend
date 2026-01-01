import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enCommon from '../public/locales/en/common.json';
import siCommon from '../public/locales/si/common.json';

const getInitialLanguage = () => {
  if (typeof window === 'undefined') return 'en';
  const stored = localStorage.getItem('lang');
  if (stored === 'en' || stored === 'si') return stored;
  const browser = navigator.language?.split('-')[0];
  return browser === 'si' ? 'si' : 'en';
};

const resources = {
  en: { common: enCommon },
  si: { common: siCommon },
};

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLanguage(),
  fallbackLng: 'en',
  ns: 'common',
  defaultNS: 'common',
  interpolation: { escapeValue: false },
});

if (typeof window !== 'undefined') {
  i18n.on('languageChanged', (lng) => {
    localStorage.setItem('lang', lng);
    document.documentElement.lang = lng;
  });
}

export default i18n;
