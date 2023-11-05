import React from 'react';
import { Link } from 'react-router-dom';
import './HomeButton.scss';

export const HomeButton = () => {
  return (
    <Link to="/">
      <button
        type="button"
        className="home-button"
      >
        Back to Home
      </button>
    </Link>
  );
};
