import { request } from '../../utils';

export async function GET(_, { params }) {
  const response = await request('/api/spheres', {
    populate: 'deep',
    'filters[slug][$eq]': params.slug,
  });

  return response;
}
