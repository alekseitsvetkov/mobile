// import { findBestAvailableLanguage } from 'react-native-localize';
import {languagesResources} from "_app/i18n/languageConfig";
import i18n from "i18n-js";

export const languageTags = Object.keys(languagesResources);

export const detectedLocale = i18n.currentLocale();

// export const detectedLocale = findBestAvailableLanguage(languageTags);
