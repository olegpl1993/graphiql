import './Signin.scss';
import React from 'react';

function Signin() {
  return (
    <div className="signin">
      <div className="title">SIGN IN</div>
      <form className="form" action="submit">
        <input placeholder="login" className="input" type="text" />
        <input placeholder="pass" className="input" type="text" />
        <input className="input" type="submit" value="SIGN IN" />
      </form>
    </div>
  );
}

export default Signin;
