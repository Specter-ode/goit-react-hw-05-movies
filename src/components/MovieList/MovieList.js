import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from '../../services/movieApi';
import s from './MovieList.module.css';

const MovieList = () => {
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
        console.log('data: ', data);
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
  const elements = movies.map(({ id, title, poster_path }) => (
    <li className={s.items} key={id}>
      <Link to={`/movies/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          class={s.items__img}
          width="200"
        />
        <p className={s.title}>{title}</p>
      </Link>
    </li>
  ));
  return (
    <>
      {loading && <p>...loading</p>}
      {error && <p>Movies not found, try again</p>}
      <ul className={s.list}>{elements}</ul>
    </>
  );
};

export default MovieList;
