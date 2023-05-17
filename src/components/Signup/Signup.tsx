import React, { useState } from 'react';
import './Signup.scss';
import { useForm } from 'react-hook-form';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Button, IconButton } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import InputError from '../InputError/InputError';
import { useAppDispatch, useAppSelector } from '../../hook';
import {
  changeIsOpenSnackbar,
  changeSnackbarMessage,
  changeSuccess,
} from '../../store/snackbarSlice';

interface TextKey {
  titlesigup: string;
  signup: string;
  success: string;
  faill: string;
  mailreq: string;
  mailredx: string;
  passreq: string;
  passredx: string;
  minlength: string;
}
interface Text {
  [key: string]: TextKey;
}
const text: Text = {
  en: {
    titlesigup: 'Registration',
    signup: 'SIGN UP',
    success: 'Successful registration!',
    faill: 'Registration failure!',
    mailreq: 'Email is required',
    mailredx: 'Enter valid E-mail',
    passreq: 'Password is required',
    passredx: 'Should contain at least one letter, one digit, one special character',
    minlength: 'Should be at least 8 chars',
  },
  ru: {
    titlesigup: 'Зарегаться',
    signup: 'РЕГИСТРАЦИЯ',
    success: 'Регистрация успеша',
    faill: 'Регистрация не удалась',
    mailreq: 'Электронная почта',
    mailredx: 'Действительная эл. почта',
    passreq: 'Введите пароль',
    passredx: 'Должен содержать хотя бы одну букву, одну цифру, один специальный символ',
    minlength: 'Должно быть не менее 8 символов',
  },
};

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

  const lang = useAppSelector((state) => state.langState.lang);

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
        if (user) openSnackbar(true, text[lang].success);
      })
      .catch(() => {
        openSnackbar(false, text[lang].faill);
      });
  };

  const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]{8,15}$/;
  const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return (
    <div className="signup">
      <div className="title">{text[lang].titlesigup}</div>
      <form className="form" action="submit" onSubmit={handleSubmit(handleSignup)}>
        <input
          placeholder="mail"
          className="input"
          type="text"
          {...register('email', {
            required: { value: true, message: text[lang].mailreq },
            pattern: { value: emailRegEx, message: text[lang].mailredx },
          })}
        />
        {errors.email && <InputError message={errors.email.message} />}
        <div className="pass">
          <input
            placeholder="pass"
            className="input"
            type={shown ? 'text' : 'password'}
            {...register('password', {
              required: { value: true, message: text[lang].passreq },
              pattern: {
                value: passwordRegEx,
                message: text[lang].passredx,
              },
              minLength: { value: 8, message: text[lang].minlength },
            })}
          />
          <IconButton className="visibilityIcon" onClick={() => setShown(!shown)}>
            {shown ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </IconButton>
        </div>
        {errors.password && <InputError message={errors.password.message} />}
        <Button type="submit" variant="contained" sx={{ width: '100%' }}>
          {text[lang].signup}
        </Button>
      </form>
    </div>
  );
}

export default Signup;
