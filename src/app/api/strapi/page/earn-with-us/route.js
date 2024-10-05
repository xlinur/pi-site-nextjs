import { request } from '../../utils';

export async function GET() {
  const response = await request('/api/page-earn-with-us', {
    populate: 'deep',
  });

  return response;
}
