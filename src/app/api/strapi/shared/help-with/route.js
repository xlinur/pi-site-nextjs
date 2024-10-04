import { getStrapiData } from '../../utils';

export async function GET() {
  const response = await getStrapiData('/api/shared-we-can-help-you-with', {
    populate: 'deep',
  });

  return response;
}
