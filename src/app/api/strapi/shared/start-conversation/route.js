import { request } from '../../utils';

export async function GET() {
  const response = await request('/api/section-start-conversation-form', {
    populate: 'deep',
  });

  return response;
}
