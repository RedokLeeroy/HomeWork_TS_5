import axios, { Axios, AxiosResponse } from 'axios';
const API_KEY = 'ce11188e46260bdc0ed3140d02ef06fd';
axios.defaults.baseURL = `https://api.themoviedb.org/3`;
export const fetchTrendings = () : Promise<AxiosResponse<>>=> {
  return axios.get('/trending/all/day', {
    params: {
      api_key: API_KEY,
    },
  });
};

export const fetchSearchMovies = (search: string) => {
  return axios.get('/search/movie', {
    params: {
      api_key: API_KEY,
      query: search,
    },
  });
};

export const fetchDetails = (movieId: string) => {
  return axios.get(`/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
    },
  });
};

export const fetchCredits = (movieId:string) => {
  return axios.get(`/movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
};

export const fetchReviews = (movieId:string) => {
  return axios.get(`/movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
};
