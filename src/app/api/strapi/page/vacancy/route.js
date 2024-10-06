import { request } from '../../utils';

export async function GET() {
  const response = await request('/api/page-single-vacancy', {
    populate: 'deep',
  });

  return response;
}
