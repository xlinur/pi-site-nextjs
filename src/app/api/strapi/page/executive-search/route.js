import { request } from '../../utils';

export async function GET() {
  const response = await request('/api/page-executive-search', {
    populate: 'deep',
  });

  return response;
}
