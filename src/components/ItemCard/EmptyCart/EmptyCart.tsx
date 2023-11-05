import React from 'react';
import './EmptyCart.scss';
import emptyCart from '../../../assets/images/empty-cart.png';
import { HomeButton } from '../../HomeButton/HomeButton';

export const EmptyCart = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <section className="Empty-cart">

          <img
            src={emptyCart}
            alt="your cart is empty"
            className="img-cart"
          />

          <div className="button-home">
            <HomeButton />
          </div>
        </section>
      </div>
    </div>
  );
};
