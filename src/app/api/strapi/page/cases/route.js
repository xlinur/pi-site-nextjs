import { request } from '../../utils';

export async function GET() {
  const response = await request('/api/page-case', {
    populate: 'deep',
  });

  return response;
}
