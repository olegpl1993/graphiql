import React from 'react';
import { useAppSelector } from '../../hook';
import './PageNotFound.scss';

function PageNotFound() {
  const lang = useAppSelector((state) => state.langState.lang);
    interface TextKey {
      texterror: string;
    }
    interface Text {
    [key: string]: TextKey;
  }
    const text: Text = {
      en: {
        texterror: 'Error 404: Page not found',
      },
      ru: {
        texterror: 'Ошибка 404 - Страница Не Найдена',
      }
    };
    return <div className="pageNotFound">{text[lang].texterror}</div>;
}

export default PageNotFound;
