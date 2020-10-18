import React from 'react';
import SignIn from '../Sign-in/Sign-in';
import SignUp from '../Sign-up/SignUp';
import './Sign-in-Sign-up.scss';

const SigninSignup = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SigninSignup;
