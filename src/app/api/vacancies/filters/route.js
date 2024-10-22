import { request } from '../utils';

export const GET = async (req) => {
  const { url } = req;

  const params = new URLSearchParams(url.split('?')[1]);

  const locale = params.get('locale');

  const response = await request('/vacancies/filters', {
    locale,
  });

  return response;
};
