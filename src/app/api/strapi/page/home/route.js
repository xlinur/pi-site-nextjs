import { request } from '../../utils';

export async function GET() {
  const response = await request('/api/page-home', {
    populate: 'deep',
  });

  return response;
}
