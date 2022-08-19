import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '34dbf9d1a3fd74b10bf7ab9eec59866f',
    language: 'en-US',
  },
});

export const getTrendingMovies = async () => {
  console.log(instance);
  const { data } = await instance('/trending/movie/week');
  return data;
};

export const getMoviesBySearch = async (query, page = 1) => {
  const { data } = await instance('/search/movie', {
    params: {
      query,
      page,
    },
  });
  return data;
};

export const getMovieById = async movieId => {
  const { data } = await instance('/movie', {
    params: {
      id: movieId,
    },
  });
  return data;
};
