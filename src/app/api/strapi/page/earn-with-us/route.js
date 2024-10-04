import { getStrapiData } from '../../utils';

export async function GET() {
  const response = await getStrapiData('/api/page-earn-with-us', {
    populate: 'deep',
  });

  return response;
}
