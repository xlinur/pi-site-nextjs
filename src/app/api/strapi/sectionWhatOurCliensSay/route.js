import { request } from '../utils';

const route = async () => {
  const data = await request('/api/section-what-our-cliens-say?populate=deep');

  return data.data.attributes;
};

export default route;
