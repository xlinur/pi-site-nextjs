import { request } from '../../utils';

export async function GET(_, { params }) {
  const response = await request('/api/cases', {
    populate: 'deep',
    'filters[slug][$eq]': params.slug,
  });

  return response;
}
