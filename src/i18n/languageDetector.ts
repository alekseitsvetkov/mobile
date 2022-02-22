// import { findBestAvailableLanguage } from 'react-native-localize';
import i18n from 'i18n-js';

import {languagesResources} from '_app/i18n/languageConfig';

export const languageTags = Object.keys(languagesResources);

export const detectedLocale = i18n.currentLocale();

// export const detectedLocale = findBestAvailableLanguage(languageTags);
