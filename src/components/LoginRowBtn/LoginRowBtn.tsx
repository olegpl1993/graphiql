import './LoginRowBtn.scss';
import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useAppSelector } from '../../hook';
import Modal from '../Modal/Modal';
import Signin from '../Signin/Signin';
import Signup from '../Signup/Signup';
import text from '../../language/Language';

function LoginRowBtn() {
  const lang = useAppSelector((state) => state.langState.lang);

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
          {text[lang].signinHeader}
        </Button>
        <Button variant="contained" onClick={() => setSignupModalActiv(true)}>
          {text[lang].signupHeader}
        </Button>
      </div>
    </>
  );
}

export default LoginRowBtn;
