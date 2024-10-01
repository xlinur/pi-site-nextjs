import { getStrapiData } from '../utils';

export async function GET() {
  const response = await getStrapiData('/api/cases?populate=deep');

  return response;
}
