import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../services/movieApi';
import MoviesList from 'components/MoviesList/MoviesList';
import Spinner from '../Spinner/Spinner';

const TrendingMovies = () => {
  const [state, setState] = useState({
    movies: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      setState(prevState => ({
        ...prevState,
        loading: true,
      }));
      try {
        const data = await getTrendingMovies();
        setState(prevState => ({
          ...prevState,
          movies: [...data.results],
        }));
      } catch (error) {
        setState(prevState => ({
          ...prevState,
          error,
        }));
      } finally {
        setState(prevState => ({
          ...prevState,
          loading: false,
        }));
      }
    };
    fetchTrendingMovies();
  }, []);
  const { movies, loading, error } = state;

  return (
    <>
      {loading && <Spinner />}
      {error && <p>Movies not found, try again</p>}
      <MoviesList movies={movies} />
    </>
  );
};

export default TrendingMovies;
