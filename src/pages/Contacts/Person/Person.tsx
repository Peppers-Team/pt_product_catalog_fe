import React from 'react';
import './Person.scss';

interface PersonProps {
  name: string;
  linkedin: string;
}

export const Person: React.FC<PersonProps> = ({ name, linkedin }) => (
  <span className="person">
    <p className="person__name">
      {name}
    </p>

    <a
      href={linkedin}
      className="person__link"
      target="_blank"
      rel="noreferrer noopener"
    >
      LinkedIn
    </a>
  </span>
);
