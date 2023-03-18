export const getQuery = (limit: number, page: number): string =>
  `pagination[start]=${page ? page * limit : 0}&pagination[limit]=${limit}`;
