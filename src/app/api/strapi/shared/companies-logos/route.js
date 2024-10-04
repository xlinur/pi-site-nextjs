import { getStrapiData } from '../../utils';

export async function GET() {
  const response = await getStrapiData('/api/companies-logo-section', {
    populate: 'deep',
  });

  return response;
}
