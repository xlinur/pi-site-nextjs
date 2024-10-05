import { request } from '../../utils';

export async function GET() {
  const response = await request('/api/page-contact-us', {
    populate: 'deep',
  });

  return response;
}
