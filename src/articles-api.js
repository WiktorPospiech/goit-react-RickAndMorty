import axios from "axios";

axios.defaults.baseURL = "<http://hn.algolia.com/api/v1/items/:id";

export const fetchArticlesWithTopic = async (topic) => {
  const response = axios.get(`/search?query=${topic}`);
  return await response.data.hits;
};
