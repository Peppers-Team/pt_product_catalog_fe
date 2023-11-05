import React, { useContext } from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorageState';

type Theme = { theme: string, toggleTheme: boolean };
const initialTheme = { theme: 'light', toggleTheme: false };

interface ThemeContextType {
  theme: Theme,
  setTheme: React.Dispatch<React.SetStateAction<Theme>>
}

export const ThemeContext = React.createContext({} as ThemeContextType);

type Props = {
  children: React.ReactNode,
};

export const ThemeContextProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useLocalStorageState<Theme>('theme', initialTheme);

  const value = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
