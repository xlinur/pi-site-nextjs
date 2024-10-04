import { getStrapiData } from '../../utils';

export async function GET() {
  const response = await getStrapiData('/api/section-what-our-cliens-say', {
    populate: 'deep',
  });

  return response;
}
