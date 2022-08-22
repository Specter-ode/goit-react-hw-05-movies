import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../services/movieApi';
import Spinner from '../Spinner/Spinner';
import s from './Cast.module.css';
const CastPage = () => {
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieById = async () => {
      setLoading(true);
      try {
        const data = await getMovieCast(movieId);
        setActors(data.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieById();
  }, [movieId]);
  const elements = actors.map(({ id, name, profile_path }) => {
    profile_path
      ? (profile_path = `https://image.tmdb.org/t/p/w500/${profile_path}`)
      : (profile_path = 'https://upload.wikimedia.org/wikipedia/commons/4/47/GarvaGriha_in_KaryaBinayak.jpg');
    return (
      <li className={s.items} key={id}>
        <img className={s.img} src={profile_path} alt={name} />
        <p className={s.name}>{name}</p>
      </li>
    );
  });
  return (
    <>
      {loading && <Spinner />}
      {error && <p>Movies not found, try again</p>}
      {actors.length > 0 ? <ul className={s.list}>{elements}</ul> : <p>We don't have information about cast</p>}
    </>
  );
};
export default CastPage;
