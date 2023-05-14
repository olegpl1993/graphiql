import React, { useState } from 'react';
import './Signup.scss';
import { useForm } from 'react-hook-form';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Button, IconButton } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import InputError from '../InputError/InputError';
import { useAppDispatch } from '../../hook';
import {
  changeIsOpenSnackbar,
  changeSnackbarMessage,
  changeSuccess,
} from '../../store/snackbarSlice';

interface FormRegistr {
  email: string;
  password: string;
}

function Signup() {
  const dispatch = useAppDispatch();
  const openSnackbar = (success: boolean, message: string) => {
    dispatch(changeSuccess(success));
    dispatch(changeIsOpenSnackbar(true));
    dispatch(changeSnackbarMessage(message));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormRegistr>();

  const [shown, setShown] = useState(false);

  const handleSignup = (form: FormRegistr) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        const { user } = userCredential;
        if (user) openSnackbar(true, 'Successful registration!');
      })
      .catch(() => {
        openSnackbar(false, 'Registration failure!');
      });
  };

  const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]{8,15}$/;
  const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return (
    <div className="signup">
      <div className="title">Registration</div>
      <form className="form" action="submit" onSubmit={handleSubmit(handleSignup)}>
        <input
          placeholder="mail"
          className="input"
          type="text"
          {...register('email', {
            required: { value: true, message: 'Email is required' },
            pattern: { value: emailRegEx, message: 'Enter valid E-mail' },
          })}
        />
        {errors.email && <InputError message={errors.email.message} />}
        <div className="pass">
          <input
            placeholder="pass"
            className="input"
            type={shown ? 'text' : 'password'}
            {...register('password', {
              required: { value: true, message: 'Password is required' },
              pattern: {
                value: passwordRegEx,
                message: 'Should contain at least one letter, one digit, one special character',
              },
              minLength: { value: 8, message: 'Should be at least 8 chars' },
            })}
          />
          <IconButton className="visibilityIcon" onClick={() => setShown(!shown)}>
            {shown ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </IconButton>
        </div>
        {errors.password && <InputError message={errors.password.message} />}
        <Button type="submit" variant="contained" sx={{ width: '100%' }}>
          SIGN UP
        </Button>
      </form>
    </div>
  );
}

export default Signup;
