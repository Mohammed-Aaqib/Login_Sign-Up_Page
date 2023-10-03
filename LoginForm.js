import React, { useState } from 'react';
import './App.css'; // Import your CSS file

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setErrorMessage(''); // Clear error message when the user types
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setErrorMessage(''); // Clear error message when the user types
  };

  const isEmailValid = (email) => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    // Validate email
    if (!email) {
      setErrorMessage('Kindly enter the fields.');
      return;
    }

    // Check if the email is valid
    if (!isEmailValid(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // Validate password
    if (password.length < 8) {
      setErrorMessage('Password should be at least 8 characters long.');
      return;
    }

    // Reset error message and show login success
    setErrorMessage('Login Success!');
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <div className="submitButton">
        <button onClick={handleSubmit}>Submit</button>
      </div>
      {errorMessage && <div className={errorMessage === 'Login Success!' ? 'success' : 'error'}>{errorMessage}</div>}
      {/* Display success or error message */}
    </div>
  );
};

export default LoginForm;
