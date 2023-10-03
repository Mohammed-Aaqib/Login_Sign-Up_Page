// AuthPage.js
import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import './App.css'; // Import your CSS file

const AuthPage = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  return (
    <div className="container">
      <div className="header">
        <h1>{isLoginForm ? 'Login' : 'Signup'}</h1>
      </div>

      {isLoginForm ? <LoginForm /> : <SignupForm />}

      <div className="buttonContainer">
        <button onClick={() => setIsLoginForm(true)}>Login</button>
        <button onClick={() => setIsLoginForm(false)}>Sign Up</button>
      </div>
    </div>
  );
};

export default AuthPage;
