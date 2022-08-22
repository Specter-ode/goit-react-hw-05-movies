import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesBySearch } from '../../services/movieApi';
import { toast } from 'react-toastify';
import MovieSearchForm from '../MovieSearchForm/MovieSearchForm';
import MoviesList from '../MoviesList/MoviesList';
import Spinner from '../Spinner/Spinner';

const MovieSearchBar = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    const fetchMoviesBySearch = async () => {
      setLoading(true);
      try {
        const data = await getMoviesBySearch(query);
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (query) {
      fetchMoviesBySearch();
    }
  }, [query]);
  const handleFormSubmit = searchValue => {
    // setQuery(searchValue);
    if (!searchValue) {
      toast.error(`Search field is empty`, {
        theme: 'colored',
      });
      return;
    }
    setSearchParams({ query: searchValue });
  };
  return (
    <div>
      {error && <p>Movies not found, try again</p>}
      <MovieSearchForm catchSubmitInfo={handleFormSubmit} />
      {loading && <Spinner />}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
};

export default MovieSearchBar;
