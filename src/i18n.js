import React from 'react';
import i18next from 'i18next'
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector'

export default i18next
  .use(initReactI18next)
  .use(Backend)
  .use(LanguageDetector)
  .init({
    supportedLngs: ['pt', 'en'],
    fallbackLng: 'pt',
    debug: false,
    // Options for language detector
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    react: { useSuspense: false },
  })