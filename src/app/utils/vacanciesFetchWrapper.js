const headers = {
  Accept: 'application/json',
};

const vacanciesFetchWrapper = async (path, options = {}) => {
  const url = new URL(path, process.env.NEXT_VACANCIES_API);

  console.log(url);

  const res = await fetch(url, { method: 'GET', ...options });

  const json = res.json();

  console.log('------res-------', res);

  return json;
};

export default vacanciesFetchWrapper;
