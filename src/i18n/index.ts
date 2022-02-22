import {initReactI18next} from 'react-i18next';
import i18n from 'i18next';

import {detectedLocale} from './languageDetector';
import {defaultLanguage, languagesResources} from './languageConfig';

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        debug: process.env.NODE_ENV === 'dev',
        resources: languagesResources,
        fallbackLng: defaultLanguage,
        lng: detectedLocale ? detectedLocale.languageTag : 'en',

        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
