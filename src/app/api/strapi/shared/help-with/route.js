import { request } from '../../utils';

export async function GET() {
  const response = await request('/api/shared-we-can-help-you-with', {
    populate: 'deep',
  });

  return response;
}
