import { ProductType } from '../types';

export const getPreparedProducts = (products: ProductType[]) => {
  return products.slice(0, 18);
};
