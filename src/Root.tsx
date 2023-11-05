import React from 'react';
import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from 'react-router-dom';

import { App } from './App';

import { HomePage } from './pages/HomePage/HomePage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { Catalog } from './pages/Catalog/Catalog';
import { ItemCard } from './components/ItemCard';
import { Cart } from './components/Cart/Cart';
import { Favourites } from './components/Favourites/Favourites';
import { Contacts } from './pages/Contacts/Contacts';

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />

          <Route path="products">
            <Route index element={<Catalog />} />
            <Route path=":id?" element={<ItemCard />} />
          </Route>

          <Route path="cart" element={<Cart />} />
          <Route path="favourites" element={<Favourites />} />

          <Route path="home" element={<Navigate to="/" replace />} />

          <Route path="*" element={<NotFoundPage />} />

          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </Router>
  );
};
