import { request } from '../utils';

export const GET = async (params) => {
  const response = await request('/vacancies/filters', params);

  return response;
};
