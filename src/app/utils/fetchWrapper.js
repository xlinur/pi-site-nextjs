const headers = {
  Accept: 'application/json, text/plain, */*',
  'Content-Type': 'application/json',
};

const fetchWrapper = async (path, options = {}) => {
  const url = new URL(path, process.env.NEXT_STRAPI_API);

  const res = await fetch(url, { method: 'GET', headers, ...options });
  const data = await res.json();

  return data;
};

export default fetchWrapper;