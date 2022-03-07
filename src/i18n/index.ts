import i18n from 'i18n-js';
import * as Localization from 'expo-localization';

import ru from './locales/ru.json';
import en from './locales/en.json';

i18n.translations = {
    en,
    ru,
};

i18n.locale = Localization.locale;
i18n.fallbacks = true;
