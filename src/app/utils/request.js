const headers = {
  Accept: 'application/json, text/plain, */*',
  'Content-Type': 'application/json',
};

const request = {
  get: async (path) => {
    const url = new URL(path, 'http://localhost:3000');

    const response = await fetch(url.href, {
      method: 'GET',
      headers,
    });

    const data = await response.json();

    return data;
  },
  post: async (path, props) =>
    await fetch(path, {
      method: 'POST',
      headers,
      body: JSON.stringify(props),
    }),
};

export default request;