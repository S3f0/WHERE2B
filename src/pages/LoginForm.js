import React, { useState } from 'react';
import '../styles/Login/login.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRememberMeChange = () => setRememberMe(!rememberMe);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hier kannst du die Login-Logik hinzufügen
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
  };

  return (
    <div className="login-container">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Benutzername"
              value={username}
              onChange={handleUsernameChange}
              required
            />
            <i className='bx bxs-user'></i>
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Passwort"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <i className='bx bxs-lock-alt'></i>
          </div>

          <div className="remember-forgot">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              Benutzerdaten merken
            </label>
            <a href="/">Passwort vergessen?</a>
          </div>

          <button type="submit" className="btn">Login</button>

          <div className="register-link">
            <p>Neu bei Where2B <a href="/">Jetzt Registrieren</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
