import React from 'react';
import './Contacts.scss';

import { Link } from 'react-router-dom';
import { Person } from './Person/Person';
import { BreadcrumbsNav } from '../../components/Breadcrumbs/Breadcrumbs';

export const Contacts: React.FC = () => (
  <div className="contacts-page">
    <BreadcrumbsNav
      className="top-bar top-bar--no-margin"
      links={[
        <Link
          to="/favourites"
          key="favourites"
          className="top-bar__link-text top-bar__link-text--last"
        >
          Contacts
        </Link>,
      ]}
    />

    <div className="contact-blocks">
      <div className="contact-blocks__wrapper">
        <Person
          name="Ivan Zayko"
          linkedin="https://www.linkedin.com/in/ivan-zayko-8a6914292/"
        />
      </div>

      <div className="contact-blocks__wrapper">
        <Person
          name="Anton Tsurkan"
          linkedin="https://www.linkedin.com/in/anton-tsurkan-b9b54828a/"
        />
      </div>

      <div className="contact-blocks__wrapper">
        <Person
          name="Taras Voievoda"
          linkedin="https://www.linkedin.com/in/taras-voievoda-727474273/"
        />
      </div>

      <div className="contact-blocks__wrapper">
        <Person
          name="Daryna Pidlutska"
          linkedin="https://www.linkedin.com/in/daryna-pidlutska/"
        />
      </div>

      <div className="contact-blocks__wrapper">
        <Person
          name="Nikita Zaika"
          linkedin="https://www.linkedin.com/in/zaika-nikita-ua"
        />
      </div>

      <div className="contact-blocks__wrapper">
        <Person
          name="Oleg Paunov"
          linkedin="https://www.linkedin.com/in/oleg-paunov-3735a1292/"
        />
      </div>
    </div>
  </div>
);
