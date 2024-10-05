import { request } from '../../utils';

export async function GET() {
  const response = await request('/api/section-trusted-map', {
    populate: 'deep',
  });

  return response;
}
