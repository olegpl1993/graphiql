import React, { useState } from 'react';
import './Signup.scss';
import { useForm } from 'react-hook-form';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Button } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import InputError from '../InputError/InputError';

interface FormRegistr {
  email: string;
  password: string;
}

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormRegistr>();

  const [shown, setShown] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [isInValid, setIsInValid] = useState(false);

  const handleSignup = (form: FormRegistr) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        const { user } = userCredential;
        console.log('Успешная регистрация', user);
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

  // eslint-disable-next-line no-useless-escape
  const passwordRegEx = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&{}()\[\];'":])[A-Za-z\d@$!%*#?&:;(){}\[\]'"]{8,}$/;
  const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return (
    <div className="signup">
      {isValid && <div className="login">Registration Completed</div>}
      {isInValid && <div className="notlogin">Registration Failure</div>}
      <div className="title">SIGN UP</div>
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
        {errors.password && <InputError message={errors.password.message} />}
        <VisibilityOffIcon onClick={() => setShown(!shown)} />
        <Button type="submit" variant="contained" sx={{ width: '100%' }}>
          SIGN UP
        </Button>
      </form>
    </div>
  );
}

export default Signup;
