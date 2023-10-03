import React, { useState } from 'react';
import './App.css'; // Import your CSS file

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
    setErrorMessage(''); // Clear error message when the user types
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setErrorMessage(''); // Clear error message when the user types
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setErrorMessage(''); // Clear error message when the user types
  };

  const isNameValid = (name) => {
    return name.length >= 3;
  };

  const isEmailValid = (email) => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    // Validate if any fields are empty
    if (!name || !email || !password) {
      setErrorMessage('Kindly enter the fields.');
      return;
    }

    // Validate name
    if (!isNameValid(name)) {
      setErrorMessage('Name should be at least 3 characters long.');
      return;
    }

    // Validate email
    if (!isEmailValid(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // Validate password
    if (password.length < 8) {
      setErrorMessage('Password should be at least 8 characters long.');
      return;
    }

    // Reset error message and show success message
    setErrorMessage('Thanks for Signing Up!');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleNameChange}
      />
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
      {errorMessage && <div className={errorMessage === 'Thanks for Signing Up!' ? 'success' : 'error'}>{errorMessage}</div>}
      {/* Display success or error message */}
    </div>
  );
};

export default SignupForm;
