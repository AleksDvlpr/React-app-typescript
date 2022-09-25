import React from 'react';
import './LogOut.css';
import { useNavigate } from 'react-router-dom';

const LogOut = () => {
  const navigate = useNavigate();
  const loggedIn = Number(localStorage.getItem('loggedIn'));

  const logOut = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    localStorage.setItem('loggedIn', String(0));
    navigate('/', { replace: true });
  };

  return loggedIn ? (
    <a href="LogOut" onClick={logOut} className="log-out link-success">
      Sign out
    </a>
  ) : null;
};

export default LogOut;
