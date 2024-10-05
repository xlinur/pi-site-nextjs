import { request } from '../../utils';

export async function GET() {
  const response = await request('/api/page-analytics', {
    populate: 'deep',
  });

  return response;
}
