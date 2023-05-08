import './Header.scss';
import React, { useState } from 'react';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../hook';
import Modal from '../Modal/Modal';
import Signin from '../Signin/Signin';
import Signup from '../Signup/Signup';
import LangSelect from '../LangSelect/LangSelect';

function Header() {
  // lang -------------------------------------------------------------------
  const lang = useAppSelector((state) => state.langState.lang);
  interface TextKey {
    signin: string;
    signup: string;
  }
  interface Text {
    [key: string]: TextKey;
  }
  const text: Text = {
    en: {
      signin: 'sign in',
      signup: 'sign up',
    },
    ru: {
      signin: 'войти',
      signup: 'регистрация',
    },
  };
  // ----------------------------------------------------------------------------

  const [scrollPos, setScrollPos] = useState(window.pageYOffset);
  window.addEventListener('scroll', () => {
    setScrollPos(window.pageYOffset);
  });

  const [signinModalActiv, setSigninModalActiv] = useState(false);
  const [signupModalActiv, setSignupModalActiv] = useState(false);

  return (
    <>
      {signinModalActiv && (
        <Modal modalActiv={signinModalActiv} setModalActiv={setSigninModalActiv}>
          <Signin />
        </Modal>
      )}
      {signupModalActiv && (
        <Modal modalActiv={signupModalActiv} setModalActiv={setSignupModalActiv}>
          <Signup />
        </Modal>
      )}
      <div className={scrollPos ? 'header _scroll' : 'header'}>
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
        <div className="row">
          <Button variant="contained" onClick={() => setSigninModalActiv(true)}>
            {text[lang].signin}
          </Button>
          <Button variant="contained" onClick={() => setSignupModalActiv(true)}>
            {text[lang].signup}
          </Button>
        </div>
      </div>
    </>
  );
}

export default Header;
