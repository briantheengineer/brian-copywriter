import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import pt from './locales/en/pt/translation.json';
import en from './locales/en/translation.json';

i18n
  .use(initReactI18next) // conecta com react-i18next
  .init({
    resources: {
      pt: { translation: pt },
      en: { translation: en },
    },
    lng: 'pt', // idioma padrão
    fallbackLng: 'pt',
    interpolation: { escapeValue: false },
  });

export default i18n;
