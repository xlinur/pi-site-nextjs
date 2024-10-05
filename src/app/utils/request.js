const headers = {
  Accept: 'application/json, text/plain, */*',
  'Content-Type': 'application/json',
};

const request = {
  get: async (path) => {
    const url = new URL(path, process.env.NEXT_HOST);

    const response = await fetch(url.href, {
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
