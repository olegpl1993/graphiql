import './RouteBtn.scss';
import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../hook';
import text from '../../language/Language';

function RouteBtn() {
  const lang = useAppSelector((state) => state.langState.lang);
  const [isGraphiqlPath, setIsGraphiqlPath] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const { pathname } = location;
    setIsGraphiqlPath(pathname === '/graphiql');
  }, [location]);

  return (
    <nav className="routeBtn">
      {isGraphiqlPath ? (
        <NavLink to="/">
          <Button variant="outlined">Welcome Page</Button>
        </NavLink>
      ) : (
        <NavLink to="/graphiql">
          <Button variant="outlined">{text[lang].graphEditor}</Button>
        </NavLink>
      )}
    </nav>
  );
}

export default RouteBtn;
