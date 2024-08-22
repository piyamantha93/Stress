import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const loginData = {
      email,
      password,
    };
  
    try {
      const response = await fetch('http://localhost:4000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log('Login successful:', result);
        navigate('/dashboard'); 
      } else {
        const errorData = await response.json();
        console.error('Error logging in:', errorData);
  
                if (errorData.error) {
          alert(errorData.error);
        } else {
          alert('Failed to log in. Please check your email and password.');
        }
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };
  

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="avatar"></div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <table className="login-table">
            <tbody>
              <tr>
                <td>
                  <label htmlFor="email" className="input-icon">
                    <i className="fa fa-user"></i>
                  </label>
                </td>
                <td>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                  />
                </td>
              </tr>
              <br></br>
              <tr>
                <td>
                  <label htmlFor="password" className="input-icon">
                    <i className="fa fa-lock"></i>
                  </label>
                </td>
                <td>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                   <a href="#" className="forgot-password">Forgot Password?</a>
                </td>
              </tr>
             <tr>
                <td colSpan="2">
                  <button type="submit" className="login-button">LOGIN</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <div className="not-registered">
          Not already registered? <a href="/signup" className="register-link">Register here</a>
        </div>
      </div>
    </div>
  );
};

export default Login;