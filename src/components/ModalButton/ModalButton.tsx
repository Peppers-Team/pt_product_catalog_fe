import React from 'react';
import './ModalButton.scss';

type Props = {
  title: string;
  onClick: () => void;
};

export const ModalButton: React.FC<Props> = ({ title, onClick }) => {
  return (
    <button
      className="ModalButton"
      type="button"
      onClick={onClick}
    >
      {title}
    </button>
  );
};
