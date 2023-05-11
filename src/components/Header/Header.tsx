import './Header.scss';
import React, { useState } from 'react';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import LangSelect from '../LangSelect/LangSelect';
import LoginRowBtn from '../LoginRowBtn/LoginRowBtn';
import UserLogin from '../UserLogin/UserLogin';
import { useAppSelector } from '../../hook';

function Header() {
  const isAuth = useAppSelector((state) => state.userState.isAuth);
  console.log(isAuth);

  const [isScroll, setIsScroll] = useState(false);
  window.addEventListener('scroll', () => {
    setIsScroll(!!window.pageYOffset);
  });

  return (
    <div className={isScroll ? 'header _scroll' : 'header'}>
      <div className="row">
        <LangSelect />
        <nav className="navigation">
          <Button variant="text">
            <NavLink to="/">Main</NavLink>
          </Button>
          <Button variant="text">
            <NavLink to="/graphiql">Graphiql</NavLink>
          </Button>
        </nav>
      </div>
      {isAuth ? <UserLogin /> : <LoginRowBtn />}
    </div>
  );
}

export default Header;
