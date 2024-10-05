import { request } from '../../utils';

export async function GET() {
  const response = await request('/api/page-about-us', {
    populate: 'deep',
  });

  return response;
}
