const headers = {
  Accept: 'application/json, text/plain, */*',
  'Content-Type': 'application/json',
};

const request = {
  async get(path) {
    const url = new URL(path, process.env.NEXT_HOST || window?.location?.href);

    const response = await fetch(url, {
      method: 'GET',
      headers,
    });

    const data = await response.json();

    return data;
  },
};

export default request;
