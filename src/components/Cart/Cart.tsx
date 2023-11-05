import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import classnames from 'classnames';

import { CartContext } from '../../context/CartContext';
import { getImageUrl } from '../../utils/getImageUrl';
import { EmptyCart } from '../ItemCard/EmptyCart';
import { SuccessModal } from './SuccessModal';
import { BackButton } from '../BackButton';
import { useTheme } from '../../context/ThemeContext';
import './Cart.scss';

export const Cart: React.FC = () => {
  const { cart, setCart } = useContext(CartContext);
  const { theme } = useTheme();
  const [open, setOpen] = React.useState(false);

  const getTotalPrice = () => {
    return cart.reduce((totalPrice, { price, amount }) => (
      totalPrice + price * amount
    ), 0);
  };

  const getTotalAmount = () => {
    return cart.reduce((totalAmount, { amount }) => (
      totalAmount + amount
    ), 0);
  };

  const deleteProductsClick = (productId: string) => {
    setCart(curCard => {
      return curCard.filter(({ id }) => id !== productId);
    });
  };

  const addOneProductClick = (productId: string) => {
    setCart(curCard => {
      return curCard.map((prod) => {
        return prod.id === productId ? ({
          ...prod,
          amount: prod.amount + 1,
        }) : prod;
      });
    });
  };

  const removeOneProductClick = (productId: string) => {
    setCart(curCard => {
      return curCard.map((prod) => {
        return prod.id === productId ? ({
          ...prod,
          amount: prod.amount - 1,
        }) : prod;
      });
    });
  };

  return (
    <>
      {cart.length ? (
        <>
          <Fade direction="up" triggerOnce>
            <section className="basket">
              <div className="basket__top-bar">
                <BackButton />
                <h1 className="basket__title">Cart</h1>
              </div>
              <div className="basket__cards">
                {cart.map(product => {
                  const {
                    id,
                    image,
                    name,
                    price,
                    amount,
                  } = product;

                  return (
                    <div className="basket__card" key={id}>
                      <div className="basket__card__info">
                        <button
                          type="button"
                          className={classnames('padding basket__card__icon', {
                            'basket__card__icon-dark': theme.theme === 'dark',
                          })}
                          onClick={() => deleteProductsClick(id)}
                          aria-label="button-close"
                        />

                        <Link to={`/products/${product.id}`} className="basket__card__info">
                          <div className="basket__card__phone padding">
                            <img
                              className="basket__card__phone-image"
                              src={getImageUrl(image)}
                              alt="product"
                            />
                          </div>

                          <div className="basket__card__title padding">
                            {name}
                          </div>
                        </Link>
                      </div>

                      <div className="basket__card__totally">
                        <div className="basket__card__quantity padding">
                          <button
                            className={classnames(
                              'basket__card__icons',
                              'basket__card__icon-minus',
                              {
                                'basket__card__icon-minus-dark':
                                theme.theme === 'dark',
                              },
                            )}
                            type="button"
                            aria-label="button-minus"
                            disabled={amount === 1}
                            onClick={() => removeOneProductClick(id)}
                          />

                          <span className="basket__card__count">
                            {amount}
                          </span>

                          <button
                            className={classnames(
                              'basket__card__icons',
                              'basket__card__icon-plus',
                              {
                                'basket__card__icon-plus-dark':
                                theme.theme === 'dark',
                              },
                            )}
                            type="button"
                            aria-label="button-plus"
                            onClick={() => addOneProductClick(id)}
                          />

                        </div>

                        <div className="basket__card__sum padding">
                          {price}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="basket__totally totally">
                <div className="totally__title">
                  {getTotalPrice()}
                </div>

                <div className="totally__subtitle">
                  {`Total for ${getTotalAmount()} items`}
                </div>

                <SuccessModal
                  open={open}
                  setOpen={setOpen}
                />
              </div>
            </section>
          </Fade>
        </>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};
