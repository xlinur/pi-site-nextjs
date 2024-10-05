import { request } from '../../utils';

export async function GET() {
  const response = await request('/api/section-what-our-cliens-say', {
    populate: 'deep',
  });

  return response;
}
