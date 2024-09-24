import { request } from '@/utils/request';

const route = async () => await request('/api/shared-we-can-help-you-with');

export default route;
