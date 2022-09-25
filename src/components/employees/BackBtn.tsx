import React from 'react';
import './BackBtn.css';
import { Link } from 'react-router-dom';

const BackBtn = () => {
  return (
    <Link to="/employee" className="back-btn link-primary">
      &larr; Go back
    </Link>
  );
};

export default BackBtn;
