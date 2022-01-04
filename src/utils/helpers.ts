import { detectedLocale } from '_app/i18n/languageDetector';

export const wait = (timeout: number) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

// TODO: type locale
export const compareLocale = (languageTag: string, locale: any) => {
  if (!locale) {
    return false;
  }

  return languageTag === locale.toLowerCase();
};

export const languageTag = detectedLocale?.languageTag;

// TODO: refactor and type
export const withLocalization = (fieldName: string, field: string, locale, localizations) => {
  const hasLocalization = languageTag
    ? localizations
      ? localizations.find(l => l.locale === languageTag.toUpperCase())
      : null
    : null;

  const sameLocale = languageTag ? compareLocale(languageTag, locale) : null;
  if (!hasLocalization || sameLocale) {
    return field;
  }

  return hasLocalization[`${fieldName}`];
};
