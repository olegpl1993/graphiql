import React from 'react';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../hook';
import './PageNotFound.scss';
import text from '../../language/Language';

function PageNotFound() {
  const lang = useAppSelector((state) => state.langState.lang);

  return (
    <div className="pageNotFound">
      <div>{text[lang].texterror}</div>
      <NavLink to="/">
        <Button variant="outlined">{text[lang].welcomePage}</Button>
      </NavLink>
    </div>
  );
}

export default PageNotFound;
