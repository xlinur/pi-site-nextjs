import qs from 'qs';

interface RequestParams {
  query: object;
}

type Request = <Response extends object>(
  path: string,
  params?: RequestParams,
) => Promise<Response>;

export const request: Request = async (path, params) => {
  let url;

  if (params) {
    const requestQuery = qs.stringify(params.query);
    url = new URL(path, process.env.NEXT_STRAPI_API);
    url.search = requestQuery;
  } else {
    url = new URL(`${path}?populate=*`, process.env.NEXT_STRAPI_API);
  }

  const res = await fetch(url.href);
  const json = await res.json();

  console.log(path, json); // TODO: remove after release

  return json.data.attributes;
};
