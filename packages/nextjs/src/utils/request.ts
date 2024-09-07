import qs from 'qs';

interface RequestParams {
  query: object;
}

type Request = <Response extends object>(
  path: string,
  params: RequestParams,
) => Promise<Response>;

export const request: Request = async (path, { query }) => {
  const requestQuery = qs.stringify(query);

  const url = new URL(path, process.env.NEXT_STRAPI_API);

  url.search = requestQuery;

  const res = await fetch(url.href);
  const json = await res.json();

  console.log(path, json); // TODO: remove after release

  return json.data.attributes;
};
