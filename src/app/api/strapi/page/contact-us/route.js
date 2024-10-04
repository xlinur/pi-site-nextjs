import { getStrapiData } from '../../utils';

export async function GET() {
  const response = await getStrapiData('/api/page-contact-us', {
    populate: 'deep',
  });

  return response;
}
