import { request } from '../../utils';

export async function GET() {
  const response = await request('/api/page-consulting', {
    populate: 'deep',
  });

  return response;
}
