import React, { FormEvent, useState } from 'react';
import './Signup.scss';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

function Signup() {
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');

  const handleSignup = (e: FormEvent) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, mail, pass)
      .then((userCredential) => {
        const { user } = userCredential;
        console.log('Успешная регистрация', user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="signup">
      <div className="title">SIGN UP</div>
      <form className="form" action="submit" onSubmit={handleSignup}>
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

export default Signup;
