import { getStrapiData } from '../../utils';

export async function GET() {
  const response = await getStrapiData('/api/page-home', {
    populate: 'deep',
  });

  return response;
}
