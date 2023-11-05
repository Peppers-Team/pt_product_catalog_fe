import {
  ProductResponseType,
  ProductType,
  ProductCartResponseType,
} from '../types';
import { client } from '../utils/fetchClient';

const BASE_PARAMETER = 'products';

export const getAllProducts = () => {
  return client.get<ProductCartResponseType>(`/${BASE_PARAMETER}`);
};

export const getProductById = (id: string) => {
  return client.get<ProductCartResponseType>(`/${BASE_PARAMETER}/${id}`);
};

export const getProductsWithNewModels = () => {
  return client.get<ProductType[]>(`/${BASE_PARAMETER}/new`);
};

export const getProductsWithDiscount = () => {
  return client.get<ProductType[]>(`/${BASE_PARAMETER}/discount`);
};

export const getRecommendedProducts = (id: string) => {
  return client.get<ProductType[]>(`/${BASE_PARAMETER}/${id}/recommended`);
};

export const getCategoryCount = () => {
  return client.get<{ [key: string]: number }>(`/${BASE_PARAMETER}/count`);
};

export const getSpecificSorting = (
  category: string,
  sortField: string,
  page: string,
  limit?: number,
  offset?: number,
  query?: string,
  priceFrom?: string,
  priceTo?: string,
) => {
  const queryParams = [];

  if (category) {
    queryParams.push(`category=${category}`);
  }

  if (limit) {
    queryParams.push(`limit=${limit}`);
  }

  if (offset) {
    queryParams.push(`offset=${offset}`);
  }

  if (sortField) {
    queryParams.push(`sortBy=${sortField}`);
  }

  if (query) {
    queryParams.push(`query=${query}`);
  }

  if (priceFrom) {
    queryParams.push(`priceFrom=${priceFrom}`);
  }

  if (priceTo) {
    queryParams.push(`priceTo=${priceTo}`);
  }

  if (page) {
    queryParams.push(`page=${page}`);
  }

  return client.get<ProductResponseType>(
    `/${BASE_PARAMETER}${queryParams.length ? `?${queryParams.join('&')}` : ''}`,
  );
};
