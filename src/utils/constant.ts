import mobilePhones from '../assets/images/category/mobile-phones.png';
import tablets from '../assets/images/category/tablets.png';
import accessories from '../assets/images/category/accessories.png';

export const beLink = 'https://pt-product-catalog-be.onrender.com';
export const categories = [
  {
    id: 'phones',
    title: 'Mobile phones',
    description: '95 models',
    imgSrc: mobilePhones,
    count: 'phonesCount',
  },
  {
    id: 'tablets',
    title: 'Tablets',
    description: '24 models',
    imgSrc: tablets,
    count: 'tabletsCount',
  },
  {
    id: 'accessories',
    title: 'Accessories',
    description: '100 models',
    imgSrc: accessories,
    count: 'accessoriesCount',
  },
];

export const offsetDefault = 0;
export const limitDefault = 16;
export const sortDefault = 'newest';
