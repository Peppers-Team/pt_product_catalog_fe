import { categories } from './constant';

export const getSectionTitle = (title: string) => {
  const category = categories.find(({ id }) => id === title);

  return category?.title;
};
