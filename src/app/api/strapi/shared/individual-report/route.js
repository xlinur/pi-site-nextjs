import { request } from '../../utils';

export async function GET() {
  const response = await request('/api/section-order-your-report', {
    populate: 'deep',
  });

  return response;
}
