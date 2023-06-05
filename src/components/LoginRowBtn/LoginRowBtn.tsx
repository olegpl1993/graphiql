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

  const [signinModalActive, setSigninModalActive] = useState(false);
  const [signupModalActive, setSignupModalActive] = useState(false);

  return (
    <>
      {signinModalActive && (
        <Modal modalActive={signinModalActive} setModalActive={setSigninModalActive}>
          <Signin />
        </Modal>
      )}
      {signupModalActive && (
        <Modal modalActive={signupModalActive} setModalActive={setSignupModalActive}>
          <Signup />
        </Modal>
      )}

      <div className="loginRowBtn">
        <Button variant="contained" onClick={() => setSigninModalActive(true)}>
          {text[lang].signinHeader}
        </Button>
        <Button variant="contained" onClick={() => setSignupModalActive(true)}>
          {text[lang].signupHeader}
        </Button>
      </div>
    </>
  );
}

export default LoginRowBtn;
