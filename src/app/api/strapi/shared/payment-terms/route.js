import { request } from '../../utils';

export async function GET() {
  const response = await request('/api/section-payment-terms', {
    populate: 'deep',
  });

  return response;
}
