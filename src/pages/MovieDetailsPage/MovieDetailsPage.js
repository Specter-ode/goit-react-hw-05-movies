import s from './MovieDetailsPage.module.css';
import PropTypes from 'prop-types';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import { getMovieById } from '../../services/movieApi';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Outlet, NavLink } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';

const getLinkClassName = props => {
  const { isActive } = props;
  return isActive ? s.activeLink : s.link;
};
const MovieDetailsPage = () => {
  const [state, setState] = useState({
    movie: {},
    loading: false,
    error: null,
  });
  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieById = async () => {
      setState(prevState => ({
        ...prevState,
        loading: true,
      }));
      try {
        const data = await getMovieById(movieId);
        setState(prevState => ({
          ...prevState,
          movie: data,
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
  }, [movieId]);

  const { movie, loading, error } = state;
  const isMovie = Object.keys(movie).length > 0;
  const goBack = () => navigate(-1);
  return (
    <main>
      {loading && <Spinner />}
      {error && <p>Movies not found, try again</p>}
      {isMovie && (
        <div>
          <button className={s.btn} type="button" onClick={goBack}>
            Go Back
          </button>
          <MovieDetails {...movie} />
          <ul className={s.outlet}>
            <NavLink to={`/movies/${movieId}/cast`} className={getLinkClassName}>
              Cast
            </NavLink>
            <NavLink to={`/movies/${movieId}/reviews`} className={getLinkClassName}>
              Reviews
            </NavLink>
          </ul>
        </div>
      )}
      <Outlet />
    </main>
  );
};

MovieDetailsPage.propTypes = {
  isActive: PropTypes.bool,
};

export default MovieDetailsPage;
