import './UserLogin.scss';
import React from 'react';
import { Button } from '@mui/material';
import { getAuth, signOut } from 'firebase/auth';
import { useAppSelector } from '../../hook';
import text from '../../language/Language';

function LoginRowBtn() {
  const lang = useAppSelector((state) => state.langState.lang);

  const userState = useAppSelector((state) => state.userState.user);
  const handleLogOut = () => {
    const auth = getAuth();
    signOut(auth);
  };

  return (
    <div className="loginRowBtn">
      <div className="userMail">{userState}</div>
      <Button variant="contained" onClick={handleLogOut}>
        {text[lang].logout}
      </Button>
    </div>
  );
}

export default LoginRowBtn;
