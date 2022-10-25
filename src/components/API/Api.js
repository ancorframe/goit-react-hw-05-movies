import axios from 'axios';

const KEY = '29563162ad0b73335f880d56505c78bf';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrending = async controller => {
  const options = { params: { api_key: KEY }, signal: controller.signal };
  const response = await axios.get(`trending/movie/week?`, options);
  return response.data.results;
};

export const searchMovie = async (searchQuery, controller, page = 1) => {
  const options = {
    params: {
      api_key: KEY,
      page: page,
      query: searchQuery,
    },
    signal: controller.signal,
  };
  const response = await axios.get(`search/movie?`, options);
  return response.data.results;
};

export const getMovieDetails = async (movieId, controller) => {
  const options = { params: { api_key: KEY }, signal: controller.signal };
  const response = await axios.get(`movie/${movieId}?`, options);
  return response.data;
};

export const getMovieCredits = async (movieId, controller) => {
  const options = { params: { api_key: KEY }, signal: controller.signal };
  const response = await axios.get(`movie/${movieId}/credits?`, options);
  return response.data.cast;
};

export const getMovieReviews = async (movieId, controller) => {
  const options = { params: { api_key: KEY }, signal: controller.signal };
  const response = await axios.get(`movie/${movieId}/reviews?`, options);
  return response.data.results;
};
