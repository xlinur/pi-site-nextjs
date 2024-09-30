import { request } from '../utils';

const route = async (slug = '') => {
  const data = await request(
    `/api/cases?filters%5Bslug%5D%5B$eq%5D=${slug}&populate=deep`,
  );

  return data.data[0].attributes;
};

export default route;
