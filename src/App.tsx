import React from 'react';
import { Outlet } from 'react-router-dom';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import './App.scss';
import './variables.css';

import { Header } from './components/Header';
import { Footer } from './components/Footer/Footer';
import { useTheme } from './context/ThemeContext';

export const App = () => {
  const { theme } = useTheme();

  return (
    <SkeletonTheme
      baseColor={theme.theme === 'dark' ? '#45474B' : '#F1EFEF'}
      highlightColor="#7D7C7C"
    >
      <div id={`is-${theme.theme}`}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </SkeletonTheme>
  );
};
