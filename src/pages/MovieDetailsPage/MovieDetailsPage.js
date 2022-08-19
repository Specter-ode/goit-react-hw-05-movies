import s from './MovieDetailsPage.module.css';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import { getMovieById } from '../../services/movieApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetailsPage = () => {
  const [state, setState] = useState({
    movie: {},
    loading: false,
    error: null,
  });
  const params = useParams();
  useEffect(() => {
    const fetchMovieById = async () => {
      setState(prevState => ({
        ...prevState,
        loading: true,
      }));
      try {
        const data = await getMovieById();
        console.log('data: ', data);
        setState(prevState => ({
          ...prevState,
          movie: 'test',
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
    fetchMovieById();
  }, []);

  const { movie, loading, error } = state;
  const isMovie = Object.keys(movie).length > 0;
  return (
    <main>
      {loading && <p>...loading</p>}
      {error && <p>Movies not found, try again</p>}
      {isMovie && <MovieDetails />}
    </main>
  );
};

export default MovieDetailsPage;
