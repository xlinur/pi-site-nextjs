import { request } from '../../utils';

export async function GET() {
  const response = await request('/api/page-vacancies', {
    populate: 'deep',
  });

  return response;
}
