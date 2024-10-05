import { request } from '../../utils';

export async function GET() {
  const response = await request('/api/page-split-recruitment', {
    populate: 'deep',
  });

  return response;
}
