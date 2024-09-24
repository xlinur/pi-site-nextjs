import { request } from '@/utils/request';

const route = async () =>
  await request('/api/companies-logo-section?populate=deep');

export default route;
