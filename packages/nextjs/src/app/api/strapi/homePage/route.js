import { request } from '@/utils/request';

const route = async () => await request('/api/page-home?populate=deep');

export default route;
