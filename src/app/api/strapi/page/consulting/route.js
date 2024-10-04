import { getStrapiData } from '../../utils';

export async function GET() {
  const response = await getStrapiData('/api/page-consulting', {
    populate: 'deep',
  });

  return response;
}
