import React, { useState } from 'react';
import './Signin.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Button, IconButton } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useAppDispatch } from '../../hook';
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
      <div className="title">Authorization</div>
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
          SIGN IN
        </Button>
      </form>
    </div>
  );
}

export default Signin;
