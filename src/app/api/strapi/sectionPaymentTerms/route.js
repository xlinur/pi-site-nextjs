import { request } from '../utils';

const route = async () => {
  const data = await request('/api/section-payment-terms?populate=deep');

  return data.data.attributes;
};

export default route;