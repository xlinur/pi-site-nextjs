const headers = {
  Accept: 'application/json, text/plain, */*',
  'Content-Type': 'application/json',
};

const request = {
  _gtFullUrl: (path) => {
    // get base url from location if env does not exist
    // hack for client requests
    const url = new URL(path, process.env.NEXT_HOST || window?.location?.href);

    return url;
  },
  async get(path) {
    const url = this._gtFullUrl(path);

    const response = await fetch(url, {
      method: 'GET',
      headers,
    });

    const data = await response.json();

    return data;
  },
  async post(path, props) {
    const url = this._gtFullUrl(path);

    await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(props),
    });
  },
};

export default request;
