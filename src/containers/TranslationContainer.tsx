import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import en from '../core/languages/en.json';
import fa from '../core/languages/fa.json';
import { LANGUAGE_KEY } from '../core/languages/keys';
import { FC, ReactNode, useLayoutEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';

const lng = window.localStorage.getItem(LANGUAGE_KEY)! || 'fa';

const resources = {
 en,
 fa,
} as const;

i18n.use(initReactI18next).init({
 resources,
 lng,
 fallbackLng: lng,
});

const TranslationContainer: FC<{
 children: ReactNode;
}> = ({ children }) => {
 const { i18n } = useLanguage();
 useLayoutEffect(() => {
  window.document.body.dir = i18n.dir(i18n.language);
 }, [i18n]);
 return <>{children}</>;
};

export default TranslationContainer;
