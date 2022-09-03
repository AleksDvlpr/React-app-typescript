import React from 'react';
import './LogOut.css';
import { useNavigate } from 'react-router-dom';

const LogOut = () => {
  const navigate = useNavigate();
  const loggedIn = +localStorage.getItem('loggedIn');

  const logOut = (event) => {
    event.preventDefault();
    localStorage.setItem('loggedIn', 0);
    navigate('/', { replace: true });
  };

  return loggedIn ? (
    <a href="logout" onClick={logOut} className="log-out link-success">
      Sign out
    </a>
  ) : null;
};

export default LogOut;
