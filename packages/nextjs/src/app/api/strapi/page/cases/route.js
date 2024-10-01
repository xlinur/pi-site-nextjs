import { getStrapiData } from '../../utils';

export async function GET() {
  const response = await getStrapiData('/api/page-case?populate=deep');

  return response;
}
