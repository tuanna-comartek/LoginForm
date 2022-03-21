// src/i18n.js
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    ns: ['notification'],
    defaultNS: ['notification'],
    detection: {
      order: ['cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      lookupCookie: 'win-solution-supper-admin-language',
      lookupLocalStorage: 'win-solution-supper-admin-language',
      lookupSessionStorage: 'win-solution-supper-admin-language',
      caches: ['localStorage', 'cookie'],
    },
  });

export default i18n;
