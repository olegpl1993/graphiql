import './Header.scss';
import React, { useEffect, useState } from 'react';
import LangSelect from '../LangSelect/LangSelect';
import LoginRowBtn from '../LoginRowBtn/LoginRowBtn';
import UserLogin from '../UserLogin/UserLogin';
import { useAppSelector } from '../../hook';
import graphqlLogo from '../../assets/graphqlLogo.svg';
import RouteBtn from '../RouteBtn/RouteBtn';

function Header() {
  const isAuth = useAppSelector((state) => state.userState.isAuth);

  const [isScroll, setIsScroll] = useState(false);
  const scrollEvent = () => {
    setIsScroll(!!window.pageYOffset);
  };
  useEffect(() => {
    window.addEventListener('scroll', scrollEvent);
    return () => {
      window.removeEventListener('scroll', scrollEvent);
    };
  }, []);

  return (
    <div className={isScroll ? 'header _scroll' : 'header'}>
      <div className="leftBox">
        <div className="logo">
          <img src={graphqlLogo} alt="ava" height={50} />
          <span className="logoText">GraphiQL</span>
        </div>
        {isAuth && (
          <nav className="navigation">
            <RouteBtn />
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
