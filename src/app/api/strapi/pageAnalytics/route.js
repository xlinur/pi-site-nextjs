import { request } from '../utils';

const route = async () => {
  const data = await request('/api/page-analytics?populate=deep');

  return data.data.attributes;
};

export default route;