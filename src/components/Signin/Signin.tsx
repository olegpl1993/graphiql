import React, { FormEvent, useState } from 'react';
import './Signin.scss';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

function Signin() {
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');

  const handleSignin = (e: FormEvent) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, mail, pass)
      .then((userCredential) => {
        const { user } = userCredential;
        console.log('Успешная авторизация', user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="signin">
      <div className="title">SIGN IN</div>
      <form className="form" action="submit" onSubmit={handleSignin}>
        <input
          placeholder="mail"
          className="input"
          type="text"
          value={mail}
          onChange={(e) => {
            setMail(e.target.value);
          }}
        />
        <input
          placeholder="pass"
          className="input"
          type="text"
          value={pass}
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
        <input className="input" type="submit" value="SIGN UP" />
      </form>
    </div>
  );
}

export default Signin;
