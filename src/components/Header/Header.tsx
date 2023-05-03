import './Header.scss';
import React from 'react';
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
        <button type="button" onClick={handleChangeLang}>
          Change lang
        </button>
        <button type="button">Sign In</button>
        <button type="button">Sign Up</button>
      </div>
    </div>
  );
}

export default Header;
