import './Signup.scss';
import React from 'react';

function Signup() {
  return (
    <div className="signup">
      <div className="title">SIGN UP</div>
      <form className="form" action="submit">
        <input placeholder="login" className="input" type="text" />
        <input placeholder="pass" className="input" type="text" />
        <input placeholder="mail" className="input" type="text" />
        <input className="input" type="submit" value="SIGN UP" />
      </form>
    </div>
  );
}

export default Signup;
