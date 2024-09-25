import { request } from '@/utils/request';

const route = async () => {
  const data = await request('/api/section-trusted-map');

  return data.data.attributes;
};

export default route;
