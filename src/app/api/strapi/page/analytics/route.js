import { getStrapiData } from '../../utils';

export async function GET() {
  const response = await getStrapiData('/api/page-analytics', {
    populate: 'deep',
  });

  return response;
}
