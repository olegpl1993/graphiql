import React, { useState } from 'react';
import './Signin.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Button, IconButton } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useAppDispatch, useAppSelector } from '../../hook';
import {
  changeIsOpenSnackbar,
  changeSnackbarMessage,
  changeSuccess,
} from '../../store/snackbarSlice';

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

  const lang = useAppSelector((state) => state.langState.lang);
  interface TextKey {
    titlesigin: string;
    signin: string;
    success: string;
    faill: string;
  }
  interface Text {
    [key: string]: TextKey;
  }
  const text: Text = {
    en: {
      titlesigin: 'Authorization',
      signin: 'SIGN IN',
      success: 'Login successfully!',
      faill: 'Login failure!',
    },
    ru: {
      titlesigin: 'Авторизация',
      signin: 'ВОЙТИ',
      success: 'Вход успешен',
      faill: 'Вход не удался',
    },
  };

  const { register, handleSubmit } = useForm<FormLogin>();
  const [shown, setShown] = useState(false);

  const handleSignin: SubmitHandler<FormLogin> = (form: FormLogin) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        const { user } = userCredential;
        if (user) openSnackbar(true, text[lang].success);
      })
      .catch(() => {
        openSnackbar(false, text[lang].faill);
      });
  };

  return (
    <div className="signin">
      <div className="title">text[lang].titlesigin</div>
      <form className="form" action="submit" onSubmit={handleSubmit(handleSignin)}>
        <input placeholder="mail" className="input" type="text" {...register('email')} />
        <div className="pass">
          <input
            placeholder="pass"
            className="input"
            type={shown ? 'text' : 'password'}
            {...register('password')}
          />
          <IconButton className="visibilityIcon" onClick={() => setShown(!shown)}>
            {shown ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </IconButton>
        </div>
        <Button type="submit" variant="contained" sx={{ width: '100%' }}>
          {text[lang].signin}
        </Button>
      </form>
    </div>
  );
}

export default Signin;
