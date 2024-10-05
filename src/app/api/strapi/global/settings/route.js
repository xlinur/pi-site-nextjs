import { request } from '../../utils';

export async function GET() {
  const response = await request('/api/global', {
    populate: 'deep',
  });

  return response;
}
