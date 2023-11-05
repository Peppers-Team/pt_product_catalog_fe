import React from 'react';
import './BackButton.scss';
import { useNavigate } from 'react-router-dom';
import leftArrow from '../../assets/icons/arrow-left.svg';
import leftArrowBlack from '../../assets/icons/arrow-left-black.svg';
import { useTheme } from '../../context/ThemeContext';

export const BackButton = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <button
      type="button"
      aria-label="go-back-button"
      className="Back-button__back-link"
      onClick={() => navigate(-1)}
    >
      <img
        className="Back-button__back-arrow"
        src={theme.theme === 'light' ? leftArrowBlack : leftArrow}
        alt="back icon"
      />
    </button>
  );
};
