import { useTranslation } from 'react-i18next';
import { DIRECTION_KEY, LANGUAGE_KEY } from '../core/languages/keys';

export const useLanguage = () => {
 const { i18n, t } = useTranslation();

 const changeLanguage = (defaultLang?: string) => {
  let lng = defaultLang;
  if (!lng) {
   lng = i18n.language === 'fa' ? 'en' : 'fa';
  }
  i18n.changeLanguage(lng);
  const direction = i18n.dir(lng);
  window.localStorage.setItem(LANGUAGE_KEY, lng as string);
  window.localStorage.setItem(DIRECTION_KEY, direction);
  window.document.body.dir = direction;
 };
 return { i18n, t, changeLanguage };
};
