import { request } from '../utils';

const route = async () => {
  const data = await request('/api/page-executive-search?populate=deep');

  return data.data.attributes;
};

export default route;
