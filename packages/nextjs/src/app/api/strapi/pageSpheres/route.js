import { request } from '@/utils/request';

export const getSpheres = async () => {
  const data = await request('/api/spheres?populate=deep');

  return data.data;
};

export const route = async (slug) => {
  const data = await request(
    `/api/spheres?filters%5Bslug%5D%5B$eq%5D=${slug}&populate=deep`,
  );

  return data.data[0].attributes;
};

// TODO: move to cases routes!
export const casesBySpheres = async () => {
  const data = await request(
    `/api/cases?fields=title&fields=slug&fields=subtitle&fields=date`,
  );

  return data.data;
};
