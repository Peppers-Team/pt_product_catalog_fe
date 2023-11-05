export const normalizedMenuLink = (
  categoryItem: string,
  limit: number,
  offset: number,
  sortField: string,
) => {
  return `/products?category=${categoryItem}&limit=${limit}&offset=${offset}&sortBy=${sortField}`;
};
