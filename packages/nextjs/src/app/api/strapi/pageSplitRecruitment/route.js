import { request } from '@/utils/request';

const route = async () => {
  const data = await request('/api/page-split-recruitment?populate=deep');

  return data.data.attributes;
};

export default route;