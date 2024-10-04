import { getStrapiData } from '../utils';

export async function GET() {
  const response = await getStrapiData(
    `/api/cases?populate=deep&pagination[pageSize]=2&pagination[page]=1`,
  );

  return response;
}
