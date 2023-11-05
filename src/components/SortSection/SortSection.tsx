import React, { useContext } from 'react';
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { ThemeContext } from '../../context/ThemeContext';

type Props = {
  value: string;
  onChange: (newValue: SelectChangeEvent) => void,
  label: string,
  options: string[],
};

export const SortSection: React.FC<Props> = ({
  value,
  label,
  options,
  onChange,
}) => {
  const { theme } = useContext(ThemeContext);

  const itemClassName = label === 'Sort by'
    ? 'sort__item--sort'
    : 'sort__item--Pagination';

  return (
    <section className="sort__section">
      <p className="sort__item-label">{label}</p>

      <FormControl
        sx={{ m: 1, minWidth: 120 }}
        className={`sort__item ${itemClassName} sort__item--${theme.theme}`}
      >
        <Select
          id="demo-simple-select-helper"
          value={value}
          onChange={onChange}
          className="sort__select"
        >
          {options.map(data => (
            <MenuItem
              value={data}
              key={data}
              className={`sort__item ${itemClassName}`}
            >
              <p
                className="sort__item-text"
              >
                {`${data[0].toUpperCase()}${data.slice(1)}`}
              </p>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </section>
  );
};
