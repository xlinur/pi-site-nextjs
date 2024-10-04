import { request } from '../utils';

const route = async () => {
  const data = await request('/api/shared-we-can-help-you-with?populate=deep');

  return data.data.attributes;
};

export default route;
