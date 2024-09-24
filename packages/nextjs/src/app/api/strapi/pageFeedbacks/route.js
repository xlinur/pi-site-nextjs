import { request } from '@/utils/request';

const route = async () => {
  const data = await request('/api/page-feedbacks');

  return data.data;
};

export default route;
