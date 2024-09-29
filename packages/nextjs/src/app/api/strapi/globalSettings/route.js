import { request } from '@/utils/request';

const route = async () => {
  const data = await request('/api/global?populate=deep');

  console.log(data.data.attributes);

  return data.data.attributes;
};

export default route;
