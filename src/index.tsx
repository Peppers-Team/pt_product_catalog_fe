import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { Root } from './Root';
import { ProductsContextProvider } from './context/ProductsContext';
import { CartContextProvider } from './context/CartContext';
import { FavouriteContextProvider } from './context/FavouriteContext';
import { ThemeContextProvider } from './context/ThemeContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <FavouriteContextProvider>
        <CartContextProvider>
          <ProductsContextProvider>
            <Root />
          </ProductsContextProvider>
        </CartContextProvider>
      </FavouriteContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
);
