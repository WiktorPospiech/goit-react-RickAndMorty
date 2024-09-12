import axios from "axios";

axios.defaults.baseURL = "https://rickandmortyapi.com/api";

export const fetchCharacters = async (name) => {
  const resp = await axios.get(`/character?name=${name}`);
  return resp.data.results;
};

export const fetchEpisodes = async () => {
  const resp = await axios.get("/episode");
  return resp.data.results;
};

export const fetchLocations = async () => {
  const resp = await axios.get("/location");
  return resp.data.results;
};
