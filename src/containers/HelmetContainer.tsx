import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../hooks/useLanguage';
import { HEADER_TITLE } from '../core/languages/keys';

interface Props {
 title: string;
 children: React.ReactNode;
}

const HelmetContainer: React.FC<Props> = ({ children, title }) => {
 const { t } = useLanguage();
 return (
  <>
   <Helmet>
    <title>
     {t(HEADER_TITLE)} |‌ {t(title)}
    </title>
   </Helmet>
   {children}
  </>
 );
};

export default HelmetContainer;
