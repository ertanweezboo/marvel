import MD5 from "crypto-js/md5";

const getHash = (ts: string, privateKey: string, apikey: string) => {
  return MD5(ts + privateKey + apikey).toString();
};

const apiEndpoint = process.env.ENDPOINT;
const apiKey = process.env.API_KEY;
const privateKey = process.env.PRIVATE_KEY;
const ts = Date.now().toString();
const hash = getHash(ts, privateKey, apiKey);

export const getCharacters = (offset: number, limit: number = 18) => {
  const result = fetch(
    apiEndpoint + `/characters?offset=${offset}&limit=${limit}&ts=${ts}&apikey=${apiKey}&hash=${hash}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      console.error(err);
    });

  return result;
};

export const getComics = (id: number, limit: number = 20) => {
  const result = fetch(
    apiEndpoint +
      `/characters/${id}/comics?&limit=${limit}&ts=${ts}&apikey=${apiKey}&hash=${hash}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      console.error(err);
    });

  return result;
};

export const getCharacter = (id: number) => {
  const result = fetch(
    apiEndpoint + `/characters/${id}?ts=${ts}&apikey=${apiKey}&hash=${hash}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      console.error(err);
    });

  return result;
};

export const searchCharacter = (character: string, limit: number = 18) => {
  const result = fetch(
    apiEndpoint +
      `/characters?nameStartsWith=${character}&limit=${limit}&ts=${ts}&apikey=${apiKey}&hash=${hash}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data.data.results;
    })
    .catch((err) => {
      console.error(err);
    });

  return result;
};