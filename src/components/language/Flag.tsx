import { useTranslation } from 'react-i18next';

import enFlag from './en.svg';
import esFlag from './es.svg';

function Flag():JSX.Element {
  const { i18n } = useTranslation();

  const detectSvg = ():string => {
    const { language } = i18n;
    let image;
    switch (language) {
      case 'en':
        image = enFlag;
        break;
      case 'es':
        image = esFlag;
        break;

      default:
        image = enFlag;
    }
    return image;
  };

  return <img style={{ maxWidth: '50%' }} src={detectSvg()} alt="flag" />;
}

export default Flag;
