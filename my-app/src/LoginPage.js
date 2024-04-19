// LoginPage.js
import React, { useState } from 'react';


function LoginPage({ onLogin, onShowSignUp, onForgotPassword }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Your login logic here
    if (username === 'rcoem' && password === 'rcoem') {
        onLogin({ username });
      } else {
        alert('Invalid credentials');
      }
  };

  return (
    <div className="login-container">
       
      <h2>Sign In</h2>
      <hr></hr>
      <form>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
      </form>
      <div className="options">
        <p><a href='#' onClick={onForgotPassword}>Forgot Password?</a></p>
      </div>
      <div className="signup">
        <p>New user? <a href='#' onClick={onShowSignUp}>Sign Up</a></p>
      </div>
    </div>
  );
}

export default LoginPage;