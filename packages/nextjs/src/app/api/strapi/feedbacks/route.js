import { request } from '../utils';

const route = async () => {
  const data = await request('/api/feedbacks');

  return data.data;
};

export default route;
