import React, { useState } from 'react';
import './Signin.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Button } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useAppDispatch } from '../../hook';
import { changeIsOpenSnackbar, changeSnackbarMessage, changeSuccess } from '../../store/snackbarSlice';

interface FormLogin {
  email: string;
  password: string;
}

function Signin() {
  const dispatch = useAppDispatch();
  const openSnackbar = (success: boolean, message: string) => {
    dispatch(changeSuccess(success));
    dispatch(changeIsOpenSnackbar(true));
    dispatch(changeSnackbarMessage(message));
  };

  const { register, handleSubmit } = useForm<FormLogin>();
  const [shown, setShown] = useState(false);

  const handleSignin: SubmitHandler<FormLogin> = (form: FormLogin) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        const { user } = userCredential;
        if (user) openSnackbar(true, 'Login successfully!');
      })
      .catch(() => {
        openSnackbar(false, 'Login failure!');
      });
  };

  return (
    <div className="signin">
      <div className="title">SIGN IN</div>
      <form className="form" action="submit" onSubmit={handleSubmit(handleSignin)}>
        <input placeholder="mail" className="input" type="text" {...register('email')} />
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
