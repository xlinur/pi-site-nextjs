import { request } from '../../utils';

export async function GET() {
  const response = await request('/api/global-dictionary', {
    populate: 'deep',
  });

  return response;
}
