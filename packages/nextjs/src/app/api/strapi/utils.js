import qs from 'qs';

export const request = async (path, props) => {
  const { query } = props || {};

  const url = new URL(path, process.env.NEXT_STRAPI_API);

  if (query) {
    const requestQuery = qs.stringify(query);

    url.search = requestQuery;
  }

  const res = await fetch(url.href);
  const json = await res.json();

  return json;
};