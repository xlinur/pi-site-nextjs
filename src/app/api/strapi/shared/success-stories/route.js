import { request } from '../../utils';

export async function GET() {
  const response = await request('/api/section-success-stories', {
    populate: 'deep',
  });

  return response;
}
