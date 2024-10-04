import { getStrapiData } from '../../utils';

export async function GET() {
  const response = await getStrapiData('/api/page-about-us', {
    populate: 'deep',
  });

  return response;
}
