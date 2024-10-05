import { request } from '../../utils';

export async function GET() {
  const response = await request('/api/companies-logo-section', {
    populate: 'deep',
  });

  return response;
}
