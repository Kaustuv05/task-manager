import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState(''); // <-- NEW
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg(''); // reset any previous error
    try {
      const { data } = await axios.post(
        'https://taskpilot-xkdu.onrender.com/api/auth/login',
        { username, password }
      );
      localStorage.setItem('token', data.token);
      navigate('/tasks');
    } catch (error) {
      console.error('Login failed', error);
      if (error.response && error.response.data && error.response.data.message) {
        setErrorMsg(error.response.data.message);
      } else {
        setErrorMsg('Invalid username or password.');
      }
    }
  };

  return (
    <div className="login-container">
      {/* Left side - Branding */}
      <div className="login-branding">
        <div className="branding-content">
          <div className="logo">TaskPilot</div>
          <div className="tagline">Navigate Your Productivity</div>
          <div className="description">
            Streamline your workflow with our intelligent task management platform. 
            Boost productivity, meet deadlines, and achieve your goals effortlessly.
          </div>
          <div className="features">
            <div className="feature">
              <div className="feature-icon">✓</div>
              <span>Smart Organization</span>
            </div>
            <div className="feature">
              <div className="feature-icon">⚡</div>
              <span>Real-time Sync</span>
            </div>
            <div className="feature">
              <div className="feature-icon">📊</div>
              <span>Progress Tracking</span>
            </div>
            <div className="feature">
              <div className="feature-icon">🎯</div>
              <span>Goal Management</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="login-form-side">
        <div className="login-form-wrapper">
          <div className="form-header">
            <h2 className="form-title">Welcome Back</h2>
            <p className="form-subtitle">Sign in to your TaskPilot account</p>
          </div>

          {errorMsg && (
            <div className="error-message">
              {errorMsg}
            </div>
          )}

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>
            <button className="submit-button" type="submit">
              Sign In to TaskPilot
            </button>
          </form>

          <div className="form-footer">
            <p>Don't have an account? <a href="/register">Create one here</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;