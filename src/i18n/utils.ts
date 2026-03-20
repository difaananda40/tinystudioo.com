import { getRelativeLocaleUrl } from "astro:i18n";
import { translations, defaultLang } from "i18n/translations";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in translations) return lang as keyof typeof translations;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof translations) {
  return function t(key: keyof (typeof translations)[typeof defaultLang]) {
    return translations[lang][key] || translations[defaultLang][key];
  };
}

export function useTranslatedPath(lang: keyof typeof translations) {
  return function translatePath(path: string, l: string = lang) {
    return getRelativeLocaleUrl(l, path);
  };
}

export function cleanSlug(slug: string) {
  return slug.split("/")[0];
}
