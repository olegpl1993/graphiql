import React from 'react';
import { useAppSelector } from '../../hook';
import './PageNotFound.scss';
import text from '../../language/Language';

function PageNotFound() {
  const lang = useAppSelector((state) => state.langState.lang);

  return <div className="pageNotFound">{text[lang].texterror}</div>;
}

export default PageNotFound;
