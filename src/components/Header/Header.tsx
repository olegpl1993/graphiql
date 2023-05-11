import './Header.scss';
import React, { useState } from 'react';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import LangSelect from '../LangSelect/LangSelect';
import LoginRowBtn from '../LoginRowBtn/LoginRowBtn';
import UserLogin from '../UserLogin/UserLogin';
import { useAppSelector } from '../../hook';
import graphqlLogo from '../../assets/graphqlLogo.svg';

function Header() {
  const isAuth = useAppSelector((state) => state.userState.isAuth);

  const [isScroll, setIsScroll] = useState(false);
  window.addEventListener('scroll', () => {
    setIsScroll(!!window.pageYOffset);
  });

  return (
    <div className={isScroll ? 'header _scroll' : 'header'}>
      <div className="leftBox">
        <NavLink to="/">
          <div className="logo">
            <img src={graphqlLogo} alt="ava" height={50} />
            <span className="logoText">GraphiQL</span>
          </div>
        </NavLink>
        {isAuth && (
          <nav className="navigation">
            <NavLink to="/graphiql">
              <Button variant="outlined">Code editor</Button>
            </NavLink>
          </nav>
        )}
      </div>
      <div className="rightBox">
        {isAuth ? <UserLogin /> : <LoginRowBtn />}
        <LangSelect />
      </div>
    </div>
  );
}

export default Header;
