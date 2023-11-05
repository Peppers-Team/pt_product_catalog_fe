import React from 'react';
import './CounterIcon.scss';

type Props = {
  amount: number,
  iconClassName: string,
};

export const CounterIcon: React.FC<Props> = ({ amount, iconClassName }) => {
  return (
    <i className={iconClassName}>
      {amount > 0 && (
        <p className="CounterIcon">{amount}</p>
      )}
    </i>
  );
};
