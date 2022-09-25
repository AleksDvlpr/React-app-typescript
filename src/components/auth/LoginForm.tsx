import React, { useState } from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [login, setLogin] = useState<string|null>(null);
  const [password, setPassword] = useState<string|null>(null);
  const [loginError, setLoginError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const credentials = {
    login: 'admin',
    password: 'admin',
  };

  const navigate = useNavigate();

  let authAllowed = true;

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (login !== credentials.login) {
      setLoginError(true);
      authAllowed = false;
    }
    if (password !== credentials.password) {
      setPasswordError(true);
      authAllowed = false;
    }

    if (authAllowed) {
      localStorage.setItem('loggedIn', String(1));
      navigate('/employee');
    }
  };

  const onLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginError(false);
    setLogin(event.target.value);
  };

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordError(false);
    setPassword(event.target.value);
  };

  return (
    <div className="container col-sm-4 login-form">
      <div className="alert alert-success" role="alert">
        Login: admin <br />
        Password: admin
      </div>
      <form onSubmit={onFormSubmit}>
        <div className="mb-3">
          <label htmlFor="login" className="form-label">
            Login:
          </label>
          <input
            type="text"
            className="form-control"
            id="login"
            aria-describedby="emailHelp"
            onChange={onLoginChange}
          />
          {loginError ? (
            <div id="emailHelp" className="form-text text-danger">
              Please type correct a login
            </div>
          ) : null}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={onPasswordChange}
          />
          {passwordError ? (
            <div id="emailHelp" className="form-text text-danger">
              Please type correct a password
            </div>
          ) : null}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
