import { request } from '../utils';

const DEFAULT_PAGE_SIZE = 8;

export async function GET(req) {
  const { url } = req;

  const params = new URLSearchParams(url.split('?')[1]);

  const page = params.get('page');
  const size = params.get('size') || DEFAULT_PAGE_SIZE;
  const filter = JSON.parse(params.get('filter') || '{}');

  const response = await request('/api/cases', {
    populate: 'deep',
    'pagination[page]': page,
    'pagination[pageSize]': size,
    'filters[sphere][slug][$eq]': filter.sphere,
  });

  return response;
}
