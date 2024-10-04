import { request } from '../utils';

const route = async () => {
  const data = await request('/api/page-about-us?populate=deep');

  return data.data.attributes;
};

export default route;
