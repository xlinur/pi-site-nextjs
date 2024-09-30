const headers = {
  Accept: 'application/json, text/plain, */*',
  'Content-Type': 'application/json',
};

const request = {
  get: async (path) => {
    const response = await fetch(path, {
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
