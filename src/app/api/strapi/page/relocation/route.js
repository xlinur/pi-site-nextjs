import { request } from '../../utils';

export async function GET() {
  const response = await request('/api/page-relocation-help', {
    populate: 'deep',
  });

  return response;
}
