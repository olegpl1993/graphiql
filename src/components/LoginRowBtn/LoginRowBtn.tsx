import './LoginRowBtn.scss';
import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useAppSelector } from '../../hook';
import Modal from '../Modal/Modal';
import Signin from '../Signin/Signin';
import Signup from '../Signup/Signup';

function LoginRowBtn() {
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

      <div className="loginRowBtn">
        <Button variant="contained" onClick={() => setSigninModalActiv(true)}>
          {text[lang].signin}
        </Button>
        <Button variant="contained" onClick={() => setSignupModalActiv(true)}>
          {text[lang].signup}
        </Button>
      </div>
    </>
  );
}

export default LoginRowBtn;