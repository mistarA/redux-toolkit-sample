const BASE_URL = 'https://www.googleapis.com';
const API_KEY = 'AIzaSyCSlqYodCt4T9qUmLngac4m3goXBsjAEhw';

const defaultQueryParams = {
  key: API_KEY,
  cx: '011476162607576381860:ra4vmliv9ti',
};
export async function client(endpoint, { body, ...customConfig }) {
  const headers = { 'content-type': 'application/json' };
  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    const url = `${BASE_URL}/${endpoint}`;
    const response = await fetch(url, config);
    if (response.ok) {
      const json = await response.json();
      return json;
    }
    return new Error(response.statusText);
  } catch (err) {
    return Promise.reject(new Error(err.message));
  }
}

client.get = function (endpoint, queryParams, customConfig = {}) {
  const url =
    endpoint +
    '?' +
    objToQueryString({ ...queryParams, ...defaultQueryParams });

  return client(url, customConfig);
};

client.post = function (endpoint, customConfig = {}) {
  return client(endpoint, customConfig);
};

function objToQueryString(object) {
  const keyValuePairs = [];
  for (const key in object) {
    keyValuePairs.push(
      encodeURIComponent(key) + '=' + encodeURIComponent(object[key]),
    );
  }
  return keyValuePairs.join('&');
}
