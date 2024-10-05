import { request } from '../../utils';

export async function GET() {
  const response = await request('/api/page-feedbacks', {
    populate: 'deep',
  });

  return response;
}
