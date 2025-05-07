import React from 'react';
import './login.css';

const Login = ({ email, password, onEmailChange, onPasswordChange, onSubmit, onCancel }) => {
  return (
    <div className="login">
      <form className="login-form" onSubmit={onSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={onEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={onPasswordChange}
        />
        <div className="loginbutton">
          <button type="submit" className="submit">Submit</button>
          <button type="button" className="cancel" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default Login;



