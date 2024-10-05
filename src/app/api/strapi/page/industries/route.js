import { request } from '../../utils';

export async function GET() {
  const response = await request('/api/page-industries', {
    populate: 'deep',
  });

  return response;
}
