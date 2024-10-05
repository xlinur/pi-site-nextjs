import { request } from '../../utils';

export async function GET() {
  const response = await request('/api/section-about-personalinvest', {
    populate: 'deep',
  });

  return response;
}
