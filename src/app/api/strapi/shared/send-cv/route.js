import { request } from '../../utils';

export async function GET() {
  const response = await request('/api/section-cv-form', {
    populate: 'deep',
  });

  return response;
}
