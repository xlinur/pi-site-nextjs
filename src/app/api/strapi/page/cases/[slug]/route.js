import { getStrapiData } from '../../../utils';

export async function GET(_, { params }) {
  const response = await getStrapiData('/api/cases', {
    populate: 'deep',
    'filters[slug][$eq]': params.slug,
  });

  return response;
}
