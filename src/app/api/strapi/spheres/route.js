import { getStrapiData } from '../utils';

export async function GET() {
  const response = await getStrapiData('/api/spheres', {
    populate: 'deep',
    'pagination[page]': 1,
    'pagination[pageSize]': 100,
  });

  return response;
}
