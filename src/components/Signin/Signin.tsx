import React, { useState } from 'react';
import './Signin.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Button } from '@mui/material';
// import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

interface FormLogin {
  email: string;
  password: string;
}

function Signin() {
  const { register, handleSubmit, reset } = useForm<FormLogin>();
  const [shown, setShown] = useState(false);
  const [isInValid, setIsInValid] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleSignin: SubmitHandler<FormLogin> = (form: FormLogin) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        const { user } = userCredential;
        console.log('Успешная авторизация', user);

        setIsValid(true);
        setTimeout(() => {
          reset();
          setIsValid(false);
        }, 3000);
      })
      .catch((error) => {
        setIsInValid(true);
        setTimeout(() => {
          reset();
          setIsInValid(false);
        }, 3000);
        console.error(error);
      });
  };

  return (
    <div className="signin">
      {isValid && <div className="login">Logined Susscesfuly</div>}
      {isInValid && <div className="notlogin">Logined Failure</div>}
      <div className="title">SIGN IN</div>
      <form className="form" action="submit" onSubmit={handleSubmit(handleSignin)}>
        <input
          placeholder="mail"
          className="input"
          type="text"
          {...register('email')}
        />
        <input
          placeholder="pass"
          className="input"
          type={shown ? 'text' : 'password'}
          {...register('password')}
        />
        <VisibilityOffIcon onClick={() => setShown(!shown)} />
        <Button type="submit" variant="contained" sx={{ width: '100%' }}>
          SIGN IN
        </Button>
      </form>
    </div>
  );
}

export default Signin;
