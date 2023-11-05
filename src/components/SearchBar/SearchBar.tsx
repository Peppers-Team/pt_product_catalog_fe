/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { useSearchParams } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

type Props = {
  onMenuOpen?: (value: boolean) => void;
};

export const SearchBar: React.FC<Props> = ({ onMenuOpen }) => {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const [query, setQuery] = useState(params.get('query') || '');
  const { theme } = useTheme();

  useEffect(() => {
    if (query === '') {
      params.delete('query');
      setSearchParams(params);
    }
  }, [query]);

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      params.set('query', query.toLowerCase());
      setSearchParams(params);

      if (onMenuOpen) {
        onMenuOpen(false);
      }
    }
  };

  return (
    <div className="header__search-bar">
      <div
        className="icon icon--mobile"
        onClick={() => setIsSearchBarOpen(prev => !prev)}
      >
        <i
          className={classnames('', {
            'icon--search': theme.theme === 'light',
            'icon--search-dark': theme.theme === 'dark',
          })}
        />
      </div>

      <input
        className={classnames('header__search-bar-input', {
          'is-search-bar-active': isSearchBarOpen,
        })}
        type="text"
        placeholder="Type something..."
        value={query}
        onChange={handleQueryChange}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};
