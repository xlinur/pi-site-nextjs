import { request } from '../utils';

export const getCasesRoute = async () => {
  // TODO: !!! refactor api routing needed !!!
  const data = await request(
    'https://essential-fish-de04225fd8.strapiapp.com/api/cases?populate=deep',
  );

  return data;
};

const route = async (slug = '') => {
  const data = await request(
    `/api/cases?filters%5Bslug%5D%5B$eq%5D=${slug}&populate=deep`,
  );

  return data.data[0].attributes;
};

export default route;
