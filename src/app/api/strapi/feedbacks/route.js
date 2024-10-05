import { request } from '../utils';

export async function GET() {
  const response = await request('/api/feedbacks', {
    populate: 'deep',
    'pagination[page]': 1,
    'pagination[pageSize]': 100,
  });

  return response;
}
