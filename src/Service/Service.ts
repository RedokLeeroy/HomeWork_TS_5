import axios, { AxiosResponse } from 'axios';
import { ICast, IData } from '../Interfaces';
const API_KEY = 'ce11188e46260bdc0ed3140d02ef06fd';
axios.defaults.baseURL = `https://api.themoviedb.org/3`;


export const fetchTrendings = () : Promise<AxiosResponse<{results: Partial<IData>[]}>>=> {
  return axios.get('/trending/all/day', {
    params: {
      api_key: API_KEY,
    },
  });
};

export const fetchSearchMovies = (search?: string):Promise<AxiosResponse<{results: Partial<IData>[]}>> =>  {
  return axios.get('/search/movie', {
    params: {
      api_key: API_KEY,
      query: search,
    },
  });
};

export const fetchDetails = (movieId?: string ): Promise<AxiosResponse<Partial<IData>>> => {
  return axios.get(`/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
    },
  });
};

export const fetchCredits = (movieId?: string): Promise<AxiosResponse<{cast:Partial<ICast>[]}>> => {
  return axios.get(`/movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
};

export const fetchReviews = (movieId?: string) => {
  return axios.get(`/movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
};
