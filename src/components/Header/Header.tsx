import './Header.scss';
import React from 'react';
import { Button } from '@mui/material';
// import { LinkProps } from '@mui/material/Link';
import { NavLink } from 'react-router-dom';

function Header() {
  const handleChangeLang = () => {
    console.log('ru');
  };

  return (
    <div className="header">
      <div className="page">graphiql-app</div>
      <nav className="navigation">
        <NavLink to="/">Main</NavLink>
        <NavLink to="/graphiql">Graphiql</NavLink>
      </nav>
      <div className="btnRow">
        <Button variant="contained" type="button" onClick={handleChangeLang}>
          Change lang
        </Button>
        <Button variant="contained" color="secondary" type="button">
          Sign In
        </Button>
        <Button variant="contained" color="success" type="button">
          Sign Up
        </Button>
      </div>
    </div>
  );
}

export default Header;
