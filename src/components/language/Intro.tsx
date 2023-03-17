import React from 'react';
import { useTranslation } from 'react-i18next';

function Intro():JSX.Element {
  const { t } = useTranslation();

  return <h1>{t('intro-title')}</h1>;
}

export default Intro;
