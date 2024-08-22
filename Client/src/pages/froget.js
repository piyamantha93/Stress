import React, { useState } from 'react';
import axios from 'axios';
import '../style/ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/forgot-password', { email });

      if (response.status === 200) {
        alert('Password reset link has been sent to your email.');
      } else {
        alert('Email not found. Please try again.');
      }
    } catch (error) {
      console.error('Error sending reset link:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
